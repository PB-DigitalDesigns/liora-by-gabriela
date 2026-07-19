import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/liora/ServicePage";

export const Route = createFileRoute("/services/support")({
  head: () => ({
    meta: [
      { title: "Support — Liora by Gabriela" },
      {
        name: "description",
        content:
          "Ongoing design and website support to keep your business updated, visually consistent, and ready to evolve.",
      },
      { property: "og:title", content: "Support — Liora by Gabriela" },
      {
        property: "og:description",
        content:
          "Ongoing design support to help your business stay updated and visually consistent.",
      },
    ],
  }),
  component: SupportPage,
});

function SupportPage() {
  return (
    <ServicePage
      eyebrow="Service"
      title="Support"
      subtitle="Ongoing design support to help your business stay updated and visually consistent."
      intro="As your business grows, your digital presence should grow with it — support keeps everything cohesive, current, and cared for."
      included={[
        "Website updates",
        "Menu changes",
        "Promotional updates",
        "Small design adjustments",
        "Content updates",
        "Maintenance assistance",
        "Continued creative support when your business evolves",
      ]}
      startingAt="$45/hr"
      pricingNote="Support packages can be customized depending on your business needs and the frequency of updates."
      ctaLabel="Contact Liora"
    />
  );
}
