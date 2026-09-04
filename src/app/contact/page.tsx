import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Pluginfy. Tell us about your AI, web or mobile project — we reply personally within 24 hours. Based in Lahore, Pakistan, serving clients worldwide.",
  alternates: {
    canonical: "/contact/",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
