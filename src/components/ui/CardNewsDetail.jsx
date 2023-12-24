
import PropTypes from 'prop-types'


export const CardNewsDetail = (props) => {
  return (
    <>
      <h1 className="my-4 font-black text-lg  lg:text-2xl">FOTO TAMBAHAN</h1>
      <div className="grid grid-cols-3  gap-5">
        <div className="h-24 lg:h-48">
          <img
            className="object-cover object-center w-full h-full filter hover:saturate-0"
            src={props.img_source}
            alt="gambar"
          />
        </div>
        <div className="h-24 lg:h-48">
          <img
            className="object-cover object-center w-full h-full filter hover:saturate-0"
            src={props.img_source2}
            alt="gambar"
          />
        </div>
        <div className="h-24 lg:h-48">
          <img
            className="object-cover object-center w-full h-full filter hover:saturate-0"
            src={props.img_source3}
            alt="gambar"
          />
        </div>

      </div>
    </>
  );
};

CardNewsDetail.propTypes = {
  img_source: PropTypes.string,
  img_source2: PropTypes.string,
  img_source3: PropTypes.string,
}