import HeaderOne from "@/components/HeaderOne";
import SliderOne from "@/components/SliderOne";
import AboutOne from "@/components/AboutOne";
import ServiceListOne from "@/components/ServiceListOne";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectBackgroundOverlayOne from "@/components/ProjectBackgroundOverlayOne";
import OurTeamOne from "@/components/OurTeamOne";
import LatestProjectsOne from "@/components/LatestProjectsOne";
import ClientReviewOne from "@/components/ClientReviewOne";
import BlogSectionOne from "@/components/BlogSectionOne";
import OurPlanPriceOne from "@/components/OurPlanPriceOne";
import NewsLetterOne from "@/components/NewsLetterOne";
import OurClientOne from "@/components/OurClientOne";
import FooterOne from "@/components/FooterOne";

const page = () => {
  return (
    <>
      {/* Header One */}
      <HeaderOne />
      {/* Slider One */}
      <SliderOne />
      {/* About One */}
      <section className="about-section-version-one  pt-40 mb-140">
        <AboutOne />
      </section>
      {/* Service List One */}
      <ServiceListOne />
      {/* Why Choose Us */}
      <WhyChooseUs />
      {/* Project Background Overlay One */}
      <section
        className="projectBackgroundOverlay bg-white "
        style={{
          backgroundImage: "url('assets/img/bg-overlay/bg-overlay-1.png')",
        }}
      >
        <ProjectBackgroundOverlayOne />
      </section>
      {/* Our Team One */}
      <OurTeamOne />
      {/* Latest Projects One */}
      <LatestProjectsOne />
      {/* Client Review One */}
      <ClientReviewOne />
      {/* Blog Section One */}
      <BlogSectionOne />
      {/* Our Plan Price One */}
      <OurPlanPriceOne />
      {/* News Letter One */}
      <NewsLetterOne />
      {/* Our Client One */}
      <section className="ourclient-section-version-one py-80">
        <OurClientOne />
      </section>
      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default page;
