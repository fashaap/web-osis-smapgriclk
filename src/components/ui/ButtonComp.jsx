import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const ButtonComp = (props) => {
  return (
    <NavLink to={props.link} type={props.type}>
      {props.type !== "home" ? (
        <button className="text-white bg-blue-500 hover:bg-blue-800 ring-1 font-medium px-5 py-2.5 text-center me-2 mb-2">
          <span className="lg:text-lg">{props.text}</span>
        </button>
      ) : null}
    </NavLink>
  );
};

ButtonComp.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  type: PropTypes.string,
};

ButtonComp.defaultProps = {
  text: "Selengkapnya",
};
