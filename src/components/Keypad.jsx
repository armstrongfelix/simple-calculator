import Button from './Button';

const styleMap = {
  number: 'bg-neutral-700 text-white hover:bg-neutral-600 active:bg-neutral-500',
  operator: 'bg-orange-500 text-white hover:bg-orange-400 active:bg-orange-300',
  equals: 'bg-yellow-500 text-gray-900 hover:bg-yellow-400 active:bg-yellow-300',
  clear: 'bg-gray-600 text-white hover:bg-gray-500 active:bg-gray-400',
};

export default function Keypad({ onDigit, onDecimal, onOperator, onEquals, onClear }) {
  return (
    <section className="grid grid-cols-4 gap-1.5 sm:gap-2">
      <Button onClick={onClear} className={`h-14 sm:h-16 ${styleMap.clear}`}>AC</Button>
      <Button onClick={() => onOperator('/')} className={`h-14 sm:h-16 ${styleMap.operator}`}>/</Button>
      <Button onClick={() => onOperator('*')} className={`h-14 sm:h-16 ${styleMap.operator}`}>x</Button>
      <Button onClick={() => onOperator('-')} className={`h-14 sm:h-16 ${styleMap.operator}`}>-</Button>

      <Button onClick={() => onDigit('7')} className={`h-14 sm:h-16 ${styleMap.number}`}>7</Button>
      <Button onClick={() => onDigit('8')} className={`h-14 sm:h-16 ${styleMap.number}`}>8</Button>
      <Button onClick={() => onDigit('9')} className={`h-14 sm:h-16 ${styleMap.number}`}>9</Button>
      <Button onClick={() => onOperator('+')} className={`h-14 sm:h-16 ${styleMap.operator}`}>+</Button>

      <Button onClick={() => onDigit('4')} className={`h-14 sm:h-16 ${styleMap.number}`}>4</Button>
      <Button onClick={() => onDigit('5')} className={`h-14 sm:h-16 ${styleMap.number}`}>5</Button>
      <Button onClick={() => onDigit('6')} className={`h-14 sm:h-16 ${styleMap.number}`}>6</Button>
      <Button onClick={onEquals} className={`row-span-4 h-44 sm:h-51.5 ${styleMap.equals}`}>=</Button>

      <Button onClick={() => onDigit('1')} className={`h-14 sm:h-16 ${styleMap.number}`}>1</Button>
      <Button onClick={() => onDigit('2')} className={`h-14 sm:h-16 ${styleMap.number}`}>2</Button>
      <Button onClick={() => onDigit('3')} className={`h-14 sm:h-16 ${styleMap.number}`}>3</Button>

      <Button onClick={() => onDigit('0')} className={`h-14 sm:h-16 col-span-2 ${styleMap.number}`}>0</Button>
      <Button onClick={onDecimal} className={`h-14 sm:h-16 ${styleMap.number}`}>.</Button>
    </section>
  );
}
