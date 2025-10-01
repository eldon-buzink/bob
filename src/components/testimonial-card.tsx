import { Star, MapPin } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  location?: string;
  rating?: number;
}

export function TestimonialCard({ name, text, location, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${
              i < rating 
                ? "fill-yellow-400 text-yellow-400" 
                : "text-gray-300"
            }`} 
          />
        ))}
      </div>
      
      <blockquote className="text-gray-700 mb-4 italic">
        "{text}"
      </blockquote>
      
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold text-gray-900">{name}</div>
          {location && (
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="h-3 w-3 mr-1" />
              {location}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
