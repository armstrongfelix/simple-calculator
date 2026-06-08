export default function Button({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-xl text-2xl font-medium transition-colors duration-150 cursor-pointer select-none ${className}`}
    >
      {children}
    </button>
  );
}
