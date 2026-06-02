import { Header } from "@/components/header"
import { PhotoBoothPageContent } from "@/components/photo-booth-page-content"
import { Footer } from "@/components/footer"

export default function PhotoBoothPage() {
  return (
    <main className="min-h-screen bg-[#030508]">
      <Header />
      <PhotoBoothPageContent />
      <Footer />
    </main>
  )
}
