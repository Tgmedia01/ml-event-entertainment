import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQPageContent } from "@/components/faq-page-content"

export const metadata = {
  title: "FAQ | ML Event Entertainment",
  description:
    "Frequently asked questions about our wedding DJ services, photo booths, lighting, and event entertainment in Charleston.",
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <FAQPageContent />
      <Footer />
    </main>
  )
}
