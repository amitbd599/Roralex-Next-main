import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import OurClientOne from "@/components/OurClientOne";
import ProjectDetailsInner from "@/components/ProjectDetailsInner";
import BreadCrumb from "@/elements/BreadCrumb";

const page = () => {
  return (
    <>
      {/* Header One */}
      <HeaderOne />

      {/* Bread Crumb */}
      <BreadCrumb title={"Project Details"} />

      {/* Project Details Inner */}
      <ProjectDetailsInner />

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
