import { Metadata } from "next";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { ProjectGallery } from "@/components/project-gallery";

export const metadata: Metadata = {
  title: "Hovenier Zevenbergen | Bobsgroen Hoveniers",
  description: "Professionele hovenier in Zevenbergen. Tuinontwerp, tuinaanleg en periodiek onderhoud. Gratis offerte. 10+ jaar ervaring. Bel direct voor advies!",
  openGraph: {
    title: "Hovenier Zevenbergen | Bobsgroen Hoveniers",
    description: "Professionele hovenier in Zevenbergen. Tuinontwerp, tuinaanleg en periodiek onderhoud. Gratis offerte.",
    url: `${siteConfig.site.url}/hovenier-zevenbergen`,
  },
  alternates: {
    canonical: `${siteConfig.site.url}/hovenier-zevenbergen`,
  },
};

export default function HovenierZevenbergenPage() {
  return (
    <div className="py-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Hovenier in Zevenbergen
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Op zoek naar een betrouwbare hovenier in Zevenbergen? Bobsgroen Hoveniers is uw lokale specialist 
            voor tuinontwerp, tuinaanleg en periodiek onderhoud. Met meer dan 10 jaar ervaring helpen wij 
            u bij het realiseren van uw droomtuin.
          </p>
        </div>

        {/* Services Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tuinontwerp</h2>
            <p className="text-gray-600 mb-4">
              Professioneel tuinontwerp dat perfect aansluit bij uw wensen en de omgeving van Zevenbergen.
            </p>
            <a href="/diensten/tuinontwerp" className="text-primary font-semibold hover:underline">
              Meer informatie →
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tuinaanleg</h2>
            <p className="text-gray-600 mb-4">
              Complete aanleg van uw droomtuin met aandacht voor detail en duurzame materialen.
            </p>
            <a href="/diensten/tuinaanleg" className="text-primary font-semibold hover:underline">
              Meer informatie →
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Onderhoud</h2>
            <p className="text-gray-600 mb-4">
              Regelmatig onderhoud om uw tuin in Zevenbergen het hele jaar door in topconditie te houden.
            </p>
            <a href="/diensten/onderhoud" className="text-primary font-semibold hover:underline">
              Meer informatie →
            </a>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-muted rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Waarom Kiezen voor Bobsgroen in Zevenbergen?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-600">Jaar ervaring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">120+</div>
              <div className="text-gray-600">Tevreden klanten</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Maatwerk</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Gratis</div>
              <div className="text-gray-600">Offerte</div>
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Onze Projecten in Zevenbergen
          </h2>
          <ProjectGallery columns={4} />
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Klaar voor Uw Project in Zevenbergen?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Neem contact op voor een gratis offerte. Wij helpen u graag bij het realiseren van uw droomtuin.
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

        {/* Service Area Info */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-600 mb-4">
            <MapPin className="h-5 w-5" />
            <span className="text-lg">Ook actief in: Etten-Leur, Prinsenbeek, Breda, Roosendaal, Sprundel, Hoeven</span>
          </div>
        </div>
      </div>
    </div>
  );
}

