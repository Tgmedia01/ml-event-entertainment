import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AddOnsPageContent } from "@/components/add-ons-page-content"

export default function AddOnsPage() {
  return (
    <main className="min-h-screen bg-[#030508]">
      <Header />
      <AddOnsPageContent />
      <Footer />
    </main>
  )
}
