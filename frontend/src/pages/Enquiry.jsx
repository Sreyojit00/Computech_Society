import { useState } from "react";
import { toast } from "sonner";

function Enquiry() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("https://computech-society-1.onrender.com/api/enquiry" , {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        // ✅ Modern Success Toast
        toast.success("Enquiry submitted successfully!", {
          description: "We will get in touch with you shortly.",
        });

        // ✅ Reset form
        setForm({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("Failed to submit enquiry", {
          description: data.message,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Server error", {
        description: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 px-6 py-12">
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl p-10 rounded-2xl w-full max-w-lg text-white transition-all duration-500"
      >
        <h2 className="text-4xl font-semibold mb-8 text-center tracking-wide">
          Get In Touch
        </h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Full Name"
          className="w-full mb-5 bg-white/20 border border-white/30 p-4 rounded-lg placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
          onChange={handleChange}
          required
        />

        {/* Phone */}
        <input
          type="text"
          name="phone"
          value={form.phone}
          placeholder="Phone Number"
          className="w-full mb-5 bg-white/20 border border-white/30 p-4 rounded-lg placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
          onChange={handleChange}
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Email (Optional)"
          className="w-full mb-5 bg-white/20 border border-white/30 p-4 rounded-lg placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
          onChange={handleChange}
        />

        {/* Message */}
        <textarea
          name="message"
          value={form.message}
          placeholder="Your Message"
          rows="4"
          className="w-full mb-6 bg-white/20 border border-white/30 p-4 rounded-lg placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
          onChange={handleChange}
          required
        />

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-pink-500 to-red-500 py-3 rounded-lg font-semibold tracking-wide shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Enquiry"}
        </button>
      </form>
    </section>
  );
}

export default Enquiry;