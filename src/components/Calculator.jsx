import { useState, useCallback, useEffect } from "react";
import Screen from "./Screen";
import Keypad from "./Keypad";

function calculate(a, operator, b) {
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) return "Error";

  let result;
  switch (operator) {
    case "+":
      result = numA + numB;
      break;
    case "-":
      result = numA - numB;
      break;
    case "*":
      result = numA * numB;
      break;
    case "/":
      return numB === 0 ? "Error" : numA / numB;
    default:
      return numB;
  }

  return parseFloat(result.toFixed(10));
}

export default function Calculator() {
  const [input, setInput] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [expression, setExpression] = useState("");
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handleDigit = useCallback(
    (digit) => {
      if (input === "Error") {
        setInput(digit);
        setPreviousValue(null);
        setOperator(null);
        setExpression("");
        setWaitingForOperand(false);
        return;
      }

      if (waitingForOperand || input === "0") {
        setInput(digit);
        setWaitingForOperand(false);
      } else {
        setInput((prev) => prev + digit);
      }
    },
    [waitingForOperand, input],
  );

  const handleDecimal = useCallback(() => {
    if (input === "Error") {
      setInput("0.");
      setPreviousValue(null);
      setOperator(null);
      setExpression("");
      setWaitingForOperand(false);
      return;
    }

    if (waitingForOperand) {
      setInput("0.");
      setWaitingForOperand(false);
    } else if (!input.includes(".")) {
      setInput((prev) => prev + ".");
    }
  }, [waitingForOperand, input]);

  const handleOperator = useCallback(
    (nextOp) => {
      if (input === "Error") {
        setInput("0");
        setPreviousValue(null);
        setOperator(null);
        setExpression("");
        setWaitingForOperand(false);
        return;
      }

      if (previousValue !== null && !waitingForOperand) {
        const result = calculate(previousValue, operator, input);
        setInput(String(result));
        setPreviousValue(result);
        setExpression(`${result} ${nextOp}`);
      } else {
        setPreviousValue(parseFloat(input));
        setExpression(`${input} ${nextOp}`);
      }

      setOperator(nextOp);
      setWaitingForOperand(true);
    },
    [input, previousValue, operator, waitingForOperand],
  );

  const handleEquals = useCallback(() => {
    if (previousValue === null || operator === null || input === "Error")
      return;

    const result = calculate(previousValue, operator, input);
    setExpression(`${previousValue} ${operator} ${input}`);
    setInput(String(result));
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(true);
  }, [input, previousValue, operator]);

  const handleClear = useCallback(() => {
    setInput("0");
    setPreviousValue(null);
    setOperator(null);
    setExpression("");
    setWaitingForOperand(false);
  }, []);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key >= "0" && e.key <= "9") {
        handleDigit(e.key);
      } else if (e.key === ".") {
        e.preventDefault();
        handleDecimal();
      } else if (e.key === "+") {
        handleOperator("+");
      } else if (e.key === "-") {
        handleOperator("-");
      } else if (e.key === "*") {
        handleOperator("*");
      } else if (e.key === "/") {
        e.preventDefault();
        handleOperator("/");
      } else if (e.key === "Enter" || e.key === "=") {
        e.preventDefault();
        handleEquals();
      } else if (
        e.key === "Escape" ||
        e.key === "Delete" ||
        e.key === "Backspace"
      ) {
        handleClear();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleDigit, handleDecimal, handleOperator, handleEquals, handleClear]);

  return (
    <section className="w-full max-w-[280px] xs:max-w-xs sm:max-w-sm bg-neutral-900 rounded-2xl shadow-2xl p-3 sm:p-4">
      <Screen input={input} expression={expression} />
      <Keypad
        onDigit={handleDigit}
        onDecimal={handleDecimal}
        onOperator={handleOperator}
        onEquals={handleEquals}
        onClear={handleClear}
      />
    </section>
  );
}
