import { MapPin, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const cities = [
  {
    name: "Amersfoort",
    description: "Onze thuisbasis. Wij kennen de stad en omgeving door en door.",
    services: ["Tuinontwerp", "Tuinaanleg", "Onderhoud", "Bestrating"],
    distance: "0 km"
  },
  {
    name: "Utrecht",
    description: "Regelmatig actief in Utrecht en omgeving voor diverse projecten.",
    services: ["Tuinontwerp", "Tuinaanleg", "Onderhoud", "Schuttingen"],
    distance: "15 km"
  },
  {
    name: "Soest",
    description: "Veel ervaring met de karakteristieke tuinen in Soest.",
    services: ["Onderhoud", "Tuinontwerp", "Bestrating", "Beregening"],
    distance: "8 km"
  },
  {
    name: "Leusden",
    description: "Actief in Leusden voor zowel particuliere als zakelijke klanten.",
    services: ["Tuinaanleg", "Onderhoud", "Schuttingen", "Beregening"],
    distance: "5 km"
  }
];

const testimonials = [
  {
    name: "Anja van der Berg",
    location: "Amersfoort",
    text: "Fantastisch werk in onze tuin. Zeer professioneel en vriendelijk team."
  },
  {
    name: "Mark de Vries", 
    location: "Soest",
    text: "Onze tuin is getransformeerd. Perfecte uitvoering en snelle service."
  },
  {
    name: "Leonie Bakker",
    location: "Utrecht", 
    text: "Zeer tevreden met het ontwerp en de uitvoering. Aanrader!"
  }
];

export default function ServicegebiedPage() {
  return (
    <div className="py-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ons Servicegebied
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wij zijn actief in Amersfoort, Utrecht, Soest en Leusden. 
            Voor projecten buiten deze gebieden kunnen we in overleg kijken naar de mogelijkheden.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {cities.map((city, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold text-gray-900">{city.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{city.description}</p>
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-900">Populaire diensten:</div>
                <div className="flex flex-wrap gap-2">
                  {city.services.map((service, serviceIndex) => (
                    <span 
                      key={serviceIndex}
                      className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                Afstand: {city.distance}
              </div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="bg-muted rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Onze Locatie
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Hovenier Jansen
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-gray-900">{siteConfig.business.street}</div>
                    <div className="text-gray-600">{siteConfig.business.postalCode} {siteConfig.business.city}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href={`tel:${siteConfig.business.phone}`} className="text-primary hover:text-primary/80">
                    {siteConfig.business.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href={`mailto:${siteConfig.business.email}`} className="text-primary hover:text-primary/80">
                    {siteConfig.business.email}
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
              <p className="text-gray-500">Google Maps integratie</p>
            </div>
          </div>
        </div>

        {/* Local Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Wat Onze Lokale Klanten Zeggen
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ook in Uw Regio Actief?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Neem contact op om te bespreken of wij ook in uw regio kunnen werken
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg"
            >
              Vraag Mogelijkheden
            </a>
            <a
              href={`tel:${siteConfig.business.phone}`}
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg"
            >
              Bel Direct
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
