import { useState } from "react";
import type { Course } from "../data/courses";

export default function StudentCardRow({ course }: { course: Course }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
        {/* chevron */}
        <td className="w-10 pl-5 pr-2 py-4 align-middle">
          <button
            onClick={() => setOpen(!open)}
            className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-gray-400 flex-shrink-0"
          >
            <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
              style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .2s" }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </td>
        {/* blue icon */}
        <td className="w-10 pr-3 py-4 align-middle">
          <div className="w-8 h-8 rounded bg-blue-700 flex items-center justify-center flex-shrink-0">
            <svg width="15" height="15" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
            </svg>
          </div>
        </td>
        {/* course name */}
        <td className="py-4 pr-6 align-middle" style={{ minWidth: 220, maxWidth: 300 }}>
          <span className="text-sm font-medium text-gray-800 leading-snug block">{course.name}</span>
        </td>
        {/* professor */}
        <td className="py-4 pr-6 align-middle" style={{ minWidth: 180 }}>
          <div className="flex items-center gap-1.5">
            <span className="text-sm text-gray-600 whitespace-nowrap">{course.professor}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#f97316" className="flex-shrink-0">
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.7l-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"/>
            </svg>
          </div>
        </td>
        {/* credit */}
        <td className="py-4 pr-6 align-middle w-20 text-center">
          <span className="text-sm font-semibold text-gray-800">{course.credit}</span>
        </td>
        {/* score */}
        <td className="py-4 pr-6 align-middle w-20 text-center">
          <span className="text-sm font-semibold text-gray-800">{course.score}</span>
        </td>
        {/* rate */}
        <td className="py-4 pr-5 align-middle w-16 text-right">
          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center ml-auto">
            <span className="text-white text-sm font-bold">{course.rate}</span>
          </div>
        </td>
      </tr>
      {open && (
        <tr className="bg-gray-50 border-b border-gray-100">
          <td colSpan={7} className="py-3 pl-24 pr-6">
            <p className="text-xs text-gray-400 italic">Professor: {course.professor} · Credit: {course.credit} · Score: {course.score}</p>
          </td>
        </tr>
      )}
    </>
  );
}
