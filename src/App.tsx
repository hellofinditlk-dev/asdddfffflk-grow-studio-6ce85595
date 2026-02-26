import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import SocialMediaManagement from "./pages/SocialMediaManagement";
import FacebookAds from "./pages/FacebookAds";
import GoogleAds from "./pages/GoogleAds";
import VideoProduction from "./pages/VideoProduction";
import SEOServices from "./pages/SEOServices";
import GraphicDesign from "./pages/GraphicDesign";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import BlogPost4 from "./pages/BlogPost4";
import BlogPost5 from "./pages/BlogPost5";
import BlogPost6 from "./pages/BlogPost6";
import BlogPost7 from "./pages/BlogPost7";
import BlogPost8 from "./pages/BlogPost8";
import BlogPost9 from "./pages/BlogPost9";
import BlogPost10 from "./pages/BlogPost10";
import BlogPost11 from "./pages/BlogPost11";
import BlogPost12 from "./pages/BlogPost12";
import BlogPost13 from "./pages/BlogPost13";
import BlogPost14 from "./pages/BlogPost14";
import BlogPost15 from "./pages/BlogPost15";
import BlogPost16 from "./pages/BlogPost16";
import BlogPost17 from "./pages/BlogPost17";
import BlogPost18 from "./pages/BlogPost18";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/social-media-management-sri-lanka" element={<SocialMediaManagement />} />
            <Route path="/facebook-ads-sri-lanka" element={<FacebookAds />} />
            <Route path="/google-ads-sri-lanka" element={<GoogleAds />} />
            <Route path="/video-production-sri-lanka" element={<VideoProduction />} />
            <Route path="/seo-services-sri-lanka" element={<SEOServices />} />
            <Route path="/graphic-design-sri-lanka" element={<GraphicDesign />} />
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
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
