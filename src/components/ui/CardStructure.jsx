import { ButtonComp2 } from "./ButtonComp2";

import PropTypes from "prop-types";

export const CardStructure = (props) => {
  return (
    <div className="shadow-xl p-2  ">
      <div className="h-48 w-full">
        <img
          className="object-cover object-center w-full h-full"
          src={props.img}
          alt=""
        />
      </div>
      <div className="flex flex-col h-[170px] justify-between relative">
        <div className="text-justify mt-3 font-black mb-2">
          <h1 className="text-xl font-black font-bold">{props.header}</h1>
          <p className="font-medium text-base line-clamp-4 text-sm leading-">
            {props.text}
          </p>
        </div>
        <ButtonComp2 text={"Selengkapnya"} link={props.link} />
      </div>
    </div>
  );
};

CardStructure.propTypes = {
  img: PropTypes.string,
  header: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
};
