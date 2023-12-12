import ContactInner from "@/components/ContactInner";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import BreadCrumb from "@/elements/BreadCrumb";

const page = () => {
  return (
    <>
      {/* Header One */}
      <HeaderOne />

      {/* Bread Crumb */}
      <BreadCrumb title={"Contact"} />

      {/* Contact Inner */}
      <ContactInner />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default page;
