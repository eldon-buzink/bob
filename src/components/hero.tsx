import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Star, CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-12 sm:py-20 lg:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Uw droomtuin
                <span className="text-primary block">realiteit maken</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
                Van ontwerp tot onderhoud: vakmanschap in tuinontwerp, tuinaanleg en periodiek onderhoud. 
                Gratis offerte en transparante prijzen.
              </p>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span>Persoonlijke aanpak</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span>10 jaar ervaring</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span>Gratis offerte</span>
              </div>
            </div>

            {/* Review Stars */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                <span className="font-semibold">4.9/5</span> van 120+ klanten
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={`tel:${siteConfig.business.phone}`}
                className="btn btn-primary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg flex items-center justify-center space-x-2 font-semibold min-h-[48px]"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Bel gratis voor offerte</span>
              </a>
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg flex items-center justify-center space-x-2 font-semibold min-h-[48px]"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="text-center p-3 sm:p-4 bg-white/50 rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-primary">10+</div>
                <div className="text-xs sm:text-sm text-gray-600">Jaren ervaring</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white/50 rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-primary">120+</div>
                <div className="text-xs sm:text-sm text-gray-600">Tevreden klanten</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white/50 rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-primary">100%</div>
                <div className="text-xs sm:text-sm text-gray-600">Maatwerk</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative h-64 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/APWA9274.JPEG"
                alt="Prachtige tuin gerealiseerd door Bobsgroen Hoveniers"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Floating testimonial */}
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-lg shadow-lg p-3 sm:p-4 max-w-xs">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mb-2">
                "Super blij met mijn tuin via Bobsgroen! Bob denkt mee, komt afspraken na en levert top werk. Zeker aan te raden!"
              </p>
              <div className="text-xs sm:text-sm font-semibold">- Tim</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
