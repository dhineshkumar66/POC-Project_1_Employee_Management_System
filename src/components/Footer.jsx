import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              EMS
            </h2>

            <p className="mt-5 leading-7">
              A modern Employee Management System for managing
              employees, attendance, departments, payroll,
              and reports.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="#home" className="hover:text-blue-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#features" className="hover:text-blue-400">
                  Features
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-blue-400">
                  About
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Resources
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Terms & Conditions</a>
              </li>

              <li>
                <a href="#">Help Center</a>
              </li>

              <li>
                <a href="#">Support</a>
              </li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-pink-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-blue-500 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-gray-700 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-black transition"
              >
                <FaXTwitter />
              </a>

            </div>

          </div>

        </div>

        <hr className="border-slate-700 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p>
            © 2026 Employee Management System. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Top ↑
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;