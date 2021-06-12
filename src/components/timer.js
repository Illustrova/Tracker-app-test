export default function Timer({ interval = 0 }) {
  const seconds = Math.floor((interval / 1000) % 60)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((interval / (1000 * 60)) % 60)
    .toString()
    .padStart(2, "0");
  const hours = Math.floor(interval / (1000 * 60 * 60))
    .toString()
    .padStart(2, "0");
  return (
    <div className="my-12 text-8xl">
      <span className="px-2 py-4 text-blue-900 bg-gray-200">{hours}</span>
      <span className="text-gray-200">:</span>
      <span className="px-2 py-4 text-blue-900 bg-gray-200">{minutes}</span>
      <span className="text-gray-200">:</span>
      <span className="px-2 py-4 text-blue-900 bg-gray-200">{seconds}</span>
    </div>
  );
}
