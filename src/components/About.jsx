import React, { useEffect } from 'react';
import aboutImg from '../assets/about.jpg';
import banner from '../assets/banner.jpg';
import { FaCheck, FaQuoteLeft } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <section
  id="about"
  className="w-full max-w-screen-2xl mx-auto md:py-20 py-10 grid md:grid-cols-2 grid-cols-1 gap-10 items-center px-5"
>
  {/* Texto e Benefícios */}
  <div className="flex flex-col justify-center items-start gap-6">
    <h1
      data-aos="zoom-in"
      data-aos-delay="50"
      className="text-orange-500 md:text-4xl text-4xl tracking-tight"
    >
      DESCUBRA O MELHOR DE VOCÊ
    </h1>
    <p  
      data-aos="fade-right" 
      data-aos-delay="300" 
      className='tracking-tight'
    >
      Na nossa academia, não se trata apenas de treinar, é sobre transformar sua vida.
      Nosso ambiente é pensado para inspirar, motivar e ajudar você a atingir todos os seus objetivos de saúde e bem-estar.
    </p>
    <button
      data-aos="zoom-in"
      data-aos-delay="50"
      className="px-5 py-4 bg-orange-500 hover:bg-orange-600 text-white cursor-pointer rounded-xl tracking-tight"
    >
      VENHA FAZER UMA AULA EXPERIMENTAL
    </button>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 tracking-tight">
      {[
        'Acesso a vestiários e chuveiros',
        'Equipamentos modernos e bem cuidados',
        'Plano alimentar personalizado',
        'Aulas coletivas dinâmicas',
        'Personal trainers qualificados',
        'Acompanhamento com nutricionistas',
        'Área de relaxamento e spa',
        'Estacionamento gratuito',
      ].map((benefit, index) => (
        <li
          key={index}
          className="flex items-center gap-2"
          data-aos="fade-up"
          data-aos-delay={`${300 + index * 50}`}
        >
          <FaCheck className="text-orange-600" />
          <span>{benefit}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Imagem e Citação */}
  <div className="relative">
    <img
      src={aboutImg}
      alt="Imagem sobre nós"
      className="w-full h-auto object-cover rounded-t-lg"
    />
    <div
      data-aos="slide-up"
      className="bg-orange-500 text-white flex flex-col gap-4 p-6 md:p-8  bottom-[-10px] left-1/2 transform -translate-x-1/2 shadow-lg rounded-b-lg"
    >
      <FaQuoteLeft className="text-xl" />
      <p className="text-sm lg:text-lg flex justify-end tracking-tight">
        Aqui, acreditamos que cada treino é uma nova chance de superar limites e alcançar seus sonhos. Seja a sua melhor versão hoje e inspire o amanhã.
      </p>
    </div>
  </div>
</section>


      {/* Banner */}
      <section
        data-aos="zoom-in"
        data-aos-delay="50"
        id="banner"
        className="w-full md:h-[600px] flex justify-end items-end p-10 bg-cover bg-center mt-20"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      ></section>
    </>
  );
};

export default About;
