"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun, Zap } from "lucide-react";

type Theme = "light" | "night";

interface NavItem {
  label: string;
  href: string;
}

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("night");
  const [isOpen, setIsOpen] = useState(false);

  // Initialize on mount (hydration) - ensure consistent rendering
  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as Theme) || "night";
    setTheme(savedTheme);
    setMounted(true);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Toggle theme
  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "light" ? "night" : "light"));
  };

  // Persist and apply theme when it changes
  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem("theme", theme);
      } catch (e) {}
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme, mounted]);

  const navItems: NavItem[] = [
    { label: "Accueil", href: "/" },
    { label: "Événements", href: "/evenements" },
    { label: "Galerie", href: "/gallery" },
    { label: "Équipe", href: "/membres" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="navbar bg-base-100 shadow-md sticky top-0 z-50">
      <div className="flex-1">
        {/* Logo */}
        <Link
          href="/"
          className="btn btn-ghost text-xl md:text-2xl font-bold gap-2"
        >
          <span className="text-primary">La</span>
          <span className="text-secondary">Squad</span>
          <Zap className="ml-1 text-primary" size={20} />
        </Link>
        {/* <img
          src="/La-Squad.png"
          alt="Logo de La Squad"
          className="ml-2 w-8 h-8"
        /> */}
      </div>

      {/* Desktop Navigation - Always rendered, shown with CSS media query */}
      <div className="flex-1 flex-grow hidden md:flex gap-2 items-center">
        {/* Nav Items */}
        <div className="flex gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="btn btn-ghost btn-md text-base-content/80 hover:text-primary transition-colors no-underline"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="divider divider-horizontal mx-1 h-6"></div>

        {/* Auth Buttons */}
        <Link href="/login" className="btn btn-ghost btn-md">
          Se connecter
        </Link>
        <Link href="/register" className="btn btn-primary btn-md">
          S'inscrire
        </Link>

        {/* Theme Toggle - Only render after hydration */}
        <button
          onClick={handleThemeToggle}
          className="btn btn-ghost btn-circle btn-md"
          aria-label="Basculer le thème"
        >
          {mounted &&
            (theme === "light" ? <Moon size={20} /> : <Sun size={20} />)}
          {!mounted && <Sun size={20} />}
        </button>
      </div>

      {/* Mobile Hamburger & Controls - Always rendered, shown with CSS media query */}
      <div className="flex md:hidden gap-2">
        {/* Theme Toggle */}
        <button
          onClick={handleThemeToggle}
          className="btn btn-ghost btn-circle btn-sm"
        >
          {mounted &&
            (theme === "light" ? <Moon size={20} /> : <Sun size={20} />)}
          {!mounted && <Sun size={20} />}
        </button>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn btn-ghost btn-circle btn-sm"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden fixed left-0 right-0 top-16 w-full bg-base-100 border-b border-base-300 shadow-lg z-40 flex flex-col py-2">
          {/* Nav Items */}
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block w-full px-6 py-3 hover:bg-base-200 transition-colors text-base-content/80 hover:text-primary no-underline"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}

          {/* Divider */}
          <div className="divider my-1 mx-0"></div>

          {/* Auth Links */}
          <Link
            href="/login"
            className="block w-full px-6 py-3 hover:bg-base-200 transition-colors text-base-content/80 no-underline"
            onClick={() => setIsOpen(false)}
          >
            Se connecter
          </Link>

          {/* Sign Up Button */}
          <div className="px-6 py-3">
            <Link
              href="/register"
              className="w-full btn btn-primary btn-sm block text-center"
            >
              S'inscrire
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
