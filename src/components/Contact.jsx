import React, { useEffect } from 'react';
import { FaMapLocation } from "react-icons/fa6";
import { IoMdMail } from 'react-icons/io';
import { IoIosCall } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <>
      <section className="w-full bg-blue-900 p-20 py-20">
        <div className="max-w-screen-2xl mx-auto">
          <h2
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-orange-500 md:text-6xl text-5xl font-semibold text-center pb-16 tracking-tight"
          >
            ENTRE EM CONTATO
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-gray-300 text-center text-lg leading-relaxed px-5"
          >
            Fale com nossa equipe para tirar dúvidas, marcar treinos ou conhecer mais sobre nossos planos.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-gray-800">
        <div className="w-full py-20">
          <div className="max-w-screen-2xl mx-auto grid md:grid-cols-3 grid-cols-1 gap-10 px-5">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex flex-col items-center text-center gap-4 bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <FaMapLocation className="text-lime-500 text-5xl" />
              <h3 className="text-xl font-semibold text-white">Localização</h3>
              <p className="text-gray-400">
                Rua Goiás, 1 <br /> Jd. Goiás, Goiânia - GO
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col items-center text-center gap-4 bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <IoMdMail className="text-orange-500 text-5xl" />
              <h3 className="text-xl font-semibold text-white">E-mail</h3>
              <p className="text-gray-400">contato@academia.com</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col items-center text-center gap-4 bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <IoIosCall className="text-red-600 text-5xl" />
              <h3 className="text-xl font-semibold text-white">Telefone</h3>
              <p className="text-gray-400">(62) 9999-9999</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
