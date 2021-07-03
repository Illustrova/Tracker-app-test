export default function Header() {
  return (
    <header className="flex items-center justify-between p-8">
      <div className="flex">
        <span role="img" aria-label="Clock" className="text-4xl">
          🕑
        </span>
        <p className="ml-4 font-mono text-2xl font-bold">Time Tracker App</p>
      </div>
      <a className="text-xl underline hover:no-underline" href="../">
        Back to other implementations
      </a>
    </header>
  );
}
