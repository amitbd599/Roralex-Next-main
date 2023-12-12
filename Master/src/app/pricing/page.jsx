import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import PricingInner from "@/components/PricingInner";
import BreadCrumb from "@/elements/BreadCrumb";

const page = () => {
  return (
    <>
      {/* Header One */}
      <HeaderOne />

      {/* Bread Crumb */}
      <BreadCrumb title={"Pricing"} />

      {/* PricingInner */}
      <PricingInner />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default page;
