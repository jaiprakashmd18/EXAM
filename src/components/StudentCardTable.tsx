import type { Course } from "../data/courses";
import { calcGPA } from "../data/courses";
import StudentCardRow from "./StudentCardRow";

interface Props {
  courses: Course[];
  onChange: (id: number, field: keyof Course, value: string | number) => void;
}

export default function StudentCardTable({ courses, onChange }: Props) {
  const totalCredits = courses.reduce((s, c) => s + c.credit, 0);
  const gpa = calcGPA(courses);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="px-4 md:px-6 pt-4 md:pt-5 pb-1">
        <h2 className="text-green-600 font-bold text-sm md:text-base">2025/2026 Spring - 1 semester</h2>
      </div>

      {/* Horizontal scroll wrapper — critical for mobile */}
      <div className="overflow-x-auto">
        <table className="border-collapse" style={{ tableLayout: "fixed", minWidth: 640, width: "100%" }}>
          <colgroup>
            <col style={{ width: 40 }} />
            <col style={{ width: 40 }} />
            <col style={{ width: "30%" }} />
            <col style={{ width: "26%" }} />
            <col style={{ width: 76 }} />
            <col style={{ width: 76 }} />
            <col style={{ width: 64 }} />
          </colgroup>
          <thead>
            <tr className="border-b border-gray-100">
              <th className="py-2.5" />
              <th className="py-2.5 text-left pl-1">
                <span className="text-xs text-gray-400 font-semibold">ბილეთები</span>
              </th>
              <th className="py-2.5 text-left" />
              <th className="py-2.5 text-left">
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Professor</span>
              </th>
              <th className="py-2.5 text-center">
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wide">credit</span>
              </th>
              <th className="py-2.5 text-center">
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Score</span>
              </th>
              <th className="py-2.5 text-right pr-4">
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Grade</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c) => (
              <StudentCardRow key={c.id} course={c} onChange={onChange} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Grade legend */}
      <div className="px-4 md:px-6 py-2 border-t border-gray-50 flex flex-wrap gap-3">
        {([["A","91-100","bg-green-500"],["B","81-90","bg-blue-500"],["C","71-80","bg-yellow-500"],["D","61-70","bg-orange-400"],["F","0-60","bg-red-500"]] as const).map(([g,range,color])=>(
          <div key={g} className="flex items-center gap-1.5">
            <div className={`w-5 h-5 rounded-full ${color} flex items-center justify-center flex-shrink-0`}>
              <span className="text-white text-xs font-bold">{g}</span>
            </div>
            <span className="text-xs text-gray-400">{range}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-4 md:px-6 py-3 md:py-4 border-t border-gray-100 flex flex-wrap items-center gap-4 md:gap-8">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-gray-400 flex-shrink-0" />
          <span className="text-xs md:text-sm text-gray-600">
            Program Compatible Credit:
            <span className="font-bold text-orange-500 ml-1">{totalCredits}</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-gray-400 flex-shrink-0" />
          <span className="text-xs md:text-sm text-gray-600">
            GPA:<span className="font-bold text-orange-500 ml-1">{gpa}</span>
            <span className="text-xs text-gray-400 ml-1">/ 4.00</span>
          </span>
        </div>
      </div>
    </div>
  );
}
