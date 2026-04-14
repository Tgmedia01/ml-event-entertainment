import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutPageContent } from "@/components/about-page-content"

export const metadata = {
  title: "About | ML Event Entertainment",
  description:
    "Learn about Charleston's premier wedding DJ and event production company. The Knot Hall of Fame inductee and multi-year Couples' Choice winner.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutPageContent />
      <Footer />
    </main>
  )
}
