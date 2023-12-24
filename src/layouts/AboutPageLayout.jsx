
import { Header } from "../components/ui/Header";
import { Header2 } from "../components/ui/Header2";
import { AboutUsPage } from "../pages/about/AboutUsPage";
import { AboutVideo } from "../pages/about/AboutVideo";
import { Addres } from "../pages/about/Addres";
import { Practices } from "../pages/about/Practices";
import { Structure } from "../pages/about/Structure";

const AboutPageLayout = () => {
  return (
    <>
      <Header2 text={"About Us"} />
      <AboutUsPage />
      <div className="bg-[#111727] h-screen mb-10 text-white flex">
        <AboutVideo />
      </div>
      <div className="container mx-auto max-w-5xl py-10  text-center flex flex-col justify-center items-center gap-10">
        <div className="mb-10 mt-10">
          <Practices />
        </div>
        <Header
          title={"Structure"}
          text={
            "          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit alias consequatur totam voluptate ipsum. Voluptatem, veniam culpa facilis consectetur voluptatibus modi odit rem quos qui error laudantium nobis sapiente repellendus."
          }
        />
        <Structure />
      </div>
      <div className="bg-[#111727] text-black flex ">
        <Addres/>
      </div>
    </>
  );
};

export default AboutPageLayout;
