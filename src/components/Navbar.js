"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { label: "Fahrzeuge", path: "/Pages/Carseite" },
    { label: "Login", path: "/login" },
  ];

  const btnBase =
    "px-4 py-2 rounded-md text-base transition-all duration-250 ease-out transform active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400";
  const darkBtn =
    "bg-gray-800 text-gray-100 border border-gray-700 hover:bg-gray-700 hover:border-gray-600";
  const activeCls = "ring-1 ring-orange-500 text-orange-400";

  const NavButton = ({ label, path }) => {
    const isActive = pathname === path;
    const cls = `${btnBase} ${darkBtn} ${isActive ? activeCls : ""}`;
    return (
      <button
        type="button"
        onClick={() => {
          router.push(path);
          setOpen(false);
        }}
        className={cls}
        aria-current={isActive ? "page" : undefined}
      >
        {label}
      </button>
    );
  };

  return (
    <header className="fixed w-full z-40 top-12 bg-transparent backdrop-blur-none">
      <div className="max-w-4xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <button
            type="button"
            onClick={() => {
              router.push("/");
              setOpen(false);
            }}
            className={`${btnBase} ${darkBtn} text-lg md:text-2xl font-semibold flex items-center gap-2`}
            aria-label="Startseite"
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Car4You
          </button>

          <div className="hidden md:flex items-center space-x-3">
            {navItems.map((it) => (
              <NavButton key={it.path} label={it.label} path={it.path} />
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-md text-gray-200 hover:text-gray-100 focus:outline-none"
            aria-label="Menü"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
          >
            <svg
              className={`w-6 h-6 transition-transform duration-200 ${
                open ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {open && (
          <div className="md:hidden pb-4 bg-transparent">
            <div className="flex flex-col gap-3 text-sm">
              {navItems.map((it) => (
                <NavButton key={it.path} label={it.label} path={it.path} />
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
