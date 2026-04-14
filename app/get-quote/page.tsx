import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GetQuotePageContent } from "@/components/get-quote-page-content"

export const metadata = {
  title: "Get a Quote | ML Event Entertainment",
  description: "Request a custom quote for your wedding or event. Charleston's premier DJ and entertainment company.",
}

export default function GetQuotePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <GetQuotePageContent />
      <Footer />
    </main>
  )
}
