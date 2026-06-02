"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"

function CRMQuestionnaireForm() {
  useEffect(() => {
    // Inject jQuery if not present
    if (!window.jQuery) {
      const jq = document.createElement("script")
      jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"
      jq.type = "text/javascript"
      document.head.appendChild(jq)
    }
    // Inject CRM form script
    const script = document.createElement("script")
    script.src = "https://mlevententertainmentclientlogin.com/check_req_info_form.js"
    script.type = "text/javascript"
    script.language = "javascript"
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="crm-form-wrapper">
      <style>{`
        .crm-form-wrapper form { color: #cbd5e1; }
        .crm-form-wrapper .form-group { margin-bottom: 16px; display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
        .crm-form-wrapper .col-sm-4 { flex: 0 0 100%; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: rgba(255,255,255,0.4); }
        .crm-form-wrapper .col-sm-8 { flex: 0 0 100%; }
        .crm-form-wrapper .form-control,
        .crm-form-wrapper input[type=text],
        .crm-form-wrapper input[type=email],
        .crm-form-wrapper input[type=tel],
        .crm-form-wrapper select,
        .crm-form-wrapper textarea {
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
        }
        .crm-form-wrapper select option { background: #030508; color: #fff; }
        .crm-form-wrapper .monthselect,
        .crm-form-wrapper .dayselect,
        .crm-form-wrapper .yearselect {
          width: 31% !important;
          float: left !important;
          margin: 2px !important;
          display: inline-block !important;
        }
        .crm-form-wrapper textarea { resize: vertical !important; min-height: 100px !important; }
        .crm-form-wrapper .formbutton {
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
        .crm-form-wrapper .formbutton:hover { background: #fff !important; }
        .crm-form-wrapper .cf { clear: both; }
        .crm-form-wrapper p { font-size: 11px !important; color: rgba(255,255,255,0.4) !important; }
        .crm-form-wrapper a { color: #789dbe !important; }
        .crm-form-wrapper label.questiontitle { font-size: 12px; color: rgba(255,255,255,0.5); display: flex; align-items: center; justify-content: center; gap: 8px; flex-wrap: wrap; }
        .crm-form-wrapper input[type=checkbox] { accent-color: #789dbe; width: 14px; height: 14px; }
        .crm-form-wrapper .width90hack { width: 100% !important; }
        .crm-form-wrapper .padding-tb-7 { padding: 0 !important; }
        .crm-form-wrapper .padding-lr-5 { padding: 0 !important; }
        .crm-form-wrapper [style*="border: 1px solid #FFFFFF"] { border: none !important; }
        .crm-form-wrapper [style*="font-size: 10pt"] { display: none !important; }
      `}</style>
      <div
        className="crm-form-wrapper"
        dangerouslySetInnerHTML={{
          __html: `
<form style="margin: 0;" action="https://mlevententertainmentclientlogin.com/request_information.asp" method="post" name="reqinfoform">
<div style="padding: 4px 0; color: #607d96;">
<div class="form-group">
<div class="col-sm-4 col-md-3 padding-tb-7"><div class="padding-lr-5">Event Date*</div></div>
<div class="col-sm-8 col-md-9"><span id="date_select" class="metro-table"><select class="monthselect form-control" name="month"><option value="43">Month</option><option value="1">January (1)</option><option value="2">February (2)</option><option value="3">March (3)</option><option value="4">April (4)</option><option value="5">May (5)</option><option value="6">June (6)</option><option value="7">July (7)</option><option value="8">August (8)</option><option value="9">September (9)</option><option value="10">October (10)</option><option value="11">November (11)</option><option value="12">December (12)</option></select><select class="dayselect form-control" name="day"><option value="43">Day</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select><select class="yearselect form-control" name="year"><option value="43">Year</option><option value="2025">2025</option><option value="2026">2026</option><option value="2027">2027</option><option value="2028">2028</option><option value="2029">2029</option><option value="2030">2030</option><option value="2031">2031</option><option value="2032">2032</option><option value="2033">2033</option><option value="2034">2034</option><option value="2035">2035</option><option value="2036">2036</option><option value="2037">2037</option><option value="2038">2038</option><option value="2039">2039</option><option value="2040">2040</option></select></span></div>
<div class="cf"></div>
</div>
<div class="form-group">
<div class="col-sm-4 col-md-3 padding-tb-7"><div class="padding-lr-5">First Name*</div></div>
<div class="col-sm-8 col-md-9"><input id="first_name" class="form-control width90hack" name="first_name" type="text" /></div>
<div class="cf"></div>
</div>
<div class="form-group">
<div class="col-sm-4 col-md-3 padding-tb-7"><div class="padding-lr-5">Last Name*</div></div>
<div class="col-sm-8 col-md-9"><input id="last_name" class="form-control width90hack" name="last_name" type="text" /></div>
<div class="cf"></div>
</div>
<div class="form-group">
<div class="col-sm-4 col-md-3 padding-tb-7"><div class="padding-lr-5">Email Address*</div></div>
<div class="col-sm-8 col-md-9"><input id="email" class="form-control width90hack" name="email" type="email" /></div>
<div class="cf"></div>
</div>
<div class="form-group">
<div class="col-sm-4 col-md-3 padding-tb-7"><div class="padding-lr-5">Contact Number*</div></div>
<div class="col-sm-8 col-md-9"><input id="telephone" class="form-control width90hack" name="telephone" type="tel" /></div>
<div class="cf"></div>
</div>
<div class="form-group">
<div class="col-sm-4 col-md-3 padding-tb-7"><div class="padding-lr-5">Type Of Event*</div></div>
<div class="col-sm-8 col-md-9"><select class="form-control responsive-form-select" name="event_type"><option value="">Please select...</option><option>Wedding Celebration</option><option>Rehearsal Dinner</option><option>Festival</option><option>Birthday Party</option><option>Corporate Event</option><option>Charity/Fundraiser</option><option>Graduation Celebration</option><option>Night Club / Bar Dance</option><option>Private Party</option><option>Anniversary</option><option>DJ Services</option><option>Other / Not Listed</option></select></div>
<div class="cf"></div>
</div>
<div class="form-group">
<div class="col-sm-4 col-md-3 padding-tb-7"><div class="padding-lr-5">Desired Package*</div></div>
<div class="col-sm-8 col-md-9"><select class="form-control responsive-form-select" name="packageid"><option value="0">Select a package...</option><option value="64214">Cold Spark Machines</option><option value="64203">DJ Services</option><option value="64196">Other/Not Listed</option><option value="64210">Photo Booth Services</option><option value="64205">Rehearsal Dinner</option><option value="64219">Wedding - Full Service Package</option><option value="63927">Wedding - Reception Package</option><option value="64208">Wedding - Ultimate Full Service Package</option><option value="64207">Wedding - Ultimate Reception Package</option></select></div>
<div class="cf"></div>
</div>
<div class="form-group">
<div class="col-sm-4 col-md-3 padding-tb-7"><div class="padding-lr-5">Additional Questions or Info</div></div>
<div class="col-sm-8 col-md-9"><textarea class="form-control width90hack" cols="25" name="additional_information" rows="5"></textarea></div>
<div class="cf"></div>
</div>
<div class="form-group">
<div class="col-sm-4 col-md-3 padding-tb-7"><div class="padding-lr-5">How did you hear about us?</div></div>
<div class="col-sm-8 col-md-9"><input class="form-control width90hack" maxlength="50" name="req_source" type="text" /></div>
<div class="cf"></div>
</div>
<div class="form-group">
<div class="col-sm-4 col-md-3 padding-tb-7"><div class="padding-lr-5">We are considering Photo Booth*<input id="q1_required" name="q1_required" type="hidden" value="TRUE" /></div></div>
<div class="col-sm-8 col-md-9"><select class="form-control width90hack" name="question_1"><option value="">Please select...</option><option>Yes</option><option>No</option><option>Maybe</option></select></div>
<div class="cf"></div>
</div>
<div class="form-group">
<div class="col-sm-4 col-md-3 padding-tb-7"><div class="padding-lr-5">We are considering Venue Uplighting*<input id="q2_required" name="q2_required" type="hidden" value="TRUE" /></div></div>
<div class="col-sm-8 col-md-9"><select class="form-control width90hack" name="question_2"><option value="">Please select...</option><option>Yes</option><option>No</option><option>Maybe</option><option>What Is Venue Uplighting?</option></select></div>
<div class="cf"></div>
</div>
<div class="form-group">
<div class="col-sm-4 col-md-3 padding-tb-7"><div class="padding-lr-5">We are considering Cold Spark Machines*<input id="q3_required" name="q3_required" type="hidden" value="TRUE" /></div></div>
<div class="col-sm-8 col-md-9"><select class="form-control width90hack" name="question_3"><option value="">Please select...</option><option>Yes</option><option>No</option><option>Maybe</option><option>What Are Cold Spark Machines?</option></select></div>
<div class="cf"></div>
</div>
<div class="form-group">
<div class="col-sm-4 col-md-3 padding-tb-7"><div class="padding-lr-5">Venue Name*<input id="q4_required" name="q4_required" type="hidden" value="TRUE" /></div></div>
<div class="col-sm-8 col-md-9"><input class="form-control width90hack" maxlength="250" name="question_4" size="30" type="text" /></div>
<div class="cf"></div>
</div>
<div class="form-group">
<div class="col-sm-4 col-md-3 padding-tb-7"><div class="padding-lr-5">Venue Location (state/city)*<input id="q5_required" name="q5_required" type="hidden" value="TRUE" /></div></div>
<div class="col-sm-8 col-md-9"><input class="form-control width90hack" maxlength="250" name="question_5" size="30" type="text" /></div>
<div class="cf"></div>
</div>
<div class="form-group">
<div class="col-sm-4 col-md-3 padding-tb-7"><div class="padding-lr-5">Are You*<input id="q6_required" name="q6_required" type="hidden" value="TRUE" /></div></div>
<div class="col-sm-8 col-md-9"><select class="form-control width90hack" name="question_6"><option value="">Please select...</option><option>The Bride</option><option>The Groom</option><option>The Partner</option><option>Mother Of The Bride</option><option>Mother Of The Groom</option><option>Father Of The Bride</option><option>Father Of The Groom</option><option>Friend</option><option>Relative</option><option>Event Planner</option><option>Corporate Client</option><option>Private Party Client</option><option>Previous Client</option><option>Venue Owner</option><option>Venue Manager</option><option>Venue Promoter</option><option>Other</option></select></div>
<div class="cf"></div>
</div>
<div class="form-group" style="text-align:center;">
<label class="questiontitle"><input name="privacy_policy" type="checkbox" value="true" /> Please tick this box to agree to our Privacy Policy</label>
<small><a href="https://mlevententertainmentclientlogin.com/privacy.asp?djidnumber=23261&view=websitetools" target="_blank" rel="noopener">(Click To View)</a></small>
</div>
<input name="checkdate" type="hidden" value="" /><input name="djidnumber" type="hidden" value="23261" /><input name="action" type="hidden" value="add_information_request" />
</div>
<p align="center"><input class="formbutton" name="submit" type="submit" value="Submit" /></p>
</form>
          `,
        }}
      />
    </div>
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

      {/* Contact Grid */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-[#030508]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left Info */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true }}>
            <p className="text-white/70 text-xl leading-relaxed mb-12">
              Ready to start planning? We would love to hear from you. Reach out using any of the methods below
              and we will get back to you quickly usually the same day.
            </p>

            <div className="space-y-8 mb-16">
              <a href="tel:4246539365" className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#789dbe]/20 flex items-center justify-center group-hover:bg-[#789dbe]/30 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-[#789dbe]" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-1">Phone</p>
                  <p className="text-white group-hover:text-[#789dbe] transition-colors duration-300">424.653.9365</p>
                </div>
              </a>

              <a href="mailto:mikeylee@mlevententertainment.com" className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#789dbe]/20 flex items-center justify-center group-hover:bg-[#789dbe]/30 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-[#789dbe]" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-1">Email</p>
                  <p className="text-white group-hover:text-[#789dbe] transition-colors duration-300">mikeylee@mlevententertainment.com</p>
                </div>
              </a>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-[#789dbe]/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#789dbe]" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-1">Location</p>
                  <p className="text-white">Charleston, South Carolina</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-[#3f566d] text-xs uppercase tracking-[0.3em] mb-6">Follow Us</p>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: "https://www.instagram.com/mlevententertainment", label: "Instagram" },
                  { icon: Facebook, href: "https://www.facebook.com/mlevententertainment", label: "Facebook" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-12 h-12 rounded-full border border-[#789dbe]/30 flex items-center justify-center text-white/40 hover:text-[#789dbe] hover:border-[#789dbe] transition-all duration-300"
                  >
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — CRM Questionnaire Form */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true }}>
            <div className="glass rounded-3xl p-8 lg:p-10">
              <p className="text-[#789dbe] text-xs uppercase tracking-[0.3em] mb-4">Questionnaire</p>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
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
