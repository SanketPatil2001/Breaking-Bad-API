import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Header from './Components/Look/Header'
import CharacterList from './Components/Characters/CharacterList';
import Search from './Components/Look/Search';
import Pagination from './Components/Pagination';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  const [query, setQuery] = useState('')


  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterList isLoading={isLoading} items={currentPosts} />
      <h3 className='center'>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={items.length}
          paginate={paginate} /></h3>
    </div>
  );
}

export default App;
