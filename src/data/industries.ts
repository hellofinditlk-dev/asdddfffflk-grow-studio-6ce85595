export interface IndustryFormField {
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}

export interface IndustryStrategySection {
  heading: string;
  description?: string;
  subsections: { h3: string; paragraphs: string[]; bullets?: string[] }[];
}

export interface IndustryData {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  servicesHeading: string;
  services: string[];
  ctaHeading: string;
  ctaDescription: string;
  ctaButtonText: string;
  formFields: IndustryFormField[];
  faqs: { q: string; a: string }[];
  /** Optional extended SEO content sections */
  challengesHeading?: string;
  challengesIntro?: string;
  challengesList?: string[];
  challengesOutro?: string;
  strategy?: IndustryStrategySection;
  videoContentHeading?: string;
  videoContentIntro?: string;
  videoContentList?: string[];
  videoContentOutro?: string;
  benefitsHeading?: string;
  benefitsIntro?: string;
  benefitsList?: string[];
  benefitsOutro?: string;
  whyChooseHeading?: string;
  whyChooseIntro?: string;
  whyChooseList?: string[];
  bottomCtaHeading?: string;
  bottomCtaText?: string[];
  industryLinksHeading?: string;
  industryLinksIntro?: string;
}

export const industries: IndustryData[] = [
  {
    slug: "hotel-digital-marketing-sri-lanka",
    seoTitle: "Hotel Digital Marketing Agency in Sri Lanka | Cypher Digital",
    metaDescription: "Digital marketing services for hotels and resorts in Sri Lanka. Increase bookings with social media marketing, video content, and targeted advertising.",
    h1: "Hotel Digital Marketing Services in Sri Lanka",
    intro: "Cypher Digital is a leading hotel digital marketing agency in Sri Lanka, helping hotels and resorts increase online visibility, attract international travelers, and boost direct bookings through strategic online marketing. Based in Colombo, we serve hospitality businesses across Sri Lanka with data-driven hotel marketing, resort digital marketing, and tourism marketing strategies.",
    servicesHeading: "Our Hotel Marketing Services",
    services: [
      "Social media marketing for hotels",
      "Hotel booking advertising campaigns",
      "Professional hotel video & photography",
      "Google Ads for hotel searches",
      "SEO for hotel websites in Sri Lanka",
    ],
    ctaHeading: "Get More Direct Hotel Bookings",
    ctaDescription: "Our team uses Meta ads, SEO, and social media marketing to attract travelers searching for hotels in Sri Lanka.",
    ctaButtonText: "Get a Free Hotel Marketing Consultation",
    formFields: [
      { name: "name", placeholder: "Your Name *", required: true },
      { name: "email", placeholder: "Email Address", type: "email" },
      { name: "phone", placeholder: "Phone Number *", type: "tel", required: true },
      { name: "hotelName", placeholder: "Hotel Name" },
      { name: "budget", placeholder: "Monthly Marketing Budget" },
      { name: "message", placeholder: "Tell us about your hotel marketing needs..." },
    ],
    // --- Extended SEO content ---
    challengesHeading: "Common Marketing Challenges Hotels Face",
    challengesIntro: "The hospitality industry in Sri Lanka has become highly competitive with hundreds of hotels, boutique villas, and resorts competing for visibility online. Many hotels struggle with low direct bookings because they rely heavily on booking platforms instead of strong digital marketing.",
    challengesList: [
      "Low visibility on Google search results",
      "Dependence on third-party booking platforms",
      "Poor social media engagement",
      "Lack of professional visual content",
      "Limited international reach",
    ],
    challengesOutro: "Cypher Digital helps hotels overcome these challenges through strategic hotel digital marketing in Sri Lanka, combining search engine optimization, social media marketing, and targeted advertising.",
    strategy: {
      heading: "Our Proven Hotel Marketing Strategy",
      description: "Our hotel marketing strategy focuses on increasing visibility, engagement, and direct bookings through multiple digital channels.",
      subsections: [
        {
          h3: "Search Engine Optimization for Hotels",
          paragraphs: [
            "SEO helps hotel websites appear when travelers search for terms such as 'hotels in Sri Lanka', 'best resorts in Sri Lanka', 'luxury hotels Sri Lanka', and 'boutique hotels Sri Lanka'.",
          ],
          bullets: [
            "Keyword research",
            "On-page SEO optimization",
            "Content marketing",
            "Technical SEO improvements",
          ],
        },
        {
          h3: "Social Media Marketing for Hotels",
          paragraphs: [
            "Social media platforms like Instagram and Facebook are powerful tools for showcasing hotel experiences.",
          ],
          bullets: [
            "Professional hotel photography and video reels",
            "Travel storytelling content",
            "Destination promotion",
            "Guest experience highlights",
            "Influencer collaborations",
          ],
        },
        {
          h3: "Paid Advertising Campaigns",
          paragraphs: [
            "Paid advertising allows hotels to reach travelers actively searching for accommodation.",
          ],
          bullets: [
            "Facebook & Instagram Ads",
            "Google Search Ads",
            "Google Display Ads",
            "Retargeting campaigns",
          ],
        },
      ],
    },
    videoContentHeading: "Professional Video Content for Hotels",
    videoContentIntro: "Visual content is essential for attracting travelers.",
    videoContentList: [
      "Hotel property tours",
      "Luxury room showcases",
      "Drone videos of resorts",
      "Destination marketing videos",
      "Short social media reels",
    ],
    videoContentOutro: "High-quality videos significantly increase engagement and booking conversions.",
    benefitsHeading: "Why Hotels Need Digital Marketing",
    benefitsIntro: "Hotels that invest in digital marketing experience measurable growth.",
    benefitsList: [
      "Increased direct bookings",
      "Higher brand awareness",
      "Improved search engine rankings",
      "Stronger social media engagement",
      "Better return on marketing investment",
    ],
    benefitsOutro: "Digital marketing allows hotels to attract travelers from both local and international markets.",
    whyChooseHeading: "Why Choose Cypher Digital for Hotel Marketing",
    whyChooseIntro: "Cypher Digital is a results-driven digital marketing agency specializing in industry-specific strategies.",
    whyChooseList: [
      "Experienced marketing professionals",
      "Creative content production team",
      "Data-driven advertising strategies",
      "Customized marketing solutions for hotels",
    ],
    bottomCtaHeading: "Get More Hotel Bookings with Cypher Digital",
    bottomCtaText: [
      "If you want to increase your hotel's online visibility and attract more guests, Cypher Digital can help.",
      "Our hotel marketing experts develop customized strategies that drive bookings, improve brand awareness, and maximize your marketing investment.",
      "Contact us today for a free hotel marketing consultation.",
    ],
    industryLinksHeading: "Digital Marketing Services for Multiple Industries",
    industryLinksIntro: "In addition to hotel marketing, Cypher Digital provides digital marketing solutions for various industries across Sri Lanka and Colombo:",
    faqs: [
      { q: "What is hotel digital marketing?", a: "Hotel digital marketing involves promoting hotels online using strategies such as social media marketing, search engine optimization, paid advertising, and video content to increase bookings." },
      { q: "How can digital marketing increase hotel bookings?", a: "Digital marketing increases visibility on search engines and social media, allowing hotels to reach travelers actively searching for accommodation in Sri Lanka." },
      { q: "How long does hotel SEO take to show results?", a: "SEO improvements typically show results within 3–6 months depending on competition and website optimization." },
      { q: "What platforms are best for hotel marketing?", a: "The most effective platforms include Google Search, Instagram, Facebook, and travel-focused content marketing." },
      { q: "How much does hotel digital marketing cost in Sri Lanka?", a: "Our hotel marketing packages start from affordable monthly plans tailored to your property size and goals. Contact us for a custom quote." },
    ],
  },
  {
    slug: "travel-agency-digital-marketing-sri-lanka",
    seoTitle: "Travel Agency Digital Marketing Sri Lanka | Tourism Marketing Experts",
    metaDescription: "Promote your tour packages with targeted travel marketing strategies. Cypher Digital helps travel agencies in Sri Lanka generate more bookings online.",
    h1: "Digital Marketing for Travel Agencies in Sri Lanka",
    intro: "Cypher Digital helps travel agencies and tour operators in Sri Lanka attract more travelers and promote tour packages through social media marketing, SEO, and targeted advertising. Based in Colombo, we specialize in tourism marketing strategies that drive bookings for travel businesses across Sri Lanka.",
    servicesHeading: "Travel Marketing Services",
    services: [
      "Tour package advertising campaigns",
      "Travel video content creation",
      "Social media marketing for travel brands",
      "Meta Ads and Google Ads campaigns",
      "Lead generation for tour packages",
    ],
    ctaHeading: "Get More Tour Bookings",
    ctaDescription: "We help travel agencies attract customers through targeted digital advertising and engaging social media content.",
    ctaButtonText: "Get Travel Marketing Plan",
    formFields: [
      { name: "name", placeholder: "Your Name *", required: true },
      { name: "email", placeholder: "Email Address", type: "email" },
      { name: "phone", placeholder: "Phone Number *", type: "tel", required: true },
      { name: "agencyName", placeholder: "Agency Name" },
      { name: "packageType", placeholder: "Tour Package Type" },
      { name: "message", placeholder: "Tell us about your travel marketing needs..." },
    ],
    // --- Extended SEO content ---
    challengesHeading: "Common Marketing Challenges Travel Agencies Face",
    challengesIntro: "The tourism industry in Sri Lanka is growing rapidly, but many travel agencies and tour operators struggle to stand out online. With increasing competition from both local agencies and international booking platforms, having a strong digital presence is essential for survival.",
    challengesList: [
      "Low visibility on Google for travel-related searches",
      "Heavy reliance on OTA platforms like Booking.com and TripAdvisor",
      "Difficulty reaching international tourists online",
      "Inconsistent social media presence and engagement",
      "Lack of professional travel video and photo content",
      "No clear strategy for promoting seasonal tour packages",
    ],
    challengesOutro: "Cypher Digital helps travel agencies overcome these challenges through strategic travel agency digital marketing in Sri Lanka, combining SEO, social media marketing, paid advertising, and professional content creation.",
    strategy: {
      heading: "Our Proven Travel Agency Marketing Strategy",
      description: "Our travel marketing strategy is designed to increase your agency's visibility, attract qualified leads, and convert inquiries into confirmed bookings.",
      subsections: [
        {
          h3: "Search Engine Optimization for Travel Agencies",
          paragraphs: [
            "SEO helps your travel agency website appear when travelers search for terms such as 'tour packages Sri Lanka', 'best travel agency in Sri Lanka', 'Sri Lanka holiday packages', and 'adventure tours Colombo'.",
          ],
          bullets: [
            "Targeted keyword research for tourism",
            "On-page SEO for tour package pages",
            "Content marketing with travel guides and blogs",
            "Technical SEO and site speed optimization",
            "Local SEO for Colombo and other cities",
          ],
        },
        {
          h3: "Social Media Marketing for Travel Brands",
          paragraphs: [
            "Social media platforms like Instagram, Facebook, and TikTok are ideal for showcasing stunning Sri Lankan destinations and promoting tour packages to both local and international audiences.",
          ],
          bullets: [
            "Destination photography and travel reels",
            "Tour package promotion posts",
            "Travel storytelling and itinerary content",
            "User-generated content and testimonials",
            "Influencer collaborations with travel bloggers",
          ],
        },
        {
          h3: "Paid Advertising for Tour Packages",
          paragraphs: [
            "Paid advertising puts your tour packages directly in front of travelers actively searching for holidays in Sri Lanka.",
          ],
          bullets: [
            "Facebook & Instagram Ads for tour packages",
            "Google Search Ads for travel queries",
            "Google Display Ads for destination marketing",
            "Retargeting campaigns for website visitors",
            "Seasonal campaign management",
          ],
        },
      ],
    },
    videoContentHeading: "Professional Video Content for Travel Agencies",
    videoContentIntro: "Visual content is the most powerful tool for inspiring travelers and promoting destinations.",
    videoContentList: [
      "Destination highlight videos",
      "Tour package promo reels",
      "Drone footage of Sri Lankan attractions",
      "Customer testimonial videos",
      "Short-form social media travel reels",
    ],
    videoContentOutro: "High-quality travel videos significantly increase engagement, shares, and booking inquiries from both local and international travelers.",
    benefitsHeading: "Why Travel Agencies Need Digital Marketing",
    benefitsIntro: "Travel agencies that invest in digital marketing experience measurable growth in bookings and brand awareness.",
    benefitsList: [
      "Increased tour package bookings",
      "Higher visibility on Google for travel searches",
      "Stronger social media following and engagement",
      "Reduced dependence on third-party booking platforms",
      "Better return on marketing investment",
      "Ability to reach international tourists directly",
    ],
    benefitsOutro: "Digital marketing allows travel agencies in Sri Lanka to compete effectively and attract travelers from around the world.",
    whyChooseHeading: "Why Choose Cypher Digital for Travel Marketing",
    whyChooseIntro: "Cypher Digital is a results-driven digital marketing agency with deep expertise in tourism and travel marketing in Sri Lanka.",
    whyChooseList: [
      "Specialized experience in tourism marketing",
      "Creative content production team for travel brands",
      "Data-driven advertising and campaign optimization",
      "Customized marketing strategies for travel agencies",
      "Proven track record of increasing tour bookings",
    ],
    bottomCtaHeading: "Get More Tour Bookings with Cypher Digital",
    bottomCtaText: [
      "If you want to increase your travel agency's online visibility and attract more tourists, Cypher Digital can help.",
      "Our travel marketing experts develop customized strategies that drive bookings, improve brand awareness, and maximize your marketing investment.",
      "Contact us today for a free travel marketing consultation.",
    ],
    industryLinksHeading: "Digital Marketing Services for Multiple Industries",
    industryLinksIntro: "In addition to travel agency marketing, Cypher Digital provides digital marketing solutions for various industries across Sri Lanka and Colombo:",
    faqs: [
      { q: "What is travel agency digital marketing?", a: "Travel agency digital marketing involves promoting tour packages and travel services online using strategies such as social media marketing, SEO, paid advertising, and video content to attract more travelers." },
      { q: "How can digital marketing increase tour bookings?", a: "Digital marketing increases your visibility on search engines and social media, putting your tour packages in front of travelers actively searching for holidays in Sri Lanka." },
      { q: "How long does travel SEO take to show results?", a: "SEO improvements typically show results within 3–6 months depending on competition, but paid campaigns can generate leads within the first week." },
      { q: "What platforms are best for travel agency marketing?", a: "The most effective platforms include Google Search, Instagram, Facebook, and TikTok for reaching both local and international travelers." },
      { q: "How much does travel agency digital marketing cost?", a: "Our travel marketing packages start from affordable monthly plans tailored to your agency size and goals. Contact us for a custom quote." },
    ],
  },
  {
    slug: "fashion-brand-digital-marketing-sri-lanka",
    seoTitle: "Fashion Brand Digital Marketing Sri Lanka | Clothing Brand Marketing Agency",
    metaDescription: "Grow your clothing brand online with social media marketing, influencer campaigns, SEO, and Facebook ads in Sri Lanka. Fashion advertising agency.",
    h1: "Digital Marketing for Fashion & Clothing Brands in Sri Lanka",
    intro: "The fashion industry is highly competitive, and clothing brands need strong digital marketing strategies to stand out in the online marketplace. Consumers increasingly discover and purchase fashion products through social media platforms, search engines, and online stores. Cypher Digital helps fashion brands grow their online presence using advanced digital marketing strategies such as social media marketing, influencer collaborations, search engine optimization (SEO), and paid advertising campaigns.",
    servicesHeading: "Fashion Marketing Services",
    services: [
      "Instagram and TikTok growth strategy",
      "Fashion reels and product video production",
      "Facebook and Instagram advertising",
      "Influencer marketing campaigns",
      "E-commerce promotions",
    ],
    ctaHeading: "Grow Your Fashion Brand Online",
    ctaDescription: "We create stunning visual content and targeted ad campaigns to help your fashion brand stand out and drive sales. With the right digital marketing strategy, clothing brands can reach their target audience, build brand recognition, and increase online sales.",
    ctaButtonText: "Grow My Fashion Brand",
    formFields: [
      { name: "name", placeholder: "Your Name *", required: true },
      { name: "email", placeholder: "Email Address", type: "email" },
      { name: "phone", placeholder: "Phone Number *", type: "tel", required: true },
      { name: "brandName", placeholder: "Brand Name" },
      { name: "productType", placeholder: "Product Type" },
      { name: "message", placeholder: "Tell us about your fashion brand..." },
    ],
    // --- Extended SEO content ---
    challengesHeading: "Why Digital Marketing is Important for Fashion Brands",
    challengesIntro: "Digital marketing has transformed the fashion industry by allowing brands to connect directly with customers online. Social media platforms like Instagram, TikTok, and Pinterest play a major role in shaping fashion trends and influencing buying decisions. Studies show that around 85% of Gen Z consumers say social media influences their purchasing decisions, highlighting the importance of social platforms for fashion brands.",
    challengesList: [
      "Increased brand awareness",
      "Higher engagement with customers",
      "Increased online store traffic",
      "Better product visibility",
      "Higher clothing sales",
    ],
    challengesOutro: "When done correctly, digital marketing helps fashion brands build loyal communities and turn followers into customers.",
    strategy: {
      heading: "Our Fashion Marketing Strategy",
      description: "Cypher Digital uses a multi-channel approach to grow fashion brands and clothing businesses in Sri Lanka.",
      subsections: [
        {
          h3: "Social Media Marketing for Fashion Brands",
          paragraphs: [
            "Social media is one of the most powerful tools for fashion marketing. Platforms like Instagram and TikTok allow clothing brands to showcase products visually and connect with fashion audiences worldwide.",
          ],
          bullets: [
            "Fashion reels and outfit styling videos",
            "Product showcase posts",
            "Influencer collaborations",
            "Behind-the-scenes fashion content",
            "Seasonal fashion campaign promotions",
          ],
        },
        {
          h3: "Influencer Marketing for Clothing Brands",
          paragraphs: [
            "Influencer marketing is one of the most effective strategies in the fashion industry. Influencers help introduce brands to their followers and build trust through authentic content. Research shows that 40% of fashion shoppers discover brands through social media ads and influencer promotions, making influencer partnerships a powerful growth strategy.",
          ],
          bullets: [
            "Instagram influencer collaborations",
            "Fashion product reviews",
            "Influencer styling videos",
            "Sponsored fashion campaigns",
          ],
        },
        {
          h3: "SEO for Fashion & Clothing Brands",
          paragraphs: [
            "Search engine optimization helps fashion brands appear in Google search results when customers search for clothing products like 'clothing brands in Sri Lanka', 'online fashion stores Sri Lanka', 'buy dresses online Sri Lanka', and 'fashion brands Sri Lanka'.",
          ],
          bullets: [
            "Keyword optimization",
            "Product SEO",
            "Fashion blog content",
            "Technical SEO improvements",
          ],
        },
      ],
    },
    videoContentHeading: "Fashion Content & Video Marketing",
    videoContentIntro: "Fashion is a visual industry, and high-quality content is essential for capturing customer attention.",
    videoContentList: [
      "Fashion photoshoots",
      "Clothing brand promotional videos",
      "Fashion reels for social media",
      "Product showcase videos",
      "Ecommerce product photography",
    ],
    videoContentOutro: "Engaging visual content helps brands create strong emotional connections with their audience and drive online sales.",
    benefitsHeading: "Ecommerce Marketing for Clothing Brands",
    benefitsIntro: "Online fashion shopping continues to grow as consumers increasingly prefer buying clothes online. E-commerce marketing helps clothing brands attract customers and increase conversions.",
    benefitsList: [
      "Facebook and Instagram advertising for fashion products",
      "Retargeting campaigns for website visitors",
      "Product video ads",
      "Ecommerce conversion optimization",
      "Shopping campaign management",
    ],
    benefitsOutro: "These strategies help fashion brands increase website traffic and improve sales performance in Sri Lanka and internationally.",
    whyChooseHeading: "Why Choose Cypher Digital for Fashion Marketing",
    whyChooseIntro: "Cypher Digital provides customized digital marketing strategies for fashion brands and clothing businesses in Sri Lanka.",
    whyChooseList: [
      "Creative content production for fashion brands",
      "Targeted advertising campaigns",
      "Data-driven marketing strategies",
      "Measurable marketing results",
      "Experience with apparel marketing strategies",
    ],
    bottomCtaHeading: "Grow Your Fashion Brand with Cypher Digital",
    bottomCtaText: [
      "If you want to increase your clothing brand's visibility and boost online sales, Cypher Digital can help.",
      "Our fashion marketing specialists create customized strategies designed to attract customers, increase engagement, and grow your brand online.",
      "Contact Cypher Digital today for a free fashion marketing consultation.",
    ],
    industryLinksHeading: "Digital Marketing Services for Multiple Industries",
    industryLinksIntro: "In addition to fashion brand marketing, Cypher Digital provides digital marketing solutions for various industries across Sri Lanka:",
    faqs: [
      { q: "What is fashion brand digital marketing?", a: "Fashion brand digital marketing involves promoting clothing brands online using social media marketing, search engine optimization, influencer collaborations, and paid advertising campaigns." },
      { q: "Which social media platform is best for fashion marketing?", a: "Instagram, TikTok, and Pinterest are among the most effective platforms for fashion marketing because they focus on visual content." },
      { q: "How can digital marketing increase clothing sales?", a: "Digital marketing increases brand visibility and attracts targeted customers who are actively searching for fashion products online." },
      { q: "How long does SEO take for fashion brands?", a: "SEO typically takes 3-6 months to produce strong results depending on competition and website optimization." },
      { q: "Do you offer influencer marketing for fashion brands?", a: "Yes, we connect your brand with relevant fashion influencers in Sri Lanka to amplify your reach and credibility." },
    ],
  },
  {
    slug: "restaurant-digital-marketing-sri-lanka",
    seoTitle: "Restaurant Marketing Agency Sri Lanka | Social Media Marketing for Restaurants",
    metaDescription: "Increase restaurant customers with social media marketing, food photography, local SEO, and targeted advertising campaigns in Sri Lanka.",
    h1: "Digital Marketing for Restaurants in Sri Lanka",
    intro: "The restaurant industry in Sri Lanka is highly competitive, with new cafes, restaurants, and food brands opening every year. To stand out and attract more customers, restaurants must build a strong online presence. Cypher Digital helps restaurants grow their brand and increase customer visits through digital marketing strategies such as social media marketing, search engine optimization (SEO), paid advertising, and creative food content. Today, the dining journey often begins online — customers search for restaurants on Google, browse menus, read reviews, and check food photos on social media before deciding where to eat.",
    servicesHeading: "Restaurant Marketing Services",
    services: [
      "Food photography and reels",
      "Facebook and Instagram advertising",
      "Google Maps restaurant promotion",
      "Restaurant social media management",
      "Event and promotion marketing",
    ],
    ctaHeading: "Get More Customers to Your Restaurant",
    ctaDescription: "Our food marketing strategies use mouthwatering content and local targeting to fill your tables every day. By using the right digital marketing strategy, restaurants can increase visibility, attract new customers, and generate repeat visits.",
    ctaButtonText: "Promote My Restaurant",
    formFields: [
      { name: "name", placeholder: "Your Name *", required: true },
      { name: "email", placeholder: "Email Address", type: "email" },
      { name: "phone", placeholder: "Phone Number *", type: "tel", required: true },
      { name: "restaurantName", placeholder: "Restaurant Name" },
      { name: "location", placeholder: "Location" },
      { name: "message", placeholder: "Tell us about your restaurant marketing needs..." },
    ],
    // --- Extended SEO content ---
    challengesHeading: "Why Digital Marketing is Important for Restaurants",
    challengesIntro: "Modern diners rely heavily on digital platforms when choosing where to eat. Research shows that 41% of diners use social media to research restaurants before visiting, especially younger audiences such as Gen Z and Millennials.",
    challengesList: [
      "Increase brand awareness",
      "Attract new customers",
      "Promote menu items and special offers",
      "Improve online reputation",
      "Increase table reservations and orders",
    ],
    challengesOutro: "Restaurants that use strong social media strategies often see more foot traffic, online orders, and customer loyalty.",
    strategy: {
      heading: "Our Restaurant Marketing Strategy",
      description: "Cypher Digital uses a multi-channel approach to help restaurants and cafes in Sri Lanka attract more customers and grow their brand.",
      subsections: [
        {
          h3: "Social Media Marketing for Restaurants",
          paragraphs: [
            "Social media platforms like Instagram, Facebook, and TikTok play a major role in restaurant marketing. Food photography and short video content can quickly attract attention and influence dining decisions. Statistics show that 58% of diners follow at least one restaurant on social media, and many customers discover new restaurants through social platforms.",
          ],
          bullets: [
            "Food photography and reels",
            "Chef behind-the-scenes videos",
            "Menu highlight posts",
            "Customer experience videos",
            "Event and promotion campaigns",
          ],
        },
        {
          h3: "Local SEO for Restaurants",
          paragraphs: [
            "Search engine optimization helps restaurants appear on Google when people search for places to eat nearby, such as 'best restaurants in Colombo', 'cafes near me', 'Sri Lankan restaurants', and 'restaurants in Sri Lanka'.",
          ],
          bullets: [
            "Local SEO optimization",
            "Google Business profile management",
            "Keyword optimization",
            "Website SEO improvements",
          ],
        },
        {
          h3: "Restaurant Advertising Campaigns",
          paragraphs: [
            "Paid advertising is one of the fastest ways to generate restaurant traffic and bookings.",
          ],
          bullets: [
            "Facebook & Instagram Ads",
            "Google Search Ads",
            "Google Maps advertising",
            "Retargeting campaigns",
          ],
        },
      ],
    },
    videoContentHeading: "Food Content & Video Marketing",
    videoContentIntro: "Food is highly visual, and high-quality photos and videos are essential for attracting customers. Many diners choose restaurants based on how the food looks online, especially on social media platforms.",
    videoContentList: [
      "Professional food photography",
      "Short food reels",
      "Restaurant promotional videos",
      "Menu showcase videos",
      "Chef and kitchen behind-the-scenes",
    ],
    videoContentOutro: "Engaging visual food content helps restaurants create strong emotional connections with potential diners and drive more visits.",
    benefitsHeading: "Common Marketing Challenges Restaurants Face",
    benefitsIntro: "Restaurants often struggle with marketing because they rely only on walk-in customers or outdated marketing strategies.",
    benefitsList: [
      "Low social media engagement",
      "Poor Google visibility",
      "Lack of professional food photography",
      "Inconsistent marketing campaigns",
      "Limited brand awareness",
    ],
    benefitsOutro: "Digital marketing solves these challenges by helping restaurants reach customers online and stay visible in a crowded market.",
    whyChooseHeading: "Why Choose Cypher Digital for Restaurant Marketing",
    whyChooseIntro: "Cypher Digital specializes in helping restaurants and cafes in Sri Lanka and Colombo grow through digital marketing.",
    whyChooseList: [
      "Creative food content creation",
      "Targeted advertising strategies",
      "Data-driven marketing campaigns",
      "Measurable business growth",
      "Experience with restaurant marketing in Sri Lanka",
    ],
    bottomCtaHeading: "Grow Your Restaurant with Cypher Digital",
    bottomCtaText: [
      "If you want to attract more customers and increase restaurant revenue, Cypher Digital can help.",
      "Our restaurant marketing experts create customized digital marketing strategies that increase visibility, engagement, and customer visits.",
      "Contact Cypher Digital today for a free restaurant marketing consultation.",
    ],
    industryLinksHeading: "Digital Marketing Services for Multiple Industries",
    industryLinksIntro: "In addition to restaurant marketing, Cypher Digital provides digital marketing solutions for various industries across Sri Lanka:",
    faqs: [
      { q: "What is restaurant digital marketing?", a: "Restaurant digital marketing involves promoting restaurants online through social media marketing, search engine optimization, and online advertising campaigns." },
      { q: "How can digital marketing increase restaurant customers?", a: "Digital marketing increases restaurant visibility online and helps attract customers who are searching for dining options nearby." },
      { q: "Which platform is best for restaurant marketing?", a: "Instagram, Facebook, TikTok, and Google Search are among the most effective platforms for restaurant marketing." },
      { q: "How long does restaurant SEO take?", a: "SEO improvements typically take 3-6 months to show strong results depending on competition and optimization." },
      { q: "Do you handle food photography?", a: "Yes, we create professional food photography and video reels that make your dishes look irresistible on social media." },
    ],
  },
  {
    slug: "real-estate-digital-marketing-sri-lanka",
    seoTitle: "Real Estate Digital Marketing Sri Lanka | Property Marketing Agency",
    metaDescription: "Generate property buyers and investor leads with real estate digital marketing, SEO, video marketing, and paid advertising campaigns in Sri Lanka.",
    h1: "Digital Marketing for Real Estate Companies in Sri Lanka",
    intro: "The real estate industry has become highly competitive, with property developers, real estate agents, and property portals competing for visibility online. Today, buyers and investors rely heavily on the internet when searching for properties, making digital marketing essential for real estate businesses. Cypher Digital helps property developers, real estate agents, and property companies in Sri Lanka and Colombo grow their business through SEO, social media marketing, video marketing, and paid advertising campaigns.",
    servicesHeading: "Real Estate Marketing Services",
    services: [
      "Property lead generation ads",
      "Video property tours",
      "Google Ads for property buyers",
      "Real estate landing pages",
      "Social media marketing for property listings",
    ],
    ctaHeading: "Generate More Property Leads",
    ctaDescription: "Our targeted campaigns reach serious property buyers and investors looking for real estate in Sri Lanka. Modern buyers start their property search online, and having a strong digital presence ensures that your real estate listings reach the right audience at the right time.",
    ctaButtonText: "Get Property Leads",
    formFields: [
      { name: "name", placeholder: "Your Name *", required: true },
      { name: "email", placeholder: "Email Address", type: "email" },
      { name: "phone", placeholder: "Phone Number *", type: "tel", required: true },
      { name: "companyName", placeholder: "Company Name" },
      { name: "propertyType", placeholder: "Property Type" },
      { name: "message", placeholder: "Tell us about your property marketing needs..." },
    ],
    // --- Extended SEO content ---
    challengesHeading: "Why Digital Marketing is Important for Real Estate",
    challengesIntro: "The way people buy and sell property has changed dramatically in recent years. Most buyers begin their search online before contacting a real estate agent or visiting properties. Studies show that around 96-97% of homebuyers start their property search on the internet, making digital marketing essential for real estate businesses that want to attract buyers and investors.",
    challengesList: [
      "Increased online visibility",
      "High-quality property leads",
      "Faster property sales",
      "Strong brand awareness",
      "Better customer engagement",
    ],
    challengesOutro: "Digital marketing allows real estate companies to showcase properties to a much wider audience and generate qualified leads more efficiently.",
    strategy: {
      heading: "Our Real Estate Marketing Strategy",
      description: "Cypher Digital uses advanced strategies to help real estate companies in Sri Lanka generate leads and sell properties faster.",
      subsections: [
        {
          h3: "Real Estate Lead Generation Strategies",
          paragraphs: [
            "Generating high-quality leads is the most important goal for real estate marketing.",
          ],
          bullets: [
            "Targeted Facebook & Instagram Ads",
            "Google Search advertising",
            "Property landing pages",
            "Lead capture forms",
            "Retargeting campaigns",
          ],
        },
        {
          h3: "Social Media Marketing for Real Estate",
          paragraphs: [
            "Social media has become one of the most powerful tools for promoting properties and real estate brands. Research shows that over 80% of real estate businesses use social media for marketing, with Facebook being the most popular platform.",
          ],
          bullets: [
            "Property showcase videos",
            "Real estate reels",
            "Luxury property tours",
            "Neighborhood lifestyle content",
            "Investor-focused property promotions",
          ],
        },
        {
          h3: "SEO for Real Estate Websites",
          paragraphs: [
            "Search engine optimization helps real estate websites rank on Google when potential buyers search for properties like 'apartments for sale in Sri Lanka', 'property for sale Colombo', 'luxury apartments Sri Lanka', and 'real estate agents Sri Lanka'.",
          ],
          bullets: [
            "Keyword research",
            "Property listing optimization",
            "Technical SEO improvements",
            "Content marketing strategies",
          ],
        },
      ],
    },
    videoContentHeading: "Real Estate Video Marketing",
    videoContentIntro: "Video marketing is one of the most effective ways to showcase properties online. Property listings with videos receive over 400% more inquiries compared to listings without video, making video content an essential part of real estate marketing.",
    videoContentList: [
      "Property walkthrough videos",
      "Drone property tours",
      "Luxury real estate promotions",
      "Short social media property reels",
      "Virtual property showcases",
    ],
    videoContentOutro: "High-quality video content increases engagement and improves property inquiries from both local buyers and international investors.",
    benefitsHeading: "Challenges Real Estate Companies Face",
    benefitsIntro: "Many real estate companies struggle with marketing because they rely only on traditional advertising such as billboards or newspaper listings.",
    benefitsList: [
      "Low website traffic",
      "Limited online visibility",
      "Difficulty generating quality leads",
      "High competition in property markets",
      "Ineffective marketing strategies",
    ],
    benefitsOutro: "Digital marketing helps solve these challenges by targeting potential buyers online and improving property exposure.",
    whyChooseHeading: "Why Choose Cypher Digital for Real Estate Marketing",
    whyChooseIntro: "Cypher Digital provides customized digital marketing strategies designed specifically for real estate companies in Sri Lanka.",
    whyChooseList: [
      "Targeted property marketing campaigns",
      "High-quality content production",
      "Data-driven marketing strategies",
      "Measurable lead generation results",
      "Experience with property advertising in Sri Lanka",
    ],
    bottomCtaHeading: "Generate More Property Leads with Cypher Digital",
    bottomCtaText: [
      "If you want to increase property inquiries and grow your real estate business, Cypher Digital can help.",
      "Our real estate marketing specialists create customized strategies designed to attract buyers, generate leads, and increase property sales.",
      "Contact Cypher Digital today for a free real estate marketing consultation.",
    ],
    industryLinksHeading: "Digital Marketing Services for Multiple Industries",
    industryLinksIntro: "In addition to real estate marketing, Cypher Digital provides digital marketing solutions for various industries across Sri Lanka:",
    faqs: [
      { q: "What is real estate digital marketing?", a: "Real estate digital marketing involves promoting property listings online through SEO, social media marketing, video marketing, and paid advertising campaigns." },
      { q: "How can digital marketing generate property leads?", a: "Digital marketing helps real estate companies reach buyers who are actively searching for properties online, increasing inquiries and property sales." },
      { q: "Which platform is best for real estate marketing?", a: "Facebook, Google Search, Instagram, and YouTube are among the most effective platforms for real estate marketing." },
      { q: "How long does SEO take for real estate websites?", a: "SEO typically takes 3-6 months to generate consistent organic traffic and leads depending on competition." },
      { q: "Can you create video property tours?", a: "Yes, we produce professional video walkthroughs and drone footage that showcase properties in their best light." },
    ],
  },
  {
    slug: "education-marketing-agency-sri-lanka",
    seoTitle: "Education Marketing Agency Sri Lanka | Student Lead Generation",
    metaDescription: "Get more student enrollments with digital marketing for institutes and tuition classes in Sri Lanka.",
    h1: "Digital Marketing for Institutes & Tuition Classes",
    intro: "Cypher Digital helps education institutes and tuition classes increase student enrollments through targeted digital marketing campaigns.",
    servicesHeading: "Education Marketing Services",
    services: [
      "Student lead generation campaigns",
      "Course promotion videos",
      "Social media marketing for institutes",
      "Google Ads for courses",
      "Admission marketing campaigns",
    ],
    ctaHeading: "Increase Student Enrollments",
    ctaDescription: "Our education marketing campaigns target students and parents actively searching for courses and tuition classes in Sri Lanka.",
    ctaButtonText: "Increase Student Enrollments",
    formFields: [
      { name: "name", placeholder: "Your Name *", required: true },
      { name: "email", placeholder: "Email Address", type: "email" },
      { name: "phone", placeholder: "Phone Number *", type: "tel", required: true },
      { name: "instituteName", placeholder: "Institute Name" },
      { name: "courseType", placeholder: "Course Type" },
      { name: "message", placeholder: "Tell us about your education marketing needs..." },
    ],
    faqs: [
      { q: "How can digital marketing increase student enrollments?", a: "Targeted Facebook and Google ads reach students and parents actively searching for courses, driving more inquiries and enrollments to your institute." },
      { q: "Which platforms work best for education marketing?", a: "Facebook, Instagram, and Google Ads are highly effective for reaching students and parents in Sri Lanka." },
      { q: "How long does it take to see enrollment increases?", a: "Most institutes see increased inquiries within 1-2 weeks of launching targeted ad campaigns." },
    ],
  },
  {
    slug: "beauty-salon-digital-marketing-sri-lanka",
    seoTitle: "Beauty Salon Marketing Sri Lanka | Social Media Marketing for Salons",
    metaDescription: "Grow your beauty salon with social media marketing, Instagram growth strategies and targeted ads in Sri Lanka.",
    h1: "Beauty Salon Digital Marketing Services",
    intro: "Cypher Digital helps beauty salons and spas in Sri Lanka attract more clients through stunning social media content, influencer marketing, and targeted local advertising.",
    servicesHeading: "Salon Marketing Services",
    services: [
      "Beauty reels and before/after content",
      "Instagram growth strategies",
      "Meta ads for beauty services",
      "Influencer marketing",
      "Local customer targeting",
    ],
    ctaHeading: "Get More Salon Bookings",
    ctaDescription: "Our beauty marketing strategies showcase your work beautifully and attract clients in your local area.",
    ctaButtonText: "Promote My Salon",
    formFields: [
      { name: "name", placeholder: "Your Name *", required: true },
      { name: "email", placeholder: "Email Address", type: "email" },
      { name: "phone", placeholder: "Phone Number *", type: "tel", required: true },
      { name: "salonName", placeholder: "Salon Name" },
      { name: "servicesOffered", placeholder: "Services Offered" },
      { name: "message", placeholder: "Tell us about your salon marketing needs..." },
    ],
    faqs: [
      { q: "How can social media marketing help my salon?", a: "Visual platforms like Instagram are perfect for showcasing your work with before/after transformations, reels, and client testimonials that attract new customers." },
      { q: "Do you create content for salons?", a: "Yes, we produce professional beauty reels, photos, and social media content tailored to your salon's brand." },
      { q: "How much does salon marketing cost?", a: "We offer flexible packages designed for salons of all sizes. Contact us for a custom quote." },
    ],
  },
  {
    slug: "automotive-digital-marketing-sri-lanka",
    seoTitle: "Automotive Digital Marketing Sri Lanka | Car Dealer Marketing",
    metaDescription: "Generate car buyer leads with automotive digital marketing campaigns including video showcases and targeted ads in Sri Lanka.",
    h1: "Automotive Digital Marketing Services",
    intro: "Cypher Digital helps car dealerships and automotive businesses in Sri Lanka generate more leads and sell more vehicles through strategic digital marketing.",
    servicesHeading: "Automotive Marketing Services",
    services: [
      "Car showcase videos",
      "Car sales lead generation ads",
      "Automotive social media management",
      "Vehicle promotions",
      "Google Ads for car buyers",
    ],
    ctaHeading: "Sell More Vehicles Online",
    ctaDescription: "Our automotive marketing campaigns target serious car buyers and generate high-quality leads for your dealership.",
    ctaButtonText: "Get More Car Leads",
    formFields: [
      { name: "name", placeholder: "Your Name *", required: true },
      { name: "email", placeholder: "Email Address", type: "email" },
      { name: "phone", placeholder: "Phone Number *", type: "tel", required: true },
      { name: "companyName", placeholder: "Company Name" },
      { name: "vehicleType", placeholder: "Vehicle Type" },
      { name: "message", placeholder: "Tell us about your automotive marketing needs..." },
    ],
    faqs: [
      { q: "How can digital marketing help sell cars?", a: "Targeted Facebook and Google ads reach people actively searching for vehicles, while video showcases and social media content build trust and drive inquiries." },
      { q: "Do you create car showcase videos?", a: "Yes, we produce professional car videos and walkthroughs that highlight your vehicles' features and attract buyers." },
      { q: "How quickly can I get car buyer leads?", a: "Lead generation campaigns typically start producing qualified leads within the first week of launch." },
    ],
  },
  {
    slug: "small-business-digital-marketing-sri-lanka",
    seoTitle: "Digital Marketing for Small Businesses in Sri Lanka | Cypher Digital",
    metaDescription: "Affordable digital marketing solutions for small businesses in Sri Lanka. Social media, ads, branding and lead generation for SMEs.",
    h1: "Digital Marketing Solutions for SMEs",
    intro: "Cypher Digital provides affordable and effective digital marketing solutions for small and medium businesses in Sri Lanka, helping them compete and grow online.",
    servicesHeading: "SME Marketing Services",
    services: [
      "Social media management",
      "Facebook advertising",
      "Branding and design",
      "Video marketing",
      "Lead generation campaigns",
    ],
    ctaHeading: "Grow Your Small Business Online",
    ctaDescription: "Our affordable marketing packages are designed specifically for SMEs who want to build their brand and generate leads without breaking the bank.",
    ctaButtonText: "Get Free Marketing Plan",
    formFields: [
      { name: "name", placeholder: "Your Name *", required: true },
      { name: "email", placeholder: "Email Address", type: "email" },
      { name: "phone", placeholder: "Phone Number *", type: "tel", required: true },
      { name: "businessName", placeholder: "Business Name" },
      { name: "industry", placeholder: "Industry" },
      { name: "message", placeholder: "Tell us about your business marketing needs..." },
    ],
    faqs: [
      { q: "Is digital marketing affordable for small businesses?", a: "Yes, we offer flexible packages starting from budget-friendly monthly plans designed specifically for SMEs in Sri Lanka." },
      { q: "What's the best marketing strategy for a small business?", a: "A combination of social media management and targeted Facebook ads is the most cost-effective strategy for small businesses to build brand awareness and generate leads." },
      { q: "How long does it take to see results?", a: "Paid campaigns can generate leads within days, while organic strategies like social media and SEO show significant results in 2-3 months." },
    ],
  },
  {
    slug: "ecommerce-digital-marketing-sri-lanka",
    seoTitle: "Ecommerce Marketing Agency Sri Lanka | Online Store Marketing",
    metaDescription: "Increase online sales with ecommerce marketing strategies including Facebook ads, product videos and retargeting campaigns in Sri Lanka.",
    h1: "Ecommerce Digital Marketing Services",
    intro: "Cypher Digital helps online stores and ecommerce businesses in Sri Lanka increase sales through targeted advertising, product video content, and conversion optimization.",
    servicesHeading: "Ecommerce Marketing Services",
    services: [
      "Facebook and Instagram ads",
      "Product video ads",
      "Retargeting campaigns",
      "Conversion optimization",
      "Social media growth",
    ],
    ctaHeading: "Increase Your Online Sales",
    ctaDescription: "Our ecommerce marketing strategies drive traffic, boost conversions, and maximize your return on ad spend.",
    ctaButtonText: "Increase My Online Sales",
    formFields: [
      { name: "name", placeholder: "Your Name *", required: true },
      { name: "email", placeholder: "Email Address", type: "email" },
      { name: "phone", placeholder: "Phone Number *", type: "tel", required: true },
      { name: "storeName", placeholder: "Store Name" },
      { name: "platform", placeholder: "Platform (Shopify, WooCommerce, etc.)" },
      { name: "message", placeholder: "Tell us about your ecommerce marketing needs..." },
    ],
    faqs: [
      { q: "How can digital marketing increase my online sales?", a: "Targeted ads, retargeting campaigns, and product video content drive qualified traffic to your store and convert visitors into paying customers." },
      { q: "Which platforms work best for ecommerce marketing?", a: "Facebook and Instagram ads are highly effective for ecommerce, along with Google Shopping ads for product-based searches." },
      { q: "Do you help with conversion optimization?", a: "Yes, we optimize your product pages, ad creatives, and customer journey to maximize your conversion rate and ROAS." },
    ],
  },
];

export const industryNavItems = industries.map((i) => ({
  label: i.h1.replace(/Digital Marketing Services?|Social Media Marketing|Digital Marketing Solutions|Digital Marketing for /gi, "").replace(/in Sri Lanka/gi, "").replace(/&/g, "&").trim(),
  path: `/${i.slug}`,
}));
