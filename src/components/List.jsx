import PropTypes from 'prop-types'
import Item from './Item'

const List = ({ items }) => {
  return (
    <ol>
      <li>
        {items.map((e) => (
          <Item 
            key={e.title} 
            title={e.title} 
            image={e.image} 
            description={e.description} 
            stars={e.stars}
          />
        ))}
      </li>
    </ol>
  )
}

List.defaultProps = {
  items: [],
}

List.propTypes = {
  items: PropTypes.array,
}

export default List