import { useState } from 'react'

import Search from './Search'
import List from './List'
import Pagination from './Pagination'
import Button from './Button'
import { useDebouncedEffect } from '../hooks/useDebounce'

const fetchRepo = async (query, curPage, max) => {
  const response = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&page=${curPage}&per_page=${max}`)
  const data = await response.json()
  return data
}

const App = ({ maxPerPage }) => {

  const [ results, setResults ] = useState([])
  const [ loading, setLoading ] = useState(null)
  const [ error, setError ] = useState(false)
  const [ page, setPage ] = useState(1)
  const [ total, setTotal ] = useState(0)
  const [ searchValue, setSearchValue ] = useState('')

  const fetchInitial = async (query) => {
    if (!query.length) return
    setLoading(true)
    const data = await fetchRepo(query, page, maxPerPage)
    if (data && data.items && data.items.length > 0) {
      setResults(data.items)
      setTotal(data.total_count)
      setLoading(false)
      setError(false)
      return data
    }
    setResults([])
    setError(true)
    setLoading(false)
  }

  const fetchNextPage = async (query) => {
    setPage(page + 1)
    const data = await fetchRepo(query, page + 1, maxPerPage)
    if (data && data.items && data.items.length > 0) {
      setResults(results.concat(data.items))
    }
  }

  useDebouncedEffect(() => fetchInitial(searchValue), [searchValue], 1000);

  const hasResults = !error && results.length

  return (
    <main>
      <header>
        <Search 
          value={searchValue} 
          onChange={e => setSearchValue(e)} 
        />
      </header>

      {hasResults ? (
        <>
          {loading && <div>Loading...</div>}
          <List items={results} />
          <Pagination 
            current={page * maxPerPage} 
            total={total} 
          />
          <Button 
            label="Load more"
            onClick={() => fetchNextPage(searchValue, page + 1)}
          />
        </>
      ) : loading === false && (
        <div>No results found...</div>
      )}
    </main>
  );
}

App.defaultProps = {
  maxPerPage: 5,
}

export default App;
