import BlogGroup from "@/components/BlogGroup";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import BreadCrumb from "@/elements/BreadCrumb";

const page = () => {
  return (
    <>
      {/* Header One */}
      <HeaderOne />

      {/* Bread Crumb */}
      <BreadCrumb title={"Blog"} />

      {/* Blog Group */}
      <BlogGroup />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default page;
