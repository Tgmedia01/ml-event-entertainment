import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ClientPortalPageContent } from "@/components/client-portal-page-content"

export const metadata = {
  title: "Client Portal | ML Event Entertainment",
  description: "Access your private event planning portal to manage your timeline, music preferences, and more.",
}

export default function ClientPortalPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ClientPortalPageContent />
      <Footer />
    </main>
  )
}
