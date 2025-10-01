import { type DefaultSeoProps } from "next-seo";
import { siteConfig } from "@/lib/site-config";

const config: DefaultSeoProps = {
  titleTemplate: `%s | ${siteConfig.business.name}`,
  defaultTitle: siteConfig.site.title,
  description: siteConfig.site.description,
  openGraph: {
    type: "website",
    url: siteConfig.site.url,
    siteName: siteConfig.business.name,
  },
  twitter: { cardType: "summary_large_image" },
};
export default config;
