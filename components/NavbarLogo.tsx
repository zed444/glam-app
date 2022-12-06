const NavbarLogo = () => {
  return (
    <div className="flex justify-center items-center">
      <svg
        className="h-10 w-10 text-white mr-2"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
        <circle cx="11" cy="16" r="1" />
        <polyline points="12 16 12 11 14 12" />
      </svg>
      <p className="text-2xl font-bold">SLEAZE ALLEYCAT</p>
    </div>
  );
};

export default NavbarLogo;
