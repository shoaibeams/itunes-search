import React, { useEffect, useState } from 'react'
import './App.scss'
import axios from 'axios'
import { Pagination } from 'antd'
import SearchField from '../../components/SearchField/SearchField'
import AlbumsContainer from '../AlbumsCotaniner/AlbumsContainer'

const App = () => {
  const [data, setData] = useState({ hits: [] })
  const [originalData, setOriginalData] = useState({ hits: [] })
  const [query, setQuery] = useState('floyd')

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { results },
      } = await axios(
        `https://itunes.apple.com/search?term=${query}&country=US&media=music&entity=album&attribute=albumTerm`
      )

      setOriginalData(results)
      setData(results)
    }
    fetchData()
  }, [query])

  const handlePagination = (event) => {
    const pageNumber = event - 1 // 1, 2, 3
    const startingItemIndex = pageNumber * 8
    setData(originalData.slice(startingItemIndex, startingItemIndex + 8)) // 0, 8
  }

  const setQueryTerm = (term) => {
    const termReady = term.replace(' ', '+')
    setQuery(termReady)
  }

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>iTunes Albums Search</h1>

      <SearchField setQueryTerm={setQueryTerm} />
      <div className="pagination">
        <Pagination total={50} onChange={handlePagination} />
      </div>
      <AlbumsContainer albums={data.length ? data.slice(0, 8) : []} />
    </div>
  )
}

export default App
