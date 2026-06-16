interface Props { onMenuClick: () => void; }

export default function Header({ onMenuClick }: Props) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 md:px-7 h-14 md:h-16 flex items-center justify-between flex-shrink-0 relative">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick}
          className="lg:hidden p-1.5 rounded-md text-gray-500 hover:bg-gray-100 transition-colors" aria-label="Open menu">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
        <span className="text-lg md:text-xl font-bold text-gray-800">Student card</span>
      </div>

      {/* Center flower logo */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <svg width="40" height="40" viewBox="0 0 44 44" fill="none">
          <ellipse cx="22" cy="13" rx="6" ry="9" fill="#f97316" transform="rotate(0 22 22)"/>
          <ellipse cx="22" cy="13" rx="6" ry="9" fill="#22c55e" transform="rotate(60 22 22)"/>
          <ellipse cx="22" cy="13" rx="6" ry="9" fill="#3b82f6" transform="rotate(120 22 22)"/>
          <ellipse cx="22" cy="13" rx="6" ry="9" fill="#ec4899" transform="rotate(180 22 22)"/>
          <ellipse cx="22" cy="13" rx="6" ry="9" fill="#f59e0b" transform="rotate(240 22 22)"/>
          <ellipse cx="22" cy="13" rx="6" ry="9" fill="#8b5cf6" transform="rotate(300 22 22)"/>
          <circle cx="22" cy="22" r="5" fill="white"/>
        </svg>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4 md:gap-6">
        <div className="hidden sm:flex flex-col items-center gap-0.5 cursor-pointer text-gray-500 hover:text-gray-700">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
          </svg>
          <span className="text-xs">MIT</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 cursor-pointer text-gray-500 hover:text-gray-700">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
          </svg>
          <span className="text-xs">Library</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 cursor-pointer text-gray-500 hover:text-gray-700">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
          </svg>
          <span className="text-xs">Survey</span>
        </div>
      </div>
    </header>
  );
}
