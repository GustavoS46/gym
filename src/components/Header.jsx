import React, { useState } from 'react';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import { CgGym } from "react-icons/cg";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'Sobre', path: 'about' },
    { link: 'Serviços', path: 'services' },
    { link: 'Time', path: 'team' },
    { link: 'Contato', path: 'contact' },
  ];

  return (
    <nav className="w-full bg-blue-800">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center py-4 px-4">
        {/* Div com o título e ícone */}
        <div className="flex items-center gap-1">
          <CgGym className="text-3xl text-orange-500" />
          <h1 className="text-3xl uppercase text-orange-500 tracking-tight">GUSTAVO GYM</h1>
        </div>

        {/* Menu de navegação */}
        <div className="hidden lg:flex items-center gap-8 p-5">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-orange-500 text-lg cursor-pointer hover:text-orange-700 font-kanit"
              onClick={closeMenu}
            >
              {item.link}
            </Link>
          ))}
        </div>

        {/* Ícone do menu móvel */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-orange-500 hover:text-orange-700 text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menu Dropdown para dispositivos móveis */}
      {isMenuOpen && (
        <div className="lg:hidden bg-blue-900 text-orange-500 hover:orange-700 py-4 flex flex-col gap-4 px-4 font-kanit tracking-tight">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-lg cursor-pointer font-kanit hover:text-orange-700"
              onClick={closeMenu}
            >
              {item.link}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
