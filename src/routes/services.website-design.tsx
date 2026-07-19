import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/liora/ServicePage";

export const Route = createFileRoute("/services/website-design")({
  head: () => ({
    meta: [
      { title: "Website Design — Liora by Gabriela" },
      {
        name: "description",
        content:
          "Custom website design for small businesses — thoughtful, responsive, and rooted in intention. Discover what's included and starting investment.",
      },
      { property: "og:title", content: "Website Design — Liora by Gabriela" },
      {
        property: "og:description",
        content:
          "Custom websites created to help small businesses establish a professional and meaningful online presence.",
      },
    ],
  }),
  component: WebsiteDesignPage,
});

function WebsiteDesignPage() {
  return (
    <ServicePage
      eyebrow="Service"
      title="Website Design"
      subtitle="Custom websites created to help small businesses establish a professional and meaningful online presence."
      intro="Every website is designed with intention — combining aesthetics, functionality, and a user experience that reflects the heart of your brand."
      included={[
        "Custom website design",
        "Responsive design for desktop and mobile",
        "User-friendly page structure",
        "Website layout and visual direction",
        "Contact forms and essential integrations",
        "Basic SEO optimization",
        "Launch assistance",
        "Post-launch support options",
      ]}
      startingAt="$850"
      pricingNote="Final pricing varies depending on the number of pages, complexity, features, and specific business needs."
      ctaLabel="Start Your Project"
    />
  );
}
