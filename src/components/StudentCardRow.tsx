import type { Course } from "../data/courses";

interface Props {
  course: Course;
}

export default function StudentCardRow({ course }: Props) {
  return (
    <div className="flex items-center border-b border-gray-100 py-3.5 gap-2">
      <button className="flex-shrink-0 w-7 h-7 border border-gray-300 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-50">
        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <polyline points="6,9 12,15 18,9"/>
        </svg>
      </button>
      <div className="flex-shrink-0 w-8 h-8 bg-blue-700 rounded flex items-center justify-center ml-1">
        <svg width="16" height="16" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/><polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88 16.24,7.76"/>
        </svg>
      </div>
      <div className="flex-1 min-w-0 ml-3">
        <span className="text-sm font-medium text-gray-800 leading-snug">{course.name}</span>
      </div>
      <div className="min-w-[180px] flex items-center gap-1.5 px-2">
        <span className="text-sm text-gray-600">{course.professor}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#f97316">
          <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.7l-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"/>
        </svg>
      </div>
      <div className="w-20 text-right">
        <span className="text-sm font-semibold text-gray-800">{course.credit}</span>
      </div>
      <div className="w-20 text-right">
        <span className="text-sm font-semibold text-gray-800">{course.score}</span>
      </div>
      <div className="w-12 flex justify-end">
        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-bold">{course.rate}</span>
        </div>
      </div>
    </div>
  );
}
