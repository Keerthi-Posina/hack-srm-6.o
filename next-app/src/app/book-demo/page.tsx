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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function BookDemoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-muted/50 py-12">
        <div className="container max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Book a Demo</CardTitle>
              <CardDescription>
                Fill out the form below to schedule a personalized demo of our
                AI LMS
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization Name</Label>
                  <Input
                    id="organization"
                    placeholder="University of AI"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Your Role</Label>
                  <Select>
                    <SelectTrigger id="role">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="administrator">
                        Administrator
                      </SelectItem>
                      <SelectItem value="faculty">Faculty</SelectItem>
                      <SelectItem value="it_staff">IT Staff</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="use_case">Primary Use Case</Label>
                  <Select>
                    <SelectTrigger id="use_case">
                      <SelectValue placeholder="Select primary use case" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="higher_education">
                        Higher Education
                      </SelectItem>
                      <SelectItem value="k12">K-12 Education</SelectItem>
                      <SelectItem value="corporate_training">
                        Corporate Training
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your specific needs or questions"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Request Demo
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-muted py-4">
        <div className="container text-center text-sm text-muted-foreground">
          &copy; 2023 AI LMS. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
