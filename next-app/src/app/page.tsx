import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Learning Management System
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Revolutionize education with intelligent course creation and
              personalized learning paths
            </p>
            <Button size="lg">Get Started</Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">
              About Our AI LMS
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Intelligent Course Creation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our AI generates curated course handouts with specific
                    learning objectives, saving time for educators.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Personalized Learning Paths</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    AI-driven learning paths adapt to each student's progress,
                    ensuring optimal knowledge retention.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Automated Assessments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Instant feedback on quizzes and automatic grading for code
                    submissions streamline the evaluation process.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>AI-Assisted Communication</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Facilitate seamless interaction between students, faculty,
                    and course coordinators with AI support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What's Different Section */}
        <section id="features" className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What's Different from Moodle?
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    AI-Driven Course Creation
                  </h3>
                  <p className="text-muted-foreground">
                    Unlike Moodle, our system uses AI to generate course content
                    and learning paths automatically.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Adaptive Learning
                  </h3>
                  <p className="text-muted-foreground">
                    Our AI adjusts the learning experience in real-time based on
                    student performance and feedback.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Intelligent Assessments
                  </h3>
                  <p className="text-muted-foreground">
                    Automated grading for code submissions and AI-generated
                    feedback on quizzes enhance the assessment process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-muted/50">
          <div className="container max-w-2xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Have questions? We're here to help!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Textarea placeholder="Your Message" />
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Learning Experience?
            </h2>
            <p className="mb-8 text-lg">
              Book a demo today and see how our AI-powered LMS can revolutionize
              your institution.
            </p>
            <Button size="lg" variant="secondary">
              Book a Demo
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Demo
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center text-muted-foreground">
            <p>&copy; 2023 AI LMS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
