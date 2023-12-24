
import PropTypes from 'prop-types'

export const Header = (props) => {
  return (
    <div className='text-center flex flex-col my-10' >
      <h1 className='text-xl font-black'>{props.title}</h1>
      <p className='font-semibold mx-[10%] '>{props.text}</p>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}

