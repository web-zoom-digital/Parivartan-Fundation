"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Heart,
  HandCoins,
  Shield,
  CheckCircle2,
  ArrowRight,
  Star,
  Phone,
  ChevronDown,
  Leaf,
  Users,
  Droplets,
  Stethoscope,
  Home,
  Siren,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DonorDetailsModal } from "@/components/donate/DonorDetailsModal";
import { useCashfreeCheckout } from "@/hooks/useCashfreeCheckout";
import type { DonorDetails } from "@/lib/donorSchema";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

function AnimatedCounter({
  to,
  label,
  suffix = "+",
}: {
  to: number;
  label: string;
  suffix?: string;
}) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = to / 60;
    const interval = setInterval(() => {
      start += step;
      if (start >= to) {
        setCount(to);
        clearInterval(interval);
      } else setCount(Math.floor(start));
    }, 25);
    return () => clearInterval(interval);
  }, [inView, to]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl lg:text-4xl font-black text-green-800">
        {count.toLocaleString("en-IN")}
        {suffix}
      </p>
      <p className="text-green-900 font-semibold mt-1.5 text-xs sm:text-sm">
        {label}
      </p>
    </div>
  );
}

/* ─── Hero — image-first storytelling ─── */
const heroSlides = [
  {
    src: "/images/food_distribution/food_distribution_1.jpeg",
    alt: "Parivartan Welfare Society volunteers serving cooked food to community members",
    caption: "Daily Ground Work & Seva",
    badge: "Seva in Action",
    title: "Feed Them.",
    highlight: "Support Them.",
    desc: "Every day our team of dedicated volunteers prepares fresh hot meals to serve daily wage workers and families in need across local communities.",
  },
  {
    src: "/images/blanket_distribution/blanket_distribution_1.jpeg",
    alt: "Volunteers distributing warm blankets during severe winter cold",
    caption: "Winter Relief Drives",
    badge: "Warmth on the Streets",
    title: "No One Should",
    highlight: "Freeze in the Cold",
    desc: "Freezing winter nights bring severe hardship to elders and families living outdoors. Our volunteers distribute heavy blankets directly on the ground.",
  },
  {
    src: "/images/plantation/plantation_image_1.jpeg",
    alt: "Tree plantation drive by volunteers",
    caption: "Building a Greener Future",
    badge: "Green Earth Seva",
    title: "Planting Hope",
    highlight: "For Tomorrow",
    desc: "Joining hands with local community members to plant native saplings and ensure continuous watering and protection as they grow.",
  },
  {
    src: "/images/food_distribution/food_distribution_2.jpeg",
    alt: "Volunteers packing and handing out warm food packets",
    caption: "Direct Street Distribution",
    badge: "Your Kindness in Action",
    title: "Every Meal",
    highlight: "Brings a Smile",
    desc: "This is what direct ground support looks like — fresh food packets handed over with warmth, respect, and zero middle-men.",
  },
];

/* ─── Modern NGO-style seva packages (auspicious amounts) ─── */
const sevaPackages = [
  {
    id: "roti",
    title: "Single Meal Support",
    amount: 101,
    impact: "Provides a fresh hot meal for a needy person",
    detail: "A simple yet impactful gift — hot food prepared with care.",
    img: "/images/food_distribution/food_distribution_1.jpeg",
    imgAlt: "PWS volunteer serving hot food",
    imgFocus: "object-[center_20%]",
    icon: "🍛",
  },
  {
    id: "fodder",
    title: "Winter Blanket Support",
    amount: 151,
    impact: "Helps fund warm blankets for families",
    detail: "Supports buying high-quality thick blankets for winter relief.",
    img: "/images/blanket_distribution/blanket_distribution_2.jpeg",
    imgAlt: "Volunteers distributing blankets",
    imgFocus: "object-[center_30%]",
    icon: "🧥",
  },
  {
    id: "day",
    title: "Plant a Sapling",
    amount: 251,
    impact: "Plants and waters a native tree sapling",
    detail: "Covers sapling procurement, fencing, and initial care.",
    img: "/images/plantation/plantation_image_2.jpeg",
    imgAlt: "Volunteer planting a sapling",
    imgFocus: "object-[center_22%]",
    icon: "🌱",
    popular: true,
  },
  {
    id: "medical",
    title: "Family Meal Drive",
    amount: 501,
    impact: "Feeds an entire family for a day",
    detail: "Supports fresh cooked meal distribution for struggling households.",
    img: "/images/food_distribution/food_distribution_4.jpeg",
    imgAlt: "Volunteer handing food packets",
    imgFocus: "object-[center_28%]",
    icon: "🍲",
  },
  {
    id: "monthly",
    title: "Monthly Seva Partner",
    amount: 1101,
    impact: "Supports daily meals and winter drives for a month",
    detail: "Regular monthly backing for our ongoing ground initiatives.",
    img: "/images/blanket_distribution/blanket_distribution_4.jpeg",
    imgAlt: "Volunteer helping elderly with blanket",
    imgFocus: "object-[center_18%]",
    icon: "🤝",
  },
  {
    id: "calf",
    title: "Community Green Drive",
    amount: 2101,
    impact: "Plants 10 saplings with long-term care",
    detail: "Community plantation drive with saplings and water maintenance.",
    img: "/images/plantation/plantation_image_5.jpeg",
    imgAlt: "Community tree plantation",
    imgFocus: "object-[center_35%]",
    icon: "🌳",
  },
  {
    id: "adopt",
    title: "Winter Relief Sponsorship",
    amount: 5101,
    impact: "Provides 25+ warm blankets to street dwellers",
    detail: "Comprehensive winter drive covering multiple localities.",
    img: "/images/blanket_distribution/blanket_distribution_7.jpeg",
    imgAlt: "Blanket relief camp",
    imgFocus: "object-center",
    icon: "❄️",
  },
  {
    id: "rescue",
    title: "Community Feeding Drive",
    amount: 11001,
    impact: "Sponsors a full community feeding drive",
    detail: "Cooked meal distribution drive serving hundreds of local residents.",
    img: "/images/food_distribution/food_distribution_5.jpeg",
    imgAlt: "Large food drive event",
    imgFocus: "object-[center_40%]",
    icon: "🎉",
  },
];

const quickAmounts = [101, 151, 251, 501, 1101, 2101, 5101, 11001];

const whyCards = [
  {
    icon: Heart,
    color: "text-rose-500 bg-rose-50",
    title: "Direct Ground Presence",
    desc: "Our volunteer team is out on the streets directly delivering food, blankets, and planting saplings — no intermediaries.",
  },
  {
    icon: Stethoscope,
    color: "text-[#23361D] bg-[#eef2eb]",
    title: "Verified Need",
    desc: "We identify specific areas where daily wage workers, homeless individuals, and elderly people require immediate assistance.",
  },
  {
    icon: Leaf,
    color: "text-[#C37C24] bg-[#f0f2ef]",
    title: "Consistent Daily Work",
    desc: "Serving meals and providing winter warmth is daily work that requires reliable ground coordination.",
  },
  {
    icon: Siren,
    color: "text-[#C37C24] bg-[#fdf3e3]",
    title: "Accidents Happen on Highways",
    desc: "Overturned cattle trucks leave animals stunned on asphalt. Emergency rescue means rope, transport, and immediate medical attention.",
  },
  {
    icon: Users,
    color: "text-cyan-600 bg-cyan-50",
    title: "Human Touch & Dignity",
    desc: "Every meal and blanket is handed over with personal interaction, respect, and warmth.",
  },
  {
    icon: Home,
    color: "text-green-700 bg-green-50",
    title: "Greener Communities",
    desc: "Our tree plantation drives bring long-term ecological balance and cleaner air to local neighbourhoods.",
  },
];

const careTimeline = [
  {
    step: "01",
    title: "Identifying Priorities",
    desc: "Surveying localities to see where food, blankets, or saplings are needed most urgently.",
    img: "/images/food_distribution/food_distribution_1.jpeg",
  },
  {
    step: "02",
    title: "Organizing Resources",
    desc: "Procuring fresh ingredients, heavy blankets, and healthy saplings from reliable local vendors.",
    img: "/images/blanket_distribution/blanket_distribution_2.jpeg",
  },
  {
    step: "03",
    title: "Volunteer Preparation",
    desc: "Packing food containers, sorting blankets, and organizing plantation equipment.",
    img: "/images/plantation/plantation_image_2.jpeg",
  },
  {
    step: "04",
    title: "Direct Handover",
    desc: "Handing out warm meals and blankets directly to people waiting on the streets.",
    img: "/images/food_distribution/food_distribution_4.jpeg",
  },
  {
    step: "05",
    title: "Sapling Maintenance",
    desc: "Watering planted saplings and putting up protective guards so they thrive.",
    img: "/images/plantation/plantation_image_5.jpeg",
  },
  {
    step: "06",
    title: "Transparent Reporting",
    desc: "Photographing drives and sharing real photos publicly for donor accountability.",
    img: "/images/blanket_distribution/blanket_distribution_7.jpeg",
  },
];

const galleryImages = [
  {
    src: "/images/food_distribution/food_distribution_1.jpeg",
    alt: "Parivartan Welfare Society volunteers distributing hot food",
    caption: "Daily Street Food Seva",
    story: "Volunteers serving hot, freshly cooked meals to daily wage earners.",
  },
  {
    src: "/images/blanket_distribution/blanket_distribution_1.jpeg",
    alt: "Blanket distribution during winter cold",
    caption: "Winter Blanket Drive",
    story: "Providing thick blankets to elderly people and families outdoors.",
  },
  {
    src: "/images/plantation/plantation_image_1.jpeg",
    alt: "Tree plantation drive by volunteers",
    caption: "Tree Plantation Drive",
    story: "Planting shade-giving saplings to improve local environment.",
  },
  {
    src: "/images/food_distribution/food_distribution_2.jpeg",
    alt: "Fresh meal distribution drive",
    caption: "Fresh Meal Distribution",
    story: "Preparing and handing out warm food packets with care.",
  },
  {
    src: "/images/blanket_distribution/blanket_distribution_3.jpeg",
    alt: "Night blanket distribution",
    caption: "Night Winter Relief",
    story: "Night outreach to cover people sleeping in severe cold.",
  },
  {
    src: "/images/plantation/plantation_image_3.jpeg",
    alt: "Planting saplings with community members",
    caption: "Nurturing Young Trees",
    story: "Watering and protecting saplings in community spaces.",
  },
  {
    src: "/images/blanket_distribution/blanket_distribution_7.jpeg",
    alt: "Winter relief camp",
    caption: "Neighbourhood Blanket Camp",
    story: "Organizing local camps to distribute warm winter clothes.",
  },
  {
    src: "/images/food_distribution/food_distribution_5.jpeg",
    alt: "Food distribution drive by PWS volunteers",
    caption: "Community Food Drive",
    story: "Nourishing families and daily workers with fresh meals.",
  },
];

const faqs = [
  {
    q: "Where does my cow donation actually go?",
    a: "Into fodder and greens, clean water, veterinary medicines, rescue transport, and shelter upkeep. When you choose a seva package, we align your gift to that need first — feeding, treatment, calf care, or emergency rescue.",
  },
  {
    q: "Why do amounts end with 1 (₹51, ₹501, ₹1,101)?",
    a: "These are traditional Indian seva amounts many donors prefer for Gau Seva. They are easy to remember, feel intentional, and match how most gaushala programmes list support options. You can still enter any custom amount.",
  },
  {
    q: "Is my donation tax-exempt?",
    a: "Yes. Parivartan Welfare Society provides 80G receipts. After a successful donation you receive an official receipt by email for your tax records.",
  },
  {
    q: "Can I donate monthly?",
    a: "Yes. Choose Monthly in the donation widget. Recurring support helps us plan fodder purchases and keep medical stock ready for rescue days.",
  },
  {
    q: "Can I visit the gaushala?",
    a: "You are welcome to visit. Message us on WhatsApp or call ahead so we can guide you to the shelter and introduce you to the care team.",
  },
  {
    q: "Can I volunteer for cow care?",
    a: "Yes. Weekend volunteers help with feeding, cleaning and gentle handling. Reach out via WhatsApp or the contact page and we will share the next available slot.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Pick a Seva",
    desc: "Select a package or type any amount that feels right for you.",
  },
  {
    num: "02",
    title: "Pay Securely",
    desc: "Complete payment through our encrypted checkout — UPI, cards or net banking.",
  },
  {
    num: "03",
    title: "Get Your Receipt",
    desc: "Receive confirmation and your 80G receipt on email.",
  },
  {
    num: "04",
    title: "Impact Begins",
    desc: "Your gift funds fodder, medicine or rescue for cows already in our care.",
  },
];

export function CowDonationPageClient() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const [lightbox, setLightbox] = React.useState<
    (typeof galleryImages)[0] | null
  >(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [selectedSeva, setSelectedSeva] = React.useState(sevaPackages[2]); // ₹251 popular
  const [customAmount, setCustomAmount] = React.useState("");
  const [frequency, setFrequency] = React.useState<"one-time" | "monthly">(
    "one-time",
  );
  const [showSticky, setShowSticky] = React.useState(false);
  const [donorFormOpen, setDonorFormOpen] = React.useState(false);
  const {
    isProcessing,
    paymentError,
    paymentSuccess,
    clearPaymentError,
    clearPaymentSuccess,
    startCheckout,
  } = useCashfreeCheckout();

  const finalAmount = customAmount
    ? parseInt(customAmount, 10) || 0
    : selectedSeva.amount;
  const activeImpact =
    customAmount && !quickAmounts.includes(finalAmount)
      ? "Supports fodder, medicine or shelter needs at our gaushala"
      : selectedSeva.impact;
  const donationNote = `Cow Care Donation · ${selectedSeva.title}${frequency === "monthly" ? " (Monthly)" : ""}`;

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const selectAmount = (amount: number) => {
    const match = sevaPackages.find((s) => s.amount === amount);
    if (match) setSelectedSeva(match);
    else
      setSelectedSeva({
        ...sevaPackages[2],
        amount,
        title: "Custom Seva",
        impact: "Supports cow care at our gaushala",
        detail: "",
        id: "custom",
        img: sevaPackages[2].img,
        imgAlt: sevaPackages[2].imgAlt,
        icon: "🙏",
      });
    setCustomAmount("");
  };

  const goDonate = () => {
    if (finalAmount <= 0 || isProcessing) return;
    clearPaymentError();
    clearPaymentSuccess();
    setDonorFormOpen(true);
  };

  const donateSevaDirect = (item: (typeof sevaPackages)[number]) => {
    if (isProcessing) return
    setSelectedSeva(item)
    setCustomAmount("")
    clearPaymentError()
    clearPaymentSuccess()
    setDonorFormOpen(true)
  }

  const handleDonorSubmit = async (donor: DonorDetails) => {
    const result = await startCheckout({
      amount: finalAmount,
      returnPath: "/cow-donation",
      orderNote: donationNote,
      donor,
    });
    if (result.ok) setDonorFormOpen(false);
  };

  const slide = heroSlides[currentSlide];

  return (
    <div className="bg-white w-full max-w-full overflow-x-clip">
      {/* ── HERO ── */}
      <section className="min-h-0 lg:min-h-[88vh] flex items-center bg-gradient-to-br from-[#23361D] via-[#1b2916] to-[#2e4626] pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-10 overflow-hidden">
        <div className="container-custom w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left z-10 order-2 lg:order-1">
              <nav className="flex items-center justify-center lg:justify-start gap-2 text-sm text-white/80 mb-4 sm:mb-6">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-white font-semibold">Cow Donation</span>
              </nav>

              <div className="w-full min-h-0 sm:min-h-[200px] flex flex-col items-center lg:items-start">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 border border-[#798576]/40 mb-4 sm:mb-5">
                  <span className="text-base">🐄</span>
                  <span className="text-xs sm:text-sm font-semibold text-[#C37C24]">
                    {slide.badge}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold text-white leading-[1.12] mb-4 sm:mb-5 tracking-tight">
                  {slide.title}
                  <br />
                  <span className="text-[#C37C24]">{slide.highlight}</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-white/85 mb-6 sm:mb-8 max-w-xl leading-relaxed mx-auto lg:mx-0">
                  {slide.desc}
                </p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-8">
                {["80G Tax Receipt", "Secure Payment", "Direct Cow Care"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C37C24]" />
                      {badge}
                    </span>
                  ),
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 w-full sm:w-auto">
                <a href="#donate-widget" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto rounded-full h-14 px-8 text-base font-bold bg-[#798576] hover:bg-[#798576] border-0 shadow-2xl shadow-[#23361D]/40 text-white"
                  >
                    Support Cow Care <HandCoins className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <a
                  href="https://wa.me/918299461699"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="whatsapp"
                    size="lg"
                    className="w-full sm:w-auto rounded-full h-14 px-8 text-base font-bold"
                  >
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative flex flex-col items-center order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border-2 sm:border-4 border-[#23361D]/50 bg-[#1b2916]">
                <AnimatePresence mode="sync">
                  <motion.img
                    key={currentSlide}
                    src={slide.src}
                    alt={slide.alt}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0.4, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                </AnimatePresence>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent p-5">
                  <p className="text-white font-bold text-sm">
                    {slide.caption}
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Previous slide"
                  onClick={() =>
                    setCurrentSlide(
                      (p) => (p - 1 + heroSlides.length) % heroSlides.length,
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/60"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next slide"
                  onClick={() =>
                    setCurrentSlide((p) => (p + 1) % heroSlides.length)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/60"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex gap-2 mt-4">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => setCurrentSlide(idx)}
                    className={`transition-all duration-300 rounded-full ${idx === currentSlide
                        ? "w-8 h-2.5 bg-[#798576]"
                        : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE DONATION WIDGET ── */}
      <section id="donate-widget" className="relative z-10 py-8 sm:py-10">
        <div className="container-custom">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl shadow-green-900/10 border-2 border-[rgba(35,54,29,0.1)] overflow-hidden"
          >
            <div className="grid lg:grid-cols-5">
              {/* Left: original photo + Selected Seva below (no green overlay) */}
              <div className="lg:col-span-2 flex flex-col bg-[#F6F2E8] border-b lg:border-b-0 lg:border-r border-[rgba(35,54,29,0.1)]">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#eef2eb]">
                  <img
                    src={selectedSeva.img}
                    alt={selectedSeva.imgAlt}
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-[#23361D] text-xs font-bold uppercase tracking-wider mb-1">
                    Selected Seva
                  </p>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-green-950 mb-1">
                    {selectedSeva.icon} {selectedSeva.title}
                  </h2>
                  <p className="text-[#798576] text-sm leading-relaxed">
                    {selectedSeva.detail || selectedSeva.impact}
                  </p>
                </div>
              </div>

              {/* Right: controls */}
              <div className="lg:col-span-3 p-4 sm:p-8 lg:p-10">
                <div className="flex items-start justify-between gap-4 mb-5 sm:mb-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-green-950">
                      Choose Your Gau Seva
                    </h2>
                    <p className="text-[#798576] text-xs sm:text-sm mt-1">
                      Pick a package below, or enter any amount. Most donors
                      choose ₹251 or ₹501.
                    </p>
                  </div>
                </div>

                {/* Frequency */}
                <div className="flex gap-2 p-1 bg-[#F6F2E8] rounded-full mb-6 max-w-xs">
                  {(["one-time", "monthly"] as const).map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFrequency(f)}
                      className={`flex-1 py-2.5 rounded-full text-sm font-bold transition-all ${frequency === f
                          ? "bg-green-700 text-white shadow-md"
                          : "text-[#273029] hover:text-[#273029]"
                        }`}
                      style={frequency !== f ? { color: "black" } : {}}
                    >
                      {f === "one-time" ? "One-Time" : "Monthly"}
                    </button>
                  ))}
                </div>

                {/* Quick amount chips */}
                <div className="grid grid-cols-4 gap-1.5 sm:gap-3 mb-5 pt-3">
                  {quickAmounts.map((amount) => {
                    const pkg = sevaPackages.find((s) => s.amount === amount);
                    const active =
                      !customAmount && selectedSeva.amount === amount;
                    return (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => selectAmount(amount)}
                        className={`relative py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl font-black text-[11px] sm:text-base transition-all border-2 ${active
                            ? "bg-green-700 text-white border-green-700 shadow-lg shadow-green-700/25 scale-[1.02]"
                            : "bg-white text-[#273029] border-[#ddd9d0] hover:border-[#798576]"
                          }`}
                        style={!active ? { color: "black" } : {}}
                      >
                        ₹{amount.toLocaleString("en-IN")}
                        {pkg?.popular && (
                          <span className="absolute -top-2.5 inset-x-0 mx-auto w-fit text-[8px] sm:text-[9px] font-bold bg-[#C37C24] text-white px-1 sm:px-1.5 py-0.5 rounded-full whitespace-nowrap">
                            Popular
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Custom + stepper */}
                <div className="flex gap-3 mb-5">
                  <div className="flex items-center gap-1 bg-[#F6F2E8] border-2 border-[#ddd9d0] rounded-2xl px-2">
                    <button
                      type="button"
                      aria-label="Decrease amount"
                      className="w-10 h-10 flex items-center justify-center text-[#798576] hover:text-green-700"
                      onClick={() => {
                        const next = Math.max(51, finalAmount - 50);
                        selectAmount(next);
                      }}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      aria-label="Increase amount"
                      className="w-10 h-10 flex items-center justify-center text-[#798576] hover:text-green-700"
                      onClick={() => selectAmount(finalAmount + 50)}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="relative flex-1">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#798576] font-bold">
                      ₹
                    </span>
                    <input
                      type="number"
                      min={1}
                      placeholder="Other amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        const n = parseInt(e.target.value, 10);
                        if (n > 0) {
                          const match = sevaPackages.find(
                            (s) => s.amount === n,
                          );
                          if (match) setSelectedSeva(match);
                        }
                      }}
                      className="w-full pl-9 pr-4 py-3 rounded-2xl border-2 border-[#ddd9d0] bg-white text-[#273029] font-bold focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
                    />
                  </div>
                </div>

                {/* Impact preview */}
                <div className="bg-[#f0f2ef] border border-[rgba(121,133,118,0.2)] rounded-2xl p-4 mb-6 flex gap-3 items-start">
                  <div className="text-2xl shrink-0">{selectedSeva.icon}</div>
                  <div>
                    <p className="text-[#23361D] font-bold text-sm">
                      Your ₹
                      {finalAmount > 0
                        ? finalAmount.toLocaleString("en-IN")
                        : "—"}
                      {frequency === "monthly" ? " / month" : ""} will help:
                    </p>
                    <p className="text-[#23361D] text-sm mt-0.5">
                      {activeImpact}
                    </p>
                  </div>
                </div>

                {paymentError && (
                  <div className="relative rounded-2xl overflow-hidden mb-4 shadow-lg">
                    {/* Warm saffron gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#fdf3e3] via-[#F6F2E8] to-[#fdf3e3]" />
                    <div className="absolute inset-0 border-2 border-[rgba(195,124,36,0.2)] rounded-2xl" />

                    <div className="relative p-5 sm:p-6">
                      {/* Icon + Title row */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#C37C24] to-[#a3651a] flex items-center justify-center shrink-0 shadow-md">
                          <span className="text-xl">💔</span>
                        </div>
                        <div>
                          <p className="text-[#23361D] font-extrabold text-base leading-tight">
                            Your Donation Was Not Completed
                          </p>
                          <p className="text-[#C37C24] text-xs mt-0.5 font-medium">
                            Payment failed or cancelled
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={clearPaymentError}
                          className="ml-auto text-[#C37C24] hover:text-[#C37C24] text-lg leading-none shrink-0"
                          aria-label="Dismiss"
                        >
                          ✕
                        </button>
                      </div>

                      {/* Hindi emotional message */}
                      <div className="bg-white/70 rounded-xl p-4 mb-4 border border-[rgba(195,124,36,0.1)]">
                        <p className="text-[#273029] text-sm font-medium leading-relaxed mb-2">
                          आप Donation पेज तक आए, ये आपके{" "}
                          <span className="font-extrabold text-[#C37C24]">दयालु दिल</span> को दर्शाता है।
                        </p>
                        <p className="text-[#273029] text-sm leading-relaxed mb-3">
                          शायद दान पूरा नहीं हो पाया, लेकिन देर नहीं हुई है। तो आइए,{" "}
                          <span className="font-bold text-green-700">इस बार बिना रुके</span> मदद का हाथ बढ़ाइए।
                        </p>
                        <p className="text-[#23361D] font-extrabold text-sm border-t border-[rgba(195,124,36,0.1)] pt-3">
                          🙏 इस बार रुकिए मत —{" "}
                          <span className="text-green-700">आपका छोटा सा योगदान भी महत्वपूर्ण है।</span>
                        </p>
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-col sm:flex-row gap-2.5">
                        <Button
                          type="button"
                          onClick={() => { clearPaymentError(); goDonate() }}
                          disabled={finalAmount <= 0}
                          className="flex-1 rounded-full h-12 font-bold bg-gradient-to-r from-[#23361D] to-[#2e4626] hover:from-[#1b2916] hover:to-[#23361D] border-0 text-white shadow-md shadow-[rgba(35,54,29,0.25)]"
                        >
                          🐄 दान करें — ₹{finalAmount > 0 ? finalAmount.toLocaleString("en-IN") : "—"}
                        </Button>
                        <Link href="/account-details" className="flex-1">
                          <Button
                            type="button"
                            variant="outline"
                            className="w-full rounded-full h-12 font-bold border-2 border-[#C37C24] text-[#23361D] hover:bg-[#fdf3e3]"
                          >
                            UPI / Bank Transfer
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}


                {paymentSuccess && (
                  <div className="bg-[#f0f2ef] border border-[rgba(121,133,118,0.3)] rounded-2xl p-4 mb-4">
                    <p className="text-[#23361D] font-bold text-sm mb-1">
                      Thank you
                    </p>
                    <p className="text-[#23361D] text-sm leading-relaxed">
                      {paymentSuccess}
                    </p>
                  </div>
                )}

                <Button
                  type="button"
                  disabled={finalAmount <= 0 || isProcessing}
                  onClick={goDonate}
                  className="w-full rounded-full h-14 font-black text-base bg-green-700 hover:bg-green-800 border-0 shadow-xl shadow-green-700/25 text-white"
                >
                  {isProcessing
                    ? "Processing..."
                    : `Donate ₹${finalAmount > 0 ? finalAmount.toLocaleString("en-IN") : "..."} for Cow Care`}
                  {!isProcessing && (
                    <Heart className="w-5 h-5 ml-2 fill-white" />
                  )}
                </Button>
                <p className="text-center text-[#798576] text-xs mt-3">
                  🔒 Secure checkout · 80G receipt by email · UPI, cards & net
                  banking
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── IMPACT ── */}
      <section className="bg-[#f0f7f0] py-14 border-y border-[rgba(35,54,29,0.1)] mt-8">
        <div className="container-custom">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-green-800 mb-8">
            Our cow care milestones
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { to: 1200, label: "Cows Sheltered", suffix: "+" },
              { to: 85000, label: "Fodder Servings", suffix: "+" },
              { to: 4200, label: "Treatments Given", suffix: "+" },
              { to: 340, label: "Care Volunteers", suffix: "+" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={i * 0.08}
                viewport={{ once: true }}
                className="bg-white border-2 border-green-200 rounded-2xl p-5 text-center"
              >
                <AnimatedCounter to={s.to} label={s.label} suffix={s.suffix} />
              </motion.div>
            ))}
          </div>
          <p className="text-center text-green-700 text-xs mt-6">
            Figures are programme milestones, updated periodically.
          </p>
        </div>
      </section>

      {/* ── SEVA CARDS GRID ── */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="Gaushala Seva Packages"
            title="See Exactly What Your Gift Does"
            subtitle="Each package is tied to a real photo from our work — feeding, treatment, calf care or emergency rescue."
            className="mb-12 text-center"
            align="center"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sevaPackages.map((item, i) => {
              const active = !customAmount && selectedSeva.id === item.id;
              return (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  custom={i * 0.06}
                  viewport={{ once: true }}
                  className={`group rounded-2xl overflow-hidden border-2 transition-all duration-300 bg-white ${active
                      ? "border-green-600 shadow-xl shadow-green-600/15 ring-2 ring-green-600/20"
                      : "border-[rgba(35,54,29,0.1)] hover:border-[#798576] hover:-translate-y-1 hover:shadow-lg"
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedSeva(item);
                      setCustomAmount("");
                      document.getElementById("donate-widget")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    className="w-full text-center"
                    aria-label={`Select ${item.title}`}
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-green-50">
                      <img
                        src={item.img}
                        alt={item.imgAlt}
                        className={`absolute inset-0 h-full w-full ${item.imgFocus || "object-center"} group-hover:scale-[1.03] transition-transform duration-500`}
                      />
                      {item.popular && (
                        <span className="absolute top-3 left-3 z-10 bg-[#C37C24] text-white text-[10px] font-bold px-2 py-1 rounded-full">
                          Most Chosen
                        </span>
                      )}
                      <span className="absolute top-3 right-3 z-10 bg-white/95 text-green-900 text-sm font-black px-2.5 py-1 rounded-full shadow">
                        ₹{item.amount.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="p-4 pb-2">
                      <h3 className="font-extrabold text-[#273029] text-sm mb-1">
                        {item.icon} {item.title}
                      </h3>
                      <p className="text-[#798576] text-xs leading-relaxed">
                        {item.impact}
                      </p>
                    </div>
                  </button>
                  <div className="px-4 pb-4">
                    <Button
                      type="button"
                      onClick={() => donateSevaDirect(item)}
                      disabled={isProcessing}
                      className="w-full rounded-xl h-11 font-bold bg-[#798576] hover:bg-[#798576] text-white border-0 shadow-md shadow-[rgba(121,133,118,0.2)]"
                    >
                      {isProcessing && selectedSeva.id === item.id
                        ? "Processing..."
                        : `Donate ₹${item.amount.toLocaleString("en-IN")}`}
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY IT MATTERS ── */}
      <section className="section-spacing bg-[#f0f7f0]">
        <div className="container-custom">
          <SectionHeader
            badge="Why Cow Care Matters"
            title="What We See on the Ground"
            subtitle="These are not abstract causes. They are the scenes our volunteers walk into every week."
            className="mb-12 text-center"
            align="center"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyCards.map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={i * 0.08}
                viewport={{ once: true }}
                className="bg-white border-2 border-[rgba(35,54,29,0.1)] rounded-2xl p-7 hover:border-green-300 transition-colors"
              >
                <div
                  className={`w-11 h-11 rounded-xl ${card.color} flex items-center justify-center mb-4`}
                >
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#273029] mb-2">
                  {card.title}
                </h3>
                <p className="text-[#798576] text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="From Our Camera Roll"
            title="Real Moments from Cow Care"
            subtitle="Every photo below was taken during rescue, treatment or daily feeding — not from a stock library."
            className="mb-12 text-center"
            align="center"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {galleryImages.map((img, i) => (
              <motion.button
                key={img.src}
                type="button"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={i * 0.05}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-2xl cursor-pointer shadow-md border border-[rgba(35,54,29,0.1)] text-left"
                onClick={() => setLightbox(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-44 sm:h-52 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <p className="text-white text-xs sm:text-sm font-bold leading-snug">
                    {img.caption}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.caption}
        >
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full max-h-[70vh] object-contain rounded-2xl"
            />
            <div className="mt-4 text-center text-white px-2">
              <p className="font-bold text-lg">{lightbox.caption}</p>
              <p className="text-white/75 text-sm mt-1 max-w-2xl mx-auto">
                {lightbox.story}
              </p>
              <button
                type="button"
                className="mt-4 text-sm font-semibold text-[#C37C24] hover:text-white"
                onClick={() => setLightbox(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── CARE JOURNEY ── */}
      <section className="section-spacing bg-[#f0f7f0]">
        <div className="container-custom">
          <SectionHeader
            badge="Our Care Journey"
            title="From the Roadside to Lifelong Shelter"
            subtitle="Every cow follows a clear path — rescue, treatment, feeding, and long-term protection."
            className="mb-12 text-center"
            align="center"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {careTimeline.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={i * 0.08}
                viewport={{ once: true }}
                className="bg-white border-2 border-[rgba(35,54,29,0.1)] rounded-2xl overflow-hidden hover:border-green-300 transition-colors"
              >
                <div className="relative h-42">
                  <img src={step.img} alt="" className="w-full h-full " />
                  <span className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-green-700 text-white font-black text-sm flex items-center justify-center shadow-lg">
                    {step.step}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-extrabold text-green-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#798576] text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST ── */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <SectionHeader
                badge="Why Donate Through PWS"
                title="Transparent Cow Care You Can Verify"
                subtitle="Ask us hard questions. Visit when you can. We would rather show you the shed than sell you a slogan."
              />
              <ul className="mt-8 space-y-3.5">
                {[
                  {
                    icon: Shield,
                    text: "Registered NGO with 80G tax benefits",
                  },
                  {
                    icon: CheckCircle2,
                    text: "Donations directed to cow fodder, medicine & rescue",
                  },
                  {
                    icon: Star,
                    text: "Photo updates from feeding and treatment days",
                  },
                  { icon: Users, text: "Volunteers welcome on care days" },
                  { icon: Droplets, text: "Site visits arranged on request" },
                  {
                    icon: Heart,
                    text: "Long-term shelter for cows that cannot return to roads",
                  },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-green-700" />
                    </div>
                    <span className="text-[#273029] font-medium text-sm">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={0.15}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px]"
            >
              <img
                src="/images/blanket_distribution/blanket_distribution_8.jpeg"
                alt="Volunteers handing out warm blankets to families on the ground"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5">
                  <p className="text-green-900 font-extrabold text-lg">
                    Fed by hand. Watched with care.
                  </p>
                  <p className="text-[#798576] text-sm mt-1">
                    A volunteer offers food while a calf rests nearby — the
                    everyday rhythm of our gaushala work.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HOW TO DONATE ── */}
      <section className="section-spacing bg-[#f0f7f0]">
        <div className="container-custom">
          <SectionHeader
            badge="How to Donate"
            title="Four Simple Steps"
            subtitle="No confusion. Choose an amount, pay securely, and receive your receipt."
            className="mb-12 text-center"
            align="center"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={i * 0.08}
                viewport={{ once: true }}
                className="bg-white border-2 border-[rgba(35,54,29,0.1)] rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-green-700 text-white font-black flex items-center justify-center mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-extrabold text-green-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-[#798576] text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQS ── */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-3xl">
          <SectionHeader
            badge="FAQs"
            title="Questions Donors Ask Us"
            subtitle="Straight answers about cow donation, receipts and visiting the shelter."
            className="mb-10 text-center"
            align="center"
          />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className="bg-[#f0f7f0] border-2 border-[rgba(35,54,29,0.1)] rounded-2xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-green-900 text-sm cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-green-700 transition-transform ${openFaq === i ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-[#798576] leading-relaxed text-sm border-t border-[rgba(35,54,29,0.1)] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="section-spacing bg-white pt-0">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-green-800 via-green-700 to-green-600 p-10 sm:p-14 text-white text-center shadow-2xl shadow-green-700/25">
            <div className="text-5xl mb-4">🐄</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight">
              A Cow Is Waiting for Today&apos;s Meal
            </h2>
            <p className="text-green-50/90 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Start with ₹51 for a first roti, or choose ₹251 for a full day of
              care. Whatever you give reaches the animals you see in these
              photographs.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#donate-widget">
                <Button className="bg-white text-green-800 hover:bg-green-50 font-bold rounded-full px-8 h-12 border-0">
                  Choose a Seva Amount <HandCoins className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a href="tel:+918299461699">
                <Button className="bg-green-900/30 text-white hover:bg-green-900/40 font-bold rounded-full px-8 h-12 border border-white/25">
                  <Phone className="w-4 h-4 mr-2" /> Call Us
                </Button>
              </a>
              <Link href="/contact">
                <Button className="bg-white/10 text-white hover:bg-white/20 font-bold rounded-full px-8 h-12 border border-white/25">
                  Volunteer With Us <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT STRIP ── */}
      <section className="pb-20 bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Call Us",
                sub: "+91 82994 61699",
                href: "tel:+918299461699",
              },
              {
                title: "WhatsApp",
                sub: "Chat with the care team",
                href: "https://wa.me/918299461699",
              },
              {
                title: "Email",
                sub: "info@nabinchandrafoundation.org",
                href: "mailto:info@nabinchandrafoundation.org",
              },
              { title: "Visit", sub: "Gaushala · Delhi NCR", href: "/contact" },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="border-2 border-[rgba(35,54,29,0.1)] rounded-2xl p-5 hover:border-[#798576] hover:bg-green-50/50 transition-all"
              >
                <p className="font-extrabold text-green-900 text-sm">
                  {item.title}
                </p>
                <p className="text-[#798576] text-xs mt-1">{item.sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-[5.25rem] lg:bottom-6 left-0 right-0 z-[90] px-3 sm:px-4 pointer-events-none"
          >
            <div className="max-w-lg mx-auto pointer-events-auto bg-green-900 text-white rounded-2xl shadow-2xl p-3 flex items-center gap-3 border border-green-700">
              <div className="flex-1 min-w-0 pl-2">
                <p className="text-xs text-green-200 font-semibold truncate">
                  {selectedSeva.title}
                </p>
                <p className="font-black text-lg leading-tight">
                  ₹{finalAmount > 0 ? finalAmount.toLocaleString("en-IN") : "—"}
                  {frequency === "monthly" ? "/mo" : ""}
                </p>
              </div>
              <Button
                onClick={goDonate}
                disabled={finalAmount <= 0 || isProcessing}
                className="rounded-xl h-11 px-5 font-bold bg-[#798576] hover:bg-[#798576] text-white border-0 shrink-0"
              >
                {isProcessing ? "Processing..." : "Donate Now"}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <DonorDetailsModal
        open={donorFormOpen}
        amount={finalAmount}
        causeLabel={donationNote}
        isSubmitting={isProcessing}
        onClose={() => {
          if (!isProcessing) setDonorFormOpen(false);
        }}
        onSubmit={handleDonorSubmit}
      />
    </div>
  );
}
