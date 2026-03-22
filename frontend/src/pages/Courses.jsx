import { useState } from "react";
import { Link } from "react-router-dom";

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    // ===== YOUR ORIGINAL COURSES (UNCHANGED) =====
    {
      name: "CITA",
      duration: "6 Months",
      eligibility: "Minimum Class 8 Pass",
      level: "Certificate Program",
      about:
        "Certificate in Information Technology Application focused on foundational computer literacy and office productivity tools.",
      syllabus: [
        "Computer Fundamentals",
        "Operating System Basics",
        "MS Word, Excel & PowerPoint",
        "Internet & Email",
        "Basic Programming Concepts",
      ],
      career: [
        "School Student Computer Certification",
        "Data Entry Operator",
        "Office Executive",
        "Computer Operator",
        "Government Job Eligibility",
      ],
    },
    {
      name: "DITA",
      duration: "12 Months",
      eligibility: "Minimum Class 10 Pass",
      level: "Diploma Program",
      about:
        "Diploma in Information Technology Application providing practical industry-oriented computer education.",
      syllabus: [
        "Advanced MS Office",
        "Tally with GST",
        "Web Design Fundamentals",
        "Programming Basics",
        "Project Work",
      ],
      career: [
        "Accounts Assistant",
        "IT Support Executive",
        "Back Office Executive",
        "Private & Government Sector Jobs",
      ],
    },

    // ===== ✅ ADDED SUBJECTS (ONLY THIS PART NEW) =====
    {
      name: "Mathematics",
      duration: "Flexible",
      eligibility: "Class III – XII",
      level: "Subject Coaching",
      about: "Strong foundation in Mathematics for school students.",
      syllabus: ["Algebra", "Geometry", "Trigonometry", "Problem Solving"],
      career: ["Academic Excellence", "Competitive Exams"],
    },
    {
      name: "Science",
      duration: "Flexible",
      eligibility: "Class III – XII",
      level: "Subject Coaching",
      about: "Concept-based Science learning for better understanding.",
      syllabus: ["Physics", "Chemistry", "Biology"],
      career: ["School Exams", "Science Stream Preparation"],
    },
    {
      name: "Economics",
      duration: "Flexible",
      eligibility: "Class IX – XII",
      level: "Subject Coaching",
      about: "Understanding economic principles and concepts clearly.",
      syllabus: ["Micro Economics", "Macro Economics"],
      career: ["Commerce Field", "Higher Studies"],
    },
    {
      name: "Psychology",
      duration: "Flexible",
      eligibility: "Class XI – XII",
      level: "Subject Coaching",
      about: "Study of human behavior and mental processes.",
      syllabus: ["Basics", "Applied Psychology"],
      career: ["Higher Studies", "Research"],
    },

    // ===== YOUR REMAINING COURSES (UNCHANGED) =====
    {
      name: "C Programming",
      duration: "3 Months",
      eligibility: "Basic Computer Knowledge",
      level: "Programming Course",
      about:
        "Fundamental programming language essential for logic building and software development foundations.",
      syllabus: [
        "Data Types & Variables",
        "Control Statements",
        "Functions",
        "Arrays & Pointers",
        "File Handling",
      ],
      career: [
        "Programming Foundation",
        "Software Development Base",
        "Engineering Academic Support",
        "Competitive Programming",
      ],
    },
    {
      name: "C++",
      duration: "4 Months",
      eligibility: "Basic Programming Knowledge",
      level: "Programming Course",
      about:
        "Object-Oriented Programming language widely used in system and application development.",
      syllabus: [
        "OOP Concepts",
        "Classes & Objects",
        "Inheritance & Polymorphism",
        "File Handling",
        "STL Basics",
      ],
      career: [
        "Application Developer",
        "System Programming",
        "Game Development",
      ],
    },
    {
      name: "Java",
      duration: "5 Months",
      eligibility: "Basic Programming Knowledge",
      level: "Programming Course",
      about:
        "Industry-standard programming language used in enterprise applications and backend systems.",
      syllabus: [
        "Core Java",
        "OOP Concepts",
        "Exception Handling",
        "Collections Framework",
        "Basic JDBC",
      ],
      career: [
        "Backend Developer",
        "Android Developer",
        "Enterprise Application Developer",
      ],
    },
    {
      name: "Python",
      duration: "4 Months",
      eligibility: "Basic Computer Knowledge",
      level: "Programming Course",
      about:
        "High-demand programming language used in Web Development, AI, Data Science and Automation.",
      syllabus: [
        "Python Basics",
        "Functions & Modules",
        "OOP Concepts",
        "File Handling",
        "Intro to Data Science",
      ],
      career: [
        "Python Developer",
        "Data Analyst",
        "Automation Engineer",
        "AI & ML Roles",
      ],
    },
    {
      name: "HTML",
      duration: "2 Months",
      eligibility: "Basic Computer Knowledge",
      level: "Web Development Course",
      about:
        "Foundation of web development used to design and structure websites.",
      syllabus: [
        "HTML5 Structure",
        "Forms & Tables",
        "Semantic Tags",
        "Website Project",
      ],
      career: ["Frontend Developer", "Web Designer", "Freelancer"],
    },
    {
  name: "School Courses",
  duration: "Academic Session",
  eligibility: "Class III – XII",
  level: "Academic Coaching",
  about:
    "Coaching for CBSE, ICSE and WB Board students from Class III to XII.",
  syllabus: [
    "CBSE Board",
    "ICSE Board",
    "WB Board",
  ],
  career: [
    "Strong Academic Foundation",
    "Board Exam Preparation",
  ],
}
  ];

  return (
    <>
      {/* ================= COURSES SECTION ================= */}
      <section className="min-h-screen py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Courses Offered
          </h2>
      

          <div className="grid md:grid-cols-3 gap-10">
            {courses.map((course) => (
              <div
                key={course.name}
                onClick={() => setSelectedCourse(course)}
                className="group cursor-pointer backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl hover:-translate-y-4 hover:shadow-blue-500/40 transition duration-500 text-center"
              >
                {/* ===== LOGO BADGE ===== */}
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-white/10 border border-white/20 shadow-lg group-hover:scale-110 transition">

                  {/* EXISTING (UNCHANGED) */}
                  {course.name === "CITA" && <span>CITA</span>}
                  {course.name === "DITA" && <span>DITA</span>}
                  {course.name === "C Programming" && <span>C</span>}
                  {course.name === "C++" && <span>C++</span>}
                  {course.name === "Java" && <span>JAVA</span>}
                  {course.name === "Python" && <span>PY</span>}
                  {course.name === "HTML" && <span>HTML</span>}

                  {/* ✅ NEW SUBJECT LOGOS */}
                  {course.name === "Mathematics" && <span>MATH</span>}
                  {course.name === "Science" && <span>SCI</span>}
                  {course.name === "Economics" && <span>ECO</span>}
                  {course.name === "Psychology" && <span>PSY</span>}
                  {course.name === "School Courses" && <span>SC</span>}

                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {course.name}
                </h3>

                <p className="text-sm text-gray-300">
                  {course.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MODAL (UNCHANGED) ===== */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-5xl rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex">

            <div className="w-1/3 bg-blue-800 text-white p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold">{selectedCourse.name}</h2>
                <p className="mt-4 text-sm opacity-90">
                  {selectedCourse.level}
                </p>

                <div className="mt-8 space-y-4 text-sm">
                  <div>
                    <p className="font-semibold">Duration</p>
                    <p>{selectedCourse.duration}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Eligibility</p>
                    <p>{selectedCourse.eligibility}</p>
                  </div>
                </div>
              </div>

              <Link
                to="/enquiry"
                className="mt-10 bg-white text-blue-800 text-center py-2 rounded-md font-semibold hover:bg-gray-200 transition"
              >
                Enroll Now
              </Link>
            </div>

            <div className="w-2/3 p-10 overflow-y-auto relative">
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-6 right-6 text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>

              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    About the Course
                  </h3>
                  <p className="text-gray-600">
                    {selectedCourse.about}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Course Syllabus
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-3 text-gray-600 text-sm">
                    {selectedCourse.syllabus.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Career Opportunities
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-3 text-gray-600 text-sm">
                    {selectedCourse.career.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Courses;