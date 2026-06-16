import type { Course } from "../data/courses";
import { calcGPA } from "../data/courses";
import StudentCardRow from "./StudentCardRow";

interface Props {
  courses: Course[];
  onChange: (id: number, field: keyof Course, value: string | number) => void;
}

export default function StudentCardTable({ courses, onChange }: Props) {
  const gpa = calcGPA(courses);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Semester heading */}
      <div className="px-6 pt-5 pb-2">
        <h2 className="text-green-600 font-bold text-base">2025/2026 Spring - 1 semester</h2>
      </div>

      {/* Scrollable table — exactly like original */}
      <div className="overflow-x-auto">
        <table className="border-collapse" style={{ width: "100%", minWidth: 860 }}>
          <thead>
            <tr className="border-b border-gray-100">
              <th className="py-3 pl-5 pr-2 w-10" />
              {/* course name col — no label in original */}
              <th className="py-3 pr-4 text-left" style={{ minWidth: 260 }} />
              {/* ბილეთები above the icon */}
              <th className="py-3 pr-4 w-12 text-left">
                <span className="text-xs text-gray-400 font-medium">ბილეთები</span>
              </th>
              {/* Professor */}
              <th className="py-3 pr-6 text-left" style={{ minWidth: 180 }}>
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Professor</span>
              </th>
              {/* credit */}
              <th className="py-3 pr-8 w-24 text-right">
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">credit</span>
              </th>
              {/* Score */}
              <th className="py-3 pr-8 w-24 text-right">
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Score</span>
              </th>
              {/* Rate/Grade */}
              <th className="py-3 pr-6 w-16 text-right">
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Rate</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {courses.map(c => (
              <StudentCardRow key={c.id} course={c} onChange={onChange} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer — matches original exactly */}
      <div className="px-6 py-4 border-t border-gray-100 space-y-1">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-gray-500 flex-shrink-0" />
          <span className="text-sm text-gray-700">
            Program Compatible Credit:<span className="text-teal-500 font-semibold ml-1">0</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-gray-500 flex-shrink-0" />
          <span className="text-sm text-gray-700">
            GPA: <span className="text-teal-500 font-semibold">{gpa}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
