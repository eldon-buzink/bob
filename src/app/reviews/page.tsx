import { TestimonialCard } from "@/components/testimonial-card";
import { AggregateRatingJsonLd } from "@/components/schema-jsonld";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Anja van der Berg",
    location: "Amersfoort",
    text: "Fantastisch werk! Onze tuin ziet er prachtig uit. Zeer professioneel en vriendelijk team. Aanrader!",
    rating: 5
  },
  {
    name: "Mark de Vries",
    location: "Soest",
    text: "Snel een offerte en duidelijke prijs. Het werk is perfect uitgevoerd en binnen de afgesproken tijd.",
    rating: 5
  },
  {
    name: "Leonie Bakker",
    location: "Utrecht",
    text: "Prachtig ontwerp en perfecte uitvoering. Zeer tevreden met het resultaat en de service.",
    rating: 5
  },
  {
    name: "Peter Jansen",
    location: "Leusden",
    text: "Professionele aanpak van begin tot eind. Onze tuin is getransformeerd tot een oase van rust.",
    rating: 5
  },
  {
    name: "Maria Smit",
    location: "Amersfoort",
    text: "Uitstekend onderhoud van onze tuin. Altijd op tijd en zeer netjes werk. Zeer tevreden klant!",
    rating: 5
  },
  {
    name: "Jan de Wit",
    location: "Utrecht",
    text: "Van ontwerp tot aanleg: alles perfect uitgevoerd. Zeer vriendelijk en professioneel team.",
    rating: 5
  }
];

export default function ReviewsPage() {
  return (
    <div className="py-16">
      <AggregateRatingJsonLd rating={4.9} reviewCount={120} />
      
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Klantbeoordelingen
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Lees wat onze klanten zeggen over onze diensten. Meer dan 120 tevreden klanten 
            in de regio Amersfoort, Utrecht, Soest en Leusden.
          </p>
          
          {/* Overall Rating */}
          <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">4.9</div>
            <div className="text-gray-600 mb-4">van 5 sterren</div>
            <div className="text-sm text-gray-500">Gebaseerd op 120+ beoordelingen</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              location={testimonial.location}
              text={testimonial.text}
              rating={testimonial.rating}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ervaring Onze Kwaliteit
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Word ook een van onze tevreden klanten
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn btn-primary px-8 py-3 text-lg"
            >
              Vraag Gratis Offerte
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
