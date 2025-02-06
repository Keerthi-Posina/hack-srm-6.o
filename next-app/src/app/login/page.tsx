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
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center bg-muted/50 py-12">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Login to AI LMS</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Log In
              </Button>
            </form>
            <div className="mt-4 text-center text-sm text-muted-foreground">
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-muted py-4">
        <div className="container text-center text-sm text-muted-foreground">
          &copy; 2023 AI LMS. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
