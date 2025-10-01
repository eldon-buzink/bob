import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: {
    title: string;
    summary: string;
    slug: string;
    heroImage?: string;
  };
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {service.heroImage && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {service.summary}
        </p>
        <Link
          href={`/diensten/${service.slug}`}
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium group-hover:translate-x-1 transition-transform duration-200"
        >
          Meer informatie
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
