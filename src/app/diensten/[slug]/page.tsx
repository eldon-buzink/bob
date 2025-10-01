import { notFound } from "next/navigation";
import { ServiceJsonLd, FAQJsonLd } from "@/components/schema-jsonld";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

// Mock service data - in production this would come from Contentlayer
const mockServices = {
  "tuinontwerp": {
    title: "Tuinontwerp",
    summary: "Professioneel tuinontwerp dat perfect aansluit bij uw wensen en de omgeving. Van moderne tot klassieke stijlen.",
    content: `
# Tuinontwerp

Een goed tuinontwerp is de basis van een prachtige tuin. Wij maken ontwerpen die perfect aansluiten bij uw wensen, levensstijl en de omgeving.

## Onze Aanpak

- **Intake gesprek**: We bespreken uw wensen en behoeften
- **Situatieonderzoek**: We analyseren de grond, ligging en bestaande elementen  
- **Conceptontwerp**: We maken een eerste schets met de hoofdlijnen
- **Definitief ontwerp**: Gedetailleerd plan met materialen en beplanting
- **3D Visualisatie**: Voor grotere projecten maken we 3D beelden

## Wat Krijgt U?

- Gedetailleerd ontwerpplan op schaal
- Materialenlijst en beplantingsplan
- 3D visualisaties (bij grotere projecten)
- Uitvoeringsplanning
- Ondersteuning tijdens de aanleg
    `,
    faqs: [
      {"q": "Hoe lang duurt het ontwerpproces?", "a": "Het ontwerpproces duurt gemiddeld 2-4 weken, afhankelijk van de complexiteit van uw project."},
      {"q": "Krijg ik 3D visualisaties?", "a": "Ja, voor grotere projecten maken wij 3D visualisaties zodat u het eindresultaat kunt voorstellen."},
      {"q": "Wat kost een tuinontwerp?", "a": "De kosten variëren van €500 voor een eenvoudig ontwerp tot €2.500 voor een complex project."},
      {"q": "Kunnen jullie ook bestaande tuinen herontwerpen?", "a": "Ja, wij zijn gespecialiseerd in het herontwerpen van bestaande tuinen."}
    ]
  },
  "tuinaanleg": {
    title: "Tuinaanleg",
    summary: "Complete aanleg van uw droomtuin met aandacht voor detail en duurzaamheid. Van bestrating tot beplanting.",
    content: `
# Tuinaanleg

Van ontwerp naar realiteit: wij leggen uw tuin professioneel aan met vakmanschap en aandacht voor detail.

## Onze Werkwijze

1. **Voorbereiding**: Grondwerk, drainage en fundering
2. **Hardscaping**: Bestrating, terrassen en constructies
3. **Beplanting**: Bomen, struiken, vaste planten en gazon
4. **Afronding**: Beregening, verlichting en details

## Wat Wij Aanleggen

- **Terrassen en bestrating**: Van natuursteen tot beton
- **Beplanting**: Bomen, struiken, borders en gazon
- **Waterpartijen**: Vijvers, fonteinen en waterlopen
- **Constructies**: Pergola's, schuttingen en hekwerken
- **Beregening**: Automatische sproei-installaties
- **Verlichting**: Sfeervolle tuinverlichting
    `,
    faqs: [
      {"q": "Hoe lang duurt de aanleg van een tuin?", "a": "Dit hangt af van de omvang. Een kleine tuin kan in 1-2 dagen, een grote tuin kan 1-2 weken duren."},
      {"q": "Welke materialen gebruiken jullie?", "a": "We werken met duurzame, kwalitatief hoogwaardige materialen van gerenommeerde leveranciers."},
      {"q": "Kunnen jullie ook in de winter aanleggen?", "a": "Ja, voor bestrating en harde materialen. Beplanting doen we bij voorkeur in het voorjaar of najaar."},
      {"q": "Wat als het weer tegenzit?", "a": "We houden rekening met het weer en passen de planning aan. Uw project blijft op schema."}
    ]
  },
  "onderhoud": {
    title: "Tuinonderhoud",
    summary: "Regelmatig onderhoud om uw tuin in topconditie te houden. Van snoeien tot bemesten en onkruidvrij maken.",
    content: `
# Tuinonderhoud

Regelmatig onderhoud verlengt de levensduur van uw tuin en voorkomt dure herstelwerkzaamheden.

## Onze Onderhoudsdiensten

- **Snoeien**: Bomen, struiken, hagen en rozen
- **Bemesten**: Seizoensgebonden bemesting voor optimale groei
- **Onkruidvrij**: Handmatig en mechanisch onkruid verwijderen
- **Gazonverzorging**: Maaien, verticuteren en bemesten
- **Borders bijwerken**: Beplanting onderhouden en aanvullen
- **Seizoenswerk**: Voorjaars- en najaarsschoonmaak
    `,
    faqs: [
      {"q": "Hoe vaak is onderhoud nodig?", "a": "Gemiddeld 4-6 keer per jaar, afhankelijk van de beplanting en uw wensen."},
      {"q": "Werken jullie met vaste prijzen?", "a": "Ja, voor veelvoorkomende pakketten bieden we vaste tarieven. Voor maatwerk maken we een offerte."},
      {"q": "Kunnen jullie ook eenmalig onderhoud doen?", "a": "Ja, wij bieden ook eenmalige snoeibeurten en onderhoudswerkzaamheden."},
      {"q": "Wat als planten doodgaan?", "a": "Wij vervangen dode planten kosteloos binnen de garantieperiode."}
    ]
  }
};

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = mockServices[slug as keyof typeof mockServices];
  
  if (!service) {
    notFound();
  }

  return (
    <div className="py-16">
      <ServiceJsonLd service={{ title: service.title, summary: service.summary, slug }} />
      <FAQJsonLd faqs={service.faqs} />
      
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {service.summary}
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: service.content.replace(/\n/g, '<br>') }} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* CTA Card */}
            <div className="bg-primary text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Vraag Offerte</h3>
              <p className="mb-6 opacity-90">
                Krijg binnen 24 uur een gedetailleerde offerte voor uw project.
              </p>
              <div className="space-y-3">
                <a
                  href={`tel:${siteConfig.business.phone}`}
                  className="w-full btn bg-white text-primary hover:bg-gray-100 flex items-center justify-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>Bel Direct</span>
                </a>
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn border-2 border-white text-white hover:bg-white hover:text-primary flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Features */}
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Waarom Kiezen voor Ons?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-600">10+ jaar ervaring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-600">CBW-erkend</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-600">Transparante prijzen</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-600">2 jaar garantie</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Veelgestelde Vragen
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {service.faqs.map((faq, index) => (
                <details key={index} className="group bg-white rounded-lg shadow-md">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.q}
                    </h3>
                    <div className="text-primary">+</div>
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
        </div>
      </div>
    </div>
  );
}
