export default function Header() {
  return (
    <header className="p-8 flex items-center ">
      <span role="img" aria-label="Clock" className="text-4xl">
        🕑
      </span>
      <p className="ml-4  text-2xl  font-bold font-mono">Time Tracker App</p>
    </header>
  );
}
