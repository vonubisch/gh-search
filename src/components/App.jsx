import { useState } from 'react'

import Search from './Search'
import List from './List'
import Pagination from './Pagination'
import Button from './Button'

const App = ({ maxPerPage }) => {

  const [ results, setResults ] = useState([
    { title: 'Test 1', description: 'Test repo 1', stars: 10, image: 'https://avatars.githubusercontent.com/u/1705851?v=4', },
    { title: 'Test 2', description: 'Test repo 2', stars: 10, image: 'https://avatars.githubusercontent.com/u/1705851?v=4', },
  ])
  const [ loading, setLoading ] = useState(null)
  const [ page, setPage ] = useState(null)

  const [ searchValue, setSearchValue ] = useState('')

  return (
    <main>
      <header>
        <Search 
          value={searchValue} 
          onChange={setSearchValue} 
        />
        <Button 
          label="Search"
          onClick={e => e}
        />
      </header>
      <List items={results} />
      <Pagination 
        current={maxPerPage} 
        total={(results && results.length) || 0} 
      />
      <Button 
        label="Load more"
        onClick={e => e}
      />
    </main>
  );
}

App.defaultProps = {
  maxPerPage: 5,
}

export default App;
