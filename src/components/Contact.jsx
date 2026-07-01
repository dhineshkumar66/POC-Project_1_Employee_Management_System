import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const contactInfo = [
  {
    id: 1,
    icon: FaEnvelope,
    title: "Email",
    value: "support@ems.com",
  },
  {
    id: 2,
    icon: FaPhoneAlt,
    title: "Phone",
    value: "+91 98765 43210",
  },
  {
    id: 3,
    icon: FaMapMarkerAlt,
    title: "Address",
    value: "Chennai, Tamil Nadu, India",
  },
  {
    id: 4,
    icon: FaClock,
    title: "Working Hours",
    value: (
      <>
        <p>Monday - Friday</p>
        <p>09:00 AM - 06:00 PM</p>
      </>
    ),
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-100 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Contact Us
          </h2>

          <p className="mt-5 text-gray-600 text-base sm:text-lg">
            We'd love to hear from you. Send us a message anytime.
          </p>

        </div>

        {/* Content */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">

            <h3 className="text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 sm:py-4 text-white font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Contact Information */}
          <div className="space-y-8">

            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">

              <div className="space-y-8">

                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.id}
                      className="flex items-start gap-4"
                    >
                      <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">

                        <Icon className="text-blue-600 text-xl" />

                      </div>

                      <div>

                        <h4 className="text-lg font-semibold text-slate-900">
                          {item.title}
                        </h4>

                        <div className="text-gray-600 mt-1">
                          {item.value}
                        </div>

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl shadow-lg">

              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Chennai&output=embed"
                className="w-full h-72 sm:h-80 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;