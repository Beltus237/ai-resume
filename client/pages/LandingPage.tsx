import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  Play,
  Star,
  ArrowRight,
  Check,
  Users,
  Briefcase,
  Award,
  FileText,
  Download,
  Share2,
  Zap,
  Brain,
  Target,
  Clock,
  ChevronDown,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";

// Navigation Component
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <FileText className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ResumeAI
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              Pricing
            </a>
            <a
              href="#templates"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              Templates
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-sm">
              Sign In
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-purple-600 hover:bg-purple-700 text-sm"
            >
              <Link to="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Background Effects Component
function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333ea' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-8">
      <BackgroundEffects />
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="relative z-10">
            <motion.h1
              className="text-6xl font-bold text-gray-900 leading-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Land Your Dream Job Faster with{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AI-Powered Resumes
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Create professional, ATS-friendly resumes in minutes. Our AI
              assistant helps you craft compelling content that gets you noticed
              by recruiters.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Button
                asChild
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-lg px-8"
              >
                <Link to="/dashboard" className="gap-2">
                  Create Resume for Free
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 gap-2"
              >
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Feature Badges */}
            <motion.div
              className="flex flex-wrap gap-3 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <Badge className="bg-green-100 text-green-800 px-3 py-1">
                <Check className="h-3 w-3 mr-1" />
                ATS-Optimized
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 px-3 py-1">
                <Brain className="h-3 w-3 mr-1" />
                AI-Powered
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 px-3 py-1">
                <Zap className="h-3 w-3 mr-1" />
                Instant PDF
              </Badge>
              <Badge className="bg-orange-100 text-orange-800 px-3 py-1">
                <Target className="h-3 w-3 mr-1" />
                Job-Matched
              </Badge>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        10,000+
                      </div>
                      <div className="text-sm text-gray-600">
                        Resumes Created
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        95%
                      </div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        4.9★
                      </div>
                      <div className="text-sm text-gray-600">User Rating</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    "ResumeAI helped me land my dream job at a Fortune 500
                    company!"
                  </p>
                  <div className="flex items-center mt-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-3">
                      Sarah K. and 1,000+ others
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Resume Mockup */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              {/* Main Resume Mockup */}
              <Card className="bg-white shadow-2xl border-0 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-24 relative">
                  <div className="absolute bottom-4 left-6 text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-full mb-2" />
                    <div className="h-3 w-24 bg-white/60 rounded mb-1" />
                    <div className="h-2 w-16 bg-white/40 rounded" />
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  {[1, 2, 3, 4].map((section) => (
                    <div key={section} className="space-y-2">
                      <div className="h-3 w-20 bg-purple-200 rounded" />
                      <div className="h-2 w-full bg-gray-200 rounded" />
                      <div className="h-2 w-4/5 bg-gray-200 rounded" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white p-2 rounded-lg text-xs font-medium shadow-lg">
                ATS Score: 95%
              </div>
              <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white p-2 rounded-lg text-xs font-medium shadow-lg">
                AI Enhanced
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Video Section Component
function VideoSection() {
  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          See ResumeAI in Action
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Watch how our AI creates professional resumes in under 2 minutes
        </motion.p>

        <motion.div
          className="relative aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl overflow-hidden shadow-2xl mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-50 h-16 w-16 rounded-full p-0"
            >
              <Play className="h-8 w-8 ml-1" />
            </Button>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Real-time AI",
            "Professional Templates",
            "ATS-Optimized",
            "Export PDF",
          ].map((tag) => (
            <Badge key={tag} variant="outline" className="px-4 py-2">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

// Features Section Component
function FeaturesSection() {
  const features = [
    {
      title: "AI-Powered Resume Builder",
      description:
        "Our advanced AI analyzes job descriptions and optimizes your resume content for maximum impact.",
      image: "/placeholder.svg",
      points: [
        "Smart content suggestions",
        "Industry-specific optimization",
        "Real-time ATS scoring",
      ],
      icon: Brain,
    },
    {
      title: "Professional Dashboard",
      description:
        "Manage multiple resumes, track applications, and get insights on your job search progress.",
      image: "/placeholder.svg",
      points: [
        "Resume analytics",
        "Application tracking",
        "Performance metrics",
      ],
      icon: Briefcase,
    },
    {
      title: "ATS Optimization",
      description:
        "Ensure your resume passes Applicant Tracking Systems with our built-in optimization tools.",
      image: "/placeholder.svg",
      points: [
        "Keyword optimization",
        "Format compatibility",
        "Score analysis",
      ],
      icon: Target,
    },
    {
      title: "Cover Letter Generator",
      description:
        "Generate personalized cover letters that perfectly complement your resume.",
      image: "/placeholder.svg",
      points: [
        "Job-specific content",
        "Professional templates",
        "AI-powered writing",
      ],
      icon: FileText,
    },
  ];

  return (
    <section className="py-32 px-8" id="features">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for Your Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, optimize, and manage your
            professional resume
          </p>
        </motion.div>

        <div className="space-y-32">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-6">
                    <IconComponent className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-xl text-gray-600 mb-8">
                    {feature.description}
                  </p>
                  <ul className="space-y-4">
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 aspect-square flex items-center justify-center">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Pricing Section Component
function PricingSection() {
  return (
    <section className="py-32 px-8 bg-gray-50" id="pricing">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Simple, Transparent Pricing
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Choose the plan that works best for your career goals
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="relative bg-white border-2 border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Free</h3>
                <div className="text-4xl font-bold text-gray-900 mb-6">
                  $0
                  <span className="text-lg font-normal text-gray-600">
                    /month
                  </span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>1 Resume</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Basic Templates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>PDF Export</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="relative bg-purple-600 text-white border-2 border-purple-600">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white px-4 py-1">
                  Most Popular
                </Badge>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <div className="text-4xl font-bold mb-6">
                  $9
                  <span className="text-lg font-normal opacity-80">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>Unlimited Resumes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>Premium Templates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>AI Content Writing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>ATS Optimization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>Cover Letter Generator</span>
                  </li>
                </ul>
                <Button className="w-full bg-white text-purple-600 hover:bg-gray-100">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section Component
function FAQSection() {
  const faqs = [
    {
      question: "How does the AI resume builder work?",
      answer:
        "Our AI analyzes your information and job requirements to suggest optimal content, formatting, and keywords that will help your resume pass ATS systems and impress recruiters.",
    },
    {
      question: "Are the resumes ATS-friendly?",
      answer:
        "Yes! All our templates are designed to be ATS-compatible. We test our formats against major ATS systems to ensure your resume gets through automated screening.",
    },
    {
      question: "Can I customize the templates?",
      answer:
        "Absolutely! Our templates are fully customizable. You can adjust colors, fonts, sections, and layouts to match your personal style and industry requirements.",
    },
    {
      question: "What file formats can I export?",
      answer:
        "You can export your resume as PDF, Word document, or plain text. We recommend PDF for most applications as it preserves formatting across all devices.",
    },
  ];

  return (
    <section className="py-32 px-8" id="faq">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about ResumeAI
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ResumeAI</span>
            </div>
            <p className="text-gray-400 mb-6">
              Create professional resumes with AI-powered assistance and land
              your dream job faster.
            </p>
            <div className="flex gap-4">
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white">
                  Resume Builder
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cover Letters
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Examples
                </a>
              </li>
            </ul>
          </div>

          {/* Dashboard Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Dashboard</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white">
                  My Resumes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Job Tracker
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Settings
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Get the latest resume tips and job search strategies delivered to
              your inbox.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button className="bg-purple-600 hover:bg-purple-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 ResumeAI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Landing Page Component
export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <VideoSection />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
