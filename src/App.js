import Header from "./components/header";
import Button from "./components/button";
import Timer from "./components/timer";
import Table from "./components/table";
import TotalTime from "./components/total-time";

function App() {
  return (
    <div className="w-full h-screen text-gray-100 bg-blue-900">
      <Header />
      <main className="flex flex-col mx-4">
        <div className="mt-24 text-center">
          <Timer interval={0} />
          <Button>Start tracking</Button>
        </div>
        <div className="mt-16 mb-16 text-center">
          <Table />
        </div>
        <TotalTime />
      </main>
    </div>
  );
}

export default App;
