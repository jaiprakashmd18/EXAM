import { useState, useRef } from "react";
import type { Course } from "../data/courses";
import { getGrade, gradeColor } from "../data/courses";

interface Props {
  course: Course;
  onChange: (id: number, field: keyof Course, value: string | number) => void;
}

function EditableText({ value, onSave, numeric }: { value: string | number; onSave: (v: string | number) => void; numeric?: boolean }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(String(value));
  const ref = useRef<HTMLInputElement>(null);

  const start = () => { setDraft(String(value)); setEditing(true); setTimeout(() => ref.current?.select(), 0); };
  const commit = () => {
    setEditing(false);
    if (numeric) { const n = parseFloat(draft); onSave(isNaN(n) ? value : Math.min(100, Math.max(0, n))); }
    else { onSave(draft.trim() || value); }
  };

  if (editing) return (
    <input ref={ref}
      className={`border border-blue-400 rounded px-1.5 py-0.5 text-sm focus:outline-none bg-blue-50 ${numeric ? "w-14 text-right" : "w-full"}`}
      value={draft} onChange={e => setDraft(e.target.value)} onBlur={commit}
      onKeyDown={e => { if (e.key === "Enter") commit(); if (e.key === "Escape") setEditing(false); }}
      type={numeric ? "number" : "text"} min={numeric ? 0 : undefined} max={numeric ? 100 : undefined}
    />
  );

  return (
    <span onClick={start} title="Click to edit"
      className="cursor-pointer hover:bg-blue-50 hover:ring-1 hover:ring-blue-200 rounded px-0.5 transition-all">
      {value}
    </span>
  );
}

export default function StudentCardRow({ course, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const grade = getGrade(course.score);

  return (
    <>
      <tr className="border-b border-gray-100 hover:bg-gray-50/60 transition-colors">
        {/* expand chevron */}
        <td className="py-4 pl-5 pr-2 w-10 align-middle">
          <button onClick={() => setOpen(!open)}
            className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-gray-400 transition-colors flex-shrink-0">
            <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
              style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .2s" }}>
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
        </td>
        {/* course name */}
        <td className="py-4 pr-4 align-middle" style={{ minWidth: 260 }}>
          <span className="text-sm font-medium text-gray-800 leading-snug">{course.name}</span>
        </td>
        {/* blue icon (under ბილეთები header) */}
        <td className="py-4 pr-4 align-middle w-12">
          <div className="w-8 h-8 rounded-md bg-blue-700 flex items-center justify-center">
            <svg width="15" height="15" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
            </svg>
          </div>
        </td>
        {/* professor — editable */}
        <td className="py-4 pr-6 align-middle" style={{ minWidth: 180 }}>
          <div className="flex items-center gap-1.5 text-sm text-gray-700">
            <EditableText value={course.professor} onSave={v => onChange(course.id, "professor", v)} />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#f97316" className="flex-shrink-0">
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.7l-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"/>
            </svg>
          </div>
        </td>
        {/* credit */}
        <td className="py-4 pr-8 align-middle w-24 text-right">
          <span className="text-sm font-semibold text-gray-800">{course.credit}</span>
        </td>
        {/* score — editable */}
        <td className="py-4 pr-8 align-middle w-24 text-right">
          <span className="text-sm font-semibold text-gray-800">
            <EditableText value={course.score} onSave={v => onChange(course.id, "score", v)} numeric />
          </span>
        </td>
        {/* grade badge */}
        <td className="py-4 pr-6 align-middle w-16 text-right">
          <div className={`w-8 h-8 rounded-full ${gradeColor(grade)} flex items-center justify-center ml-auto`}>
            <span className="text-white text-sm font-bold">{grade}</span>
          </div>
        </td>
      </tr>
      {open && (
        <tr className="bg-gray-50 border-b border-gray-100">
          <td colSpan={7} className="py-3 pl-16 pr-6">
            <p className="text-xs text-gray-400">
              Professor: <strong>{course.professor}</strong> · Credit: <strong>{course.credit}</strong> · Score: <strong>{course.score}</strong> · Grade: <strong>{grade}</strong>
            </p>
          </td>
        </tr>
      )}
    </>
  );
}
