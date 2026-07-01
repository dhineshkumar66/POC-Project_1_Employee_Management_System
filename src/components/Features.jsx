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
    icon: <FaUsers size={35} className="text-blue-600" />,
    title: "Employee Management",
    description:
      "Add, edit, delete, search, and manage employee records efficiently.",
  },
  {
    icon: <FaBuilding size={35} className="text-blue-600" />,
    title: "Department Management",
    description:
      "Create departments, assign managers, and organize employees.",
  },
  {
    icon: <FaUserCheck size={35} className="text-blue-600" />,
    title: "Attendance",
    description:
      "Track daily attendance and monitor employee presence in real time.",
  },
  {
    icon: <FaCalendarAlt size={35} className="text-blue-600" />,
    title: "Leave Management",
    description:
      "Employees can apply for leave while managers approve requests.",
  },
  {
    icon: <FaChartBar size={35} className="text-blue-600" />,
    title: "Reports & Analytics",
    description:
      "Generate employee, attendance, and department reports instantly.",
  },
  {
    icon: <FaUserShield size={35} className="text-blue-600" />,
    title: "Role-Based Access",
    description:
      "Separate dashboards and permissions for Admin and Employees.",
  },
  {
    icon: <FaClipboardList size={35} className="text-blue-600" />,
    title: "Payroll Ready",
    description:
      "Store salary details and prepare payroll reports easily.",
  },
  {
    icon: <FaHistory size={35} className="text-blue-600" />,
    title: "Activity Logs",
    description:
      "Track every important activity performed within the system.",
  },
];

function Features() {
  return (
    <section id="features" className="bg-slate-100 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Our Features
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage employees, departments,
            attendance, and reports from a single platform.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 hover:-translate-y-2"
            >

              <div className="mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;