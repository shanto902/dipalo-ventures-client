import { TCaseStudy, TResidencyData } from './types';

export const residencyData: TResidencyData[] = [
  {
    id: 1,
    text: 'Product Management'
  },
  {
    id: 2,
    text: 'Data Science'
  },
  {
    id: 3,
    text: 'Electrical Design'
  },
  {
    id: 4,
    text: 'Mechanical Design'
  },
  {
    id: 5,
    text: 'Supply Chain'
  },
  {
    id: 6,
    text: 'Contract Manufacturing'
  }
];

export const residencyOutputs: string[] = [
  'Experience Based Roadmap',
  'UX Heuristics',
  'Product Requirements',
  'Bill of Materials (BOM)',
  'Data Science',
  'Engineering reviews of Industrial, Mechanical, Electrical, and Firmware',
  'Contract Manufacturing',
  'Business Plan, Financial Plan',
  'Go To Market',
  'Fundraising Strategy',
  'Internationalization'
];

export const caseStudies: TCaseStudy[] = [
  {
    id: 1,
    company: 'Vumo',
    overview:
      'Vumo (Car Scanner) uses a robotized computer vision system enabled by machine learning to automate car inspection and documentation.',
    logo: '/assets/case-study/vumo-logo.jpg',
    solution:
      'The Residency program helped VUMO to deliver a range of outputs that would improve the overall effect and optimize the user validation, product requirements, and plans for their Gen 2 product. The program aimed to enhance the process of detecting and documenting automotive damage, making it more efficient and accurate for car manufacturers and consumers. These outputs included customer experience journey map updates, product requirements documents, certification plans, and a comprehensive production roadmap. “You are the only investors who perfectly know the right questions to ask. For example, where are the huge potential risks for delivery fulfillment.”<br/> <br/> <i>Slawek Potasz</i>, CEO & Founder of Vumo(Car Scanner).',
    image: '/assets/case-study/vumo-img.jpg',
    blurData:
      'data:image/jpeg;base64,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'
  },
  {
    id: 2,
    company: 'Waste Wizer',
    overview:
      'WasteWizer produces internet-connected scales that monitor trash containers’ weight so they can be picked up at the optimal time.',
    logo: '/assets/case-study/wastewizer-logo.png',
    solution:
      'The Residency program helped WasteWizer to adapt the design for larger production runs, plan assembly fixtures, and create design suggestions to ease tool shops. The program aimed to improve the efficiency and overall functionality of the product, making it more suitable for larger production runs and ensuring that it meet industry standards for durability and performance. Testing procedures were completed and delivered to WasteWizer, including a calibration press plan and destructive durability tests that met IPXX.',
    image: '/assets/case-study/wastewizer-img.jpeg',
    blurData:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAJpAzYDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECBQME/8QAFxABAQEBAAAAAAAAAAAAAAAAABEBEv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwDwAVQAAAAAAAAAAAAAAABAAAAAABAAAEVAAAQAEABAAQEARUBAARFQEBAEVARFQERUBEVARFQERUBEVARFQERUBAAQAEAAAAVFAVFAVFBQEFVFEFRQUAFVAFABQAUABUUAAAAAAHVAVQAAAAAAAAAAAAEBUAAAAAAABAAAAQAEVAAAQAEBAEVAEVAQAERUBEVAEEARUBEVARFQERUBEEAQARFQERUBAQAEAAAAAABVQBVRQURUFAEVUUFEUFABQAUAFEUBUAUAAAAAHUAVQAAAAAAAAAAAAAAAAAAEBUAAABAAAAQAEABFQBFQBABAARFQBABEVARFQERUBEVARFQERUBEVARFQEBAEAERUAQAAQFEAUAFEUFABVRUBUURQAVUUBUUFEUFEUBUAUABUAUAAAHUEFVRAFEAUQBRAFEAUQBRAFEAAAAAAQFQAAQFQAAQAEABAAQAEARUAQQBFQEBAEEARUBEVARFQERUBEVARFQERUBEVAQEABAAAAAFQBVQBVRQURUFVAFVFEURQVUAVUAUAFAAVAFAAAAAB1BBVUQBRAFEAUQBRAFEAUQBRAFEAAAAQFEAAAEAAEABAAAEEABAEVAEAEBAEEARUBEVARFQERUBEVARFQERUBEVARFQBBAAQAAAAFEAVUAVUUFVlUFVFBRFEVUAVUUBUUBUAVUAURQAAUQBRAHUEFVRAFEAUQBRAFEAUQBRAFEAAAAABAFEAAQFQAAQAEBUEBUEABAAQBABAQBABEVARFQERUAZVARFQERUBEVARFQERUAQQAEFAQFEBFVAFVAFVFBVZUFVFQURRFVAFVFBRFBRFAVAFAAVAFEAUQB0wFUAAAAAAAAAAAAAAAAEAUQBRAAAAQBUAAQAEAAQAEABAEABBAAQBBAEVARFQEBARFQERUBEVARFQERUBEVAEEFEEBRABUAUQEaVlQVWVBpWVBVQQaEURVZUFVAGhFBRAFVAFEUBUAUQBRAHTEFVRAFEAUQBRAFEAUQBRAFEAUQBUAAQBRAFQABAAEBUABAAEAEABBAVBAEABBAEEAQARFQERUBEVARFQEQQBBAENQUQQBBFFEQGhlQUQQaVlRFVlQaVlQaVlQVUEGhFEVWVBVQBVQBVQBRAFABRAFEAdIQVVEAUQBRAFEAUQBRAFEAUQBRAFEAVAAEAUQAEAVAAEABAAEABABABAAQQBAAQQBBAEEAQQBBAEE0BldQETTUFE3TdZ3QWsiKKgIAgIogCiANFQBpazVBpWaoNKyoNKyqCqyojQgDQigoigogCqgCiAKIAogDpCCqogCiAKIAogCiAKIAogCiAKIAogCoICiAKIAqCAogAIAqCAqCAqCAqCACACCAqCAIIAggCCAIIAgmg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KCgIKAgoCCgIKAgoCAAgoCCgIKAgqAgoCCoCCgIKgIKAyKAiKAiKIIigIigMo0gIjSAyjSCMioCI0iqiKCsioqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqAjIAAAAAAACCgIKAgoCCoAAAigIKAgAIKAgAIKAiKAgqAgqAgqAgqAiNIgiKAyjSAiKgIigjKNICIqKqCoKgCqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6wCMgAAAAAAAAACKAgoCCoAAAigIKAgAIKAgAIKgCKAgAIKgIKgIKgIjSAiKIIioCI0gMo0gjKNICIqCoKiqiKKqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA64CMgAAAAAAAIKAgoCAAAAAAgqAAAIoCCoAigIAAioAigIACAAgAIigIioCCogiKgImqAyioIgqAiKiqgqCoAqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOuAjIAAAAAAAAAAAAACCgIAAAAioAAAigIAAioAACAAgqAIqAIqAgqAiKAiKiCCoCIqAmouoIiKgIAKiKiqIqKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADrgIyAAAAAAAAAAAAAAAAgAAAAAIAAACAAAAgAIAAioAioAioAioCAAiKiAioCIqAiLqCIioAioKiKiqIqKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q=='
  },
  {
    id: 3,
    company: 'Pluie',
    logo: '/assets/case-study/pluie-logo-blue.webp',
    overview:
      'Pluie is the world’s first and only self-sanitizing baby changing table, using patented UV-C light technology known to kill 99.9% of germs.',
    solution:
      'During phase 1, Dipalo Venture conducted an engineering review (mechanical, electrical), BOM, and business audit. In phase 2, MP Consulting took over and worked on product design for seven months to complete the first 100 production units of UVC and non-UVC cleansed changing stations. They also reduced the cleansing time from 10 minutes to just 1 minute, controlled the cost of goods sold (COGS), and effectively managed the supply chain. They also reduced the cleansing time from 10 minutes to 1 minute, controlled COGS, and managed the supply chain. In March 2023, Pluie was featured in Shank Tank (Season 14, Episode 16). You can view the full episode on  ABC.com, Hulu, or Amazon Prime Video. “I didn’t know what I didn’t know. Working with DipaloVentures helped me formulate a better plan. It showed gaps in our engineering design, supply chain, and overall time to market that we needed to solve ASAP.”  – Adia Gundry, CEO of Pluie',
    image: '/assets/case-study/pluie-img.webp',
    blurData:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCASRAzYDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAEEAgMG/8QAFhABAQEAAAAAAAAAAAAAAAAAABEB/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APnAGnMAAAAVFAAAABQAAEAAVQAAAAAAAABQAAAAAEAAAARUARUARUBAARFRARUFRFQBFQERUBEVARFQERUBEVARFQEAERFQBFQAABUUBUUUVFAVFBVRQURQVUUBUUBUUBUUAAFAAAFAAAAawGnMAAAAABQAAAUAABFAAURQAAAAAAABQAAAAAEAAAAQAEVAEVAQAERUARUQRFQURUBEVARFQERUBEVARFQERUBAQQRUARUAAAVFAVFFFRQFRQVUUBUUFVFAVFAVFAVFAABQBQAAAAAGsBpzAAAAAAURQAAURQABQBAVFAAAAAAAAAAFAAAQAAAAEAARUAQAQAERUARURURUBAARFQERUBEVARFQERUBEVARFQQRUARUAAAVFFFRQFRQFRQVUUBUUFABVRQFRQFQFUAFEUAAAAAAGsBpzAAAAAAFQBQAFRQAAAEUVAFAAAAAAAAAFAAEAAAAAEABAAQAEABEVEBAFRFQEBAEVARFQERUBEVARFQERUBEVBBFQBAAAAVAVQAVUAVUUFVFAVFBQAVUAVUAUAVQAFRQAAAAAAaxBpzUAAAAAAAFAAABRFRQAAAFAAAAAAAFAAAQAAAABFQAAEABAARFQBFRBAQURUBEVAEAERUBEVARFQERUBEVARFQQRUBAAABQAFABQAVUUFABVRQURQUAFAFUAFAAABQAAAAAagGnMABRAFAAAAVFAAAARVEUAABUAUAAAAAAEFAAAAAAEABFQBFQBFQBFQBABEVEURUBEVARFQBABEVARFQERUBEVARFQEAEQAUAAABRFBRFBVRQURQVUUBUUFEUFAFUABUUAABUUAAAAGoBpzAAAAFQBQAFQBQAAEUABQAAAAAAAABQAAAAABAAAAQAEVAEVAEAEBBRFRBAARFQERUBEVARFQERUBEVAEAERUBAAQABABRFAVFAVFBVRQFRQUAFVFAVFFFRQFRQFQBQAAAFQBRAGsBpzAAAAAAFRQAAFQBQEUAAVAFAAAAAAAFAAAQFQAAAAQAAEABAAQEARURRABEVAEAERUBEVARFQERdQERUBEVAEAERUARUAAAVAFABVRQURQVUUBUUFAFVUAVUAVUAUABUUAAAAAAGoBpzAAUQBQAAAURQAEAAVRFAABRAFEAUQBRAVUAAAAAAABAARUARUARUARUFEAEBEBFQEBAEAERUBEVARFQERUBEVARFQBABAAAQFABQAVUAVUUFABVRRRUUFEUFABQAURQAAURQAAAAagGnMAAAAVAFAAABRBFUAAAFEUAAAAAAAAUAAAABAVAABAAAQAEABABUBEBFQBABEVARFQERUAQQByqAiKgCCAIqAgIACAAAoACooKIoKqAKqKKoigqoAqooCooCooAAKAAAAqAKIA1ANOaiAKIAoACoAoAACKAAoigAAogCiAKIAogKqAAAAAAAAgAIqAIqAIqCiKgCKiAgAiKgCACIqAiKgIioCIqAiKgIioCIqAIqAIqAAAKgCqgCqgCqiiqqAKqKCiKCgAqoAoAKAAqKAAAAAADUA05gAAACoAoAACCiAqgAAAoigAAAAACgAAAAAAICoAAIAACAAgAqAIICAIqAIAIioCAgCCAIIAioCIqAiKgIioCAAgAAICgCqIoKIoKqAKqKCqgCqigoigoAKAAqKAACiKAAAADSA05ioAoigAAKgCiCKoAAAKIoAAAAAAAAoAAAAAAAACAAAIACAKIqAIqICKgCACIqAIIAioCIqAiKgIioCIqAiKgCCAIqAAgoAAqAKACqgCqigqooKIoKqAKqKAqKAqAKACgAAAAAAA1ANOYAAAAqAKIqAAKAAoigAAogCiAKIAogKogCiAKIAqAAAAgAAgAIKAIIACAgCKgCCAIqAiKgCCAIIAggCCAIqAiKgICAACgAAAKIoKIoKqAOhFBVQBVRQURQURQURQURQAAUQBQAAAaQFcwAFEAUAAAUABRAFABRAFEAUAAAUAAAAAAAABAAABAAEFAAEBAQAEAEBAEVARFQBBAEVARFQERUBEVARFQERUARUFAQFQAURQFQBVQBVRQVXKgqooKIoKqAKqAKqAKACiAKAAAAADUIK5qIoAAAAAAqiAKIoCoAogCgAAAACgAAAAAAAAICoAAIAAKICACAIqAIACCAIqAIIAioCIqAgIAggCCAIIKIAIACAAAAAAKigKigoigqoA6EUFVAFVAFVFAVAFVAFEUAAFEAUQBqAVzAAAAFQFUQBRFAABRAFEUAAAAUAAABRAFEAVAAAAEAABRAABEAEABAEVAEAEBAEAERUAQQBFQERUFRFQEQARFQBAAQAAAFQBQAUAFVAFVFBVQBVRQURQURQURQFQBQAUQBRAFEAagFcwABUBVEAUQBQAFQBRAFAAAAVAVRAFEAUQBRAFEAAABAAAUEEAEABAAQAEAQAEEARUAQQBFQVEVARFQERUBEVAQEABAAAAAAAUABUAVUUFEUFVAHQigqoAqoAoAKIoCoAoigAAAA0gKwKgCiAKIAoigAAogCiKAAAAKogCiAKIAoAAgCiAAAAgKqAgAgAIAACAgAIAioAgAgIAgCoioCIqAiKgIioCAgCAAgAAAAAAAKigACqIoKIoKqAOhFBVQBVQEVUAUAFEUAAAAAAGoQVhRAFEAUQBQAAAFQBRFAAAAFUQBRAFEUAEBRAFEAAAAQVUBABAAQFQQAEABAAQBFQBBBRFQERUBEVARFQBBAEEAABAAAAAAAAFQBQAABVVAFVFBRFBVQBVQBVQBQAURRAAFEAUQBqEFYUQBRAFEAURQAAUQBQAABQABUAUQBQQFEAUQBUAAAUBEFQAAQAEABAAQAEABAEVBRBAEAERUBAQBBAQEAQAEVAAAAAAAAAAAURQABVEUFEUFVyoKqAKqAKqAKACiAKAAqAKIA1CCuaiAKIAogCiKAACiAKICqAAAAqAKIAoggogoogAAKAIAICoAAgACAAgAIACAAgoioAggCACIqAOVQERUBAQUAEEAAAAAAAAAAABUUAAAAVRFBRFBVcqCqgCqgCgAogCgAAAAA0gK5qIAogCiAKIoAAKICqIAogCgAKgCiCCiAKIAqAoAIoAAIAAAIAAgACAAgAIKAgCACAgCACIqAiKgqAgCAACCAAAAAAAAAAAAAAKAAAKAAoAqq5UFVAFEURRFBRAFEUBUAUQBpAVzAAFQBRAFEUAAUVAFEAUQBRFAAQAAAAAAABQAAQBUAAEBUEBUAAEABBQEAQAEEABAEEAQQURUBAQAAQQAAAAAAAAAAAAAAAFRQAAABRUAVUBVEUFEUFEAVUAUQBRFAABpAVyAAAAUQFUQQUQBQAAFFEAUQQUQBRFAEBVEAUQBRAFEAAQFEAAQFQABAUEAEABBAAQBABEVBRBAEAEAABBAAAAAAAAAAAAAAAAAAFEUAAUAAVFAAFUQBVQBRFAVAFEAUQBqEFclEEFEUUAAVAFEAUQBRAFAAABRAFEBVEAUQBRAFEAAQFEAAQFEAAQVUEBUEABAAQBAAQQUQQBFQBAAAEEAAAAAAAAAAAAAAAAAAABUAUAAAUABRAFAFFQBRAFAAABRAGoQHNRAFEAUQBQAFQBRAFEAUQBRFAAFAAAAAABAFEAUQABAUQABBVQABAAQAEAEEBUEFEABBAEAAAAEEAAAAAAAAAAAAAAAAAAAAAAFRQAAABQABUAURRQAAAAAAAGkAcwABUAUQBRAFEAUQBRFAVAFEBVEAUQBRAFEAUQBUAAQBRAAQFUQAEAAQFQQFQQBAFEEABAEAAAAEEAAAAAAAAAAAAAAAAAAAAAAAAAAURQAAABQAAABUAUQBRAVRAGkQHNRAFEUAABUAUQBRAFEAUQBRAVRAFEAUQBRAFEAUQBUEBRAVRAAQAEAVBAVBAVBBVQQBAAQAAAAQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRAFAAAFAAAAAAAAAAaByDDocqCiAKIAogCiAKIAogCq5UVRAAAARQFQBUEBRAFEBVQABAFEQFEABAFQQFQQVUEBUEBUAAAAEEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFQBRFAAAAAAFAAAAewgjCiAKIAogCiAKIAogCiCiiKKogCiIDocgOhyA6RAFEBVEKCiVKCiUoKiAKIACAAgKAgKgAAAACAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACiAKIAogCiAPUQRlRAFEAUQBRAFEAUQFUQB0OQHSIUFEAUQUUSgLRCirSogOkQBRAFQABAFQQVRAAAAAQBAUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB2IIiiAKIAogCiAKIAogCiAKIAogCiAKICqIAogACKKIAogAAAAACAogCiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOhARRAFEAUQBUAUAAAAAAAAAAAAEAUQBRAFEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUQBRAFEAUQBUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUBBQEFAQUBBUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFARQAAAAAAAAAAAAVAFBBQEFAQUBBQEFAQUBBUAARQAEFAQUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUUVEFAQUAAAAAAABQQUBBQEFAQUBBQEFAQUBBQEFAQUBBUARQEFAQBFEUBBUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB2ArIAAAAAAAACggoCCgIKAAAAoIKAgoCCgIKCoKgAAIKAgoCIoCCoAigIKgCKIqCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADsUaZAAAAAAAABQEUEAAAUBBQEFAQUBBQEUAQUBBQEFBUAARQEFARFAQVAQVAEUBAEVBUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB6CjTCCgAAAAAKCCgqKAACAKAigAAACggoCCgIKgAACKAgoCCoCCgIAKgqAIoCIoCAAgqICKCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD2AaYAAAAAUEFAQUAAAARQUAAABQQUBBQEFAQUBBQEAARQEFARFAQVAQUBEUBEUFRFAQBBBUARUFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe4DTAAAAAAAKAgoAAAAAKIoAAKAgoCCgIKAgoCCgIAAACCgIACCoAigIigIigIigIigIiiKgAqCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACggoCCgIKA9wGmAAAAAAAFBBQAAAAAUFAEAFBBQEFAQUBBQEFAQAAAEFAQAEFQBFARFARFARFARFARFRFEUBABUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQRQAAAAAAAAB7grTCCgAAAAAAAoCKAAAAKKiggAAAAAoIKAgqAAAAAIoCCoAACCoAigIigIigIigIioCCoggqCoKgCKCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAoIKCAAAAPcBpkAABQQUAAAAABQRQAAFAVAAAAAAAAAAAAAABBQEAARQEABBUARQERUARUBBUBEUBEUQRFBUAFQVAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAABQEAAAAAAAAe4o0yigAAAAAKAigAAAAAoCgCACggoAAAAAACCgIKAgAAAIKgCKAgAIKgIKgIigIigIioCCoCCoioKgoioAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAKAgAAAAKAigAAD3AaZAABQAAAAAAAUAAAAFFAABAAAAAAAAAAAAAABBUAABBUARQERQERQERUBBUBAARFQBFRFEUBABUAAAAAAAAAAAAAAAAAAAAAAAAUAAAFRRAAAFAAAAEAAAAe4o0iKAAAAAAoAAAAAAAoCgAAKgAAAAAAAAAAgoCAAAAgqAAAgAIKgIKgIACIoCIqAgqIIACACoAKIqAAAAAAAAAAAAAAAAAAAAAAoAAAAigAAoAAAAgAACggoD3AaQAAAAUAAAAAAUAAAAUBQAEAAAAAAAAAAAABFAQVAAAQVAEUBEUBEVAEVAQVAQAERUQQVAQVBRFQBFBUAAAAAAAAAAAAAAAAAAAAUAAAAUQAAUAABAFBFAAAAAHuA0gAAoAAAAAAoAAAAAACgKAIAKCCgIKAgoCCgIAAAAigIAAigIACAAgAIigIioAioCIogiKgCKgoioAAKgAAAAAAAAAAAAAAAAAAAKAAAAqKIAoAAgACgAAAAAAA9wGkFAAAAAAFAAAAAAAUAAEUAUUBAAAAAAAAARQEAAAARUAABAAEVAEVAQAEABEVAEVEERUARUFEUBABUAAAAAAAAAAAAAAAAAAVFAAAAEUABUUAAQVFAAAAAFAQUB7gNIAAAAAoAAAAAACooAAAAoqKgAAAAAAAAAAAAIqAAAAAgACKgCKgCKgCKgIACAAiKiIgAqAAgAqACiKgAAAAAAAAAAAAAAAACooAAAAigAKAAAigAAAKAAAAAPcBpAAAABUUAAAAAAFAAAAARRQAAAAAAAAAAAAAABAAAAQABFQBFQBFQBFQBFQEABEVBEARUABABUAFEVAAAAAAAAAAAAAAAAAFRQAAFRRAAFAEAAUAAAFAAAAAB7gNIAAAAKAAAAAAAKAAAAAiqAoAIAAAAAAAAAAAAIAAACAAIqAAAiKgCKgCKgIACIqCIAioACACoAKIqAAAAAAAAAAAAAAAAAKigAAKiiAAKAIAoAAAAKAAAAAD3AaQAAABQAAAAAAAUAAAABFUBQAQAAAAAAAAAAAAQAAAEAAQAAARAAQAEAEABEARAEVAAQAVABRAAAAAAAAAAAAAAAAAAUAAAFAQABQBBQAAAABQAAAAAf//Z'
  }
];
