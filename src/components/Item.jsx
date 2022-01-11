import PropTypes from 'prop-types'

const Item = ({ image, title, description, stars }) => {
  return (
    <div>
      <img src={image} alt={title} width={16} height={16} />
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{stars} stars</span>
    </div>
  )
}

Item.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  stars: PropTypes.number,
}


Item.defaultProps = {
  description: '',
  stars: 0,
}


export default Item