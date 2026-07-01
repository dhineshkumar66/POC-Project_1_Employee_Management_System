import heroImage from "../assets/images/hero.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <div>

            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
              Welcome to EMS
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold text-white mt-6 leading-tight">
              Employee <br />
              Management <br />
              System
            </h1>

            <p className="text-gray-300 mt-6 text-lg leading-8">
              Simplify employee management, attendance, departments,
              reports, and organizational workflows through one secure
              and easy-to-use platform.
            </p>

            <div className="flex gap-5 mt-10">

              <button className="bg-blue-600 hover:bg-blue-700 transition px-7 py-4 rounded-lg text-white font-semibold">
                Get Started
              </button>

              <button className="border border-white hover:bg-white hover:text-slate-900 transition px-7 py-4 rounded-lg text-white font-semibold">
                Learn More
              </button>

            </div>

          </div>

          {/* Right */}

          <div>

            <img
              src={heroImage}
              alt="Employee Management"
              className="w-full animate-bounce"
            />

          </div>

        </div>

      </div>
    </section>
  );
}
<div className="grid md:grid-cols-4 gap-8 mt-20">

    <div className="bg-white rounded-xl p-8 shadow-lg text-center">

        <h2 className="text-4xl font-bold text-blue-600">
            500+
        </h2>

        <p className="mt-2">
            Companies
        </p>

    </div>

    <div className="bg-white rounded-xl p-8 shadow-lg text-center">

        <h2 className="text-4xl font-bold text-blue-600">
            25K+
        </h2>

        <p className="mt-2">
            Employees
        </p>

    </div>

    <div className="bg-white rounded-xl p-8 shadow-lg text-center">

        <h2 className="text-4xl font-bold text-blue-600">
            99%
        </h2>

        <p className="mt-2">
            Satisfaction
        </p>

    </div>

    <div className="bg-white rounded-xl p-8 shadow-lg text-center">

        <h2 className="text-4xl font-bold text-blue-600">
            24/7
        </h2>

        <p className="mt-2">
            Support
        </p>

    </div>

</div>
export default Hero;