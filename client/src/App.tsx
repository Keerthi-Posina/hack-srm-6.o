"use client";
import { Link } from "react-router-dom";
import Button from "./components/Button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">AI LMS</div>
          <div className="space-x-4">
            <Link to="/login">
              <Button>Log In</Button>
            </Link>
            <Button primary>Sign Up</Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Revolutionize Learning with AI (MOCK Estimates)
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empower your educational institution with our cutting-edge
            AI-powered Learning Management System
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button primary>Get Started</Button>
          </motion.div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Tailored Learning Experiences
            </h2>
            <p className="text-gray-600 mb-6">
              Our AI-powered LMS adapts to each student's needs, creating
              personalized learning paths and providing real-time feedback.
            </p>
            <ul className="space-y-2">
              {[
                "Adaptive Learning Paths",
                "AI-Generated Course Content",
                "Automated Assessments",
                "Intelligent Tutoring",
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            className="bg-blue-600 rounded-lg shadow-xl p-6 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4">AI-Powered Insights</h3>
            <p className="mb-4">
              Get real-time analytics and predictions on student performance,
              course effectiveness, and more.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Student Progress",
                "Course Analytics",
                "Engagement Metrics",
                "Predictive Analysis",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-blue-700 rounded p-3 text-center"
                >
                  <div className="text-3xl font-bold mb-1">
                    {Math.floor(Math.random() * 90 + 10)}%
                  </div>
                  <div className="text-sm">{item}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Empower Every Role
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Admin", "Course Coordinator", "Faculty", "Student"].map(
              (role, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">
                    {["👑", "🎓", "👨‍🏫", "👨‍🎓"][index]}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{role}</h3>
                  <p className="text-gray-600 text-sm">
                    Tailored tools and insights for every user role
                  </p>
                </motion.div>
              )
            )}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the AI revolution in education today
          </p>
          <Button primary>Request a Demo</Button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 AI-Powered LMS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
