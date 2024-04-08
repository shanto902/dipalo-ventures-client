import { TCaseStudy, TResidencyData } from "./types";

export const residencyData: TResidencyData[] = [
  {
    id: 1,
    text: "Product Management",
  },
  {
    id: 2,
    text: "Data Science",
  },
  {
    id: 3,
    text: "Electrical Design",
  },
  {
    id: 4,
    text: "Mechanical Design",
  },
  {
    id: 5,
    text: "Supply Chain",
  },
  {
    id: 6,
    text: "Contract Manufacturing",
  },
];

export const residencyOutputs: string[] = [
  "Experience Based Roadmap",
  "UX Heuristics",
  "Product Requirements",
  "Bill of Materials (BOM)",
  "Data Science",
  "Engineering reviews of Industrial, Mechanical, Electrical, and Firmware",
  "Contract Manufacturing",
  "Business Plan, Financial Plan",
  "Go To Market",
  "Fundraising Strategy",
  "Internationalization",
];

export const caseStudies : TCaseStudy[] = [
  {
      id: 1,
      company: "Vumo",
      overview: "Vumo (Car Scanner) uses a robotized computer vision system enabled by machine learning to automate car inspection and documentation.",
      logo: "",
      solution: "The Residency program helped VUMO to deliver a range of outputs that would improve the overall effect and optimize the user validation, product requirements, and plans for their Gen 2 product. The program aimed to enhance the process of detecting and documenting automotive damage, making it more efficient and accurate for car manufacturers and consumers. These outputs included customer experience journey map updates, product requirements documents, certification plans, and a comprehensive production roadmap. “You are the only investors who perfectly know the right questions to ask. For example, where are the huge potential risks for delivery fulfillment.” – Slawek Potasz, CEO & Founder of Vumo(Car Scanner)."
  },
  {
      id: 2,
      company: "Waste Wizer",
      overview: "WasteWizer produces internet-connected scales that monitor trash containers’ weight so they can be picked up at the optimal time.",
      logo: "",
      solution: "The Residency program helped WasteWizer to adapt the design for larger production runs, plan assembly fixtures, and create design suggestions to ease tool shops. The program aimed to improve the efficiency and overall functionality of the product, making it more suitable for larger production runs and ensuring that it meet industry standards for durability and performance. Testing procedures were completed and delivered to WasteWizer, including a calibration press plan and destructive durability tests that met IPXX."
  },
  {
      id: 3, company: "Pluie",
      logo: "",
      overview: "Pluie is the world’s first and only self-sanitizing baby changing table, using patented UV-C light technology known to kill 99.9% of germs.",
      solution: "During phase 1, Dipalo Venture conducted an engineering review (mechanical, electrical), BOM, and business audit. In phase 2, MP Consulting took over and worked on product design for seven months to complete the first 100 production units of UVC and non-UVC cleansed changing stations. They also reduced the cleansing time from 10 minutes to just 1 minute, controlled the cost of goods sold (COGS), and effectively managed the supply chain. They also reduced the cleansing time from 10 minutes to 1 minute, controlled COGS, and managed the supply chain. In March 2023, Pluie was featured in Shank Tank (Season 14, Episode 16). You can view the full episode on  ABC.com, Hulu, or Amazon Prime Video. “I didn’t know what I didn’t know. Working with DipaloVentures helped me formulate a better plan. It showed gaps in our engineering design, supply chain, and overall time to market that we needed to solve ASAP.”  – Adia Gundry, CEO of Pluie"
  },
];
