import Image from "next/image";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

export default function OverOnsPage() {
  return (
    <div className="py-16">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Over Bobsgroen
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Al meer dan 10 jaar helpen wij klanten in de regio Etten-Leur, Zevenbergen, 
            Prinsenbeek en Breda met het realiseren van hun droomtuin.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ons Verhaal
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Het begon allemaal met een passie voor tuinen en de wens om mensen te helpen hun buitenruimte optimaal te benutten. Wat begon als een kleine onderneming is uitgegroeid tot een gerenommeerd hoveniersbedrijf in de regio.
              </p>
              <p>
                Wij geloven dat elke tuin uniek is en vraagt om een persoonlijke aanpak. Daarom nemen wij de tijd om uw wensen te begrijpen en een ontwerp te maken dat perfect aansluit bij uw levensstijl en de omgeving.
              </p>
              <p>
                Onze ervaring en vakmanschap, gecombineerd met moderne technieken en duurzame materialen, zorgen voor resultaten waar u jarenlang van kunt genieten.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image
              src="/images/MJYJ6092.JPEG"
              alt="Bobsgroen Hoveniers team en projecten"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-muted rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Onze Waarden
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Kwaliteit
              </h3>
              <p className="text-gray-600">
                Wij leveren alleen werk van de hoogste kwaliteit met duurzame materialen 
                en vakmanschap dat jaren meegaat.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Persoonlijk
              </h3>
              <p className="text-gray-600">
                Elke klant krijgt persoonlijke aandacht en een ontwerp dat perfect 
                aansluit bij hun wensen en levensstijl.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Betrouwbaar
              </h3>
              <p className="text-gray-600">
                We houden ons aan afspraken en leveren werk op tijd en binnen budget. 
                Transparante communicatie staat centraal.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Onze Ervaring & Waarden
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 rounded-lg p-6 mb-4">
                <CheckCircle className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Persoonlijk</h3>
              <p className="text-sm text-gray-600">Maatwerk voor elke tuin</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 rounded-lg p-6 mb-4">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">10+ Jaar</h3>
              <p className="text-sm text-gray-600">Ervaring in de sector</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 rounded-lg p-6 mb-4">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">120+ Klanten</h3>
              <p className="text-sm text-gray-600">Tevreden klanten</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 rounded-lg p-6 mb-4">
                <CheckCircle className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">100% Tevreden</h3>
              <p className="text-sm text-gray-600">Klanttevredenheid</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
