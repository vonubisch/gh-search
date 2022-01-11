import PropTypes from 'prop-types'

const Pagination = ({ current, total }) => {
  return (
    <div className="pagination">
      {current} of {total}
    </div>
  )
}

Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
}

export default Pagination