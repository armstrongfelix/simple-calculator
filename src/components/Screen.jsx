export default function Screen({ input, expression }) {
  return (
    <section className="bg-black rounded-xl mb-3 sm:mb-4 p-3 sm:p-5 h-24 sm:h-28 flex flex-col justify-end gap-1 overflow-hidden">
      <div className="text-gray-400 text-xs sm:text-sm font-mono text-left truncate min-h-[1.25rem]">
        {expression || '\u00A0'}
      </div>
      <div className="text-white text-2xl sm:text-3xl font-bold text-left truncate">
        {input}
      </div>
    </section>
  );
}
