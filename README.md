# Gardener Website

Een professionele website voor een lokale hovenier, gebouwd met Next.js 15, TypeScript, en Tailwind CSS. Geoptimaliseerd voor SEO, conversie en gebruikerservaring.

## 🚀 Features

- **Next.js 15** met App Router en TypeScript
- **Tailwind CSS** voor styling en responsive design
- **SEO geoptimaliseerd** met next-seo en structured data
- **Contentlayer** voor content management
- **Resend** voor e-mail functionaliteit
- **Vercel Analytics** voor performance tracking
- **Mobile-first** responsive design
- **Accessibility** compliant

## 📋 Vereisten

- Node.js 20+
- npm of yarn

## 🛠️ Installatie

1. Clone de repository
2. Installeer dependencies:
   ```bash
   npm install
   ```

3. Kopieer environment variabelen:
   ```bash
   cp env.example .env.local
   ```

4. Vul de environment variabelen in:
   ```env
   SITE_URL=https://www.hovenier-jansen.nl
   RESEND_API_KEY=your_resend_key
   ```

## 🚀 Development

Start de development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## 📦 Build

Voor productie:

```bash
npm run build
npm start
```

## 🎯 SEO & Performance

- **Lighthouse Score**: 95+ op alle metrics
- **Core Web Vitals**: Geoptimaliseerd voor snelheid
- **Structured Data**: LocalBusiness, Service, FAQ schemas
- **Sitemap**: Automatisch gegenereerd
- **Meta Tags**: Volledig geoptimaliseerd

## 📱 Pages

- **Home**: Hero sectie met CRO elementen
- **Diensten**: Service overzicht en detail pagina's
- **Over Ons**: Bedrijfsinformatie en waarden
- **Contact**: Contactformulier en gegevens
- **Reviews**: Klantbeoordelingen
- **FAQ**: Veelgestelde vragen
- **Servicegebied**: Lokale SEO pagina's

## 🎨 Styling

De website gebruikt een moderne, professionele styling met:
- Groene primaire kleuren (tuin thema)
- Responsive grid layouts
- Hover effecten en animaties
- Mobile-first approach
- Accessibility features

## 📧 Contact Form

Het contactformulier gebruikt Resend voor e-mail verzending:
- Server-side validatie
- Spam bescherming
- Responsive design
- Success/error states

## 🚀 Deployment

De website is geoptimaliseerd voor deployment op Vercel:

1. Verbind je GitHub repository
2. Stel environment variabelen in
3. Deploy automatisch bij push

## 📊 Analytics

- Vercel Analytics voor performance
- Conversion tracking
- User behavior insights

## 🔧 Customization

Pas de website aan voor jouw hoveniersbedrijf:

1. **Branding**: Update kleuren in `tailwind.config.ts`
2. **Content**: Bewerk content in `content/` directory
3. **Contact**: Update contactgegevens in `src/lib/site-config.ts`
4. **Services**: Voeg services toe in `content/services/`

## 📈 CRO Features

- **Primary CTA**: "Bel gratis voor offerte" prominent aanwezig
- **Trust Signals**: Certificeringen en ervaring
- **Social Proof**: Reviews en testimonials
- **Mobile CTAs**: Sticky telefoon/WhatsApp buttons
- **Local SEO**: Servicegebied en NAP informatie

## 🎯 Performance Targets

- **LCP**: < 1.0s
- **FID**: < 100ms  
- **CLS**: < 0.1
- **TTFB**: < 200ms

## 📞 Support

Voor vragen of ondersteuning, neem contact op via:
- E-mail: info@hovenier-jansen.nl
- Telefoon: +31 6 12 34 56 78
