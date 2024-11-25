import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'Sobre', path: 'about' },
    { link: 'Serviços', path: 'services' },
    { link: 'Time', path: 'team' },
    { link: 'Contato', path: 'contact' },
  ];

  return (
    <footer className="w-full bg-blue-900 p-6">
      <div className="flex justify-center gap-6 mb-4">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            smooth={true}
            duration={500}
            offset={-70}
            className="text-orange-500 text-xl md:text-2xl cursor-pointer hover:text-orange-700 transition duration-200 font-kanit tracking-tight"
          >
            {item.link}
          </Link>
        ))}
      </div>
      <div className="text-center text-gray-300 tracking-tight text-sm">
        <p>
          Copyright 2024 ©{' '}
          <a
            href="https://www.linkedin.com/in/gustavo-desenvolvedor/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-200"
          >
            Gustavo Silva
          </a>
          . Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
