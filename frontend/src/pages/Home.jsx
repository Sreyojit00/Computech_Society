import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";

function Home() {
    const images = [hero1, hero2, hero3, hero4];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
            );
        }, 8000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <section className="relative h-screen overflow-hidden flex items-start justify-center pt-32">

                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt="slider"
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out
              ${index === currentIndex
                                ? "opacity-100 scale-105"
                                : "opacity-0 scale-100"
                            }`}
                    />
                ))}

                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 text-center px-6 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                        Bidhan Park Computech Society
                    </h1>

                    <p className="text-xl md:text-2xl font-semibold text-blue-300 mb-4">
                        Excellence in Computer Education & Skill Development
                    </p>

                    <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                        Registered under the W.B. Government Act, delivering structured,
                        industry-oriented computer education with practical exposure.
                    </p>

                    <div className="flex justify-center gap-4 flex-wrap">
                        <Link
                            to="/courses"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300"
                        >
                            Explore Courses
                        </Link>

                        <Link
                            to="/enquiry"
                            className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300"
                        >
                            Enquire Now
                        </Link>
                    </div>
                </div>

                {/* ===== PROFESSIONAL SCROLL INDICATOR ===== */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">

                    <div className="flex flex-col items-center group cursor-pointer">

                        {/* Smooth Floating Arrow */}
                        <svg
                            className="w-6 h-6 text-white opacity-80 animate-smoothFloat group-hover:opacity-100 transition"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7-7-7" />
                        </svg>

                        <span className="text-xs mt-2 tracking-widest text-gray-300 opacity-70 group-hover:opacity-100 transition">
                            SCROLL
                        </span>
                    </div>

                </div>

            </section>


            {/* ================= STATS SECTION ================= */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">

                    <div className="hover:scale-105 transition">
                        <h3 className="text-4xl font-bold text-blue-600">18+</h3>
                        <p className="mt-2 text-gray-600">Years of Excellence</p>
                    </div>

                    <div className="hover:scale-105 transition">
                        <h3 className="text-4xl font-bold text-blue-600">5000+</h3>
                        <p className="mt-2 text-gray-600">Students Trained</p>
                    </div>

                    <div className="hover:scale-105 transition">
                        <h3 className="text-4xl font-bold text-blue-600">20+</h3>
                        <p className="mt-2 text-gray-600">Certified Courses</p>
                    </div>

                    <div className="hover:scale-105 transition">
                        <h3 className="text-4xl font-bold text-blue-600">100%</h3>
                        <p className="mt-2 text-gray-600">Practical Training</p>
                    </div>

                </div>
            </section>


            {/* ================= BOLD PREMIUM COURSE SECTION ================= */}
            <section className="relative py-28 overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">

                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

                <div className="relative max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-wide">
                        Popular Courses
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">

                        <div className="cursor-pointer backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl hover:-translate-y-4 hover:shadow-blue-500/30 transition duration-500">
                            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl">
                                💻
                            </div>
                            <h3 className="text-xl font-semibold mb-4">
                                Programming
                            </h3>
                            <p className="text-gray-200">
                                C, C++, Java, Python and modern programming languages
                                for academic and professional excellence.
                            </p>
                        </div>

                        <div className="cursor-pointer backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl hover:-translate-y-4 hover:shadow-indigo-500/30 transition duration-500">
                            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-indigo-600 text-white text-2xl">
                                📊
                            </div>
                            <h3 className="text-xl font-semibold mb-4">
                                Office & IT Tools
                            </h3>
                            <p className="text-gray-200">
                                MS Office, Tally, Internet Applications and essential
                                digital skills training.
                            </p>
                        </div>

                        <div className="cursor-pointer backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl hover:-translate-y-4 hover:shadow-purple-500/30 transition duration-500">
                            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-purple-600 text-white text-2xl">
                                🎓
                            </div>
                            <h3 className="text-xl font-semibold mb-4">
                                School Curriculum
                            </h3>
                            <p className="text-gray-200">
                                Structured computer education for CBSE, ICSE and W.B Board students.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* ================= GRADIENT CALL TO ACTION ================= */}
            <section className="relative py-24 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white text-center">

                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Shape Your Future With Technology
                    </h2>

                    <p className="text-lg mb-10 text-blue-100">
                        Join Bidhan Park Computech Society and build strong digital
                        foundations with expert guidance and practical learning.
                    </p>

                    <Link
                        to="/enquiry"
                        className="bg-white text-blue-800 font-semibold px-8 py-3 rounded-lg shadow-xl hover:bg-gray-100 transition duration-300"
                    >
                        Enroll Now
                    </Link>
                </div>

            </section>
        </>
    );
}

export default Home;