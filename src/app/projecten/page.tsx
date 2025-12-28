import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

// Project gallery images - using a selection of the uploaded images
const projects = [
  {
    id: 1,
    title: "Moderne Tuinaanleg",
    description: "Volledige aanleg van een achtertuin met aandacht voor detail en duurzame materialen",
    image: "/images/AKCR7378.JPEG",
    category: "Tuinaanleg"
  },
  {
    id: 2,
    title: "Tuinontwerp en Realisatie",
    description: "Van concept tot uitvoering: een tuinontwerp dat perfect aansluit bij de wensen van de klant",
    image: "/images/APWA9274.JPEG",
    category: "Tuinontwerp"
  },
  {
    id: 3,
    title: "Tuinrenovatie",
    description: "Complete opknapbeurt van een bestaande tuin met nieuwe beplanting en bestrating",
    image: "/images/BJNA2902.JPEG",
    category: "Tuinaanleg"
  },
  {
    id: 4,
    title: "Stadstuin Ontwerp",
    description: "Optimaal gebruik van beperkte ruimte met slimme oplossingen en moderne materialen",
    image: "/images/DTVT2834.JPEG",
    category: "Tuinontwerp"
  },
  {
    id: 5,
    title: "Klassieke Tuinaanleg",
    description: "Traditionele tuinaanleg met formele borders, gazon en tijdloze beplanting",
    image: "/images/EDPX5962.JPEG",
    category: "Tuinaanleg"
  },
  {
    id: 6,
    title: "Periodiek Onderhoud",
    description: "Regelmatige verzorging en onderhoud om de tuin het hele jaar door in topconditie te houden",
    image: "/images/FVGZ7111.JPEG",
    category: "Onderhoud"
  },
  {
    id: 7,
    title: "Terrasaanleg",
    description: "Aanleg van een nieuw terras met natuursteen en sfeervolle verlichting",
    image: "/images/HEQI3951.JPEG",
    category: "Tuinaanleg"
  },
  {
    id: 8,
    title: "Gezinsvriendelijke Tuin",
    description: "Tuinontwerp met ruimte voor kinderen om te spelen en volwassenen om te ontspannen",
    image: "/images/HHVQ5913.JPEG",
    category: "Tuinontwerp"
  },
  {
    id: 9,
    title: "Complete Tuinrenovatie",
    description: "Volledige transformatie met nieuwe beplanting, bestrating en tuinindeling",
    image: "/images/HLMM2515.JPEG",
    category: "Tuinaanleg"
  },
  {
    id: 10,
    title: "Borderaanleg",
    description: "Professionele aanleg van plantenborders met vaste planten, siergrassen en bloeiende vaste planten",
    image: "/images/HVGP1635.JPEG",
    category: "Tuinaanleg"
  },
  {
    id: 11,
    title: "Stijlvol Tuinontwerp",
    description: "Elegant ontwerp met harmonieuze combinatie van beplanting, materialen en tuinarchitectuur",
    image: "/images/IFAF1882.JPEG",
    category: "Tuinontwerp"
  },
  {
    id: 12,
    title: "Tuinonderhoud",
    description: "Structureel onderhoud en verzorging voor een gezonde en bloeiende tuin",
    image: "/images/IMG_4009.JPG",
    category: "Onderhoud"
  },
  {
    id: 13,
    title: "Natuurlijk Tuinontwerp",
    description: "Ontwerp met natuurlijke materialen en inheemse beplanting die past bij de omgeving",
    image: "/images/IMG_4010.JPG",
    category: "Tuinontwerp"
  },
  {
    id: 14,
    title: "Moderne Tuinaanleg",
    description: "Strakke lijnen en moderne materialen gecombineerd met zorgvuldig gekozen beplanting",
    image: "/images/IMG_4097.JPG",
    category: "Tuinaanleg"
  },
  {
    id: 15,
    title: "Tuinrenovatie Project",
    description: "Volledige opknapbeurt met nieuwe bestrating, beplanting en tuinindeling",
    image: "/images/IMG_4107.JPG",
    category: "Tuinaanleg"
  },
  {
    id: 16,
    title: "Snoeiwerk en Onderhoud",
    description: "Professioneel snoeiwerk en seizoensonderhoud voor optimale groei en bloei",
    image: "/images/IMG_4875.JPG",
    category: "Onderhoud"
  },
  {
    id: 17,
    title: "Stijlvolle Tuinaanleg",
    description: "Aandacht voor detail en kwaliteit in elke fase van de aanleg",
    image: "/images/IMG_6151.JPG",
    category: "Tuinaanleg"
  },
  {
    id: 18,
    title: "Tuinontwerp Realisatie",
    description: "Van eerste schets tot voltooide tuin: een compleet project van ontwerp tot uitvoering",
    image: "/images/IMG_6159.JPG",
    category: "Tuinontwerp"
  },
  {
    id: 19,
    title: "Moderne Tuinrenovatie",
    description: "Hedendaagse materialen en beplanting voor een eigentijdse tuin",
    image: "/images/2828d7ec-d846-47cb-9af5-86a7860c8f2e.jpg",
    category: "Tuinaanleg"
  },
  {
    id: 20,
    title: "Maatwerk Tuinontwerp",
    description: "Persoonlijk tuinontwerp op maat gemaakt, afgestemd op uw wensen en levensstijl",
    image: "/images/2ee5565a-61f5-4486-9ad7-12953e62b723.jpg",
    category: "Tuinontwerp"
  },
  {
    id: 21,
    title: "Onderhoudsdienst",
    description: "Periodiek onderhoud voor een tuin die het hele seizoen op zijn best is",
    image: "/images/3adfc135-2c59-4666-b0f6-df2094632f4f.jpg",
    category: "Onderhoud"
  },
  {
    id: 22,
    title: "Tuinontwerp Project",
    description: "Vakkundig tuinontwerp gerealiseerd met oog voor detail en duurzaamheid",
    image: "/images/42fa51c1-afe2-405a-be40-050de2a62e06.jpg",
    category: "Tuinontwerp"
  },
  {
    id: 23,
    title: "Complete Tuinaanleg",
    description: "Van begin tot eind: volledige aanleg van een nieuwe tuin met alle gewenste elementen",
    image: "/images/61d7a3f0-7e11-4b61-ba27-f2803c503bf5.jpg",
    category: "Tuinaanleg"
  },
  {
    id: 24,
    title: "Tuinrenovatie",
    description: "Volledige opknapbeurt met nieuwe beplanting en een frisse tuinindeling",
    image: "/images/a5dff915-fb05-40ec-bfeb-fefdd360d57b.jpg",
    category: "Tuinaanleg"
  }
];

export default function ProjectenPage() {
  return (
    <div className="py-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Onze Projecten
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek onze gerealiseerde projecten in de regio Etten-Leur, Zevenbergen, Prinsenbeek en Breda. 
            Van ontwerp tot aanleg en onderhoud: wij zorgen voor een prachtige tuin die perfect 
            aansluit bij uw wensen.
          </p>
        </div>

        {/* Projects Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Klaar voor Uw Eigen Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Laat ons uw droomtuin realiseren. Vraag vandaag nog een gratis offerte aan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg flex items-center justify-center space-x-2"
            >
              <span>Vraag Offerte</span>
            </a>
            <a
              href={`tel:${siteConfig.business.phone}`}
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Bel Direct</span>
            </a>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

