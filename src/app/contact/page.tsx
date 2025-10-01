import { ContactForm } from "@/components/contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Neem Contact Op
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vraag een gratis offerte aan of stel uw vragen. We helpen u graag verder 
            met uw tuinproject.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Vraag Gratis Offerte
            </h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contactgegevens
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Telefoon</h3>
                    <a 
                      href={`tel:${siteConfig.business.phone}`}
                      className="text-primary hover:text-primary/80 text-lg"
                    >
                      {siteConfig.business.phone}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Bel direct voor een snelle offerte
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">E-mail</h3>
                    <a 
                      href={`mailto:${siteConfig.business.email}`}
                      className="text-primary hover:text-primary/80 text-lg"
                    >
                      {siteConfig.business.email}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Stuur een e-mail voor uitgebreide informatie
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Adres</h3>
                    <div className="text-gray-700">
                      <div>{siteConfig.business.street}</div>
                      <div>{siteConfig.business.postalCode} {siteConfig.business.city}</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Servicegebied: {siteConfig.business.serviceArea.join(", ")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Openingstijden</h3>
                    <div className="text-gray-700">
                      {siteConfig.business.openingHours.map((hours, index) => (
                        <div key={index}>{hours}</div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Buiten openingstijden ook bereikbaar voor spoed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Onze Locatie</h3>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Google Maps integratie</p>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                <a 
                  href={siteConfig.social.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                >
                  Bekijk op Google Maps →
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
