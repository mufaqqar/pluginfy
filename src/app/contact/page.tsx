import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us & Get a Free Consultation",
  description:
    "Tell Pluginfy about your AI, web or mobile project — we reply personally within 24 hours. Based in Lahore, Pakistan, serving clients worldwide.",
  path: "/contact/",
});

export default function ContactPage() {
  return <ContactClient />;
}
