import PropTypes from "prop-types";

export const CardBidang = (props) => {
  return (
    <div className=" my-10 bg-[#101626] text-white  flex flex-col">
      <div className="flex  flex-col justify-center py-5 items-center text-center ">
        <div className="header mb-2">
          <h1 className="text-xl lg:text-4xl font-black">{props.grade}</h1>
          <h1 className="font-bold text-lg lg:text-2xl">{props.name}</h1>
        </div>
        <p className="lg:w-1/2 item-center text-sm lg:text-lg px-2">
          {props.description}
        </p>
      </div>
      <div className="w-full h-full bg-vector3 bg-cover bg-center">
        <img
          src={props.img}
          alt="gambar"
          className="w-80 md:w-[35%] h-full object-cover object-top item-center mx-auto "
        ></img>
      </div>
    </div>
  );
};

CardBidang.propTypes = {
  grade: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
};
