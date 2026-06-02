import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CorporatePageContent } from "@/components/corporate-page-content"

export default function CorporatePage() {
  return (
    <main className="min-h-screen bg-[#030508]">
      <Header />
      <CorporatePageContent />
      <Footer />
    </main>
  )
}
