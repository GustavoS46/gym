import React, { useEffect } from 'react';
import phil1 from '../assets/phil1.png';
import phil2 from '../assets/phil2.png';
import phil3 from '../assets/phil3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <>
      <section className="w-full bg-gray-900 p-20 z-10 py-20 h-fit gap-20">
        <div className="max-w-screen-2xl mx-auto">
          <div
            data-aos="zoom-in"
            data-aos-delay="100"
            className="text-orange-500 md:text-6xl text-5xl font-semibold text-center pb-32 tracking-tight"
          >
            NOSSOS SERVIÇOS
          </div>
        </div>
      </section>
      <section id="services">
        <div className="w-full flex flex-col justify-center items-center bg-blue-900 h-fit">
          <div className="max-w-screen-2xl mx-auto">
            <div className="md:w-[85%] w-full mx-auto flex md:flex-row flex-col justify-center items-stretch md:gap-6 gap-20 md:p-20 p-10 mt-[-200px] z-20">
              {[
                {
                  img: phil1,
                  title: 'Musculação',
                  text: 'Transforme seu corpo e fortaleça sua mente com a prática de musculação. Seja para ganho de força, definição muscular ou melhora da qualidade de vida, nossos treinos são planejados para atender seus objetivos de forma segura e eficaz.'
                },
                {
                  img: phil2,
                  title: 'Cardio',
                  text: 'Aumente sua resistência, melhore a saúde do coração e queime calorias com nossos treinos de cardio. Oferecemos atividades dinâmicas e motivadoras para manter seu corpo em movimento e sua energia lá em cima. Encontre a melhor versão de si mesmo enquanto cuida da sua saúde!'
                },
                {
                  img: phil3,
                  title: 'Treino Feminino',
                  text: 'Encontre o equilíbrio perfeito entre força, saúde e bem-estar com treinos projetados para atender às necessidades das mulheres. Nosso programa é focado em definição muscular, condicionamento físico e aumento da autoestima.'
                }
              ].map((service, idx) => (
                <div
                  key={idx}
                  data-aos="slide-up"
                  data-aos-delay="400"
                  className="flex flex-col justify-between items-center gap-6 flex-grow text-center bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-[300px] h-[300px] object-cover rounded-md"
                  />
                  <h2 className="text-4xl text-orange-500 font-semibold tracking-tight">
                    {service.title}
                  </h2>
                  <p
                    className="text-lg text-gray-300 mt-4 tracking-tight"
                    style={{ minHeight: '120px' }} // Altura mínima para alinhar os textos
                  >
                    {service.text}
                  </p>
                  <button
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    className="px-5 py-4 mt-4 bg-orange-500 hover:bg-orange-600 text-white cursor-pointer rounded-xl tracking-tight transition-all duration-300"
                  >
                    SAIBA MAIS
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
