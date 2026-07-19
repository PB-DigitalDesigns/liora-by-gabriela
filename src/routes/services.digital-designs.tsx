import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/liora/ServicePage";

export const Route = createFileRoute("/services/digital-designs")({
  head: () => ({
    meta: [
      { title: "Digital Designs — Liora by Gabriela" },
      {
        name: "description",
        content:
          "Flyers, digital menus, social graphics, QR codes and marketing materials thoughtfully designed to help your business stand out.",
      },
      { property: "og:title", content: "Digital Designs — Liora by Gabriela" },
      {
        property: "og:description",
        content:
          "Creative digital materials designed to help your business communicate, promote, and stand out.",
      },
    ],
  }),
  component: DigitalDesignsPage,
});

function DigitalDesignsPage() {
  return (
    <ServicePage
      eyebrow="Service"
      title="Digital Designs"
      subtitle="Creative digital materials designed to help your business communicate, promote, and stand out."
      intro="From promotional flyers to social graphics, each piece is crafted with the same editorial care as a full brand identity."
      included={[
        "Promotional flyers",
        "Digital menus",
        "Social media graphics",
        "QR code designs",
        "Event announcements",
        "Marketing materials",
        "Custom digital assets tailored to your business needs",
      ]}
      startingAt="$75"
      pricingNote="Pricing depends on the type of design, number of assets, revisions, and project requirements."
      ctaLabel="Start Your Project"
    />
  );
}
