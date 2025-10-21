export default function Practice({generateTarget, setMessage, toBinary, target}) {
  return (
    <>
      <button
        onClick={generateTarget}
        className="px-4 py-2 cursor-pointer rounded-xl border hover:bg-gray-50"
      >
        New Number
      </button>
      <button
        onClick={() =>
          setMessage(
            `ℹ️ Answer: ${toBinary(target)} is the binary for ${target}.`
          )
        }
        className="px-4 py-2 cursor-pointer rounded-xl border hover:bg-gray-50"
      >
        Show Answer
      </button>
    </>
  );
}
