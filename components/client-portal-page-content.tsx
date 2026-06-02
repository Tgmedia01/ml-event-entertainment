"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Shield } from "lucide-react"
import Link from "next/link"

function CRMLoginForm() {
  useEffect(() => {
    // Inject the CRM stylesheet
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://mlevententertainmentclientlogin.com/includes/style-responsivetools-min.css"
    link.id = "crm-login-css"
    document.head.appendChild(link)

    return () => {
      const existing = document.getElementById("crm-login-css")
      if (existing) existing.remove()
    }
  }, [])

  return (
    <div className="crm-login-wrapper">
      <style>{`
        .crm-login-wrapper .djepcode { all: unset; display: block; }
        .crm-login-wrapper .container { max-width: 100% !important; padding: 0 !important; }
        .crm-login-wrapper .panel {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          color: #cbd5e1 !important;
          font-family: inherit !important;
        }
        .crm-login-wrapper .panel-heading { display: none !important; }
        .crm-login-wrapper .panel-body { padding: 0 !important; }
        .crm-login-wrapper .form-group { margin-bottom: 20px; }
        .crm-login-wrapper label {
          display: block;
          font-size: 11px !important;
          text-transform: uppercase !important;
          letter-spacing: 0.15em !important;
          color: rgba(255,255,255,0.4) !important;
          margin-bottom: 8px !important;
          font-family: inherit !important;
        }
        .crm-login-wrapper .form-control,
        .crm-login-wrapper input[type=text],
        .crm-login-wrapper input[type=password] {
          width: 100% !important;
          background: rgba(255,255,255,0.05) !important;
          border: 1px solid rgba(120,157,190,0.25) !important;
          border-radius: 8px !important;
          padding: 12px 16px !important;
          color: #fff !important;
          font-size: 14px !important;
          font-family: inherit !important;
          box-sizing: border-box !important;
          outline: none !important;
          transition: border-color 0.3s !important;
        }
        .crm-login-wrapper .form-control:focus,
        .crm-login-wrapper input[type=text]:focus,
        .crm-login-wrapper input[type=password]:focus {
          border-color: rgba(120,157,190,0.6) !important;
        }
        .crm-login-wrapper .btn-lg.btn-block {
          display: block !important;
          width: 100% !important;
          padding: 14px 24px !important;
          background: #789dbe !important;
          color: #030508 !important;
          border: none !important;
          border-radius: 9999px !important;
          font-size: 11px !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.2em !important;
          cursor: pointer !important;
          margin-top: 8px !important;
          transition: background 0.3s !important;
          font-family: inherit !important;
        }
        .crm-login-wrapper .btn-lg.btn-block:hover { background: #fff !important; }
        .crm-login-wrapper p { text-align: center; margin-top: 16px; }
        .crm-login-wrapper p a {
          color: #789dbe !important;
          font-size: 13px !important;
          text-decoration: none !important;
        }
        .crm-login-wrapper p a:hover { color: #fff !important; }
      `}</style>
      <div
        dangerouslySetInnerHTML={{
          __html: `
<div class="djepcode"><div class="container"><div class="panel"><div class="panel-heading"><h3 class="panel-title">Client Logon</h3></div><div class="panel-body"><form role="form" name="logonform" action="https://mlevententertainmentclientlogin.com/clientlogon.asp?djidnumber=23261" method="post"><div class="form-group"><label for="username">Username</label><input type="text" name="username" class="form-control input-lg" id="username" placeholder="Enter your username"></div><div class="form-group"><label for="password">Password</label><input type="password" name="password" class="form-control input-lg" id="password" placeholder="Enter your password"></div><button type="submit" name="submit" class="btn-lg btn-block btn-default">Login to Portal</button></form></div></div><p align="center"><a href="javascript:void(0)" onclick="window.open('https://mlevententertainmentclientlogin.com/sendpassword.asp?typeoflogon=client','w','width=350,height=150,menubar=no,scrollbars=no,resizable=yes,location=no,directories=no,status=no'); return false;">Forgot your password?</a></p></div></div>
          `,
        }}
      />
    </div>
  )
}

export function ClientPortalPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pb-24 px-6 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#004563]/30 to-transparent" />
        <div className="relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="text-[#789dbe] uppercase tracking-[0.4em] text-xs md:text-sm mb-6">For Booked Clients</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[0.85] mb-6">
              CLIENT
              <br />
              <span className="italic text-[#789dbe] text-glow">PORTAL</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl">
              Your private planning hub for managing your event details, music preferences, and timeline.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Login Form */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 lg:p-12 glow"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#789dbe]/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#789dbe]" />
              </div>
              <div>
                <p className="text-[#789dbe] text-xs uppercase tracking-[0.3em] mb-1">Secure Login</p>
                <p className="text-white/50 text-sm">Already a client? Access your planning portal below.</p>
              </div>
            </div>

            <CRMLoginForm />
          </motion.div>
        </div>
      </section>

      {/* Not Yet Booked CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Not Yet <span className="italic text-[#789dbe]">Booked?</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Ready to start planning your unforgettable celebration? Let&apos;s talk about your vision.
            </p>
            <Link
              href="/get-quote"
              className="inline-block px-12 py-5 bg-[#789dbe] text-[#030508] text-sm uppercase tracking-[0.2em] font-medium rounded-full hover:bg-white transition-all duration-500 hover:shadow-[0_0_40px_rgba(120,157,190,0.5)]"
            >
              Get a Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
