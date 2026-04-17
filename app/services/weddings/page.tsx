import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WeddingsPageContent } from "@/components/weddings-page-content"

export default function WeddingsPage() {
  return (
    <main className="min-h-screen bg-[#030508]">
      <Header />
      <WeddingsPageContent />
      <Footer />
    </main>
  )
}
