import React from "react";

export default function Sidebar() {
  const navItems = [
    { label: "Dashboard", icon: "grid", active: false },
    { label: "Calendar", icon: "calendar", active: false },
    { label: "E-Chancellery", icon: "document", active: false, badge: 37 },
    { label: "LMS", icon: "layers", active: false },
    { label: "Program", icon: "people", active: false },
    { label: "Student card", icon: "card", active: true },
    { label: "Table", icon: "list", active: false },
    { label: "Academic registration", icon: "pencil", active: false },
    { label: "Notifications", icon: "bell", active: false, badge: 37, dividerBefore: true },
    { label: "Finances", icon: "dollar", active: false },
    { label: "Personal info", icon: "person", active: false },
  ];

  const icons: Record<string, React.ReactElement> = {
    grid: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
    calendar: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
      </svg>
    ),
    document: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    layers: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <polygon points="12,2 22,8.5 12,15 2,8.5"/><polyline points="2,15 12,21.5 22,15"/><polyline points="2,11.5 12,18 22,11.5"/>
      </svg>
    ),
    people: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    card: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
      </svg>
    ),
    list: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/>
        <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
      </svg>
    ),
    pencil: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
    bell: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/>
      </svg>
    ),
    dollar: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    person: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  };

  return (
    <div className="w-56 h-screen bg-white border-r border-gray-200 flex flex-col flex-shrink-0 overflow-y-auto">
      {/* Profile */}
      <div className="px-5 py-5 border-b border-gray-100">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 mb-3 flex items-center justify-center">
          <span className="text-white font-bold text-lg">J</span>
        </div>
        <div className="text-sm font-bold text-gray-800 leading-tight">Jai Prakash Mohan Kumar Devi</div>
        <div className="text-xs text-gray-400 mt-0.5">Medicine (NEW)</div>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-2">
        {navItems.map((item, i) => (
          <div key={i}>
            {item.dividerBefore && <div className="border-t border-gray-100 my-2" />}
            <div
              className={`flex items-center justify-between px-5 py-2.5 cursor-pointer ${
                item.active
                  ? "bg-orange-500 text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={item.active ? "text-white" : "text-gray-400"}>
                  {icons[item.icon]}
                </span>
                <span className="text-sm">{item.label}</span>
              </div>
              {item.badge && (
                <span className="bg-orange-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5 min-w-[20px] text-center">
                  {item.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </nav>

      {/* Bottom */}
      <div className="border-t border-gray-100 px-5 py-3">
        <div className="flex gap-3 mb-3">
          <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700">
            <span>🇬🇪</span> Georgia
          </button>
          <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700">
            <span>🇬🇧</span> English
          </button>
        </div>
        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/>
          </svg>
          Exit
        </button>
      </div>
    </div>
  );
}
