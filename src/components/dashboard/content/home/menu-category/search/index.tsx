import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

import './Search.scss'

interface IProps {}

const Search: React.FC<IProps> = props => {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const toggleFocus = () => {
    setIsFocused(!isFocused)
  }

  const containerAnimateVariants = {
    focused: { width: '100%' },
    initial: { width: 350 },
  }

  const searchAnimateVariants = {
    focused: { top: 60 },
    initial: { top: 0 },
  }

  return (
    <motion.div animate={isFocused ? 'focused' : 'initial'} variants={containerAnimateVariants} className="search">
      <input onFocus={toggleFocus} onBlur={toggleFocus} placeholder="Search menu or category..." className="search__input-text" />
      <BsSearch className="search__icon" />
      <motion.div
        animate={isFocused ? 'focused' : 'initial'}
        variants={searchAnimateVariants}
        className="search__result-dropdown">
        <div className="search__no-response">No results...</div>
      </motion.div>
    </motion.div>
  )
}

export default Search
