import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-slate-100 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Contact Us
          </h2>

          <p className="text-gray-600 mt-4">
            We'd love to hear from you. Send us a message anytime.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* Contact Form */}

          <div className="bg-white rounded-xl shadow-lg p-8">

            <h3 className="text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full border rounded-lg p-4 outline-none resize-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Contact Information */}

          <div>

            <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">

              <div className="flex gap-5">

                <div className="bg-blue-100 p-4 rounded-full">
                  <FaEnvelope className="text-blue-600 text-xl" />
                </div>

                <div>

                  <h4 className="font-semibold text-lg">
                    Email
                  </h4>

                  <p className="text-gray-600">
                    support@ems.com
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="bg-blue-100 p-4 rounded-full">
                  <FaPhoneAlt className="text-blue-600 text-xl" />
                </div>

                <div>

                  <h4 className="font-semibold text-lg">
                    Phone
                  </h4>

                  <p className="text-gray-600">
                    +91 98765 43210
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="bg-blue-100 p-4 rounded-full">
                  <FaMapMarkerAlt className="text-blue-600 text-xl" />
                </div>

                <div>

                  <h4 className="font-semibold text-lg">
                    Address
                  </h4>

                  <p className="text-gray-600">
                    Chennai, Tamil Nadu, India
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="bg-blue-100 p-4 rounded-full">
                  <FaClock className="text-blue-600 text-xl" />
                </div>

                <div>

                  <h4 className="font-semibold text-lg">
                    Working Hours
                  </h4>

                  <p className="text-gray-600">
                    Monday - Friday
                  </p>

                  <p className="text-gray-600">
                    09:00 AM - 06:00 PM
                  </p>

                </div>

              </div>

            </div>

            {/* Google Map */}

            <div className="mt-8 rounded-xl overflow-hidden shadow-lg">

              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Chennai&output=embed"
                width="100%"
                height="300"
                loading="lazy"
              ></iframe>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;