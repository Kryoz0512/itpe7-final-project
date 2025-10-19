export default function InputBox({
  inputRef,
  input,
  handleChange,
  isCorrectTyping,
  finished,
}) {
  if (finished) return null;

  return (
    <input
      ref={inputRef}
      type="text"
      className={`p-3 w-80 text-white rounded-lg outline-none text-lg text-center transition-all duration-200 ${
        isCorrectTyping === true ? "ring-2 ring-green-400" : ""
      } ${isCorrectTyping === false ? "ring-2 ring-red-400" : ""}`}
      value={input}
      onChange={handleChange}
      disabled={finished}
      placeholder="Start typing..."
    />
  );
}
