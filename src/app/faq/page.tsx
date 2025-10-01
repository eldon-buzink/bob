import { FAQJsonLd } from "@/components/schema-jsonld";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Hoe snel kan ik een offerte krijgen?",
    a: "Wij streven ernaar om binnen 24 uur een gedetailleerde offerte te sturen. Voor spoedklussen kunnen we vaak dezelfde dag nog een offerte maken."
  },
  {
    q: "Wat zijn jullie werkgebieden?",
    a: "Wij werken in Amersfoort, Utrecht, Soest en Leusden. Voor projecten buiten deze gebieden kunnen we in overleg kijken naar de mogelijkheden."
  },
  {
    q: "Bieden jullie garantie op jullie werk?",
    a: "Ja, wij bieden 2 jaar garantie op al ons werk. Planten hebben 1 jaar groeigarantie, mits de juiste verzorging wordt toegepast."
  },
  {
    q: "Kunnen jullie ook in de winter werken?",
    a: "Ja, wij werken het hele jaar door. In de winter richten wij ons vooral op snoeiwerk, bestrating en voorbereidingen voor het voorjaar."
  },
  {
    q: "Hoe wordt de prijs bepaald?",
    a: "Onze prijzen zijn gebaseerd op de omvang van het project, gebruikte materialen, arbeidsintensiteit en eventuele specifieke wensen. Wij geven altijd een transparante offerte."
  },
  {
    q: "Moet ik thuis zijn tijdens de werkzaamheden?",
    a: "Voor de meeste werkzaamheden hoeft u niet thuis te zijn. Wij hebben een sleutelovereenkomst en houden u op de hoogte van de voortgang."
  },
  {
    q: "Wat als ik niet tevreden ben?",
    a: "Wij streven naar 100% klanttevredenheid. Als u niet tevreden bent, lossen wij het probleem kosteloos op of geven wij uw geld terug."
  },
  {
    q: "Kunnen jullie ook bestaande tuinen renoveren?",
    a: "Ja, wij zijn gespecialiseerd in het renoveren van bestaande tuinen. Wij kunnen uw tuin volledig transformeren of gedeeltelijk aanpassen."
  },
  {
    q: "Hoe lang duurt een gemiddeld project?",
    a: "Dit hangt af van de omvang. Een kleine tuin kan in 1-2 dagen klaar zijn, terwijl een grote tuin 1-2 weken kan duren. Wij geven altijd een realistische planning."
  },
  {
    q: "Bieden jullie ook onderhoud na aanleg?",
    a: "Ja, wij bieden verschillende onderhoudspakketten om uw tuin in topconditie te houden. Van maandelijks onderhoud tot seizoensgebonden werkzaamheden."
  }
];

export default function FAQPage() {
  return (
    <div className="py-16">
      <FAQJsonLd faqs={faqs} />
      
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Veelgestelde Vragen
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hier vindt u antwoorden op de meest gestelde vragen over onze diensten, 
            prijzen en werkwijze.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-white rounded-lg shadow-md">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.q}
                  </h3>
                  <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Staat Uw Vraag Er Niet Bij?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Neem gerust contact met ons op. Wij helpen u graag verder!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn btn-primary px-8 py-3 text-lg"
            >
              Stel Uw Vraag
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
