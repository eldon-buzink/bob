"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function CtaBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setIsVisible(scrollPercent > 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-80">
      <div className="bg-background border rounded-lg shadow-lg p-4 space-y-3">
        <div className="text-center">
          <h3 className="font-semibold text-sm">Gratis offerte?</h3>
          <p className="text-xs text-muted-foreground">Bel direct of stuur een bericht</p>
        </div>
        
        <div className="flex space-x-2">
          <a
            href={`tel:${siteConfig.business.phone}`}
            className="flex-1 btn btn-primary flex items-center justify-center space-x-2 text-sm"
          >
            <Phone className="h-4 w-4" />
            <span>Bellen</span>
          </a>
          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn btn-secondary flex items-center justify-center space-x-2 text-sm"
          >
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
