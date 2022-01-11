import PropTypes from 'prop-types'

const Search = ({ value, onChange }) => (
  <input value={value} onChange={e => onChange(e.target.value)} className="search" placeholder="Type to search a repository.." />
)

Search.defaultProps = {
  value: '',
}

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default Search