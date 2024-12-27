import Image from "next/image";

// src/app/projects/page.tsx
export default function Projects() {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Descripción del proyecto 1",
      image: "/project1.jpg",
      link: "#",
    },
    // Más proyectos...
  ];

  return (
    <section className="min-h-screen" id="projects">
      <h1 className="text-4xl font-bold mb-8">Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded"
              >
                Ver más
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
