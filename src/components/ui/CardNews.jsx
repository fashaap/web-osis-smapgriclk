import PropTypes from 'prop-types';

export const CardNews = (props) => {
  return (
    <div className="bg-white text-black rounded-none overflow-hidden w-full flex flex-col " >
      <div className="w-full">
        <img
          src={props.img}
          className="w-full object-cover h-64"
          alt={props.alt}
        />
      </div>
      <div className="px-6 py-4 flex flex-col gap-3 justify-evenly">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-gray-700 text-base line-clamp-4 text-sm leading">
          {props.text}
        </p>
        <div>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.subtitle}
          </span>
        </div>
      </div>

    </div>
  );
};

CardNews.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  subtitle: PropTypes.string,
  alt: PropTypes.string,

};

