import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const IconLayout = (props) => {
  return (
    <NavLink to={props.path}>
      <div className="rounded-full bg-blue-500 hover:bg-blue-950 md:w-11 md:h-11 h-8 w-8 ring-2 ring-white flex p-1 items-center justify-center">
        {props.children}
      </div>
    </NavLink>
  );
};

IconLayout.propTypes = {
  path: PropTypes.string,
};
