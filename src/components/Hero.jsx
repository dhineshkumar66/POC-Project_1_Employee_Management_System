import heroImage from "../assets/images/hero.jpeg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-12">

        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              Welcome to EMS
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Employee
              <br />
              Management
              <br />
              System
            </h1>

            <p className="mt-6 text-gray-300 text-base sm:text-lg leading-7 max-w-xl mx-auto lg:mx-0">
              Simplify employee management, attendance, departments,
              reports, and organizational workflows through one secure
              and easy-to-use platform.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">

              <Link
                to="#home"
                className="bg-blue-600 hover:bg-blue-700 transition duration-300 px-8 py-3 rounded-lg text-white font-semibold text-center"
              >
                Get Started
              </Link>

              <a
                href="#features"
                className="border border-white hover:bg-white hover:text-slate-900 transition duration-300 px-8 py-3 rounded-lg text-white font-semibold text-center"
              >
                Learn More
              </a>

            </div>

          </div>

          {/* Right */}
          <div className="order-1 lg:order-2 flex justify-center">

            <img
              src={heroImage}
              alt="Employee Management"
              className="w-full max-w-xs sm:max-w-md lg:max-w-xl xl:max-w-2xl h-auto object-contain"
              loading="eager"
              decoding="async"
            />

          </div>

        </div>

        {/* Statistics */}
        {/* <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-600">
              500+
            </h2>
            <p className="mt-2 text-gray-600">
              Companies
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-600">
              25K+
            </h2>
            <p className="mt-2 text-gray-600">
              Employees
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-600">
              99%
            </h2>
            <p className="mt-2 text-gray-600">
              Satisfaction
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-600">
              24/7
            </h2>
            <p className="mt-2 text-gray-600">
              Support
            </p>
          </div>

        </div> */}

      </div>
    </section>
  );
}

export default Hero;