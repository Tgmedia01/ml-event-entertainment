import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesPageContent } from "@/components/services-page-content"

export const metadata = {
  title: "Services | ML Event Entertainment",
  description:
    "Premium DJ services, photo booths, uplighting, cold sparks, and more. Charleston's award-winning wedding entertainment company.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServicesPageContent />
      <Footer />
    </main>
  )
}
