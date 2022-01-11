import PropTypes from 'prop-types'
import Item from './Item'

const List = ({ items }) => {
  return (
    <ol className="list">
      {items.map((e) => (
        <li key={e.id}>
          <Item 
            title={e.name} 
            image={e.owner.avatar_url} 
            description={e.description} 
            stars={e.stargazers_count}
          />
        </li>
      ))}
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