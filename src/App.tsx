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
