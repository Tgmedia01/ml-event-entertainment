import { Header } from "@/components/header"
import { CorporatePageContent } from "@/components/corporate-page-content"
import { Footer } from "@/components/footer"

export default function CorporatePage() {
  return (
    <main className="min-h-screen bg-[#030508]">
      <Header />
      <CorporatePageContent />
      <Footer />
    </main>
  )
}
