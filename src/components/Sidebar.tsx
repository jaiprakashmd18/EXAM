import { useState, useRef } from "react";

const pfpModules = import.meta.glob('../pfp/*', { eager: true }) as Record<string, { default: string }>;

function getProfilePic(name: string): string | null {
  const target = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  for (const [path, mod] of Object.entries(pfpModules)) {
    const filename = path.split('/').pop()!.replace(/\.[^.]+$/, '');
    const normalized = filename.toLowerCase().replace(/[_\s]+/g, '-').replace(/[^a-z0-9-]/g, '');
    if (normalized === target) return mod.default;
  }
  return null;
}

interface Props {
  studentName: string;
  onNameChange: (name: string) => void;
  onClose: () => void;
}

const NAV = [
  { label: "Dashboard", icon: <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg> },
  { label: "Calendar", icon: <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> },
  { label: "E-Chancellery", icon: <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></svg> },
  { label: "LMS", icon: <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><polygon points="12,2 22,8.5 12,15 2,8.5"/><polyline points="2,15 12,21.5 22,15"/><polyline points="2,11.5 12,18 22,11.5"/></svg> },
  { label: "Program", icon: <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg> },
  { label: "Student card", active: true, icon: <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg> },
  { label: "Table", icon: <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg> },
  { label: "Academic registration", icon: <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg> },
  { label: "divider" },
  { label: "Notifications and commands", icon: <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg> },
  { label: "Finances", icon: <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg> },
  { label: "Personal info. Doc. Logs", icon: <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
];

export default function Sidebar({ studentName, onNameChange, onClose }: Props) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(studentName);
  const ref = useRef<HTMLInputElement>(null);
  const profilePic = getProfilePic(studentName);

  const startEdit = () => { setDraft(studentName); setEditing(true); setTimeout(() => ref.current?.focus(), 0); };
  const commit = () => { setEditing(false); onNameChange(draft.trim() || studentName); };

  return (
    <div className="w-52 h-screen bg-white border-r border-gray-200 flex flex-col flex-shrink-0 overflow-y-auto">
      {/* Profile */}
      <div className="px-4 pt-5 pb-4 border-b border-gray-100">
        <div className="flex items-start justify-between mb-2">
          {profilePic ? (
            <img src={profilePic} alt={studentName} className="w-11 h-11 rounded-full object-cover flex-shrink-0" />
          ) : (
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-base">{studentName.charAt(0)}</span>
            </div>
          )}
          <button onClick={onClose} className="lg:hidden p-1 text-gray-400 hover:text-gray-600 rounded transition-colors" aria-label="Close">
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        {editing ? (
          <input ref={ref} value={draft} onChange={e => setDraft(e.target.value)} onBlur={commit}
            onKeyDown={e => { if (e.key === "Enter") commit(); if (e.key === "Escape") setEditing(false); }}
            className="text-sm font-semibold text-gray-800 border border-blue-400 rounded px-1.5 py-0.5 w-full focus:outline-none bg-blue-50" />
        ) : (
          <div onClick={startEdit} title="Click to edit"
            className="text-sm font-semibold text-gray-800 leading-snug cursor-pointer hover:text-blue-600 hover:bg-blue-50 rounded px-1 -ml-1 py-0.5 transition-colors">
            {studentName}
          </div>
        )}
        <div className="text-xs text-gray-400 mt-0.5 px-1">Medicine (NEW)</div>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-1">
        {NAV.map((item, i) => {
          if (item.label === "divider") return <div key={i} className="border-t border-gray-100 my-1.5 mx-0" />;
          return (
            <div key={i}
              className={`flex items-center justify-between px-4 py-2.5 cursor-pointer transition-colors ${
                item.active ? "bg-orange-500 text-white" : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
              }`}
              onClick={() => !item.active && onClose()}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className={`flex-shrink-0 ${item.active ? "text-white" : "text-gray-400"}`}>{item.icon}</span>
                <span className="text-[13px] leading-tight truncate">{item.label}</span>
              </div>
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-100 px-4 py-3">
        <div className="flex gap-4 mb-2.5">
          <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-700 transition-colors">
            <span>🇬🇪</span> Georgia
          </button>
          <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-700 transition-colors">
            <span>🇬🇧</span> English
          </button>
        </div>
        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors">
          <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/>
          </svg>
          Exit
        </button>
      </div>
    </div>
  );
}
