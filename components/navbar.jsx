"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, Globe } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import SearchBar from "@/components/search-bar";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, translations } = useLanguage();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ru" : "en");
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const navLinks = [
    { name: translations.nav.home, href: "/" },
    { name: translations.nav.about, href: "/about" },
    { name: translations.nav.products, href: "/products" },
    { name: translations.nav.applications, href: "/applications" },
    { name: translations.nav.calculator, href: "/calculator" },
    { name: translations.nav.contact, href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-40">
              <Image
                alt="SteelPipe Pro Logo"
                src="/logo.jpg"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={true}
                quality={75}
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Search and Language Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
              aria-label="Search"
            >
              <Search className="h-5 w-5 cursor-pointer" />
            </button>

            <button
              onClick={toggleLanguage}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center cursor-pointer"
              aria-label={`Switch to ${language === "en" ? "Russian" : "English"}`}
            >
              <Globe className="h-5 w-5 mr-1 cursor-pointer" />
              <span className="uppercase font-medium">
                {language === "en" ? "EN" : "RU"}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
              aria-label="Search"
            >
              <Search className="h-5 w-5 cursor-pointer" />
            </button>

            <button
              onClick={toggleLanguage}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
              aria-label={`Switch to ${language === "en" ? "Russian" : "English"}`}
            >
              <Globe className="h-5 w-5 cursor-pointer" />
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 cursor-pointer" />
              ) : (
                <Menu className="h-6 w-6 cursor-pointer" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="border-t border-gray-200 py-4 bg-white">
          <div className="container mx-auto px-4">
            <SearchBar onClose={toggleSearch} />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
