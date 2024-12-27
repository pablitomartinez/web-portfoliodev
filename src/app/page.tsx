// src/app/page.tsx
import Image from "next/image";
import Contact from "./contact/page";
import About from "./about";
import Projects from "./projects";

export default function Home() {
  return (
    <section className="min-h-screen bg-background text-text " id="home">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center py-20 px-6">
        <Image
          src="/dev.png"
          alt="Foto de perfil"
          width={200}
          height={200}
          className="rounded-full shadow-lg"
        />
        <h1 className="mt-8 text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          ¡Hola! Soy Pablo Martinez
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400 text-center">
          Desarrollador Full Stack
        </p>
      </div>

      {/* Call to Action */}
      <div className="bg-background text-text py-12 px-6 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
          ¡Trabajemos juntos en tu próximo proyecto!
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl">
          Estoy listo para convertir tus ideas en una realidad. Contáctame y
          hagamos algo increíble.
        </p>
        <a
          href="#contact"
          className="relative px-6 md:px-8 py-3 md:py-4 bg-primary text-text font-semibold text-lg md:text-xl rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-accent"
        >
          Contactate conmigo
          <span className="absolute inset-0 rounded-lg border-2 border-accent opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
        </a>
      </div>

      {/* Additional Sections */}
      <About />
      <Projects />
      <Contact />
    </section>
  );
}
