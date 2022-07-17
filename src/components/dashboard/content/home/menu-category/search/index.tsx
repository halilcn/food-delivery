import React from 'react'
import { BsSearch } from 'react-icons/bs'

import './Search.scss'

interface IProps {}

const Search: React.FC<IProps> = props => {
  return (
    <div className="search">
      <input placeholder="Search menu or category..." className="search__input-text" />
      <BsSearch className="search__icon" />
    </div>
  )
}

export default Search
