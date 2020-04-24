import React from 'react'
import { Input } from 'antd'
import './SearchField.scss'

const { Search } = Input
const SearchField = ({ setQueryTerm }) => {
  return (
    <div className="search-input">
      <Search
        placeholder="Search albums here..."
        enterButton
        onChange={(event) => setQueryTerm(event.target.value)}
      />
    </div>
  )
}

export default SearchField
