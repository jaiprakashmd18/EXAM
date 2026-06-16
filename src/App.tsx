import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StudentCardTable from "./components/StudentCardTable";
import { defaultCourses } from "./data/courses";
import type { Course } from "./data/courses";

export default function App() {
  const [studentName, setStudentName] = useState("Jai Prakash Mohan Kumar Devi");
  const [courses, setCourses] = useState<Course[]>(defaultCourses);
  const [view, setView] = useState<"semester" | "year">("year");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleCourseChange = (id: number, field: keyof Course, value: string | number) => {
    setCourses((prev) => prev.map((c) => (c.id === id ? { ...c, [field]: value } : c)));
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar — fixed drawer on mobile, static on lg+ */}
      <div className={`
        fixed inset-y-0 left-0 z-30 lg:static lg:z-auto lg:translate-x-0 transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <Sidebar
          studentName={studentName}
          onNameChange={setStudentName}
          onClose={() => setSidebarOpen(false)}
        />
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto bg-gray-100 p-3 sm:p-4 md:p-6">
          {/* Program + toggle row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 md:mb-5">
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-xs text-gray-400 leading-none z-10">
                Program
              </label>
              <select
                className="border border-gray-300 rounded-lg bg-white text-sm text-gray-700 pl-3 pr-8 pt-3 pb-2.5 appearance-none cursor-pointer w-full sm:min-w-[210px] focus:outline-none focus:border-gray-400"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 10px center",
                }}
              >
                <option>Medicine (NEW)</option>
                <option>Dentistry</option>
                <option>Pharmacy</option>
              </select>
            </div>

            <div className="flex items-center bg-gray-200 rounded-full p-1 gap-1 self-start sm:self-auto">
              <button
                onClick={() => setView("semester")}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  view === "semester" ? "bg-white shadow-sm text-gray-800" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                semester
              </button>
              <button
                onClick={() => setView("year")}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  view === "year" ? "bg-white shadow-sm text-gray-800" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Learning Year
              </button>
            </div>
          </div>

          <StudentCardTable courses={courses} onChange={handleCourseChange} />
        </main>
      </div>
    </div>
  );
}
