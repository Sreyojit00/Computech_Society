import { useState } from "react";

function Contact() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <>
      {/* ================= CONTACT + MAP SECTION ================= */}
      <section className="relative py-28 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">

        {/* Background Glow Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

        <div className="relative max-w-6xl mx-auto px-6">

          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h2>
            <p className="text-blue-200 text-lg">
              We welcome students and guardians to visit our institute or reach out for any course-related enquiries.
            </p>
          </div>

          {/* Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* ===== Contact Card ===== */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-3xl shadow-2xl hover:scale-[1.02] transition duration-500">

              <h3 className="text-2xl font-semibold mb-6">
                Institute Address
              </h3>

              <p className="text-blue-100 leading-relaxed mb-6">
                77, Block D, Bidhan Park (Near Jora Mandir) <br />
                Barasat, Kolkata – 700124 <br />
                Near Bidrohi Play Ground, Kalikapur
              </p>

              <div className="space-y-3 text-blue-200">
                <p>
                  📞 <span className="font-medium">Phone:</span> 9051060688 / 8777209508
                </p>

                <p>
                  📚 <span className="font-medium">Class Timings:</span> Monday – Sunday
                </p>

                <p>7:00 AM – 10:00 PM</p>
              </div>
            </div>

            {/* ===== Map Section ===== */}
            <div className="rounded-3xl overflow-hidden shadow-2xl relative">

              {/* Skeleton Loader */}
              {!mapLoaded && (
                <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-gray-300 to-gray-400"></div>
              )}

              {/* Google Map */}
              <iframe
                title="Location"
                src="https://www.google.com/maps?q=Bidrohi+Play+Ground+Kalikapur&output=embed"
                width="100%"
                height="420"
                loading="lazy"
                onLoad={() => setMapLoaded(true)}
                className={`border-0 transition duration-500 ${
                  mapLoaded ? "opacity-100" : "opacity-0 blur-sm"
                }`}
              ></iframe>

            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-28 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white text-center">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Why Choose Our Institute?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl hover:-translate-y-4 transition duration-500">
              <h3 className="text-xl font-semibold mb-4">
                Qualified & Experienced Teachers
              </h3>
              <p className="text-blue-100">
                Dedicated faculty members focused on structured and practical learning.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl hover:-translate-y-4 transition duration-500">
              <h3 className="text-xl font-semibold mb-4">
                Practical Skill Development
              </h3>
              <p className="text-blue-100">
                Hands-on computer training with real-world examples and projects.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl hover:-translate-y-4 transition duration-500">
              <h3 className="text-xl font-semibold mb-4">
                Trusted Educational Environment
              </h3>
              <p className="text-blue-100">
                A disciplined and supportive atmosphere for students of all age groups.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;