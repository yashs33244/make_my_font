import Link from "next/link"
import { Check, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Edit className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">FontCraft</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="/#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-primary">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-primary">
              Log in
            </Link>
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                  Simple, Transparent Pricing
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Choose the plan that's right for you. All plans include a 14-day free trial.
                </p>
              </div>
            </div>
            <div className="grid gap-6 pt-12 lg:grid-cols-3 lg:gap-8">
              {/* Free Plan */}
              <Card className="flex flex-col">
                <CardHeader className="flex flex-col space-y-1.5">
                  <CardTitle className="text-2xl">Free</CardTitle>
                  <CardDescription>For personal projects and experimentation</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>1 custom font creation</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Basic text editor</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Font download (TTF format)</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Limited PDF processing (5 pages max)</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant="outline">
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Pro Plan */}
              <Card className="flex flex-col border-primary">
                <CardHeader className="flex flex-col space-y-1.5 bg-primary text-primary-foreground rounded-t-lg">
                  <div className="text-sm font-medium uppercase">Most Popular</div>
                  <CardTitle className="text-2xl">Pro</CardTitle>
                  <CardDescription className="text-primary-foreground/90">
                    For professionals and small businesses
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$12</span>
                    <span className="text-primary-foreground/90">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-6">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Unlimited font creations</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Advanced text editor with formatting</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Font download (TTF, OTF, WOFF formats)</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Full PDF processing (unlimited pages)</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Font style adjustments</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Priority processing</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/signup">Start Free Trial</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Enterprise Plan */}
              <Card className="flex flex-col">
                <CardHeader className="flex flex-col space-y-1.5">
                  <CardTitle className="text-2xl">Enterprise</CardTitle>
                  <CardDescription>For organizations with advanced needs</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$49</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Everything in Pro plan</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Team collaboration features</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>API access for integrations</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Custom font library management</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Batch processing</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Dedicated support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant="outline">
                    <Link href="/contact-sales">Contact Sales</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-12 space-y-4">
              <h2 className="text-2xl font-bold text-center">Compare Plans</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-4 px-4 text-left">Feature</th>
                      <th className="py-4 px-4 text-center">Free</th>
                      <th className="py-4 px-4 text-center">Pro</th>
                      <th className="py-4 px-4 text-center">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-4">Font Creations</td>
                      <td className="py-4 px-4 text-center">1</td>
                      <td className="py-4 px-4 text-center">Unlimited</td>
                      <td className="py-4 px-4 text-center">Unlimited</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">PDF Processing</td>
                      <td className="py-4 px-4 text-center">5 pages max</td>
                      <td className="py-4 px-4 text-center">Unlimited</td>
                      <td className="py-4 px-4 text-center">Unlimited + Batch</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">Export Formats</td>
                      <td className="py-4 px-4 text-center">TTF</td>
                      <td className="py-4 px-4 text-center">TTF, OTF, WOFF</td>
                      <td className="py-4 px-4 text-center">All formats</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">Font Adjustments</td>
                      <td className="py-4 px-4 text-center">Basic</td>
                      <td className="py-4 px-4 text-center">Advanced</td>
                      <td className="py-4 px-4 text-center">Professional</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">Team Members</td>
                      <td className="py-4 px-4 text-center">1</td>
                      <td className="py-4 px-4 text-center">3</td>
                      <td className="py-4 px-4 text-center">Unlimited</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">API Access</td>
                      <td className="py-4 px-4 text-center">-</td>
                      <td className="py-4 px-4 text-center">-</td>
                      <td className="py-4 px-4 text-center">✓</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">Support</td>
                      <td className="py-4 px-4 text-center">Email</td>
                      <td className="py-4 px-4 text-center">Priority Email</td>
                      <td className="py-4 px-4 text-center">Dedicated</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-12 rounded-lg border bg-muted p-6 md:p-8">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div>
                  <h3 className="text-xl font-bold">Need a custom solution?</h3>
                  <p className="text-muted-foreground">Contact our sales team for custom enterprise solutions.</p>
                </div>
                <Button asChild>
                  <Link href="/contact-sales">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Edit className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">FontCraft</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} FontCraft. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

