// src/components/Navbar.tsx
"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Cerrar el menú móvil después de hacer clic
  };

  return (
    <nav className="bg-white text-gray-900 shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="font-bold text-xl cursor-pointer"
            onClick={() => handleScroll("home")}
          >
            Logo
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => handleScroll("home")}
              className="hover:text-blue-600"
            >
              Inicio
            </button>
            <button
              onClick={() => handleScroll("about")}
              className="hover:text-blue-600"
            >
              Sobre mí
            </button>
            <button
              onClick={() => handleScroll("projects")}
              className="hover:text-blue-600"
            >
              Proyectos
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="hover:text-blue-600"
            >
              Contacto
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg`}
          >
            <div className="flex flex-col space-y-4 px-4 py-6">
              <button
                onClick={() => handleScroll("home")}
                className="hover:text-blue-600"
              >
                Inicio
              </button>
              <button
                onClick={() => handleScroll("about")}
                className="hover:text-blue-600"
              >
                Sobre mí
              </button>
              <button
                onClick={() => handleScroll("projects")}
                className="hover:text-blue-600"
              >
                Proyectos
              </button>
              <button
                onClick={() => handleScroll("contact")}
                className="hover:text-blue-600"
              >
                Contacto
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
