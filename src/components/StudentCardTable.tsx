import { courses } from "../data/courses";
import StudentCardRow from "./StudentCardRow";

export default function StudentCardTable() {
  const totalCredits = courses.reduce((sum, c) => sum + c.credit, 0);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="px-6 pt-6 pb-2">
        <h2 className="text-green-600 font-bold text-lg mb-4">2025/2026 Spring - 1 semester</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="pl-6 pr-2 pb-2 w-10" />
              <th className="pr-3 pb-2 w-10">
                <span className="text-xs text-gray-400 font-semibold tracking-wide uppercase">ბილეთები</span>
              </th>
              <th className="pr-6 pb-2 text-left">
                {/* course name col — no label */}
              </th>
              <th className="pr-6 pb-2 text-left">
                <span className="text-xs text-gray-400 font-semibold tracking-wide uppercase">Professor</span>
              </th>
              <th className="pr-6 pb-2 text-right">
                <span className="text-xs text-gray-400 font-semibold tracking-wide uppercase">credit</span>
              </th>
              <th className="pr-6 pb-2 text-right">
                <span className="text-xs text-gray-400 font-semibold tracking-wide uppercase">Score</span>
              </th>
              <th className="pr-6 pb-2 text-right">
                <span className="text-xs text-gray-400 font-semibold tracking-wide uppercase">Rate</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <StudentCardRow key={course.id} course={course} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-50 flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-gray-400" />
          <span className="text-sm text-gray-600">
            Program Compatible Credit:<span className="font-bold text-orange-500 ml-1">{totalCredits}</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-gray-400" />
          <span className="text-sm text-gray-600">
            GPA:<span className="font-bold text-orange-500 ml-1">0</span>
          </span>
        </div>
      </div>
    </div>
  );
}
