import Link from "next/link";
import { ServiceCard } from "@/components/service-card";
import { ArrowRight } from "lucide-react";

// Mock services data - will be replaced with Contentlayer
const services = [
  {
    title: "Tuinontwerp",
    summary: "Professioneel tuinontwerp dat perfect aansluit bij uw wensen en de omgeving. Van moderne tot klassieke stijlen.",
    slug: "tuinontwerp",
    heroImage: "/images/APWA9274.JPEG"
  },
  {
    title: "Tuinaanleg",
    summary: "Complete aanleg van uw droomtuin met aandacht voor detail en duurzaamheid. Van bestrating tot beplanting.",
    slug: "tuinaanleg", 
    heroImage: "/images/AKCR7378.JPEG"
  },
  {
    title: "Onderhoud",
    summary: "Regelmatig onderhoud om uw tuin in topconditie te houden. Van snoeien tot bemesten en onkruidvrij maken.",
    slug: "onderhoud",
    heroImage: "/images/MJYJ6092.JPEG"
  }
];

export default function DienstenPage() {
  return (
    <div className="py-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Onze Diensten
          </h1>
          <div className="text-xl text-gray-600 max-w-3xl mx-auto space-y-4">
            <p>
              Het begon allemaal met een passie voor tuinen en de wens om mensen te helpen hun buitenruimte optimaal te benutten. Wat begon als een kleine onderneming is uitgegroeid tot een gerenommeerd hoveniersbedrijf in de regio.
            </p>
            <p>
              Wij geloven dat elke tuin uniek is en vraagt om een persoonlijke aanpak. Daarom nemen wij de tijd om uw wensen te begrijpen en een ontwerp te maken dat perfect aansluit bij uw levensstijl en de omgeving.
            </p>
            <p>
              Onze ervaring en vakmanschap, gecombineerd met moderne technieken en duurzame materialen, zorgen voor resultaten waar u jarenlang van kunt genieten.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-muted rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Onze Werkwijze
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Intake</h3>
              <p className="text-gray-600 text-sm">
                We bespreken uw wensen en maken een afspraak voor een bezoek
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ontwerp</h3>
              <p className="text-gray-600 text-sm">
                We maken een gedetailleerd ontwerp en geven een transparante offerte
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Uitvoering</h3>
              <p className="text-gray-600 text-sm">
                We voeren het werk uit met vakmanschap en aandacht voor detail
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nazorg</h3>
              <p className="text-gray-600 text-sm">
                We bieden onderhoud en garantie op al ons werk
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Klaar voor Uw Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Vraag vandaag nog een gratis offerte aan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn btn-primary px-8 py-3 text-lg flex items-center justify-center space-x-2"
            >
              <span>Vraag Offerte</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="tel:+31612345678"
              className="btn btn-secondary px-8 py-3 text-lg"
            >
              Bel Direct
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
