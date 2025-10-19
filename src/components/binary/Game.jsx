export default function Game({target, bitLength, inputRef, guess, handleChange, handleKeyDown}) {
  return (
    <>
      <div className="mt-6">
        <p className="text-gray-500 text-sm">Decimal</p>
        <p className="text-4xl font-extrabold tabular-nums">{target}</p>
      </div>

      <label className="block mt-6 text-sm font-medium text-gray-700">
        Your {bitLength}-bit binary guess
      </label>
      <input
        ref={inputRef}
        value={guess}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={`e.g., ${bitLength === 8 ? "00011010" : "0010"}`}
        className="mt-2 w-full font-mono text-lg tracking-wider border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
        inputMode="numeric"
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
      />
    </>
  );
}
