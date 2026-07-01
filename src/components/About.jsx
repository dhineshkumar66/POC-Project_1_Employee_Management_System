import aboutImage from "../assets/images/about.jpeg";
import {
  FaCheckCircle,
  FaBullseye,
  FaEye,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <div>
            <img
              src={aboutImage}
              alt="About EMS"
              className="w-full rounded-xl"
            />
          </div>

          {/* Right Content */}

          <div>

            <span className="text-blue-600 font-semibold uppercase">
              About Us
            </span>

            <h2 className="text-4xl font-bold text-slate-900 mt-4">
              Smart Employee Management
              <br />
              Made Simple
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Employee Management System (EMS) is a modern HR platform
              designed to simplify workforce management. From employee
              records to attendance tracking, leave management, payroll,
              and reports, everything is managed from one centralized
              dashboard.
            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-4 mt-8">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 text-xl" />
                <span>Employee Records</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 text-xl" />
                <span>Attendance Tracking</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 text-xl" />
                <span>Leave Management</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 text-xl" />
                <span>Payroll Reports</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 text-xl" />
                <span>Department Management</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 text-xl" />
                <span>Role Based Access</span>
              </div>

            </div>

            {/* Mission & Vision */}

            <div className="grid md:grid-cols-2 gap-6 mt-10">

              <div className="bg-blue-50 p-6 rounded-xl">

                <FaBullseye className="text-blue-600 text-3xl mb-3" />

                <h3 className="font-bold text-xl">
                  Mission
                </h3>

                <p className="text-gray-600 mt-3">
                  Simplify employee management through modern
                  technology and automation.
                </p>

              </div>

              <div className="bg-blue-50 p-6 rounded-xl">

                <FaEye className="text-blue-600 text-3xl mb-3" />

                <h3 className="font-bold text-xl">
                  Vision
                </h3>

                <p className="text-gray-600 mt-3">
                  Build an intelligent workforce management
                  platform trusted by organizations worldwide.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">

  <div className="text-center">
    <h2 className="text-5xl font-bold text-blue-600">
      500+
    </h2>
    <p className="mt-2 text-gray-600">
      Companies
    </p>
  </div>

  <div className="text-center">
    <h2 className="text-5xl font-bold text-blue-600">
      25K+
    </h2>
    <p className="mt-2 text-gray-600">
      Employees
    </p>
  </div>

  <div className="text-center">
    <h2 className="text-5xl font-bold text-blue-600">
      10+
    </h2>
    <p className="mt-2 text-gray-600">
      Years Experience
    </p>
  </div>

  <div className="text-center">
    <h2 className="text-5xl font-bold text-blue-600">
      99%
    </h2>
    <p className="mt-2 text-gray-600">
      Customer Satisfaction
    </p>
  </div>

</div>
    </section>
  );
}

export default About;