import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import AngelasAutosImg from "@/images/Angelas-Autos.jpg";
import RescueImg from "@/images/Rescue-Democracy-Int.jpg";
import TeresasImg from "@/images/Teresas-18-wheel-park-01.jpg";

const dummyProjects = [
  {
    id: 1,
    title: "Fashion Store",
    image: AngelasAutosImg,
  },
  {
    id: 2,
    title: "Real Estate Landing",
    image: RescueImg,
  },
  {
    id: 3,
    title: "My Portfolio",
    image: TeresasImg,
  },
];

export default function Portfolio() {
  // ✅ Hooks and functions go here
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Recent Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-muted/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div
                onClick={() => openImage(project.image)}
                className="cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={`${project.title} project showcase`}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative max-w-5xl w-full px-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Full project"
              className="w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
