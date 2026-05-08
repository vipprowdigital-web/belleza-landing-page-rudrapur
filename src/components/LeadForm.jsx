import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Pin, Phone, Link } from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────────
const courses = [
  { id: 1, name: "Master in Cosmetology", category: "combo" },
  { id: 2, name: "Diploma in Cosmetology", category: "combo" },
  { id: 3, name: "Certificate in Cosmetology", category: "combo" },
  { id: 4, name: "Certificate in Self Grooming", category: "makeup" },
  {
    id: 5,
    name: "Certificate in International Makeup Artistry",
    category: "makeup",
  },
  {
    id: 6,
    name: "Certificate in Professional Makeup Artistry",
    category: "makeup",
  },
  { id: 7, name: "Certificate in Makeup Artistry", category: "makeup" },
  {
    id: 8,
    name: "Certificate in International Nail Artistry",
    category: "nails",
  },
  {
    id: 9,
    name: "Certificate in Professional Nail Artistry",
    category: "nails",
  },
  { id: 10, name: "Certificate in Nail Artistry", category: "nails" },
  { id: 11, name: "Certificate in Permanent Hair Extension", category: "hair" },
  { id: 12, name: "Certificate in Barbering", category: "hair" },
  {
    id: 13,
    name: "Certificate in International Hair Styling",
    category: "hair",
  },
  { id: 14, name: "Certificate in Hair Styling", category: "hair" },
  {
    id: 15,
    name: "Certificate in Professional Hair Craftsmanship",
    category: "hair",
  },
  { id: 16, name: "Certificate in Hair Craftsmanship", category: "hair" },
  { id: 17, name: "Certificate in Eye Lashes Extension", category: "beauty" },
  { id: 18, name: "Certificate in Aesthetician", category: "beauty" },
  { id: 19, name: "Certificate in Beauty Therapist", category: "beauty" },
  { id: 20, name: "Certificate in Skincare", category: "beauty" },
];

const categoryLabel = {
  combo: "✦ Combo & Cosmetology",
  makeup: "✦ Makeup",
  nails: "✦ Nail Artistry",
  hair: "✦ Hair",
  beauty: "✦ Beauty & Skin",
};

const locations = [
  { value: "haldwani", label: "Haldwani" },
  { value: "dehradun", label: "Dehradun" },
  { value: "bajpur", label: "Bajpur" },
  { value: "rudrapur", label: "Rudrapur" },
];

const features = [
  "Expert Guidance",
  "Flexible Batches",
  "Professional Certification",
  "Career Support",
];

const contactInfo = [
  { Icon: Pin, text: "Radrapur, Uttarakhand" },
  { Icon: Phone, text: "+91 90123 60088" },
  { Icon: Link, text: "www.bellezaschool.com" },
];

const initialData = {
  name: "",
  mobile: "",
  course: "",
  location: "",
  message: "",
};

const groupedCourses = Object.entries(categoryLabel).map(([key, label]) => ({
  label,
  options: courses.filter((c) => c.category === key),
}));

// ─── Validation ────────────────────────────────────────────────────────────────
const validate = (data) => {
  const errors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  else if (data.name.trim().length < 2) errors.name = "Name is too short";
  if (!data.mobile.trim()) errors.mobile = "Mobile number is required";
  else if (!/^[+]?[\d\s-]{8,15}$/.test(data.mobile.trim()))
    errors.mobile = "Enter a valid mobile number";
  if (!data.course) errors.course = "Please select a course";
  if (!data.location) errors.location = "Please select a location";
  return errors;
};

// ─── Reusable sub-components ──────────────────────────────────────────────────
const FieldLabel = ({ label, error }) => (
  <label
    className={`text-xs font-semibold tracking-widest uppercase ${
      error ? "text-red-700" : "text-secondary"
    }`}
  >
    {label}
  </label>
);

const ErrorMsg = ({ error }) => (
  <AnimatePresence>
    {error && (
      <motion.span
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        className="text-xs text-red-700"
      >
        {error}
      </motion.span>
    )}
  </AnimatePresence>
);

const inputCls = (hasError) =>
  [
    "w-full px-4 py-3 rounded-xl text-sm text-secondary",
    "bg-light outline-none transition-all duration-200",
    "placeholder:text-secondary",
    hasError
      ? "border border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
      : "border border-secondary focus:border-primary focus:ring-2 focus:ring-amber-100",
  ].join(" ");

// ─── Animation variants ────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

// ─── Component ─────────────────────────────────────────────────────────────────
const LeadForm = () => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData(initialData);
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      // Demo fallback — remove the lines below once your API is live
      setStatus("success");
      setFormData(initialData);
      setErrors({});
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-linear-to-br px-2 py-20 md:px-8"
    >
      {/* Decorative blobs */}
      {/* <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-secondary blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-accent blur-3xl" /> */}
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <p className="mb-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-secondary">
          ✦ Enroll Today ✦
        </p>
        <h2 className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
          Begin Your{" "}
          <span className="text-secondary italic font-serif">
            Beauty Journey
          </span>
        </h2>
        <div className="mx-auto mt-4 h-0.5 w-16 bg-linear-to-r from-transparent via-[#826955] to-transparent" />
      </motion.div>
      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mx-auto flex max-w-5xl flex-col overflow-hidden rounded-3xl shadow-2xl shadow-amber-900/10 md:flex-row"
      >
        {/* ── Left panel ── */}
        <div className="relative flex flex-col justify-between overflow-hidden bg-linear-to-br from-[#826955] to-[#826955] px-5 py-5 md:w-2/5 md:px-10 md:py-14">
          {/* Right border line */}
          <div className="absolute inset-y-0 right-0 w-px bg-linear-to-b from-transparent via-[#fddfbf] to-transparent" />
          {/* Gold glow */}
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-amber-500/10 blur-2xl" />

          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-light">
                Free Counselling
              </p>
              <h3 className="mb-4 font-serif text-3xl font-black leading-tight tracking-tight text-light md:text-4xl">
                Get Admission & Course Details
              </h3>
              <p className="text-md font-light leading-relaxed text-light">
                Fill in your details and our counsellor will contact you with
                course information, batch details, admission process, and career
                guidance.
              </p>
            </motion.div>

            {/* Feature bullets */}
            <motion.ul
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-5 sm:mt-8 space-y-1 sm:space-y-3"
            >
              {features.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-md font-light text-accent">{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-5 sm:mt-10"
          >
            <div className="mb-4 h-px bg-accent" />
            <ul className="space-y-2">
              {contactInfo.map(({ Icon, text }) => (
                <li key={text} className="flex items-center gap-2.5">
                  <span className="text-accent">
                    <Icon size={17} />
                  </span>
                  <span className="text-md font-light text-light">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── Right panel ── */}
        <div className="flex-1 bg-light px-4 py-5 md:px-10 md:py-14 border border-secondary rounded-bl-3xl sm:rounded-bl-none sm:rounded-tr-3xl rounded-br-3xl">
          <AnimatePresence mode="wait">
            {/* Success screen */}
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex min-h-100 flex-col items-center justify-center gap-5 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 14 }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-[#826955] to-[#fddfbf] text-3xl text-primary shadow-lg shadow-amber-400/30"
                >
                  ✓
                </motion.div>
                <h3 className="font-serif text-3xl font-bold text-primary">
                  We'll Be in Touch!
                </h3>
                <p className="max-w-xs text-sm leading-relaxed text-secondary">
                  Our counsellor will contact you shortly with everything you
                  need to start your beauty journey.
                </p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setStatus("idle")}
                  className="mt-2 cursor-pointer rounded-full bg-linear-to-r from-[#826955] to-[#fddfbf] px-8 py-3 text-sm font-semibold tracking-wide text-primary shadow-md shadow-amber-400/25 transition-all hover:shadow-lg"
                >
                  Submit Another Enquiry
                </motion.button>
              </motion.div>
            ) : (
              /* Form */
              <motion.form
                key="form"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5"
              >
                {/* Name + Mobile row */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                >
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <FieldLabel label="Full Name" error={errors.name} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={inputCls(!!errors.name)}
                    />
                    <ErrorMsg error={errors.name} />
                  </div>

                  {/* Mobile */}
                  <div className="flex flex-col gap-1.5">
                    <FieldLabel label="Mobile Number" error={errors.mobile} />
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className={inputCls(!!errors.mobile)}
                    />
                    <ErrorMsg error={errors.mobile} />
                  </div>
                </motion.div>

                {/* Course */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col gap-1.5"
                >
                  <FieldLabel label="Interested Course" error={errors.course} />
                  <div className="relative">
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className={`${inputCls(!!errors.course)} cursor-pointer appearance-none pr-10 ${
                        !formData.course ? "text-secondary" : "text-stone-900"
                      }`}
                    >
                      <option value="" disabled>
                        Select a Course
                      </option>
                      {groupedCourses.map(({ label, options }) => (
                        <optgroup key={label} label={label}>
                          {options.map((c) => (
                            <option key={c.id} value={c.name}>
                              {c.name}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[9px] text-secondary">
                      ▼
                    </span>
                  </div>
                  <ErrorMsg error={errors.course} />
                </motion.div>

                {/* Location */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col gap-1.5"
                >
                  <FieldLabel
                    label="Preferred Location"
                    error={errors.location}
                  />
                  <div className="relative">
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className={`${inputCls(!!errors.location)} cursor-pointer appearance-none pr-10 ${
                        !formData.location ? "text-secondary" : "text-stone-900"
                      }`}
                    >
                      <option value="" disabled>
                        Select Location
                      </option>
                      {locations.map(({ value, label }) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[9px] text-secondary">
                      ▼
                    </span>
                  </div>
                  <ErrorMsg error={errors.location} />
                </motion.div>

                {/* Message */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col gap-1.5"
                >
                  <FieldLabel label="Message (Optional)" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any specific queries or questions?"
                    className={`${inputCls(false)} resize-none leading-relaxed`}
                  />
                </motion.div>

                {/* API error banner */}
                <AnimatePresence>
                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-700"
                    >
                      Something went wrong. Please try again.
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={status !== "loading" ? { scale: 1.02 } : {}}
                    whileTap={status !== "loading" ? { scale: 0.97 } : {}}
                    className={`w-full rounded-xl py-3 text-md font-semibold tracking-wide text-light transition-all duration-200 ${
                      status === "loading"
                        ? "cursor-not-allowed bg-secondary"
                        : "cursor-pointer bg-linear-to-r from-[#826955] to-[#fddfbf] hover:shadow-xl hover:shadow-amber-400/30"
                    }`}
                  >
                    {status === "loading" ? (
                      <span className="flex items-center justify-center gap-2.5">
                        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-amber-200/30 border-t-amber-50" />
                        Sending...
                      </span>
                    ) : (
                      "Get Course Details →"
                    )}
                  </motion.button>
                </motion.div>

                <motion.p
                  variants={itemVariants}
                  className="-mt-1 text-center text-xs leading-relaxed text-secondary"
                >
                  By submitting, you agree to be contacted by a Belleza
                  counsellor. No spam, ever.
                </motion.p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      {/* Minimal global styles only for things Tailwind can't do */}
      <style>{`
        select option  { color: #1c0a00; background: #fffbf5; }
        select optgroup { color: #92400e; font-weight: 600; }
      `}</style>
    </section>
  );
};

export default LeadForm;

// import { motion } from "framer-motion";
// import { useState } from "react";

// const details = [
//   { name: "Address", value: "123 Main St, City, Country" },
//   { name: "Email", value: "belleza@gmail.com" },
//   { name: "Phone", value: "+91 2343433434" },
// ];

// const initialData = {
//   name: "",
//   email: "",
//   phoneNumber: "",
//   location: "",
//   message: "",
// };

// const fields = [
//   { name: "name", label: "Name", type: "text", placeholder: "Your Name" },
//   { name: "email", label: "Email", type: "email", placeholder: "Your Email" },
//   {
//     name: "phoneNumber",
//     label: "Phone Number",
//     type: "text",
//     placeholder: "Your Phone Number",
//   },
//   {
//     name: "location",
//     label: "Location",
//     type: "select",
//     placeholder: "Select Location",
//   },
//   {
//     name: "message",
//     label: "Message",
//     type: "textarea",
//     placeholder: "Your Message",
//   },
// ];

// // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";

// const LeadForm = () => {
//   const [formData, setFormData] = useState(initialData);

//   const handleChange = (e) => {
//     // console.log(e.target.value);
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`htto://localhost:3000/api/contact`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       console.log("response: ", response);
//       console.log("data: ", data);

//       if (response.status === 201) {
//         // toast.success("Message sent successfully!");
//         setFormData(initialData);
//       } else if (response.status === 422) {
//         // toast.error(data.message || "Validation Failed.");
//       } else {
//         // toast.error(
//         //   data.message || "Failed to send message. Please try again.",
//         // );
//       }
//     } catch (e) {
//       console.error("Error while sending message: ", e);
//       // toast.error("Network error. Please try again.");
//     }
//   };
//   return (
//     <section className="w-full bg-light pt-16 px-4 md:px-8" id="contact">
//       <div className="max-w-5xl mx-auto rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
//         <div className="bg-primary px-6 py-4 sm:p-8 md:p-12 md:w-2/5 flex flex-col justify-center">
//           <motion.h2
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="text-3xl sm:text-5xl font-bold mt-5 sm:mt-0 mb-2 sm:mb-4 text-accent tracking-tighter"
//           >
//             Get Course Details
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             className="text-light/80 text-md leading-relaxed text-accent font-semibold tracking-tight"
//           >
//             Fill out the form and our counsellor will contact you with complete
//             course details, batch information, fee details, and admission
//             guidance.
//           </motion.p>

//           <div className="mt-3 sm:mt-8 space-y-2">
//             <div className="flex items-center gap-3 text-accent text-sm font-medium">
//               <span className="w-2 h-2 rounded-full bg-accent"></span>
//               Expert Guidance
//             </div>
//             <div className="flex items-center gap-3 text-accent text-sm font-medium">
//               <span className="w-2 h-2 rounded-full bg-accent"></span>
//               Flexible Batches
//             </div>
//           </div>
//         </div>

//         {/* Right Side: Form */}
//         <div className="px-4 py-3 sm:p-8 md:p-12 md:w-3/5 bg-accent">
//           <form className="space-y-2 sm:space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="flex flex-col gap-1">
//                 <label className="text-primary text-sm font-semibold ml-1">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="John Doe"
//                   className="w-full px-4 py-3 rounded-xl border border-secondary/20 focus:border-accent outline-none transition-all text-primary bg-light"
//                 />
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label className="text-primary text-sm font-semibold ml-1">
//                   Mobile Number
//                 </label>
//                 <input
//                   type="tel"
//                   placeholder="+91 00000 00000"
//                   className="w-full px-4 py-3 rounded-xl border border-secondary/20 focus:border-accent outline-none transition-all text-primary bg-light"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col gap-1">
//               <label className="text-primary text-sm font-semibold ml-1">
//                 Course Interested In
//               </label>
//               <select className="w-full px-4 py-3 rounded-xl border border-secondary/20 focus:border-accent outline-none transition-all text-primary bg-light appearance-none">
//                 <option>Select a Course</option>
//                 <option>Web Development</option>
//                 <option>Data Science</option>
//                 <option>Digital Marketing</option>
//               </select>
//             </div>

//             <div className="flex flex-col gap-1">
//               <label className="text-primary text-sm font-semibold ml-1">
//                 Select Location
//               </label>
//               <select className="w-full px-4 py-3 rounded-xl border border-secondary/20 focus:border-accent outline-none transition-all text-primary bg-light appearance-none">
//                 <option value="" disabled hidden>
//                   Select a course
//                 </option>
//                 <option value="haldwani">Haldwani</option>
//                 <option value="dehradun">Dehradun</option>
//                 <option value="bajpur">Bajpur</option>
//                 <option value="rudrapur">Rudrapur</option>
//               </select>
//             </div>

//             <div className="flex flex-col gap-1">
//               <label className="text-primary text-sm font-semibold ml-1">
//                 Message
//               </label>
//               <textarea
//                 rows="3"
//                 placeholder="Any specific queries?"
//                 className="w-full px-4 py-3 rounded-xl border border-secondary/20 focus:border-accent  outline-none transition-all text-primary bg-light resize-none"
//               ></textarea>
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="w-full bg-primary text-light font-bold py-4 rounded-xl shadow-lg shadow-accent/20 mt-2 transition-colors hover:bg-secondary hover:text-light"
//             >
//               Get Free Counselling
//             </motion.button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LeadForm;
