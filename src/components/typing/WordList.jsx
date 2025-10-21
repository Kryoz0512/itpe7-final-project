export const WORDS = [
  "keyboard",
  "react",
  "nextjs",
  "challenge",
  "developer",
  "javascript",
  "function",
  "component",
  "state",
  "render",
  "performance",
  "async",
  "frontend",
  "design",
  "framework",
  "dynamic",
  "server",
  "client",
  "router",
  "testing",
  "compile",
  "deploy",
  "debug",
  "terminal",
  "syntax",
];

export default function WordList({ words, currentIndex, isCorrectTyping }) {
  return (
    <div className="max-w-2xl text-xl leading-relaxed mb-6 text-gray-400 text-center h-50 whitespace-pre-wrap break-words ">
      {words.map((word, i) => {
        let colorClass = "";
        if (i === currentIndex && isCorrectTyping === true)
          colorClass = "text-green-400 underline";
        else if (i === currentIndex && isCorrectTyping === false)
          colorClass = "text-red-400 underline";
        else if (i === currentIndex) colorClass = "text-yellow-400 underline";
        else if (i < currentIndex) colorClass = "text-gray-600";

        return (
          <span key={i} className={`mr-2 inline-block ${colorClass}`}>
            {word}
          </span>
        );
      })}
    </div>
  );
}
