
import PropTypes from 'prop-types'


export const CardPractices = (props) => {
  return (
    <div className="font-serif font-medium  ">
      <h1 className="font-bold text-2xl font-serif  ">MISI</h1>
      <p className="text-justify ">
        {props.text}
      </p>
    </div>
  );
};

CardPractices.propTypes = {
  text: PropTypes.string
}