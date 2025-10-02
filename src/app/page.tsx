import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { PhoneWhatsAppSticky } from "@/components/phone-whatsapp-sticky";

// Mock services data - will be replaced with Contentlayer
const mockServices = [
  {
    title: "Tuinontwerp",
    summary: "Professioneel tuinontwerp dat perfect aansluit bij uw wensen en de omgeving. Van moderne tot klassieke stijlen.",
    slug: "tuinontwerp",
    heroImage: "/images/tuinontwerp.webp"
  },
  {
    title: "Tuinaanleg",
    summary: "Complete aanleg van uw droomtuin met aandacht voor detail en duurzaamheid. Van bestrating tot beplanting.",
    slug: "tuinaanleg",
    heroImage: "/images/tuinaanleg.webp"
  },
  {
    title: "Onderhoud",
    summary: "Regelmatig onderhoud om uw tuin in topconditie te houden. Van snoeien tot bemesten en onkruidvrij maken.",
    slug: "onderhoud",
    heroImage: "/images/onderhoud.webp"
  },
  {
    title: "Bestrating",
    summary: "Professionele bestrating voor terrassen, opritten en paden. Verschillende materialen en patronen mogelijk.",
    slug: "bestrating",
    heroImage: "/images/bestrating.webp"
  },
  {
    title: "Schuttingen",
    summary: "Houten schuttingen, hekwerken en afscheidingen voor privacy en veiligheid in uw tuin.",
    slug: "schuttingen",
    heroImage: "/images/schuttingen.webp"
  },
  {
    title: "Beregening",
    summary: "Automatische beregeningssystemen voor optimale verzorging van uw gazon en beplanting.",
    slug: "beregening",
    heroImage: "/images/beregening.webp"
  }
];

export default function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Services Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Onze Diensten
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Van ontwerp tot onderhoud: wij verzorgen alle aspecten van uw tuin 
              met vakmanschap en aandacht voor detail.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {mockServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <a
              href="/diensten"
              className="btn btn-primary px-6 sm:px-8 py-3 text-base sm:text-lg"
            >
              Bekijk Alle Diensten
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Wat Onze Klanten Zeggen
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Meer dan 120 tevreden klanten in de regio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <TestimonialCard 
              name="Anja" 
              location="Amersfoort"
              text="Super netjes gewerkt, tuin is weer tiptop! Zeer professioneel en vriendelijk." 
            />
            <TestimonialCard 
              name="Mark" 
              location="Soest"
              text="Snel een offerte en duidelijke prijs. Het werk is perfect uitgevoerd." 
            />
            <TestimonialCard 
              name="Leonie" 
              location="Utrecht"
              text="Prachtig ontwerp en perfecte uitvoering. Aanrader!" 
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Klaar voor Uw Droomtuin?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            Vraag vandaag nog een gratis offerte aan. Binnen 24 uur nemen wij contact met u op.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href={`tel:${process.env.NEXT_PUBLIC_PHONE || "+31 6 12 34 56 78"}`}
              className="btn bg-white text-primary hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold min-h-[48px] flex items-center justify-center"
            >
              Bel Direct
            </a>
            <a
              href="/contact"
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold min-h-[48px] flex items-center justify-center"
            >
              Vraag Offerte
            </a>
          </div>
        </div>
      </section>

      <PhoneWhatsAppSticky />
    </>
  );
}
