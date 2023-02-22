import React from 'react'

function Header() {
  return (
    <header>
      <div className='flex items-center space-x-2 md:space-x-10'>
        <img
          className='cursor-pointer object-contain'
          src="https://rb.gy/ulxxee" alt="" width={100} height={100}
        />

        <ul className='hidden space-x-4 md:flex'>
          <li className='headerLink'>Home</li>
          <li className='headerLink'>TV Shows</li>
          <li className='headerLink'>Movies</li>
          <li className='headerLink'>New & Popular</li>
          <li className='headerLink'>My List</li>
        </ul>
      </div>
      <div>

      </div>
      Header
    </header>
  )
}

export default Header
