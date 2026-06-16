import { courses } from "../data/courses";
import StudentCardRow from "./StudentCardRow";

export default function StudentCardTable() {
  const totalCredits = courses.reduce((sum, c) => sum + c.credit, 0);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Semester heading */}
      <div className="px-6 pt-5 pb-0">
        <h2 className="text-green-600 font-bold text-base">2025/2026 Spring - 1 semester</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse" style={{ tableLayout: "fixed" }}>
          <colgroup>
            <col style={{ width: 44 }} />   {/* chevron */}
            <col style={{ width: 44 }} />   {/* icon */}
            <col style={{ width: "30%" }} /> {/* course name */}
            <col style={{ width: "25%" }} /> {/* professor */}
            <col style={{ width: 90 }} />   {/* credit */}
            <col style={{ width: 90 }} />   {/* score */}
            <col style={{ width: 72 }} />   {/* rate */}
          </colgroup>
          <thead>
            <tr className="border-b border-gray-100">
              <th className="py-3" />
              <th className="py-3 text-left">
                <span className="text-xs text-gray-400 font-semibold tracking-wide">ბილეთები</span>
              </th>
              <th className="py-3 text-left" />
              <th className="py-3 text-left">
                <span className="text-xs text-gray-400 font-semibold tracking-wide uppercase">Professor</span>
              </th>
              <th className="py-3 text-center">
                <span className="text-xs text-gray-400 font-semibold tracking-wide uppercase">credit</span>
              </th>
              <th className="py-3 text-center">
                <span className="text-xs text-gray-400 font-semibold tracking-wide uppercase">Score</span>
              </th>
              <th className="py-3 text-right pr-5">
                <span className="text-xs text-gray-400 font-semibold tracking-wide uppercase">Rate</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c) => (
              <StudentCardRow key={c.id} course={c} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-100 flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-gray-400 flex-shrink-0" />
          <span className="text-sm text-gray-600">
            Program Compatible Credit:
            <span className="font-bold text-orange-500 ml-1">{totalCredits}</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-gray-400 flex-shrink-0" />
          <span className="text-sm text-gray-600">
            GPA:<span className="font-bold text-orange-500 ml-1">0</span>
          </span>
        </div>
      </div>
    </div>
  );
}
