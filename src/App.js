import Header from "./components/header";
import Button from "./components/button";
import Timer from "./components/timer";
import Table from "./components/table";
function App() {
  return (
    <div className="w-full h-screen text-gray-100 bg-blue-900">
      <Header />
      <main className="flex flex-col mx-4">
        <div className="mt-24 text-center">
          <Timer interval={600000} />
          <Button>Start tracking</Button>
        </div>
        <div className="mt-16 mb-16 text-center">
          <Table />
        </div>
        <div className="mt-auto text-5xl text-center text-yellow-400">
          <span className="pr-16">Total time:</span>
          <span>0</span>
        </div>
      </main>
    </div>
  );
}

export default App;
