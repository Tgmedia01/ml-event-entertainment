import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactPageContent } from "@/components/contact-page-content"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#030508]">
      <Header />
      <ContactPageContent />
      <Footer />
    </main>
  )
}
