const META_MAP: Record<string, { title: string; description: string; h1: string }> = {
  "/": {
    title: "Cypher Digital | Digital Marketing Agency Sri Lanka",
    description: "Best digital marketing agency in Sri Lanka. Social media management, Facebook & Google Ads, SEO, video production & graphic design",
    h1: "Social Media & Digital Marketing Solutions in Sri Lanka",
  },
  "/social-media-management-sri-lanka": {
    title: "Social Media Marketing Sri Lanka (2026) | Expert Management from LKR 60,000/mo | Cypher Digital",
    description: "Professional social media marketing services in Sri Lanka. Facebook, Instagram, TikTok & LinkedIn management, content creation, advertising & analytics. Packages from LKR 60,000/month.",
    h1: "Social Media Marketing Sri Lanka – Grow Your Business with Expert Social Media Management",
  },
  "/facebook-ads-sri-lanka": {
    title: "Facebook Ads Sri Lanka (2026) | Facebook Marketing Sri Lanka | Cypher Digital",
    description: "Professional Facebook marketing services in Sri Lanka. Lead generation, retargeting & conversion campaigns. Data-driven Facebook Ads from LKR 25,000/month. Get results with Cypher Digital.",
    h1: "Facebook Marketing Sri Lanka – High-Performance Facebook Ads That Drive Results",
  },
  "/google-ads-sri-lanka": {
    title: "Google Ads Sri Lanka (2026) | PPC Advertising & Google Marketing | Cypher Digital",
    description: "Professional Google Ads management in Sri Lanka. Search Ads, Display Ads, YouTube Ads & Shopping Ads with 5x average ROAS. Data-driven PPC campaigns from LKR 50,000/month. Free account audit.",
    h1: "Google Ads Sri Lanka – High-Performance PPC Advertising That Drives Results",
  },
  "/video-production-sri-lanka": {
    title: "Video Production Sri Lanka (2026) | Social Media Videos from LKR 15,000 | Cypher Digital",
    description: "Professional video production in Sri Lanka. Social media videos, Instagram Reels, ad creatives, brand stories & product demos from LKR 15,000. 48hr turnaround. Digital-first video by Cypher Digital.",
    h1: "Video Production Sri Lanka – Digital-First Video Content That Drives Results",
  },
  "/seo-services-sri-lanka": {
    title: "SEO Sri Lanka (2026) | SEO Services Sri Lanka | On-Page & Off-Page SEO from LKR 25,000 | Cypher Digital",
    description: "Professional SEO services in Sri Lanka. On-page optimization, technical SEO, link building, content marketing & local SEO from LKR 25,000/month. Rank #1 on Google with Cypher Digital.",
    h1: "SEO Sri Lanka – Rank #1 on Google with Data-Driven SEO Services",
  },
  "/graphic-design-sri-lanka": {
    title: "Graphic Design Sri Lanka (2026) | Professional Design Services | Cypher Digital",
    description: "Professional graphic design services in Sri Lanka. Logos, branding, social media graphics, packaging & marketing collateral from LKR 6,000. 48hr turnaround. Unlimited revisions by Cypher Digital.",
    h1: "Graphic Design Sri Lanka – Professional Design Services That Build Powerful Brands",
  },
  "/tiktok-marketing-sri-lanka": {
    title: "TikTok Marketing Sri Lanka (2026) | TikTok Ads & Viral Campaigns | Cypher Digital",
    description: "Professional TikTok marketing services in Sri Lanka. Viral content creation, TikTok Ads management, influencer marketing & trend optimization. Cost-effective campaigns from LKR 30,000/month.",
    h1: "TikTok Marketing Sri Lanka – Grow Your Brand with Viral, Cost-Effective Campaigns",
  },
  "/advertising-in-sri-lanka": {
    title: "Advertising in Sri Lanka (2026) – Complete Guide | Cypher Digital",
    description: "The #1 guide to advertising in Sri Lanka. Learn about digital advertising costs, best platforms, targeting strategies, industry-specific marketing, and how to grow your business with Google Ads, Facebook Ads, SEO & more.",
    h1: "Advertising in Sri Lanka: The Complete Guide to Digital Advertising for Businesses",
  },
  "/contact": {
    title: "Contact Cypher Digital | Get a Free Consultation",
    description: "Contact Cypher Digital for a free digital marketing consultation. Call +94 70 177 2626 or visit us in Colombo, Sri Lanka. We're ready to grow your business.",
    h1: "Contact Us",
  },
  "/blog": {
    title: "Blog | Digital Marketing Insights Sri Lanka",
    description: "Expert digital marketing tips, strategies, and insights for businesses in Sri Lanka. Learn about social media, SEO, Google Ads, and more.",
    h1: "Digital Marketing Insights",
  },
  // Industry pages
  "/hotel-digital-marketing-sri-lanka": {
    title: "Hotel Digital Marketing Sri Lanka | Increase Direct Bookings | Cypher Digital",
    description: "Expert hotel digital marketing in Sri Lanka. SEO, social media, Google Ads & conversion optimization to increase direct bookings and reduce OTA dependency.",
    h1: "Hotel Digital Marketing in Sri Lanka: The Ultimate Strategy to Increase Direct Bookings",
  },
  "/travel-agency-digital-marketing-sri-lanka": {
    title: "Travel Agency Digital Marketing Sri Lanka | Get More Tour Bookings | Cypher Digital",
    description: "Expert travel agency digital marketing in Sri Lanka. SEO, social media, Google Ads & CRO strategies to increase tour bookings and reach international travelers.",
    h1: "Travel Agency Digital Marketing in Sri Lanka – The Ultimate Guide to Getting More Tour Bookings",
  },
  "/fashion-brand-digital-marketing-sri-lanka": {
    title: "Fashion Brand Digital Marketing Sri Lanka | Clothing Brand Marketing Agency",
    description: "Grow your clothing brand online with social media marketing, influencer campaigns, SEO, and Facebook ads in Sri Lanka. Fashion advertising agency.",
    h1: "Digital Marketing for Fashion & Clothing Brands in Sri Lanka",
  },
  "/restaurant-digital-marketing-sri-lanka": {
    title: "Restaurant Marketing Agency Sri Lanka | Social Media Marketing for Restaurants",
    description: "Increase restaurant customers with social media marketing, food photography, local SEO, and targeted advertising campaigns in Sri Lanka.",
    h1: "Digital Marketing for Restaurants in Sri Lanka",
  },
  "/real-estate-digital-marketing-sri-lanka": {
    title: "Real Estate Digital Marketing Sri Lanka | Property Marketing Agency",
    description: "Generate property buyers and investor leads with real estate digital marketing, SEO, video marketing, and paid advertising campaigns in Sri Lanka.",
    h1: "Digital Marketing for Real Estate Companies in Sri Lanka",
  },
  "/education-marketing-agency-sri-lanka": {
    title: "Education Marketing Agency Sri Lanka | Student Lead Generation",
    description: "Get more student enrollments with digital marketing for institutes, universities, and tuition classes in Sri Lanka. SEO, social media, and paid ads.",
    h1: "Digital Marketing for Education Institutes in Sri Lanka",
  },
  "/beauty-salon-digital-marketing-sri-lanka": {
    title: "Beauty Salon Digital Marketing Sri Lanka | Salon Marketing Agency",
    description: "Grow your beauty salon with social media marketing, Instagram growth strategies, local SEO, and targeted ads in Sri Lanka. Spa marketing agency.",
    h1: "Digital Marketing for Beauty Salons in Sri Lanka",
  },
  "/automotive-digital-marketing-sri-lanka": {
    title: "Automotive Digital Marketing Sri Lanka | Car Dealer Marketing Agency",
    description: "Generate car buyer leads with automotive digital marketing, video showcases, SEO, and targeted ads in Sri Lanka. Vehicle advertising agency.",
    h1: "Digital Marketing for Automotive Businesses in Sri Lanka",
  },
  "/small-business-digital-marketing-sri-lanka": {
    title: "Digital Marketing for Small Businesses in Sri Lanka | SME Marketing Agency",
    description: "Affordable digital marketing solutions for small businesses in Sri Lanka. Social media, SEO, ads, branding and lead generation for SMEs.",
    h1: "Digital Marketing for Small Businesses in Sri Lanka",
  },
  "/ecommerce-digital-marketing-sri-lanka": {
    title: "Ecommerce Digital Marketing Sri Lanka | Online Store Marketing Agency",
    description: "Increase online sales with ecommerce marketing strategies including SEO, Facebook ads, Google Shopping, product videos, and retargeting campaigns in Sri Lanka.",
    h1: "Ecommerce Digital Marketing Services in Sri Lanka",
  },
  // Blog posts
  "/blog/why-social-media-management-important-businesses-sri-lanka": {
    title: "Why Social Media Management is Important for Businesses in Sri Lanka",
    description: "Learn why a structured social media strategy is essential for Sri Lankan businesses to grow reach, engagement, and conversions.",
    h1: "Why Social Media Management is Important for Businesses in Sri Lanka",
  },
  "/blog/how-strong-visual-branding-improves-marketing-performance": {
    title: "How Strong Visual Branding Improves Marketing Performance",
    description: "Learn how consistent visual branding improves marketing performance, brand recognition, and conversions for Sri Lankan businesses.",
    h1: "How Strong Visual Branding Improves Marketing Performance",
  },
  "/blog/google-search-ads-vs-display-ads-difference": {
    title: "Google Search Ads vs Display Ads — Understanding the Difference",
    description: "Understand the difference between Google Search Ads and Display Ads, and how to use both for maximum ROI in Sri Lanka.",
    h1: "Google Search Ads vs Display Ads — Understanding the Difference",
  },
  "/blog/local-seo-strategies-sri-lankan-businesses": {
    title: "Local SEO Strategies for Sri Lankan Businesses",
    description: "Learn effective local SEO strategies for Sri Lankan businesses — Google Business Profile, local keywords, citations, and reviews.",
    h1: "Local SEO Strategies for Sri Lankan Businesses",
  },
  "/blog/how-facebook-campaigns-help-businesses-grow-sri-lanka": {
    title: "How Facebook Campaigns Help Businesses Grow in Sri Lanka",
    description: "Learn how structured Facebook campaigns help Sri Lankan businesses reach targeted audiences, generate leads, and drive scalable growth.",
    h1: "How Facebook Campaigns Help Businesses Grow in Sri Lanka",
  },
  "/blog/facebook-campaign-strategy-guide-sri-lankan-brands": {
    title: "Facebook Campaign Strategy Guide for Sri Lankan Brands",
    description: "A strategic guide to Facebook campaign funnels — awareness, consideration, conversion, and retargeting for Sri Lankan brands.",
    h1: "Facebook Campaign Strategy Guide for Sri Lankan Brands",
  },
  "/blog/how-ad-videos-increase-conversions-businesses": {
    title: "How Ad Videos Increase Conversions for Businesses",
    description: "Discover how ad videos drive conversions for Sri Lankan businesses — hooks, storytelling, platform optimization, and measurable results.",
    h1: "How Ad Videos Increase Conversions for Businesses",
  },
  "/blog/social-media-design-best-practices-better-engagement": {
    title: "Social Media Design Best Practices for Better Engagement",
    description: "Learn social media design best practices — visual hierarchy, consistency, platform adaptation, and how professional design improves engagement.",
    h1: "Social Media Design Best Practices for Better Engagement",
  },
  "/blog/google-ads-vs-facebook-ads-which-better-business": {
    title: "Google Ads vs Facebook Ads — Which is Better for Your Business?",
    description: "Compare Google Ads and Facebook Ads — understand intent vs discovery, when to use each, and how to combine both for maximum results.",
    h1: "Google Ads vs Facebook Ads — Which is Better for Your Business?",
  },
  "/blog/how-to-rank-on-google-sri-lanka-practical-guide": {
    title: "How to Rank on Google in Sri Lanka — Practical Guide",
    description: "A practical guide to ranking on Google in Sri Lanka — keyword research, on-page SEO, technical optimization, and authority building.",
    h1: "How to Rank on Google in Sri Lanka — Practical Guide",
  },
  "/blog/benefits-corporate-video-production-brands": {
    title: "Benefits of Corporate Video Production for Brands",
    description: "Discover how corporate videos strengthen brand credibility, communicate values, and support marketing for Sri Lankan businesses.",
    h1: "Benefits of Corporate Video Production for Brands",
  },
  "/blog/how-consistent-social-media-posting-builds-brand-trust": {
    title: "How Consistent Social Media Posting Builds Brand Trust",
    description: "Learn how consistent social media posting builds brand trust, improves reach, and drives growth for businesses in Sri Lanka.",
    h1: "How Consistent Social Media Posting Builds Brand Trust",
  },
  "/blog/flyer-design-tips-improve-marketing-results": {
    title: "Flyer Design Tips That Improve Marketing Results",
    description: "Learn flyer design tips — clarity, visual hierarchy, branding consistency, and how professional design improves marketing results.",
    h1: "Flyer Design Tips That Improve Marketing Results",
  },
  "/blog/ppc-advertising-explained-sri-lankan-businesses": {
    title: "PPC Advertising Explained for Sri Lankan Businesses",
    description: "Understand PPC advertising — how Google Ads works, keyword selection, ad optimization, and generating leads for Sri Lankan businesses.",
    h1: "PPC Advertising Explained for Sri Lankan Businesses",
  },
  "/blog/technical-seo-checklist-better-website-performance": {
    title: "Technical SEO Checklist for Better Website Performance",
    description: "A technical SEO checklist — site speed, mobile responsiveness, crawlability, sitemaps, and fixing common issues for better rankings.",
    h1: "Technical SEO Checklist for Better Website Performance",
  },
  "/blog/video-marketing-strategy-guide-sri-lankan-businesses": {
    title: "Video Marketing Strategy Guide for Sri Lankan Businesses",
    description: "Build an effective video marketing strategy — goals, formats, consistency, and distribution for Sri Lankan businesses.",
    h1: "Video Marketing Strategy Guide for Sri Lankan Businesses",
  },
  "/blog/graphic-design-mistakes-damage-brand": {
    title: "Graphic Design Mistakes That Can Damage Your Brand",
    description: "Avoid common graphic design mistakes — inconsistency, clutter, low quality, and poor mobile optimization that damage brand perception.",
    h1: "Graphic Design Mistakes That Can Damage Your Brand",
  },
  "/blog/google-ads-optimization-tips-improve-campaign-performance": {
    title: "Google Ads Optimization Tips to Improve Campaign Performance",
    description: "Google Ads optimization tips — keyword refinement, ad copy testing, landing pages, and performance analysis for better ROI.",
    h1: "Google Ads Optimization Tips to Improve Campaign Performance",
  },
  "/blog/on-page-seo-guide-better-rankings": {
    title: "On-Page SEO Guide for Better Rankings",
    description: "On-page SEO guide — titles, meta descriptions, headings, internal linking, content structure, and keyword intent for better rankings.",
    h1: "On-Page SEO Guide for Better Rankings",
  },
  "/blog/why-industry-specific-digital-marketing-important-businesses-sri-lanka": {
    title: "Why Industry-Specific Digital Marketing Is Important for Businesses in Sri Lanka",
    description: "Learn why industry-specific digital marketing strategies are essential for Sri Lankan businesses — hotels, travel, fashion, restaurants, real estate, education, and more.",
    h1: "Why Industry-Specific Digital Marketing Is Important for Businesses in Sri Lanka",
  },
  "/blog/why-tiktok-marketing-essential-sri-lankan-businesses": {
    title: "Why TikTok Marketing is Essential for Sri Lankan Businesses in 2026",
    description: "Discover why TikTok has become the most powerful marketing platform for businesses in Sri Lanka — massive reach, low costs, and viral potential.",
    h1: "Why TikTok Marketing is Essential for Sri Lankan Businesses in 2026",
  },
  "/blog/how-create-viral-tiktok-content-business": {
    title: "How to Create Viral TikTok Content for Your Business",
    description: "Learn the proven strategies for creating TikTok videos that go viral — hooks, storytelling, trends, and optimization tips for Sri Lankan brands.",
    h1: "How to Create Viral TikTok Content for Your Business",
  },
  "/blog/facebook-instagram-management-guide-sri-lankan-brands": {
    title: "Facebook & Instagram Management Guide for Sri Lankan Brands",
    description: "A complete guide to managing Facebook and Instagram for Sri Lankan brands — content strategy, visual branding, engagement, and analytics.",
    h1: "Facebook & Instagram Management Guide for Sri Lankan Brands",
  },
  "/blog/tiktok-ads-vs-facebook-ads-sri-lankan-businesses": {
    title: "TikTok Ads vs Facebook Ads — Which is Better for Sri Lankan Businesses?",
    description: "Compare TikTok Ads and Facebook Ads for Sri Lankan businesses — cost, reach, engagement, targeting, and which platform delivers better ROI.",
    h1: "TikTok Ads vs Facebook Ads — Which is Better for Sri Lankan Businesses?",
  },
  "/blog/tiktok-influencer-marketing-guide-sri-lankan-brands": {
    title: "TikTok Influencer Marketing Guide for Sri Lankan Brands",
    description: "Learn how to leverage TikTok influencer marketing in Sri Lanka — finding creators, collaboration strategies, and measuring ROI for your brand.",
    h1: "TikTok Influencer Marketing Guide for Sri Lankan Brands",
  },
  "/blog/tiktok-marketing-hotels-tourism-sri-lanka": {
    title: "TikTok Marketing for Hotels and Tourism Businesses in Sri Lanka",
    description: "Learn how hotels and tourism businesses in Sri Lanka can use TikTok marketing to attract guests, showcase experiences, and drive bookings.",
    h1: "TikTok Marketing for Hotels and Tourism Businesses in Sri Lanka",
  },
  "/blog/ultimate-guide-advertising-sri-lanka": {
    title: "The Ultimate Guide to Advertising in Sri Lanka (2026)",
    description: "Explore the complete evolution, types, and strategies for advertising in Sri Lanka — from traditional media to high-ROI digital platforms.",
    h1: "The Ultimate Guide to Advertising in Sri Lanka (2026)",
  },
  "/blog/why-digital-advertising-replacing-traditional-sri-lanka": {
    title: "Why Digital Advertising is Replacing Traditional Advertising in Sri Lanka",
    description: "Discover why Sri Lankan businesses are shifting from traditional advertising to digital — cost comparison, targeting, ROI, and the platforms driving growth.",
    h1: "Why Digital Advertising is Replacing Traditional Advertising in Sri Lanka",
  },
  "/blog/cost-effective-advertising-strategies-sri-lankan-businesses": {
    title: "Cost-Effective Advertising Strategies for Sri Lankan Businesses",
    description: "Discover the most cost-effective advertising strategies for Sri Lankan businesses — social media, Google Ads, SEO, content marketing, and email marketing.",
    h1: "Cost-Effective Advertising Strategies for Sri Lankan Businesses",
  },
  "/blog/complete-guide-facebook-ads-businesses-sri-lanka": {
    title: "Complete Guide to Facebook Ads for Businesses in Sri Lanka",
    description: "Learn how Facebook Ads can generate leads and drive sales for Sri Lankan businesses with advanced targeting, creative strategy, and campaign optimization.",
    h1: "Complete Guide to Facebook Ads for Businesses in Sri Lanka",
  },
  "/blog/why-video-production-essential-business-growth-sri-lanka": {
    title: "Why Video Production is Essential for Business Growth in Sri Lanka",
    description: "Discover how professional video production helps Sri Lankan businesses capture attention, improve branding, and increase conversions.",
    h1: "Why Video Production is Essential for Business Growth in Sri Lanka",
  },
  "/blog/importance-professional-graphic-design-modern-brands": {
    title: "Importance of Professional Graphic Design for Modern Brands",
    description: "Learn why professional graphic design is critical for brand identity, marketing performance, and credibility for Sri Lankan businesses.",
    h1: "Importance of Professional Graphic Design for Modern Brands",
  },
  "/blog/how-google-ads-helps-businesses-high-intent-customers": {
    title: "How Google Ads Helps Businesses Get High Intent Customers",
    description: "Learn how Google Ads targets high-intent customers through search, display, and YouTube ads to drive conversions for Sri Lankan businesses.",
    h1: "How Google Ads Helps Businesses Get High Intent Customers",
  },
  "/blog/why-seo-important-long-term-business-growth": {
    title: "Why SEO is Important for Long-Term Business Growth",
    description: "Learn why SEO is essential for sustainable organic growth, visibility, and lead generation for businesses in Sri Lanka.",
    h1: "Why SEO is Important for Long-Term Business Growth",
  },
  "/blog/types-business-videos-increase-engagement-sales": {
    title: "Types of Business Videos That Increase Engagement and Sales",
    description: "Explore the types of business videos that boost engagement and sales in Sri Lanka — promotional, explainer, testimonial, and social media reels.",
    h1: "Types of Business Videos That Increase Engagement and Sales",
  },
};

const escapeAttr = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

export default async function handler(request: Request, context: any) {
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/$/, "") || "/";
  const meta = META_MAP[path];

  if (!meta) {
    return context.next();
  }

  const response = await context.next();
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) {
    return response;
  }

  const safeTitle = escapeAttr(meta.title);
  const safeDescription = escapeAttr(meta.description);
  const canonical = `https://cypherdigital.lk${path}`;

  let modified = (await response.text())
    .replace(/<title>[^<]*<\/title>/, `<title>${safeTitle}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${safeDescription}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${safeTitle}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${safeDescription}" />`
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:url" content="${canonical}" />`
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:title" content="${safeTitle}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:description" content="${safeDescription}" />`
    );

  // Inject H1 into body for crawlers that don't execute JS
  const safeH1 = escapeAttr(meta.h1);
  modified = modified.replace(
    '<div id="root"></div>',
    `<div id="root"><h1>${safeH1}</h1></div>`
  );
    modified = modified.replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${canonical}" />`
    );
  } else {
    modified = modified.replace(
      "</head>",
      `  <link rel="canonical" href="${canonical}" />\n  </head>`
    );
  }

  const headers = new Headers(response.headers);
  headers.delete("content-length");
  headers.delete("etag");

  return new Response(modified, {
    status: response.status,
    headers,
  });
}

export const config = { path: "/*" };
