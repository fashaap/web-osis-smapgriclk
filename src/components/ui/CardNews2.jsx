import { NavLink } from "react-router-dom";
import PropTypes from "prop-types"

export const CardNews2 = (props) => {
  return (
    <div className="w-full lg:flex gap-5 shadow-lg">
      <div className="w-full h-64 lg:w-[600px] lg:h-[350px] xl:w-[500px]">
        <img
          className="object-cover w-full h-full"
          src={props.img}
          alt="image"
        />
      </div>
      <div className="flex flex-col w-full xl:w-[600px] justify-between py-10 px-5">
        <div className="flex flex-col lg:gap-5">
          <h1 className="text-lg lg:text-xl xl:text-3xl font-bold mb-2">
            {props.title}
          </h1>
          <p className="line-clamp-4   text-sm leading lg:text-lg font-semibold text-gray-500">
            {props.text}
          </p>
          <div className="mt-2 font-bold">
            <NavLink className="flex" to={`article/${props.path}`}>
              <span>Readmore</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M7 17L17 7" stroke="black"  />
                  <path d="M7 7H17V17" stroke="black"  />
                </svg>
              </span>
            </NavLink>
          </div>
        </div>
        <p className="mt-3 text-sm lg:text-md text-end">{props.author}</p>
      </div>
    </div>
  );
};


CardNews2.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  author: PropTypes.string,
  img: PropTypes.string,
  path: PropTypes.number
}
