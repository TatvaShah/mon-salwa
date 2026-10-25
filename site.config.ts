import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Mon Salwa",
  tagline: "Milk cakes, cheesecakes, and halal chicken dumplings, home made in Mississauga.",
  category: "Milk cakes and cheesecakes",
  schemaType: "Bakery",
  area: "Mississauga, ON",
  siteUrl: "https://mon-salwa.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#8a5a2b" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Home baked in Mississauga",
    headline: "Milk cakes and cheesecakes you cannot resist",
    subhead: "Speciality milk cakes and cheesecakes, plus hand folded halal chicken dumplings. Send us a DM with your date and idea to place an order.",
    images: [
      { src: "/images/chocolate-milk-cake.jpg", alt: "Chocolate milk cakes by Mon Salwa" },
      { src: "/images/pistachio-cake.jpg", alt: "Pistachio topped cake" },
      { src: "/images/lotus-cake.jpg", alt: "Lotus Biscoff cake" },
    ],
    secondaryCta: { label: "See the treats", href: "#gallery" },
  },

  highlights: ["Speciality milk cakes", "Cheesecakes", "Halal chicken dumplings", "Orders by DM"],

  about: {
    title: "Baked with passion",
    body: [
      "Mon Salwa is a Mississauga home kitchen led by Chef Salwa, an accountant by profession and a baker by passion.",
      "Our speciality is milk cakes and cheesecakes, and the Chocolate Milk Cake is our bestseller. We have also launched hand folded halal frozen chicken dumplings, and we take on larger catering orders too.",
    ],
    image: { src: "/images/dessert-cups.jpg", alt: "Dessert cups ready for an event" },
  },

  menu: {
    title: "What we make",
    variant: "list",
    showPrices: false,
    priceNote: "Message us for pricing on your order.",
    groups: [
      {
        title: "Cakes",
        items: [
          { name: "Chocolate Milk Cake", tag: "Bestseller" },
          { name: "Milk cakes" },
          { name: "Cheesecakes" },
        ],
      },
      {
        title: "Savoury",
        items: [{ name: "Halal frozen chicken dumplings", description: "Hand folded.", dietary: ["halal"] }],
      },
    ],
  },

  gallery: {
    title: "From our kitchen",
    items: [
      { src: "/images/chocolate-milk-cake.jpg", width: 1200, height: 1600, alt: "Chocolate milk cakes", caption: "Chocolate Milk Cake" },
      { src: "/images/pistachio-cake.jpg", width: 1200, height: 1600, alt: "Pistachio cake", caption: "Pistachio" },
      { src: "/images/lotus-cake.jpg", width: 1200, height: 1600, alt: "Lotus cake", caption: "Lotus" },
      { src: "/images/dessert-cups.jpg", width: 1200, height: 1600, alt: "Dessert cups", caption: "Dessert cups for events" },
      { src: "/images/dumplings.jpg", width: 1200, height: 1600, alt: "Chicken dumplings in chili oil", caption: "Halal chicken dumplings", href: "https://www.instagram.com/mon.salwa/reel/DVO-tW1kf3Q/" },
    ],
  },

  instagram: {
    handle: "mon.salwa",
    embeds: ["https://www.instagram.com/p/DVO-QFVEdXd/"],
    embedsTitle: "Fresh from our kitchen",
  },

  order: {
    title: "Order in a quick DM",
    intro: "Orders are taken through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Mon Salwa! I would love to place an order.\nDate needed:\nServings or size:\nFlavour:\nDesign idea:",
    links: [],
    note: "Larger catering orders and collabs welcome, just send a DM.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send us a DM on Instagram with your date, servings or size, flavour, and design idea." },
    { q: "Where are you located?", a: "Mon Salwa is a home kitchen in Mississauga, Ontario." },
    { q: "Are the dumplings halal?", a: "Yes, our hand folded frozen chicken dumplings are halal." },
  ],

  contact: {
    area: "Mississauga, Ontario",
    socials: [],
  },

  seo: {
    title: "Mon Salwa | Milk cakes and cheesecakes in Mississauga",
    description: "Speciality milk cakes, cheesecakes, and halal chicken dumplings from a Mississauga home kitchen. Order by Instagram DM with your date and flavour.",
    keywords: ["milk cake Mississauga", "cheesecake Mississauga", "halal dumplings Mississauga", "chocolate milk cake"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
