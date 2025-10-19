export default function ButtonMode({bitLength, length, mode, modeType, modeTitle}) {
    return(
        <button
            onClick={() => {
              bitLength(length);
              mode(modeType);
            }}
            className="w-full mb-3 px-4 py-3 rounded-xl bg-black text-white hover:opacity-90"
          >
            {modeTitle}
          </button>
    );
};