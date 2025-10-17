

export default function WinNotification({ isWinVariable }) {
  return (
    <>
        {isWinVariable && (
            <div className="text-2xl mt-4 text-green-400">You Win!</div>
        )}
    </>
  );
}
