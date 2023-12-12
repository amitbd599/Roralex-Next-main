import FaqInner from "@/components/FaqInner";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import OurClientOne from "@/components/OurClientOne";
import BreadCrumb from "@/elements/BreadCrumb";

const page = () => {
  return (
    <>
      {/* Header One */}
      <HeaderOne />

      {/* Bread Crumb */}
      <BreadCrumb title={"FAQ"} />

      {/* Faq Inner */}
      <FaqInner />

      {/* Our Client One */}
      <section className="ourclient-section-version-one bg-white py-80">
        <OurClientOne />
      </section>

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default page;
