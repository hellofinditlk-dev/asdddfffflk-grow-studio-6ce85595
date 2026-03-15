import { useParams, Navigate } from "react-router-dom";
import IndustryPageLayout from "@/components/IndustryPageLayout";
import { industries } from "@/data/industries";

const IndustryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) return <Navigate to="/404" replace />;

  return <IndustryPageLayout data={industry} />;
};

export default IndustryPage;
