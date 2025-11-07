import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation - Catalyst AI",
  description: "Schedule a free 15-minute discovery call to discuss your AI needs and how we can help transform your business.",
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

