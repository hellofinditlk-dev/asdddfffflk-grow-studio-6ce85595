import { useLocation, Navigate } from "react-router-dom";
import DesignSubServiceLayout from "@/components/DesignSubServiceLayout";
import { designSubServices } from "@/data/graphic-design-services";

const DesignSubService = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, "");
  const service = designSubServices.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/404" replace />;

  return <DesignSubServiceLayout data={service} />;
};

export default DesignSubService;
