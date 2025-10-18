export const metadata = {
  title: "Confidential Applications - Treza Network",
  description: "Deploy pre-configured confidential applications with complete privacy protection. From trading bots to compliance tools, run business-critical applications in hardware-secured enclaves.",
  openGraph: {
    title: "Confidential Applications - Treza Network",
    description: "Deploy pre-configured confidential applications with complete privacy protection. From trading bots to compliance tools, run business-critical applications in hardware-secured enclaves.",
    url: "https://trezalabs.com/applications",
    siteName: "Treza Network",
    images: [
      {
        url: "/images/hero-meta.png",
        width: 1200,
        height: 630,
        alt: "Treza Network - Confidential Applications",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Confidential Applications - Treza Network",
    description: "Deploy pre-configured confidential applications with complete privacy protection. From trading bots to compliance tools, run business-critical applications in hardware-secured enclaves.",
    images: ["/images/hero-meta.png"],
  },
};

import PageIllustration from "@/components/page-illustration";
import ConfidentialApplications from "@/components/confidential-applications";

export default function ApplicationsPage() {
  return (
    <>
      <PageIllustration />
      <ConfidentialApplications />
    </>
  );
}
