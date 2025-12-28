"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Diensten", href: "/diensten" },
    { name: "Over Ons", href: "/over-ons" },
    { name: "Projecten", href: "/projecten" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 sm:h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity">
          <Image 
            src="/logo.svg" 
            alt="Bobsgroen Hoveniers Logo" 
            width={200}
            height={60}
            className="h-8 sm:h-12 w-auto max-w-[180px] sm:max-w-[220px]"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href={`tel:${siteConfig.business.phone}`}
            className="flex items-center space-x-2 text-sm font-medium text-primary hover:text-primary/80"
          >
            <Phone className="h-4 w-4" />
            <span>{siteConfig.business.phone}</span>
          </a>
          <Link
            href="/contact"
            className="btn btn-primary px-4 py-2"
          >
            Vraag Offerte
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-medium transition-colors hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t space-y-4">
              <a
                href={`tel:${siteConfig.business.phone}`}
                className="flex items-center space-x-2 text-base font-medium text-primary"
              >
                <Phone className="h-5 w-5" />
                <span>{siteConfig.business.phone}</span>
              </a>
              <Link
                href="/contact"
                className="btn btn-primary w-full py-3 text-base font-semibold min-h-[48px] flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Vraag Offerte
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
