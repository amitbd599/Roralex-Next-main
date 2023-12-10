import HeaderOne from "@/components/HeaderOne";
import BreadCrumb from "@/elements/BreadCrumb";
import OurClientOne from "@/components/OurClientOne";
import FooterOne from "@/components/FooterOne";
import ProjectBackgroundOverlayFour from "@/components/ProjectBackgroundOverlayFour";
import TeamInner from "@/components/TeamInner";
import ClientReviewThree from "@/components/ClientReviewThree";

const page = () => {
  return (
    <>
      {/* Header One */}
      <HeaderOne />

      {/* Bread Crumb */}
      <BreadCrumb title={"Team"} />

      {/* TeamInner */}
      <TeamInner />

      {/* ProjectBackgroundOverlayFour */}
      <ProjectBackgroundOverlayFour />

      {/* ClientReviewThree */}
      <ClientReviewThree />

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
