import { ButtonComp2 } from "./ButtonComp2";
import PropTypes from 'prop-types'
export const CardComp = (props) => {


  return (
    <div className="w-full h-full flex flex-col gap-2 shadow-lg">
      <div className="w-full h-64">
        <img
          className="object-cover w-full h-full"
          src={props.img}
          alt={props.title}
        />
      </div>
      <div className="w-full flex flex-col justify-between p-4">
        <h1 className="font-semibold text-lg line-clamp-2 ">
          {props.title}
        </h1>
        <p className="text-gray-700 font-semibold text-base line-clamp-4 text-sm leading- mb-4 ">
          {props.text}
        </p>
        <p className="text-end text-gray-700 text-sm mb-2 font-semibold text-base">
          {props.author}
        </p>
        <ButtonComp2 text={"Drive"} link={props.link} />
      </div>
    </div>
  );
};

CardComp.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  author: PropTypes.string,
  link: PropTypes.string
}