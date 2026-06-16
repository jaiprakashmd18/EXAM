export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-7 h-16 flex items-center justify-between flex-shrink-0">
      <div className="text-xl font-bold text-gray-800">Student card</div>

      {/* Center logo */}
      <div className="flex items-center justify-center">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          {/* 6-petal flower logo */}
          <ellipse cx="22" cy="13" rx="6" ry="9" fill="#f97316" transform="rotate(0 22 22)"/>
          <ellipse cx="22" cy="13" rx="6" ry="9" fill="#22c55e" transform="rotate(60 22 22)"/>
          <ellipse cx="22" cy="13" rx="6" ry="9" fill="#3b82f6" transform="rotate(120 22 22)"/>
          <ellipse cx="22" cy="13" rx="6" ry="9" fill="#ec4899" transform="rotate(180 22 22)"/>
          <ellipse cx="22" cy="13" rx="6" ry="9" fill="#f59e0b" transform="rotate(240 22 22)"/>
          <ellipse cx="22" cy="13" rx="6" ry="9" fill="#8b5cf6" transform="rotate(300 22 22)"/>
          <circle cx="22" cy="22" r="5" fill="white"/>
        </svg>
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-5">
        <div className="flex flex-col items-center gap-0.5 cursor-pointer">
          <svg width="20" height="20" fill="none" stroke="#6b7280" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
          </svg>
          <span className="text-xs text-gray-400">MIT</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 cursor-pointer">
          <svg width="20" height="20" fill="none" stroke="#6b7280" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
          </svg>
          <span className="text-xs text-gray-400">Library</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 cursor-pointer">
          <svg width="20" height="20" fill="none" stroke="#6b7280" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
          </svg>
          <span className="text-xs text-gray-400">Survey</span>
        </div>
      </div>
    </header>
  );
}
