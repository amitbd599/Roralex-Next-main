import HeaderOne from "@/components/HeaderOne";
import BreadCrumb from "@/elements/BreadCrumb";
import OurClientOne from "@/components/OurClientOne";
import FooterOne from "@/components/FooterOne";
import TeamDetailsInner from "@/components/TeamDetailsInner";

const page = () => {
  return (
    <>
       {/* Header One */}
       <HeaderOne />

{/* Bread Crumb */}
<BreadCrumb title={"Team Details"} />

{/* TeamDetailsInner */}
<TeamDetailsInner />

{/* Our Client One */}
<section className='ourclient-section-version-one bg-white py-80'>
  <OurClientOne />
</section>

{/* Footer One */}
<FooterOne />
    </>
  );
};

export default page;
