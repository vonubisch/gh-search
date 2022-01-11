import PropTypes from 'prop-types'

const Search = ({ value, onChange }) => (
  <input value={value} onChange={e => onChange(e.target.value)} />
)

Search.defaultProps = {
  value: '',
}

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default Search