import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Eager load homepage for fastest FCP
import Index from "./pages/Index";

// Lazy load all other pages
const SocialMediaManagement = lazy(() => import("./pages/SocialMediaManagement"));
const FacebookAds = lazy(() => import("./pages/FacebookAds"));
const GoogleAds = lazy(() => import("./pages/GoogleAds"));
const VideoProduction = lazy(() => import("./pages/VideoProduction"));
const SEOServices = lazy(() => import("./pages/SEOServices"));
const GraphicDesign = lazy(() => import("./pages/GraphicDesign"));
const TikTokMarketing = lazy(() => import("./pages/TikTokMarketing"));
const InfluencerMarketing = lazy(() => import("./pages/InfluencerMarketing"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost1 = lazy(() => import("./pages/BlogPost1"));
const BlogPost2 = lazy(() => import("./pages/BlogPost2"));
const BlogPost3 = lazy(() => import("./pages/BlogPost3"));
const BlogPost4 = lazy(() => import("./pages/BlogPost4"));
const BlogPost5 = lazy(() => import("./pages/BlogPost5"));
const BlogPost6 = lazy(() => import("./pages/BlogPost6"));
const BlogPost7 = lazy(() => import("./pages/BlogPost7"));
const BlogPost8 = lazy(() => import("./pages/BlogPost8"));
const BlogPost9 = lazy(() => import("./pages/BlogPost9"));
const BlogPost10 = lazy(() => import("./pages/BlogPost10"));
const BlogPost11 = lazy(() => import("./pages/BlogPost11"));
const BlogPost12 = lazy(() => import("./pages/BlogPost12"));
const BlogPost13 = lazy(() => import("./pages/BlogPost13"));
const BlogPost14 = lazy(() => import("./pages/BlogPost14"));
const BlogPost15 = lazy(() => import("./pages/BlogPost15"));
const BlogPost16 = lazy(() => import("./pages/BlogPost16"));
const BlogPost17 = lazy(() => import("./pages/BlogPost17"));
const BlogPost18 = lazy(() => import("./pages/BlogPost18"));
const BlogPost19 = lazy(() => import("./pages/BlogPost19"));
const BlogPost20 = lazy(() => import("./pages/BlogPost20"));
const BlogPost21 = lazy(() => import("./pages/BlogPost21"));
const BlogPost22 = lazy(() => import("./pages/BlogPost22"));
const BlogPost23 = lazy(() => import("./pages/BlogPost23"));
const BlogPost24 = lazy(() => import("./pages/BlogPost24"));
const BlogPost25 = lazy(() => import("./pages/BlogPost25"));
const BlogPost26 = lazy(() => import("./pages/BlogPost26"));
const BlogPost27 = lazy(() => import("./pages/BlogPost27"));
const BlogPost28 = lazy(() => import("./pages/BlogPost28"));
const BlogPost29 = lazy(() => import("./pages/BlogPost29"));
const BlogPost30 = lazy(() => import("./pages/BlogPost30"));
const BlogPost31 = lazy(() => import("./pages/BlogPost31"));
const BlogPost32 = lazy(() => import("./pages/BlogPost32"));
const BlogPost33 = lazy(() => import("./pages/BlogPost33"));
const BlogPost34 = lazy(() => import("./pages/BlogPost34"));
const BlogPost35 = lazy(() => import("./pages/BlogPost35"));
const AdvertisingInSriLanka = lazy(() => import("./pages/AdvertisingInSriLanka"));
const IndustryPage = lazy(() => import("./pages/IndustryPage"));
const DesignSubService = lazy(() => import("./pages/DesignSubService"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const TrailingSlashRedirect = () => {
  const { pathname, search, hash } = useLocation();
  if (pathname !== "/" && pathname.endsWith("/")) {
    return <Navigate to={pathname.slice(0, -1) + search + hash} replace />;
  }
  return null;
};

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <TrailingSlashRedirect />
        <Navbar />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/social-media-management-sri-lanka" element={<SocialMediaManagement />} />
              <Route path="/facebook-ads-sri-lanka" element={<FacebookAds />} />
              <Route path="/google-ads-sri-lanka" element={<GoogleAds />} />
              <Route path="/video-production-sri-lanka" element={<VideoProduction />} />
              <Route path="/seo-services-sri-lanka" element={<SEOServices />} />
              <Route path="/graphic-design-sri-lanka" element={<GraphicDesign />} />
              <Route path="/tiktok-marketing-sri-lanka" element={<TikTokMarketing />} />
              <Route path="/influencer-marketing-sri-lanka" element={<InfluencerMarketing />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/why-social-media-management-important-businesses-sri-lanka" element={<BlogPost1 />} />
              <Route path="/blog/how-consistent-social-media-posting-builds-brand-trust" element={<BlogPost2 />} />
              <Route path="/blog/facebook-instagram-management-guide-sri-lankan-brands" element={<BlogPost3 />} />
              <Route path="/blog/complete-guide-facebook-ads-businesses-sri-lanka" element={<BlogPost4 />} />
              <Route path="/blog/why-video-production-essential-business-growth-sri-lanka" element={<BlogPost5 />} />
              <Route path="/blog/importance-professional-graphic-design-modern-brands" element={<BlogPost6 />} />
              <Route path="/blog/how-google-ads-helps-businesses-high-intent-customers" element={<BlogPost7 />} />
              <Route path="/blog/why-seo-important-long-term-business-growth" element={<BlogPost8 />} />
              <Route path="/blog/types-business-videos-increase-engagement-sales" element={<BlogPost9 />} />
              <Route path="/blog/how-strong-visual-branding-improves-marketing-performance" element={<BlogPost10 />} />
              <Route path="/blog/google-search-ads-vs-display-ads-difference" element={<BlogPost11 />} />
              <Route path="/blog/local-seo-strategies-sri-lankan-businesses" element={<BlogPost12 />} />
              <Route path="/blog/how-facebook-campaigns-help-businesses-grow-sri-lanka" element={<BlogPost13 />} />
              <Route path="/blog/facebook-campaign-strategy-guide-sri-lankan-brands" element={<BlogPost14 />} />
              <Route path="/blog/how-ad-videos-increase-conversions-businesses" element={<BlogPost15 />} />
              <Route path="/blog/social-media-design-best-practices-better-engagement" element={<BlogPost16 />} />
              <Route path="/blog/google-ads-vs-facebook-ads-which-better-business" element={<BlogPost17 />} />
              <Route path="/blog/how-to-rank-on-google-sri-lanka-practical-guide" element={<BlogPost18 />} />
              <Route path="/blog/benefits-corporate-video-production-brands" element={<BlogPost19 />} />
              <Route path="/blog/flyer-design-tips-improve-marketing-results" element={<BlogPost20 />} />
              <Route path="/blog/ppc-advertising-explained-sri-lankan-businesses" element={<BlogPost21 />} />
              <Route path="/blog/technical-seo-checklist-better-website-performance" element={<BlogPost22 />} />
              <Route path="/blog/video-marketing-strategy-guide-sri-lankan-businesses" element={<BlogPost23 />} />
              <Route path="/blog/graphic-design-mistakes-damage-brand" element={<BlogPost24 />} />
              <Route path="/blog/google-ads-optimization-tips-improve-campaign-performance" element={<BlogPost25 />} />
              <Route path="/blog/on-page-seo-guide-better-rankings" element={<BlogPost26 />} />
              <Route path="/blog/why-industry-specific-digital-marketing-important-businesses-sri-lanka" element={<BlogPost27 />} />
              <Route path="/blog/why-tiktok-marketing-essential-sri-lankan-businesses" element={<BlogPost28 />} />
              <Route path="/blog/how-create-viral-tiktok-content-business" element={<BlogPost29 />} />
              <Route path="/blog/tiktok-ads-vs-facebook-ads-sri-lankan-businesses" element={<BlogPost30 />} />
              <Route path="/blog/tiktok-influencer-marketing-guide-sri-lankan-brands" element={<BlogPost31 />} />
              <Route path="/blog/tiktok-marketing-hotels-tourism-sri-lanka" element={<BlogPost32 />} />
              <Route path="/blog/ultimate-guide-advertising-sri-lanka" element={<BlogPost33 />} />
              <Route path="/blog/why-digital-advertising-replacing-traditional-sri-lanka" element={<BlogPost34 />} />
              <Route path="/blog/cost-effective-advertising-strategies-sri-lankan-businesses" element={<BlogPost35 />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/advertising-in-sri-lanka" element={<AdvertisingInSriLanka />} />
              <Route path="/logo-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/brand-identity-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/company-profile-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/social-media-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/facebook-ad-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/instagram-post-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/banner-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/email-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/landing-page-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/ui-ux-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/website-ui-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/flyer-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/brochure-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/poster-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/packaging-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/motion-graphics-sri-lanka" element={<DesignSubService />} />
              <Route path="/video-ad-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/presentation-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/infographic-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/label-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/:slug" element={<IndustryPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
