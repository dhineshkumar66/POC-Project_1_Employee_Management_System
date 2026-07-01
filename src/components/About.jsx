import aboutImage from "../assets/images/about.jpeg";
import {
  FaCheckCircle,
  FaBullseye,
  FaEye,
} from "react-icons/fa";

const features = [
  "Employee Records",
  "Attendance Tracking",
  "Leave Management",
  "Payroll Reports",
  "Department Management",
  "Role Based Access",
];

const stats = [
  { id: 1, value: "500+", label: "Companies" },
  { id: 2, value: "25K+", label: "Employees" },
  { id: 3, value: "10+", label: "Years Experience" },
  { id: 4, value: "99%", label: "Customer Satisfaction" },
];

function About() {
  return (
    <section
      id="about"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div className="flex justify-center">

            <img
              src={aboutImage}
              alt="Employee Management System"
              className="w-full max-w-md lg:max-w-xl rounded-2xl shadow-xl object-cover"
              loading="lazy"
              decoding="async"
            />

          </div>

          {/* Content */}
          <div>

            <span className="text-blue-600 font-semibold uppercase tracking-wide">
              About Us
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Smart Employee Management
              <br />
              Made Simple
            </h2>

            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-8">
              Employee Management System (EMS) is a modern HR platform
              designed to simplify workforce management. From employee
              records to attendance tracking, leave management,
              payroll, and reports, everything is managed from one
              centralized dashboard.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-blue-600 text-xl flex-shrink-0" />

                  <span className="text-gray-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

              <div className="bg-blue-50 rounded-2xl p-6 hover:shadow-lg transition">

                <FaBullseye className="text-4xl text-blue-600 mb-4" />

                <h3 className="text-xl font-bold">
                  Mission
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  Simplify employee management through modern
                  technology and automation.
                </p>

              </div>

              <div className="bg-blue-50 rounded-2xl p-6 hover:shadow-lg transition">

                <FaEye className="text-4xl text-blue-600 mb-4" />

                <h3 className="text-xl font-bold">
                  Vision
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  Build an intelligent workforce management
                  platform trusted by organizations worldwide.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-blue-600">
                {stat.value}
              </h2>

              <p className="mt-2 text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default About;