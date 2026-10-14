export const navigationLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about-us",
    children: [
      { title: "Company Profile", path: "/about-us", description: "Our heritage, DIPP recognition, and core values" },
      { title: "Our Offices", path: "/about-us/offices", description: "PAN India presence in Delhi, Mumbai, Leh & Bihar" },
      { title: "Sustainability (CSR)", path: "/about-us/sustainability", description: "Our pledge to carbon neutrality & community care" },
      { title: "Learn About Solar", path: "/about-us/learn-about-solar", description: "Solar science, energy metrics, and ROI calculation" },
      { title: "Company Documents", path: "/about-us/company-documents", description: "Brochures, technical specs, and certifications" },
    ]
  },
  {
    title: "Solutions",
    path: "/rooftops",
    children: [
      { title: "Solar Rooftop Solutions", path: "/rooftops", description: "On-Grid & Off-Grid rooftop installations" },
      { title: "Commercial & Industrial", path: "/commercial-industrial", description: "Turnkey EPC with 40% accelerated depreciation" },
      { title: "Institutional Solar", path: "/institutional", description: "Power hedging at ₹3.5–5/unit for campuses" },
      { title: "Solar Carport & Parking", path: "/solar-carport", description: "Dual-utility elevated structures with clean generation" },
      { title: "Solar Farms (Utility-Scale)", path: "/solar-farms", description: "CAPEX, RESCO, and Group Captive power models" },
      { title: "Solar Park Solutions", path: "/solar-park", description: "Captive solar park developments for bulk consumers" },
    ]
  },
  {
    title: "Products",
    path: "/products",
    children: [
      { title: "Solar EPC Rooftops", path: "/products/solar-roof", description: "High-efficiency commercial & residential turnkey EPC" },
      { title: "Solar Tree (11 KWp)", path: "/products/solar-tree", description: "World's largest solar tree manufacturer" },
      { title: "Solar Water Heater", path: "/products/solar-heater", description: "Up to 25,000 LTR capacity institutional systems" },
      { title: "Solar Street Light", path: "/products/solar-street-light", description: "Autonomous dusk-to-dawn intelligent lighting" },
      { title: "Solar Agriculture Pump", path: "/products/solar-pump", description: "Reliable irrigation and water evacuation systems" },
      { title: "Solar Lanterns & Kits", path: "/products/solar-lantern", description: "Rugged portable solar lighting and energy units" },
    ]
  },
  {
    title: "Projects",
    path: "/large-projects",
  },
  {
    title: "News",
    path: "/news",
  },
  {
    title: "Careers",
    path: "/careers",
  },
  {
    title: "Contact",
    path: "/contact",
  }
];
