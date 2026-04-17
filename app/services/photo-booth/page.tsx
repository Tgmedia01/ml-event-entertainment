import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PhotoBoothPageContent } from "@/components/photo-booth-page-content"

export default function PhotoBoothPage() {
  return (
    <main className="min-h-screen bg-[#030508]">
      <Header />
      <PhotoBoothPageContent />
      <Footer />
    </main>
  )
}
