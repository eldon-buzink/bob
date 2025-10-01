import { CheckCircle, Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const pricingPlans = [
  {
    name: "Onderhoud Basis",
    price: "Vanaf €45",
    period: "per maand",
    description: "Regelmatig onderhoud voor kleine tot middelgrote tuinen",
    features: [
      "Maandelijks onderhoud",
      "Snoeien en bemesten",
      "Onkruidvrij maken",
      "Gazon verzorging",
      "Telefonische support"
    ],
    popular: false
  },
  {
    name: "Onderhoud Plus",
    price: "Vanaf €75",
    period: "per maand", 
    description: "Uitgebreid onderhoud voor middelgrote tot grote tuinen",
    features: [
      "2x per maand onderhoud",
      "Seizoensgebonden werkzaamheden",
      "Hagen scheren",
      "Borders bijwerken",
      "Prioriteit support"
    ],
    popular: true
  },
  {
    name: "Onderhoud Premium",
    price: "Vanaf €120",
    period: "per maand",
    description: "Volledig onderhoud voor grote tuinen en bedrijven",
    features: [
      "Wekelijks onderhoud",
      "Alle seizoenswerkzaamheden",
      "Plantenverzorging",
      "Spoedservice",
      "Dedicated contactpersoon"
    ],
    popular: false
  }
];

const services = [
  { name: "Tuinontwerp", price: "Vanaf €500" },
  { name: "Tuinaanleg", price: "Vanaf €2.500" },
  { name: "Bestrating", price: "Vanaf €35/m²" },
  { name: "Schutting plaatsen", price: "Vanaf €150/m" },
  { name: "Beregening installeren", price: "Vanaf €800" },
  { name: "Eenmalige snoeibeurt", price: "Vanaf €150" }
];

export default function PrijzenPage() {
  return (
    <div className="py-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transparante Prijzen
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Geen verborgen kosten, geen verrassingen. Wij werken met vaste tarieven 
            en geven altijd een duidelijke offerte vooraf.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Onderhoudspakketten
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-lg shadow-md p-8 ${
                  plan.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Meest Populair
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                  <div className="text-gray-600">{plan.period}</div>
                  <p className="text-gray-600 mt-4">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`w-full btn ${
                    plan.popular ? "btn-primary" : "btn-secondary"
                  } text-center block`}
                >
                  Vraag Offerte
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Services Pricing */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Diensten & Prijzen
          </h2>
          <div className="bg-muted rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                  <span className="font-medium text-gray-900">{service.name}</span>
                  <span className="text-primary font-semibold">{service.price}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-6 text-center">
              * Prijzen zijn indicatief en afhankelijk van specifieke wensen en omstandigheden
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-primary text-white rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Waarom Kiezen voor Onze Prijzen?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg">Transparant</div>
              <p className="text-sm mt-2 opacity-90">
                Geen verborgen kosten, altijd duidelijke offerte
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24h</div>
              <div className="text-lg">Snelle Offerte</div>
              <p className="text-sm mt-2 opacity-90">
                Binnen 24 uur ontvangt u een gedetailleerde offerte
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg">Jaar Ervaring</div>
              <p className="text-sm mt-2 opacity-90">
                Vaste prijzen gebaseerd op jarenlange ervaring
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Klaar voor een Offerte?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Vraag vandaag nog een gratis offerte aan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.business.phone}`}
              className="btn btn-primary px-8 py-3 text-lg flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Bel Direct</span>
            </a>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary px-8 py-3 text-lg flex items-center justify-center space-x-2"
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
