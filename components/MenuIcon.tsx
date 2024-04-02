export default function MenuIcon({ onClick, menuOpen }: any) {
  const menuIcon = menuOpen ? (
    <svg
      className="h-10 w-10"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ) : (
    <svg
      className="h-10 w-10"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        d="M2 9 L22 9 M2 15 L22 15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <button
      onClick={onClick}
      type="button"
      className="text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-white relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset "
      aria-controls="mobile-menu"
      aria-expanded="false"
    >
      <span className="absolute -inset-0.5"></span>
      <span className="sr-only">Open main menu</span>

      {menuIcon}
    </button>
  );
}
