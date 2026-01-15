import { Phone, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { siteConfig } from "@/lib/site-config";
import { ProjectGallery } from "@/components/project-gallery";
import { ProjectCategory } from "@/lib/projects-data";

const categories: ProjectCategory[] = ["Tuinaanleg", "Tuinontwerp", "Onderhoud"];

export default function ProjectenPage() {
  return (
    <div className="py-16">
      <div className="container">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "Projecten" }]} />

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

        {/* Categorized Project Galleries */}
        <div className="space-y-16 mb-16">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {category}
              </h2>
              <ProjectGallery category={category} columns={4} />
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
