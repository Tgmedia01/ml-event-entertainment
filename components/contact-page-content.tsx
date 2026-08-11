"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"

function CRMQuestionnaireForm() {
  useEffect(() => {
    if (typeof window === "undefined") return

    // Inject jQuery if not already present
    if (!(window as any).jQuery) {
      const jq = document.createElement("script")
      jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"
      jq.type = "text/javascript"
      document.head.appendChild(jq)
    }

    // Inject CRM validation script
    const script = document.createElement("script")
    script.src = "https://mlevententertainmentclientlogin.com/check_req_info_form.js?v=e50"
    script.type = "text/javascript"
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <style>{`
        .crm-q-form form { color: #cbd5e1; }
        .crm-q-form .form-group { margin-bottom: 18px; }
        .crm-q-form .col-sm-4 {
          display: block;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.4);
          margin-bottom: 6px;
        }
        .crm-q-form .col-sm-8 { display: block; }
        .crm-q-form .padding-tb-7,
        .crm-q-form .padding-lr-5 { padding: 0 !important; }
        .crm-q-form .form-control,
        .crm-q-form input[type=text],
        .crm-q-form input[type=email],
        .crm-q-form input[type=tel],
        .crm-q-form select,
        .crm-q-form textarea {
          width: 100% !important;
          background: rgba(255,255,255,0.05) !important;
          border: 1px solid rgba(120,157,190,0.25) !important;
          border-radius: 8px !important;
          padding: 10px 14px !important;
          color: #fff !important;
          font-size: 13px !important;
          box-sizing: border-box !important;
          font-family: inherit !important;
          outline: none !important;
          transition: border-color 0.3s;
        }
        .crm-q-form .form-control:focus,
        .crm-q-form input[type=text]:focus,
        .crm-q-form input[type=email]:focus,
        .crm-q-form input[type=tel]:focus,
        .crm-q-form select:focus,
        .crm-q-form textarea:focus {
          border-color: rgba(120,157,190,0.6) !important;
        }
        .crm-q-form select option { background: #030508; color: #fff; }
        .crm-q-form .monthselect,
        .crm-q-form .dayselect,
        .crm-q-form .yearselect {
          width: 31% !important;
          float: left !important;
          margin: 2px !important;
          display: inline-block !important;
        }
        .crm-q-form .cf { clear: both; display: block; }
        .crm-q-form textarea { resize: vertical !important; min-height: 100px !important; }
        .crm-q-form .formbutton {
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
          margin-top: 16px !important;
          transition: background 0.3s !important;
          font-family: inherit !important;
        }
        .crm-q-form .formbutton:hover { background: #fff !important; }
        .crm-q-form p { font-size: 11px !important; color: rgba(255,255,255,0.4) !important; }
        .crm-q-form a { color: #789dbe !important; }
        .crm-q-form small a { color: #789dbe !important; font-size: 11px !important; }
        .crm-q-form label.questiontitle {
          font-size: 12px;
          color: rgba(255,255,255,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .crm-q-form input[type=checkbox] { accent-color: #789dbe; width: 14px; height: 14px; }
        .crm-q-form .width90hack { width: 100% !important; }
        .crm-q-form [style*="border: 1px solid #FFFFFF"] { border: none !important; }
        .crm-q-form [style*="font-size: 10pt"][style*="background-color"] { display: none !important; }
      `}</style>
      <div
        className="crm-q-form"
        dangerouslySetInnerHTML={{
          __html: `
<form style="margin:0;" action="https://mlevententertainmentclientlogin.com/request_information.asp" method="post" name="reqinfoform" onSubmit="return submitIt(this);">
<div style="padding: 4px 0;">

<div class="form-group">
  <div class="col-sm-4 padding-tb-7"><div class="padding-lr-5">Event Date*</div></div>
  <div class="col-sm-8">
    <span id="date_select" class="metro-table">
      <select class="monthselect form-control" name="month"><option value="43">Month</option><option value="1">January (1)</option><option value="2">February (2)</option><option value="3">March (3)</option><option value="4">April (4)</option><option value="5">May (5)</option><option value="6">June (6)</option><option value="7">July (7)</option><option value="8">August (8)</option><option value="9">September (9)</option><option value="10">October (10)</option><option value="11">November (11)</option><option value="12">December (12)</option></select>
      <select class="dayselect form-control" name="day"><option value="43">Day</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select>
      <select class="yearselect form-control" name="year"><option value="43">Year</option><option value="2026" selected>2026</option><option value="2027">2027</option><option value="2028">2028</option><option value="2029">2029</option><option value="2030">2030</option><option value="2031">2031</option><option value="2032">2032</option><option value="2033">2033</option><option value="2034">2034</option><option value="2035">2035</option><option value="2036">2036</option><option value="2037">2037</option><option value="2038">2038</option><option value="2039">2039</option><option value="2040">2040</option><option value="2041">2041</option><option value="2042">2042</option><option value="2043">2043</option><option value="2044">2044</option><option value="2045">2045</option><option value="2046">2046</option><option value="2047">2047</option><option value="2048">2048</option><option value="2049">2049</option><option value="2050">2050</option></select>
    </span>
  </div>
  <div class="cf"></div>
</div>

<div class="form-group">
  <div class="col-sm-4 padding-tb-7"><div class="padding-lr-5">First Name*</div></div>
  <div class="col-sm-8"><input id="first_name" class="form-control width90hack" name="first_name" type="text" /></div>
  <div class="cf"></div>
</div>

<div class="form-group">
  <div class="col-sm-4 padding-tb-7"><div class="padding-lr-5">Last Name*</div></div>
  <div class="col-sm-8"><input id="last_name" class="form-control width90hack" name="last_name" type="text" /></div>
  <div class="cf"></div>
</div>

<div class="form-group">
  <div class="col-sm-4 padding-tb-7"><div class="padding-lr-5">Email Address*</div></div>
  <div class="col-sm-8"><input id="email" class="form-control width90hack" name="email" type="email" /></div>
  <div class="cf"></div>
</div>

<div class="form-group">
  <div class="col-sm-4 padding-tb-7"><div class="padding-lr-5">Contact Number*</div></div>
  <div class="col-sm-8"><input id="telephone" class="form-control width90hack" name="telephone" type="tel" /></div>
  <div class="cf"></div>
</div>

<div class="form-group">
  <div class="col-sm-4 padding-tb-7"><div class="padding-lr-5">Type Of Event*</div></div>
  <div class="col-sm-8">
    <select class="form-control responsive-form-select" name="event_type">
      <option value="">Please select...</option>
      <option>Wedding Celebration</option><option>Rehearsal Dinner</option><option>Festival</option>
      <option>Birthday Party</option><option>Corporate Event</option><option>Charity/Fundraiser</option>
      <option>Graduation Celebration</option><option>Night Club / Bar Dance</option><option>Private Party</option>
      <option>Anniversary</option><option>DJ Services</option><option>Other / Not Listed</option>
    </select>
  </div>
  <div class="cf"></div>
</div>

<div class="form-group">
  <div class="col-sm-4 padding-tb-7"><div class="padding-lr-5">Desired Package*</div></div>
  <div class="col-sm-8">
    <select class="form-control responsive-form-select" name="packageid">
      <option value="0">Select a package...</option>
      <option value="64231">2027/2028 Ultimate Full Service Package</option>
      <option value="64207">2027/2028 Ultimate Reception Package</option>
      <option value="64214">Cold Spark Machines</option>
      <option value="64223">Corporate Package</option>
      <option value="64210">Corporate Photo Booth Services</option>
      <option value="64222">DJ Party Service</option>
      <option value="64203">DJ Services</option>
      <option value="64224">Dj Services</option>
      <option value="64219">Lead DJ Full Service Package</option>
      <option value="64232">Lead DJ Reception Package</option>
      <option value="64227">Mic and Speaker Set Up</option>
      <option value="64226">New Photobooth 4 hrs ($995)</option>
      <option value="64225">New-Photobooth 3 hrs ($795)</option>
      <option value="64221">NYE party package</option>
      <option value="64196">Other/Not Listed</option>
      <option value="64205">Rehearsal Dinner</option>
      <option value="63927">Wedding - Reception Package</option>
      <option value="64208">Wedding - Ultimate Full Service Package</option>
    </select>
  </div>
  <div class="cf"></div>
</div>

<div class="form-group">
  <div class="col-sm-4 padding-tb-7"><div class="padding-lr-5">Additional Questions or Info</div></div>
  <div class="col-sm-8"><textarea class="form-control width90hack" cols="25" name="additional_information" rows="5"></textarea></div>
  <div class="cf"></div>
</div>

<div class="form-group">
  <div class="col-sm-4 padding-tb-7"><div class="padding-lr-5">How did you hear about us?</div></div>
  <div class="col-sm-8"><input class="form-control width90hack" maxlength="50" name="req_source" type="text" /></div>
  <div class="cf"></div>
</div>

<div class="form-group">
  <div class="col-sm-4 padding-tb-7"><div class="padding-lr-5">We are considering Photo Booth*<input id="q1_required" name="q1_required" type="hidden" value="TRUE" /></div></div>
  <div class="col-sm-8"><select class="form-control width90hack" name="question_1"><option value="">Please select...</option><option>Yes</option><option>No</option><option>Maybe</option></select></div>
  <div class="cf"></div>
</div>

<div class="form-group">
  <div class="col-sm-4 padding-tb-7"><div class="padding-lr-5">We are considering Venue Uplighting*<input id="q2_required" name="q2_required" type="hidden" value="TRUE" /></div></div>
  <div class="col-sm-8"><select class="form-control width90hack" name="question_2"><option value="">Please select...</option><option>Yes</option><option>No</option><option>Maybe</option><option>What Is Venue Uplighting?</option></select></div>
  <div class="cf"></div>
</div>

<div class="form-group">
  <div class="col-sm-4 padding-tb-7"><div class="padding-lr-5">We are considering Cold Spark Machines*<input id="q3_required" name="q3_required" type="hidden" value="TRUE" /></div></div>
  <div class="col-sm-8"><select class="form-control width90hack" name="question_3"><option value="">Please select...</option><option>Yes</option><option>No</option><option>Maybe</option><option>What Are Cold Spark Machines?</option></select></div>
  <div class="cf"></div>
</div>

<div class="form-group">
  <div class="col-sm-4 padding-tb-7"><div class="padding-lr-5">We are considering Enhanced Dance Floor Lighting*<input id="q4_required" name="q4_required" type="hidden" value="TRUE" /></div></div>
  <div class="col-sm-8"><select class="form-control width90hack" name="question_4"><option value="">Please select...</option><option>Yes</option><option>No</option><option>Maybe</option><option>What Is Enhanced Dance Floor Lighting?</option></select></div>
  <div class="cf"></div>
</div>

<div class="form-group">
  <div class="col-sm-4 padding-tb-7"><div class="padding-lr-5">Venue Name*<input id="q5_required" name="q5_required" type="hidden" value="TRUE" /></div></div>
  <div class="col-sm-8"><input class="form-control width90hack" maxlength="250" name="question_5" size="30" type="text" /></div>
  <div class="cf"></div>
</div>

<div class="form-group">
  <div class="col-sm-4 padding-tb-7"><div class="padding-lr-5">Venue Location (state/city)*<input id="q6_required" name="q6_required" type="hidden" value="TRUE" /></div></div>
  <div class="col-sm-8"><input class="form-control width90hack" maxlength="250" name="question_6" size="30" type="text" /></div>
  <div class="cf"></div>
</div>

<div class="form-group">
  <div class="col-sm-4 padding-tb-7"><div class="padding-lr-5">Are You*<input id="q7_required" name="q7_required" type="hidden" value="TRUE" /></div></div>
  <div class="col-sm-8">
    <select class="form-control width90hack" name="question_7">
      <option value="">Please select...</option>
      <option>The Bride</option><option>The Groom</option><option>The Partner</option>
      <option>Mother Of The Bride</option><option>Mother Of The Groom</option>
      <option>Father Of The Bride</option><option>Father Of The Groom</option>
      <option>Friend</option><option>Relative</option><option>Event Planner</option>
      <option>Corporate Client</option><option>Private Party Client</option><option>Previous Client</option>
      <option>Venue Owner</option><option>Venue Manager</option><option>Venue Promoter</option><option>Other</option>
    </select>
  </div>
  <div class="cf"></div>
</div>

<div class="form-group" style="text-align:center; margin-top:24px;">
  <label class="questiontitle">
    <input name="privacy_policy" type="checkbox" value="true" />
    Please tick this box to agree to our Privacy Policy
  </label>
  <small><a href="https://mlevententertainmentclientlogin.com/privacy.asp?djidnumber=23261&view=websitetools" target="_blank" rel="noopener">(Click To View)</a></small>
</div>

<input name="checkdate" type="hidden" value="" />
<input name="djidnumber" type="hidden" value="23261" />
<input name="action" type="hidden" value="add_information_request" />
</div>
<p align="center"><input class="formbutton" name="submit" type="submit" value="Submit" /></p>
</form>
`,
        }}
      />
    </>
  )
}

export function ContactPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 lg:pb-24 pt-40 bg-[#030508]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#789dbe]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative z-10 px-6 lg:px-16 w-full">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="text-[#789dbe] uppercase tracking-[0.4em] text-xs mb-6">Get In Touch</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.85]">
              LET&apos;S TALK
              <br />
              <span className="italic text-[#789dbe] text-glow">ABOUT YOUR EVENT</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Row */}
      <section className="py-16 px-6 lg:px-16 bg-[#030508]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 mb-4"
          >
            <a href="tel:4246539365" className="flex items-center gap-4 group glass rounded-2xl p-5 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#789dbe]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#789dbe]/30 transition-colors duration-300">
                <Phone className="w-4 h-4 text-[#789dbe]" />
              </div>
              <div className="whitespace-nowrap">
                <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-0.5">Phone</p>
                <p className="text-white text-sm group-hover:text-[#789dbe] transition-colors duration-300">424.653.9365</p>
              </div>
            </a>

            <a href="mailto:mikeylee@mlevententertainment.com" className="flex items-center gap-4 group glass rounded-2xl p-5 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#789dbe]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#789dbe]/30 transition-colors duration-300">
                <Mail className="w-4 h-4 text-[#789dbe]" />
              </div>
              <div className="whitespace-nowrap">
                <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-0.5">Email</p>
                <p className="text-white text-sm group-hover:text-[#789dbe] transition-colors duration-300">mikeylee@mlevententertainment.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 glass rounded-2xl p-5 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#789dbe]/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-[#789dbe]" />
              </div>
              <div className="whitespace-nowrap">
                <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-0.5">Location</p>
                <p className="text-white text-sm">Charleston, South Carolina</p>
              </div>
            </div>

            <div className="flex items-center gap-4 glass rounded-2xl p-5 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#789dbe]/20 flex items-center justify-center flex-shrink-0">
                <Instagram className="w-4 h-4 text-[#789dbe]" />
              </div>
              <div className="whitespace-nowrap">
                <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-0.5">Follow Us</p>
                <div className="flex gap-3 mt-1">
                  {[
                    { icon: Instagram, href: "https://www.instagram.com/mlevententertainment", label: "Instagram" },
                    { icon: Facebook, href: "https://www.facebook.com/mlevententertainment", label: "Facebook" },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                      className="text-white/40 hover:text-[#789dbe] transition-colors duration-300">
                      <s.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full-width CRM Questionnaire Form */}
      <section className="pb-24 lg:pb-32 px-6 lg:px-16 bg-[#030508]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-3xl p-8 lg:p-12">
              <p className="text-[#789dbe] text-xs uppercase tracking-[0.3em] mb-4">Questionnaire</p>
              <p className="text-white/60 text-base leading-relaxed mb-10">
                Please fill out this short questionnaire to better help us understand what ML Event Entertainment
                services you are interested in and how we can help you throw the best party yet!
              </p>
              <CRMQuestionnaireForm />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
