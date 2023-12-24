import { ButtonComp } from "../../components/ui/ButtonComp";

import PropTypes from "prop-types";

export const AboutUs = (props) => {
  return (
    <div className="mb-5 flex flex-col gap-10 container p-5 mx-auto ">
      <div className="flex justify-center items-center gap-10 lg:flex-row flex-col">
        <div className=" w-full sm:w-[400px] h-64">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/OOnKJEWVpog?si=3TyX6pIFMg4hKqw1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="w-full sm:w-[400px]  text-justify lg:text-left">
          <h1 className="font-black text-md">
            Consectetur adipiscing elit, sed do eiusmod tempor
          </h1>
          <br />
          <p className="indent-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <ButtonComp link={"/aboutUs"} type={props.type} />
      </div>
    </div>
  );
};

AboutUs.propTypes = {
  type: PropTypes.string,
};
