"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Upload, Edit, Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col font-inter">
      <header className="sticky top-0 z-50 w-full border-b border-[#5C818A] bg-[#FFFFFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#FFFFFF]/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Edit className="h-6 w-6 text-[#1798C1]" />
              <span className="text-xl font-bold text-[#073742]">FontCraft</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium text-[#073742] hover:text-[#1798C1]">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-[#073742] hover:text-[#1798C1]">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-[#073742] hover:text-[#1798C1]">
              Testimonials
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-[#073742] hover:text-[#1798C1]">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-[#073742] hover:text-[#1798C1]">
              Log in
            </Link>
            <Button asChild className="bg-[#1798C1] text-[#FFFFFF] hover:bg-[#1798C1]/90">
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-[#FFFFFF] to-[#EBFAFE]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#073742]">
                    Transform Your Handwriting Into Digital Fonts
                  </h1>
                  <p className="max-w-[600px] text-[#5A6C71] md:text-xl">
                    Create personalized fonts from your handwriting in minutes. Add a human touch to your digital
                    documents.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-[#1798C1] text-[#FFFFFF] hover:bg-[#1798C1]/90">
                    <Link href="/converter">
                      Create Your Font <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-[#1798C1] text-[#073742]">
                    <Link href="#how-it-works">See How It Works</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative lg:order-last"
              >
                <Image
                  src="https://yashs3324-bk.s3.eu-north-1.amazonaws.com/handwrite_filled_form.jpg"
                  width={550}
                  height={550}
                  alt="Handwriting sample example"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-[#FFFFFF]">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#BDEDFC] px-3 py-1 text-sm text-[#073742]">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#073742]">Everything You Need</h2>
                <p className="max-w-[900px] text-[#5A6C71] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers a complete solution for converting your handwriting to digital fonts and applying
                  them to your documents.
                </p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  icon: <Upload className="h-10 w-10 text-[#1798C1]" />,
                  title: "Easy Upload",
                  description: "Simply upload a sample of your handwriting and our AI does the rest.",
                },
                {
                  icon: <Edit className="h-10 w-10 text-[#1798C1]" />,
                  title: "Real-time Editor",
                  description: "Edit your text with your custom font in our powerful text editor.",
                },
                {
                  icon: <FileText className="h-10 w-10 text-[#1798C1]" />,
                  title: "PDF Processing",
                  description: "Extract text from PDFs and replace with your personalized font.",
                },
                {
                  icon: <Download className="h-10 w-10 text-[#1798C1]" />,
                  title: "Export Options",
                  description: "Download your documents in multiple formats including PDF, DOCX, and more.",
                },
                {
                  icon: <Check className="h-10 w-10 text-[#1798C1]" />,
                  title: "High Quality",
                  description: "Our advanced algorithms ensure your font looks natural and professional.",
                },
                {
                  icon: <ArrowRight className="h-10 w-10 text-[#1798C1]" />,
                  title: "Seamless Integration",
                  description: "Use your custom fonts in any application that supports font files.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center space-y-2 rounded-lg border border-[#5C818A] p-6 shadow-sm bg-[#FAFAFA]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-2 rounded-full bg-[#BDEDFC]">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-[#073742]">{feature.title}</h3>
                  <p className="text-[#5A6C71] text-center">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-[#EBFAFE]">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#BDEDFC] px-3 py-1 text-sm text-[#073742]">Process</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#073742]">How It Works</h2>
                <p className="max-w-[900px] text-[#5A6C71] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Converting your handwriting to a digital font is simple with our easy-to-follow process.
                </p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12">
              {[
                {
                  step: "01",
                  title: "Download Template",
                  description: "Download our handwriting sample template and fill it out with your handwriting.",
                },
                {
                  step: "02",
                  title: "Upload Your Sample",
                  description: "Take a photo or scan your filled template and upload it to our platform.",
                },
                {
                  step: "03",
                  title: "AI Processing",
                  description: "Our advanced AI analyzes your handwriting patterns and creates a custom font.",
                },
                {
                  step: "04",
                  title: "Apply to Documents",
                  description: "Use your custom font in our text editor or apply it to existing PDF documents.",
                },
                {
                  step: "05",
                  title: "Export & Share",
                  description: "Download your font file or export your documents with the new font applied.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 rounded-lg border border-[#5C818A] p-6 shadow-sm bg-[#FFFFFF]"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1798C1] text-[#FFFFFF]">
                    {step.step}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-[#073742]">{step.title}</h3>
                    <p className="text-[#5A6C71]">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button asChild className="bg-[#1798C1] text-[#FFFFFF] hover:bg-[#1798C1]/90">
                <a
                  href="https://yashs3324-bk.s3.eu-north-1.amazonaws.com/handwrite_sample.png"
                  download="handwriting_template.png"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Template
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-[#FFFFFF]">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#BDEDFC] px-3 py-1 text-sm text-[#073742]">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#073742]">What Our Users Say</h2>
                <p className="max-w-[900px] text-[#5A6C71] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what people are saying about FontCraft.
                </p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {[
                {
                  quote:
                    "FontCraft transformed my handwriting into a beautiful digital font that I now use for all my personal correspondence. It's like I handwrote every letter!",
                  author: "Sarah Johnson",
                  role: "Graphic Designer",
                },
                {
                  quote:
                    "As a teacher, I use FontCraft to create custom worksheets with my handwriting. My students love the personal touch, and it makes my digital materials feel more authentic.",
                  author: "Michael Chen",
                  role: "Elementary Teacher",
                },
                {
                  quote:
                    "The PDF conversion feature is a game-changer. I can now take any document and make it look like I wrote it by hand. Perfect for signing documents remotely.",
                  author: "Emma Rodriguez",
                  role: "Business Owner",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col justify-between rounded-lg border border-[#5C818A] p-6 shadow-sm bg-[#FAFAFA]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <p className="mb-4 italic text-[#5A6C71]">"{testimonial.quote}"</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#073742]">{testimonial.author}</p>
                    <p className="text-sm text-[#889BA0]">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#08272E] text-[#FFFFFF]">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Transform Your Handwriting?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-[#889BA0]">
                  Join thousands of users who have already created their custom fonts.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-[#1798C1] text-[#FFFFFF] hover:bg-[#1798C1]/90">
                  <Link href="/converter">
                    Create Your Font <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#889BA0] text-[#FFFFFF] hover:bg-[#FFFFFF]/10"
                >
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-[#5C818A] bg-[#FFFFFF] py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Edit className="h-6 w-6 text-[#1798C1]" />
            <span className="text-lg font-bold text-[#073742]">FontCraft</span>
          </div>
          <p className="text-center text-sm text-[#889BA0] md:text-left">
            &copy; {new Date().getFullYear()} FontCraft. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-[#889BA0] hover:text-[#1798C1]">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-[#889BA0] hover:text-[#1798C1]">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-[#889BA0] hover:text-[#1798C1]">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

