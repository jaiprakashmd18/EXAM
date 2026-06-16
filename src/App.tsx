import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StudentCardTable from "./components/StudentCardTable";

function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-7 bg-gray-100">
          {/* Program dropdown + toggle row */}
          <div className="flex items-center justify-between mb-5">
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-400 z-10">Program</label>
              <select className="border border-gray-300 rounded-md px-3 pt-3 pb-2 pr-8 text-sm text-gray-700 appearance-none bg-white min-w-[200px]">
                <option>Medicine (NEW)</option>
              </select>
            </div>
            <div className="flex bg-gray-100 rounded-full p-1 border border-gray-200">
              <button className="px-4 py-1.5 rounded-full text-sm text-gray-500">semester</button>
              <button className="px-4 py-1.5 rounded-full text-sm font-semibold bg-white shadow-sm text-gray-800">Learning Year</button>
            </div>
          </div>
          <StudentCardTable />
        </main>
      </div>
    </div>
  );
}

export default App;
