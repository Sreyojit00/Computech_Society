import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="bg-blue-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src={logo}
              alt="Bidhan Park Computech Society Logo"
              className="w-16 h-16 object-cover scale-105"
            />
          </div>

          <h1 className="text-lg font-bold tracking-wide">
            Bidhan Park Computech Society
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">

          {/* Home */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `relative transition duration-300 ${
                isActive
                  ? "text-yellow-300"
                  : "text-white hover:text-gray-200"
              }`
            }
          >
            {({ isActive }) => (
              <>
                Home
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-300 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                ></span>
              </>
            )}
          </NavLink>

          

          {/* Courses */}
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `relative transition duration-300 ${
                isActive
                  ? "text-yellow-300"
                  : "text-white hover:text-gray-200"
              }`
            }
          >
            {({ isActive }) => (
              <>
                Courses
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-300 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                ></span>
              </>
            )}
          </NavLink>

          {/* Contact */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative transition duration-300 ${
                isActive
                  ? "text-yellow-300"
                  : "text-white hover:text-gray-200"
              }`
            }
          >
            {({ isActive }) => (
              <>
                Contact
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-300 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                ></span>
              </>
            )}
          </NavLink>

          {/* Enquiry Button */}
          <NavLink
            to="/enquiry"
            className={({ isActive }) =>
              `px-4 py-1.5 rounded-full transition duration-300 ${
                isActive
                  ? "bg-yellow-300 text-blue-900"
                  : "bg-white text-blue-900 hover:bg-gray-200"
              }`
            }
          >
            Enquiry
          </NavLink>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;