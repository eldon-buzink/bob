import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image 
                src="/logo.svg" 
                alt="Bobsgroen Hoveniers Logo" 
                width={200}
                height={60}
                className="h-10 w-auto max-w-[200px]"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Vakmanschap in tuinontwerp, tuinaanleg en periodiek onderhoud. 
              Gratis offerte en transparante prijzen.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Diensten</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/diensten/tuinontwerp" className="text-muted-foreground hover:text-primary">Tuinontwerp</Link></li>
              <li><Link href="/diensten/tuinaanleg" className="text-muted-foreground hover:text-primary">Tuinaanleg</Link></li>
              <li><Link href="/diensten/onderhoud" className="text-muted-foreground hover:text-primary">Onderhoud</Link></li>
              <li><Link href="/diensten" className="text-muted-foreground hover:text-primary">Alle Diensten</Link></li>
            </ul>
          </div>

          {/* Company Pages */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Bedrijf</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/over-ons" className="text-muted-foreground hover:text-primary">Over Ons</Link></li>
              <li><Link href="/projecten" className="text-muted-foreground hover:text-primary">Projecten</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
              <li><Link href="/servicegebied" className="text-muted-foreground hover:text-primary">Servicegebied</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Servicegebied</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/hovenier-etten-leur" className="text-muted-foreground hover:text-primary">Hovenier Etten-Leur</Link></li>
              <li><Link href="/hovenier-zevenbergen" className="text-muted-foreground hover:text-primary">Hovenier Zevenbergen</Link></li>
              <li><Link href="/hovenier-prinsenbeek" className="text-muted-foreground hover:text-primary">Hovenier Prinsenbeek</Link></li>
              <li><Link href="/hovenier-breda" className="text-muted-foreground hover:text-primary">Hovenier Breda</Link></li>
              <li><Link href="/hovenier-roosendaal" className="text-muted-foreground hover:text-primary">Hovenier Roosendaal</Link></li>
              <li><Link href="/hovenier-sprundel" className="text-muted-foreground hover:text-primary">Hovenier Sprundel</Link></li>
              <li><Link href="/hovenier-hoeven" className="text-muted-foreground hover:text-primary">Hovenier Hoeven</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href={`tel:${siteConfig.business.phone}`} className="text-muted-foreground hover:text-primary">
                  {siteConfig.business.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${siteConfig.business.email}`} className="text-muted-foreground hover:text-primary">
                  {siteConfig.business.email}
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <div className="text-muted-foreground">
                  <div>{siteConfig.business.street}</div>
                  <div>{siteConfig.business.postalCode} {siteConfig.business.city}</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-primary mt-0.5" />
                <div className="text-muted-foreground">
                  {siteConfig.business.openingHours.map((hours, index) => (
                    <div key={index}>{hours}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 {siteConfig.business.name}. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                Privacy
              </Link>
              <Link href="/algemene-voorwaarden" className="text-muted-foreground hover:text-primary">
                Algemene Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
