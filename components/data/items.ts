import { ShoppingCart, PersonStanding, Computer, Hotel, Book, Stethoscope } from "lucide-react";

export const items = [
  {
    title: "Ecommerce",
    url: "/",
    icon: ShoppingCart,
    description: "Modern Ecommerce Platform",
    action: "Get Started",
    content: "Next-generation ecommerce solution that combines speed, ease of use, and cutting-edge AI technologies. Perfect for businesses looking to modernize their online presence.",
    features: [
      "⚡️ Lightning-fast performance",
      "🤖 AI-powered chat support",
      "📊 Advanced analytics",
      "📱 Mobile-first design",
      "✨ Easy integration with AI tools"
    ],
    stats: {
      customers: "1000+",
      transactions: "1M+ monthly",
      avgSpeed: "100ms"
    },
    footer: "Try it free for 7 days - No credit card required"
  },
  {
    title: "Health & Fitness",
    url: "/health-fitness",
    icon: PersonStanding,
    description: "Fitness Industry Expertise",
    action: "Learn More",
    content: "Using our expertise to help people and companies track user habits and allow more effective tracking and monitoring of things relating to diet and exercise. We value fitness industry as everything stems from a healthy body.",
    features: [
      "🎯 Habit tracking",
      "📊 Real-time analytics",
      "📱 Mobile-friendly",
      "📈 Progress visualization",
      "👥 Community support"
    ],
    stats: {
      users: "50K+",
      habits: "1M+ tracked",
      avgEngagement: "90%"
    },
    footer: "Start tracking your journey today"
  },
  {
    title: "Technology",
    url: "/technology",
    icon: Computer,
    description: "Tech Display Solutions",
    action: "Explore",
    content: "Helping companies display their work in ways that are relatable and unique to capture interest and captivate, while making the layout simple enough for users to feel familiar with the website. Encouraging adoption and satisfaction at scale.",
    features: [
      "🎨 Customizable layouts",
      "⚡️ Fast performance",
      "📱 Responsive design",
      "📊 User analytics",
      "🌍 Global reach"
    ],
    stats: {
      companies: "200+",
      projects: "1K+",
      avgLoadTime: "50ms"
    },
    footer: "Transform your tech presence"
  },
  {
    title: "Hospitality & Travel",
    url: "/hospitality-travel",
    icon: Hotel,
    description: "Seamless Booking Solutions",
    action: "Discover",
    content: "Simplifying booking experiences for all companies with a streamlined experience that is transparent with real-time updates. Making travel and hospitality more accessible and efficient.",
    features: [
      "📅 Real-time booking",
      "📊 Availability tracking",
      "📱 Mobile check-in",
      "💰 Secure payments",
      "🌍 Multi-language"
    ],
    stats: {
      properties: "1000+",
      bookings: "10K+ monthly",
      avgRating: "4.8★"
    },
    footer: "Simplify your booking process"
  },
  {
    title: "Education",
    url: "/education",
    icon: Book,
    description: "Education Solutions",
    action: "Learn More",
    content: "Providing innovative educational tools and platforms to enhance learning experiences for students and educators alike.",
    features: [
      "🎓 Online courses",
      "📊 Progress tracking",
      "📱 Mobile learning",
      "👥 Collaborative tools",
      "📚 Resource library"
    ],
    stats: {
      students: "100K+",
      courses: "500+",
      avgEngagement: "95%"
    },
    footer: "Transform your learning journey"
  }
];
