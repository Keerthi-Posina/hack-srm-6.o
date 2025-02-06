import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="py-4 px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          AI LMS
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#about" className="text-foreground hover:text-primary">
            About
          </Link>
          <Link href="#features" className="text-foreground hover:text-primary">
            Features
          </Link>
          <Link href="#contact" className="text-foreground hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/book-demo">
            <Button>Book a Demo</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
