import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy & Terms of Service | ML Event Entertainment",
  description:
    "Privacy Policy and Terms of Service for ML Event Entertainment, a wedding and event DJ company based in Charleston, South Carolina.",
}

const privacySections = [
  {
    title: "1. Introduction",
    body: [
      "ML Event Entertainment (\u201cwe\u201d, \u201cus\u201d, or \u201cour\u201d) is a wedding and event entertainment company based in Charleston, South Carolina. We are committed to protecting your privacy and handling your personal information responsibly.",
      "This Privacy Policy explains what information we collect, how we use it, who we share it with, and the choices you have. By using our website or contacting us through our booking and enquiry forms, you agree to the practices described below.",
    ],
  },
  {
    title: "2. Information We Collect",
    body: ["We only collect information that helps us respond to your enquiry and provide our services. This includes:"],
    list: [
      "Your name and the name of your partner or organization",
      "Your email address and phone number",
      "Your event date, venue, and event type",
      "Estimated guest count and the services you are interested in",
      "Any additional details you choose to share in the message field of our forms",
    ],
    after: [
      "We do not knowingly collect sensitive personal information, and we never request payment card details through our website forms.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    body: ["We use the information you provide solely to operate and improve our services. Specifically, we use it to:"],
    list: [
      "Respond to your enquiry and provide a quote",
      "Communicate with you about your event and our services",
      "Plan and coordinate the entertainment for your event",
      "Send booking confirmations, contracts, and planning materials",
      "Improve our website and the experience we offer",
    ],
    after: ["We will never sell your personal information, and we do not use it for unrelated advertising."],
  },
  {
    title: "4. Third-Party Processing & Safeguards",
    body: [
      "To run our business we rely on a small number of trusted third-party service providers, such as email and form delivery services, scheduling tools, and website hosting platforms. These providers only receive the information necessary to perform their function and are required to keep it secure.",
      "We take reasonable administrative and technical measures to protect your information against unauthorized access, disclosure, or loss. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "5. Cookies & Analytics",
    body: [
      "Our website may use cookies and similar technologies to understand how visitors use our site and to improve performance. Cookies are small text files stored on your device.",
      "You can control or disable cookies through your browser settings. Disabling cookies may affect how some parts of the website function. Where required, we will request your consent before placing non-essential cookies.",
    ],
  },
  {
    title: "6. Data Retention",
    body: [
      "We keep your information only for as long as needed to respond to your enquiry, fulfill our services, and meet our legal and business obligations. When information is no longer required, we securely delete or anonymize it.",
    ],
  },
  {
    title: "7. Your Rights & Choices",
    body: [
      "You may request to access, correct, or delete the personal information we hold about you. You can also ask us to stop contacting you at any time. To make a request, simply reach out using the contact details below and we will respond promptly.",
    ],
  },
  {
    title: "8. Children\u2019s Privacy",
    body: [
      "Our services and website are directed to adults planning events. We do not knowingly collect personal information from children under the age of 13. If you believe a child has provided us with information, please contact us and we will delete it.",
    ],
  },
  {
    title: "9. Governing Law & Jurisdiction",
    body: [
      "This Privacy Policy and your use of our website are governed by the laws of the State of South Carolina, without regard to its conflict of law principles. Any disputes arising from this policy will be handled in the state or federal courts located in South Carolina.",
    ],
  },
]

const termsSections = [
  {
    title: "10. Acceptance of Terms",
    body: [
      "By accessing and using this website, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use the website.",
    ],
  },
  {
    title: "11. Intellectual Property",
    body: [
      "All content on this website, including but not limited to images, videos, logos, graphics, layout, and text, is the exclusive property of ML Event Entertainment and is protected by United States copyright and intellectual property laws.",
      "You may not copy, reproduce, distribute, republish, or use any content from this website for commercial purposes without our prior written permission.",
    ],
  },
  {
    title: "12. Enquiries & Bookings",
    body: [
      "Submitting an enquiry or quote request through our website does not constitute a confirmed booking. No date, service, or package is reserved or guaranteed until an official written contract has been signed by both you and ML Event Entertainment, and any required deposit has been received.",
      "Until that point, all dates remain available to other clients on a first come, first served basis.",
    ],
  },
  {
    title: "13. Limitation of Liability",
    body: [
      "We make every effort to keep our website available and accurate. However, ML Event Entertainment is not liable for any technical downtime, interruptions, errors, or unavailability of the website, nor for any loss or damage arising from your use of, or inability to use, the website.",
      "The website is provided on an \u201cas is\u201d and \u201cas available\u201d basis without warranties of any kind, either express or implied.",
    ],
  },
  {
    title: "14. Third-Party Links",
    body: [
      "Our website may contain links to third-party websites or services that we do not own or control. We are not responsible for the content, privacy practices, or availability of these external sites.",
    ],
  },
  {
    title: "15. Changes to These Terms",
    body: [
      "We may update this Privacy Policy and Terms of Service from time to time to reflect changes in our practices or for legal reasons. Any updates will be posted on this page with a revised effective date. Your continued use of the website after changes are posted constitutes acceptance of the revised terms.",
    ],
  },
]

function Section({ section }: { section: { title: string; body?: string[]; list?: string[]; after?: string[] } }) {
  return (
    <div>
      <h2 className="font-serif text-2xl lg:text-3xl text-white mb-5">{section.title}</h2>
      {section.body?.map((paragraph, i) => (
        <p key={i} className="text-white/60 leading-relaxed mb-4">
          {paragraph}
        </p>
      ))}
      {section.list && (
        <ul className="space-y-3 my-6">
          {section.list.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#789dbe] mt-2.5 flex-shrink-0" />
              <span className="text-white/60 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}
      {section.after?.map((paragraph, i) => (
        <p key={i} className="text-white/60 leading-relaxed mb-4">
          {paragraph}
        </p>
      ))}
    </div>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#030508]">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end pb-16 lg:pb-20 pt-40 bg-[#030508] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#789dbe]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative z-10 px-6 lg:px-16 w-full">
          <p className="text-[#789dbe] uppercase tracking-[0.4em] text-xs mb-6">Legal</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[0.9]">
            PRIVACY POLICY
            <br />
            <span className="italic text-[#789dbe] text-glow">&amp; TERMS OF SERVICE</span>
          </h1>
          <p className="text-white/40 text-sm mt-8 uppercase tracking-[0.2em]">Effective Date: June 2026</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#789dbe]/20 to-transparent" />
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 bg-[#030508]">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/70 text-lg leading-relaxed mb-16">
            Your trust matters to us. This page explains, in plain language, how ML Event Entertainment handles the
            information you share, and the terms that apply when you use our website and services.
          </p>

          {/* Privacy Policy */}
          <div className="mb-16">
            <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-8">Part One — Privacy Policy</p>
            <div className="space-y-14">
              {privacySections.map((section) => (
                <Section key={section.title} section={section} />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-[0.5px] bg-gradient-to-r from-transparent via-[#789dbe]/20 to-transparent my-16" />

          {/* Terms of Service */}
          <div className="mb-16">
            <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-8">Part Two — Terms of Service</p>
            <div className="space-y-14">
              {termsSections.map((section) => (
                <Section key={section.title} section={section} />
              ))}
            </div>
          </div>

          {/* Contact block */}
          <div className="glass rounded-2xl p-8 lg:p-10">
            <h2 className="font-serif text-2xl lg:text-3xl text-white mb-5">16. Contact Us</h2>
            <p className="text-white/60 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy or our Terms of Service, please get in touch:
            </p>
            <div className="space-y-3">
              <p className="text-white/80">
                <span className="text-[#789dbe]">ML Event Entertainment</span>
              </p>
              <p className="text-white/60">Charleston, South Carolina</p>
              <p className="text-white/60">
                Email:{" "}
                <a
                  href="mailto:mikeylee@mlevententertainment.com"
                  className="text-[#789dbe] hover:text-white transition-colors duration-300"
                >
                  mikeylee@mlevententertainment.com
                </a>
              </p>
              <p className="text-white/60">
                Phone:{" "}
                <a href="tel:4246539365" className="text-[#789dbe] hover:text-white transition-colors duration-300">
                  424.653.9365
                </a>
              </p>
            </div>
          </div>

          {/* Back link */}
          <div className="pt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-4 text-[#789dbe] text-sm uppercase tracking-[0.2em] group"
            >
              <span className="w-12 h-[0.5px] bg-[#789dbe] group-hover:w-20 transition-all duration-500" />
              <span className="group-hover:text-white transition-colors duration-300">Back to Home</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
