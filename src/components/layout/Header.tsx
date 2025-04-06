
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <div className="flex items-center space-x-8 space-x-reverse">
          <Link to="/login">
            <Button variant="outline" className="font-medium">
              ورود
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-orange-500 hover:bg-orange-600 font-medium">
              ثبت‌نام
            </Button>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
          <Link to="/" className="text-gray-700 hover:text-orange-500 font-medium">
            صفحه اصلی
          </Link>
          <Link to="/courses" className="text-gray-700 hover:text-orange-500 font-medium">
            دوره‌ها
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-orange-500 font-medium">
            درباره ما
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-orange-500 font-medium">
            تماس با ما
          </Link>
        </nav>

        <Link to="/" className="text-2xl font-bold text-orange-700">
          <span className="ml-1">راه‌نما</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white px-4 py-4 shadow-lg animate-slide-in">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-orange-500 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              صفحه اصلی
            </Link>
            <Link
              to="/courses"
              className="text-gray-700 hover:text-orange-500 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              دوره‌ها
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-orange-500 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              درباره ما
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-orange-500 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              تماس با ما
            </Link>
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full font-medium">
                  ورود
                </Button>
              </Link>
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 font-medium">
                  ثبت‌نام
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
