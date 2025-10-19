export default function Message({message}) {
  return (
    message && (
      <div className="mt-4 text-sm">
        <div className="p-3 rounded-lg bg-gray-100">{message}</div>
      </div>
    )
  );
}
