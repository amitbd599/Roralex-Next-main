import BlogDetailsInner from "@/components/BlogDetailsInner";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import BreadCrumb from "@/elements/BreadCrumb";

const page = () => {
  return (
    <>
      {/* Header One */}
      <HeaderOne />

      {/* Bread Crumb */}
      <BreadCrumb title={"Blog Details"} />

      {/* Bread Crumb */}
      <BlogDetailsInner />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default page;
