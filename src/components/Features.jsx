import {
  FaUsers,
  FaBuilding,
  FaUserCheck,
  FaCalendarAlt,
  FaChartBar,
  FaUserShield,
  FaClipboardList,
  FaHistory,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: FaUsers,
    title: "Employee Management",
    description:
      "Add, edit, delete, search, and manage employee records efficiently.",
  },
  {
    id: 2,
    icon: FaBuilding,
    title: "Department Management",
    description:
      "Create departments, assign managers, and organize employees.",
  },
  {
    id: 3,
    icon: FaUserCheck,
    title: "Attendance",
    description:
      "Track daily attendance and monitor employee presence in real time.",
  },
  {
    id: 4,
    icon: FaCalendarAlt,
    title: "Leave Management",
    description:
      "Employees can apply for leave while managers approve requests.",
  },
  {
    id: 5,
    icon: FaChartBar,
    title: "Reports & Analytics",
    description:
      "Generate employee, attendance, and department reports instantly.",
  },
  {
    id: 6,
    icon: FaUserShield,
    title: "Role-Based Access",
    description:
      "Separate dashboards and permissions for Admin and Employees.",
  },
  {
    id: 7,
    icon: FaClipboardList,
    title: "Payroll Ready",
    description:
      "Store salary details and prepare payroll reports easily.",
  },
  {
    id: 8,
    icon: FaHistory,
    title: "Activity Logs",
    description:
      "Track every important activity performed within the system.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="bg-slate-100 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Our Features
          </h2>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-7">
            Everything you need to manage employees, departments,
            attendance, and reports from a single platform.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.id}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">

                  <Icon
                    size={32}
                    className="text-blue-600 group-hover:text-white transition-colors"
                  />

                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7 text-sm sm:text-base">
                  {feature.description}
                </p>
              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Features;