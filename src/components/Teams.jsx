import React, { useEffect } from 'react';
import client1 from '../assets/client1.jpg';
import client2 from '../assets/client2.jpg';
import client3 from '../assets/client3.jpg';
import client4 from '../assets/client4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Teams = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <section
      id="team"
      className="w-full mx-auto py-20 h-fit flex flex-col justify-center items-center gap-8 bg-gray-900"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl text-orange-500 font-extralight tracking-tight">
            TIME <span className="font-bold">PERFEITO</span>
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="400"
            className="text-center text-lg text-gray-300 tracking-tight m-5"
          >
            Na nossa academia, contamos com um time de profissionais altamente qualificados e apaixonados pelo que fazem.
            Cada membro da equipe traz uma combinação única de especialização, experiência e dedicação para ajudar você a atingir seus objetivos.
            Venha treinar com os melhores e transforme sua rotina!
          </p>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 px-10">
          {[
            {
              img: client1,
              name: 'Davi Lucas',
              text: 'Especialista em musculação e hipertrofia, com 8 anos de experiência ajudando alunos a alcançarem seus objetivos de força e definição muscular.'
            },
            {
              img: client2,
              name: 'Gabriel Silva',
              text: 'Instrutora certificada em treinos funcionais e cardio. Apaixonada por transformar treinos em experiências dinâmicas e divertidas.'
            },
            {
              img: client3,
              name: 'Lucas Mendes',
              text: 'Personal trainer com foco em levantamento de peso olímpico e crossfit, ajudando alunos a desenvolverem força, técnica e resistência.'
            },
            {
              img: client4,
              name: 'Pedro Costa',
              text: 'Especialista em treinos femininos, com foco em definição, emagrecimento e saúde geral, oferecendo suporte motivacional e técnico.'
            }
          ].map((team, index) => (
            <div
              key={index}
              data-aos="slide-up"
              data-aos-delay="400"
              className="flex flex-col justify-between items-center gap-6 bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <img
                src={team.img}
                alt={team.name}
                className="w-[300px] h-[300px] object-cover rounded-full shadow-md"
              />
              <h2 className="text-2xl text-orange-500 font-semibold tracking-tight">
                {team.name}
              </h2>
              <p className="text-lg text-gray-300 tracking-tight">{team.text}</p>
            </div>
          ))}
        </div>

        <div
          id="social-links"
          className="flex justify-center items-center gap-6 mt-10"
        >
          <FaFacebook
            data-aos="zoom-in"
            data-aos-delay="500"
            className="text-gray-300 hover:text-orange-500 text-3xl transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
          <FaInstagram
            data-aos="zoom-in"
            data-aos-delay="500"
            className="text-gray-300 hover:text-orange-500 text-3xl transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
          <FaTwitter
            data-aos="zoom-in"
            data-aos-delay="500"
            className="text-gray-300 hover:text-orange-500 text-3xl transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-8 mt-5">
          <button
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-once="true"
            className="px-5 py-4 mt-4 bg-orange-500 hover:bg-orange-600 text-white cursor-pointer rounded-xl tracking-tight"
          >
            SAIBA MAIS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Teams;
