import PropTypes from 'prop-types'

export const Header2 = (props) => {
  return (
    <div className="text-center p-5 bg-gray-200 h-16 lg:h-20 font-black text-lg md:text-xl lg:text-3xl ">{props.text}</div>
  )
}

Header2.propTypes = {
  text: PropTypes.string
}