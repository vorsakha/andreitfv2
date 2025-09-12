export type ProjectSlug =
  | 'satsip'
  | 'dyenft'
  | 'pixel-points-jobs'
  | 'lumen'
  | 'nostr-links';

export interface ProjectMeta {
  slug: ProjectSlug;
  title: string;
  owner: string;
  repo: string;
  repoPrivate?: boolean;
  repoFallback?: {
    stars?: number;
    language?: string;
    description?: string;
    homepage?: string;
  };
  liveUrl?: string;
  imageUrl?: string;
  imagePosition?: 'top' | 'center' | 'bottom';
  imageAlt: string;
  summary: string;
  highlights: string[];
  overview?: string;
  keyFeatures?: string[];
  active?: boolean;
}

export const PROJECTS: ProjectMeta[] = [
  {
    slug: 'nostr-links',
    title: 'Nostr Links',
    owner: 'vorsakha',
    repo: 'alias',
    liveUrl: undefined,
    imageUrl: '/assets/links_screenshot.png',
    imagePosition: 'center',
    imageAlt: 'Nostr Links app screenshot',
    summary:
      'A fully decentralized profile platform for bitcoiners powered by Nostr. No servers, no databases, no centralized control - your data lives on the Nostr network where you own it completely. Think of it as a decentralized Linktree where bitcoiners can showcase their content, social links, and receive Lightning payments.',
    highlights: [
      'Decentralized',
      'Bitcoin',
      'Web3',
      'Nostr Protocol',
      'Lightning Network',
      'Next.js',
      'TypeScript',
    ],
    overview:
      'Nostr Links is a fully decentralized profile platform for bitcoiners powered by Nostr. No servers, no databases, no centralized control - your data lives on the Nostr network where you own it completely. Think of it as a decentralized Linktree where bitcoiners can showcase their content, social links, and receive Lightning payments - all stored permanently on Nostr relays worldwide.',
    keyFeatures: [
      '🚀 Fully Decentralized – No servers, no databases - data lives on Nostr',
      '🔐 Self-Sovereign – You own your data, you control your identity',
      '⚡ Lightning Fast – Real-time updates via Nostr subscriptions',
      '🎨 Beautiful Profiles – 20+ customizable themes across 6 categories',
      '⚡ Lightning Zaps – Instant Bitcoin payments via Lightning Network',
      '🔗 Link Management – Drag-and-drop link organization with rich previews',
      "🛡️ Censorship Resistant – Your content can't be taken down",
      '🎭 Theme Customization – Minimal, Vibrant, Professional, Creative, Retro, and Futuristic themes',
      '🔄 Real-time Updates – Live profile updates across all connected clients',
    ],
    active: true,
  },
  {
    slug: 'satsip',
    title: 'Satsip',
    owner: 'vorsakha',
    repo: 'satsip',
    liveUrl: undefined,
    imageUrl: '/assets/satsip_screenshot.png',
    imagePosition: 'center',
    imageAlt: 'Satsip app screenshot',
    summary:
      'A modern Bitcoin Lightning payment profile platform that allows creators to easily receive tips and payments from their audience. Think of it as a "Lightning Linktree" where creators can showcase their content, social links, and receive Bitcoin payments all in one place.',
    highlights: [
      'Web3',
      'Lightning Network',
      'Invoices',
      'Next.js',
      'TypeScript',
    ],
    overview:
      'SatSip is a modern Bitcoin Lightning payment profile platform that enables creators to showcase their content, share social links, and receive instant crypto payments. Think of it as a "Lightning Linktree" — combining a customizable profile page with seamless multi-chain payment support. This project highlights expertise in full-stack Web3 development, authentication, database design, and crypto payment integrations.',
    keyFeatures: [
      '⚡ Lightning Payments – One-click Bitcoin Lightning tipping directly from profiles',
      '🌐 Multi-Wallet Support – Accept Bitcoin, Ethereum, Solana, Dogecoin, and Monero',
      '🎨 Customizable Profiles – Avatars, bios, themes, and link galleries with rich previews',
      '🔗 Link Management – Showcase content, social media, and projects in one place',
      '📱 QR Code Payments – Auto-generated QR codes for fast mobile transactions',
      '🛠️ Modern Tech Stack – Next.js 15, TypeScript, Prisma, tRPC, Tailwind, PostgreSQL',
      '🔒 Secure Auth – Discord OAuth + NextAuth.js for streamlined onboarding',
    ],
    active: false,
  },
  {
    slug: 'dyenft',
    title: 'DyeNFT',
    owner: 'vorsakha',
    repo: 'dyenft',
    liveUrl: undefined,
    imageUrl: '/assets/dye_screenshot.png',
    imagePosition: 'top',
    imageAlt: 'DyeNFT app screenshot',
    summary:
      'A fullstack application that leverages adynamic ERC721 smart contract that generates fully on-chain animated SVG NFTs that evolve in real-time based on blockchain data.',
    highlights: [
      'Web3',
      'ERC-721',
      'Smart Contracts',
      'React.js',
      'TypeScript',
    ],
    overview:
      "Dye NFT is an innovative ERC721 project that generates fully on-chain, animated SVG NFTs that evolve in real time with blockchain data. Unlike static NFTs, each piece is a living artwork that transforms based on its owner's ETH balance, the current block number, and other on-chain variables. This project demonstrates expertise in smart contract engineering, gas optimization, on-chain generative art, and modern Web3 frontend development.",
    keyFeatures: [
      '🎨 Dynamic Visuals – NFTs change colors, shapes, and animations based on blockchain state and wallet balances',
      '⚡ Real-Time Updates – Artwork and metadata refresh automatically with each new block',
      '🌌 On-Chain Generative Art – 100% on-chain SVGs with procedural starfields, orbital rings, and morphing shapes',
      "💎 Balance-Responsive Animations – NFT speed and effects adapt to the owner's ETH holdings",
      '🔗 Modern Web3 Frontend – React + TypeScript + Vite + Tailwind, with wallet integration via Wagmi & Viem',
      '📱 Responsive NFT Gallery – Beautiful, real-time gallery with dark/light themes and smooth animations',
      '🛠️ Optimized Smart Contracts – Gas-efficient Solidity code using OpenZeppelin libraries, with full test coverage',
    ],
    active: true,
  },
  {
    slug: 'pixel-points-jobs',
    title: 'Pixel Points Jobs',
    owner: 'vorsakha',
    repo: 'pixel-points-jobs',
    liveUrl: undefined,
    imageUrl: '/assets/pixel_screenshot.png',
    imagePosition: 'top',
    imageAlt: 'Pixel Points Jobs screenshot',
    summary:
      'A decentralized application (dApp) that is a job board for web3 developers. Users can claim daily points, purchase additional points with ETH, and use their points to extend their navigation time.',
    highlights: ['Web3', 'Onchain', 'Smart Contracts', 'Next.js', 'TypeScript'],
    overview:
      'Pixel Points is a decentralized job board for Web3 developers that introduces a gamified point system. Users can claim daily points, purchase additional points with ETH, and spend them to extend their browsing time. The project combines ERC20 token mechanics with a modern Web3 frontend, showcasing skills in smart contract development, wallet integration, and dApp UX design.',
    keyFeatures: [
      '🪙 ERC20 Token System – Custom smart contract for point claiming, purchasing, and spending',
      '⏳ Daily Rewards – Users claim free points every day to encourage engagement',
      '💰 ETH Payments – Buy additional points directly with Ethereum',
      '🧭 Navigation Time Tracking – Points extend browsing time on the job board',
      '🔗 Wallet Integration – Seamless MetaMask + Wagmi hooks for Web3 interactions',
      '🛠️ Modern Tech Stack – Next.js 14, TypeScript, Hardhat, Solidity, Tailwind, Zustand, OpenZeppelin',
    ],
    active: true,
  },
  {
    slug: 'lumen',
    title: 'Lumen AI',
    owner: 'vorsakha',
    repo: 'lumen',
    repoPrivate: true,
    repoFallback: {
      stars: 0,
      language: 'TypeScript',
      description:
        'Lumen AI is a conversational Catholic Bible companion that provides daily liturgical readings, personalized reading plans, guided journaling, rosary assistance, and confession preparation.',
      homepage: undefined,
    },
    liveUrl: undefined,
    imageUrl: '/assets/lumen_screenshot.png',
    imagePosition: 'top',
    imageAlt: 'Lumen AI screenshot',
    summary:
      'A conversational Catholic Bible companion that helps you study Scripture, follow the daily liturgy, generate personalized reading plans, journal with guided prompts, prepare for confession, and pray the rosary — all through a natural chat experience.',
    highlights: [
      'Conversational AI',
      'Catholic Doctrine',
      'Next.js',
      'TypeScript',
      'Stripe',
      'PostgreSQL',
    ],
    overview:
      'Lumen AI is a conversational Catholic Bible companion designed to help users engage with Scripture and Catholic tradition in a natural, pastoral way. It provides daily liturgical readings, personalized reading plans, guided journaling, rosary assistance, and confession preparation. Built with resilience, internationalization, and subscription support, it demonstrates expertise in AI integration, full‑stack development, and faith‑aligned product design.',
    keyFeatures: [
      '💬 Conversational AI (EN/PT) – Ask questions about Scripture and Catholic teaching; responses strictly follow Catholic doctrine with cross‑references',
      '📖 Daily Liturgical Readings – Fetches Catholic readings for any date (EN/PT) with caching and resilience',
      '📚 Personalized Reading Plans – AI‑generated plans with progress tracking, completion, and daily advancement',
      '🔍 Scripture Study Tools – Inline passage retrieval from local Bible datasets (NABRE, Bíblia Ave Maria)',
      '📝 Guided Journaling & Reflections – Prompts inspired by "A Bíblia no meu dia‑a‑dia"',
      '🌹 Rosary Assistant – Start, continue, and complete rosary sessions with mystery tracking',
      '🙏 Confession Preparation – Guided examination of conscience with multiple methods',
      '💳 Subscriptions – Single plan with free trial, monthly/yearly billing via Stripe',
      '🛠️ Modern Tech Stack – Next.js 15, React 19, Tailwind 4, tRPC 11, Prisma 6, Vercel AI SDK',
      '🔒 Secure Auth – Google OAuth via NextAuth + Prisma adapter',
      '🌍 Internationalization – English & Portuguese support with `next-intl`',
    ],
    active: true,
  },
];

export const BLUR_DATA_URL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';
