import test from 'public/icons/beef-100.svg'
import React from 'react'

import './MenuCategory.scss'

interface IProps {}

const MenuCategory: React.FC<IProps> = props => {
  return (
    <div className="menu-category-container">
      <div className="title">Menu Category</div>
      <div className="menu-list">
        <div className="item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100px" height="100px">
            <linearGradient id="q563KxfRcsiQEB7lVzd4Qa" x1="7.25" x2="41.583" y1="25.5" y2="25.5" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#a34f27" />
              <stop offset=".587" stop-color="#8b3817" />
              <stop offset="1" stop-color="#802d10" />
            </linearGradient>
            <path
              fill="url(#q563KxfRcsiQEB7lVzd4Qa)"
              d="M22.171,6.102C14.817,6.917,8.884,12.877,8.095,20.234	c-0.683,6.369,2.381,12.068,7.254,15.207c1.062,0.684,1.821,1.746,2.247,2.935C18.98,42.236,22.663,45,27,45c12,0,13-15,13-23	C40,12.561,31.826,5.031,22.171,6.102z"
            />
            <linearGradient id="q563KxfRcsiQEB7lVzd4Qb" x1="24" x2="24" y1=".605" y2="54.907" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#d4943b" />
              <stop offset="1" stop-color="#c2620e" />
              <stop offset="1" stop-color="#c2620e" />
            </linearGradient>
            <path
              fill="url(#q563KxfRcsiQEB7lVzd4Qb)"
              d="M22.171,3.102C14.817,3.917,8.884,9.877,8.095,17.234c-0.683,6.369,2.381,12.068,7.254,15.207	c1.062,0.684,1.821,1.746,2.247,2.935C18.98,39.236,22.663,42,27,42c12,0,13-15,13-23C40,9.561,31.826,2.031,22.171,3.102z"
            />
            <linearGradient id="q563KxfRcsiQEB7lVzd4Qc" x1="24" x2="24" y1=".252" y2="51.686" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#a34f27" />
              <stop offset=".587" stop-color="#8b3817" />
              <stop offset="1" stop-color="#802d10" />
            </linearGradient>
            <path
              fill="url(#q563KxfRcsiQEB7lVzd4Qc)"
              d="M27,40c-3.363,0-6.385-2.129-7.521-5.298c-0.594-1.659-1.676-3.059-3.047-3.942	c-4.487-2.89-6.921-7.99-6.35-13.312c0.692-6.446,5.869-11.644,12.309-12.358C22.927,5.03,23.468,5,24,5c7.72,0,14,6.28,14,14	C38,33.131,34.402,40,27,40z"
            />
            <path
              fill="#5c2415"
              d="M31,12.017H17c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h14c0.552,0,1,0.448,1,1v0 C32,11.569,31.552,12.017,31,12.017z"
            />
            <path
              fill="#5c2415"
              d="M34,18.017H14c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h20c0.552,0,1,0.448,1,1v0 C35,17.569,34.552,18.017,34,18.017z"
            />
            <path
              fill="#5c2415"
              d="M33,24.017H15c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h18c0.552,0,1,0.448,1,1v0 C34,23.569,33.552,24.017,33,24.017z"
            />
            <path
              fill="#5c2415"
              d="M33,30.017H21c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h12c0.552,0,1,0.448,1,1v0 C34,29.569,33.552,30.017,33,30.017z"
            />
            <path
              fill="#5c2415"
              d="M31,36.017h-7c-0.552,0-1-0.448-1-1l0,0c0-0.552,0.448-1,1-1h7c0.552,0,1,0.448,1,1l0,0 C32,35.569,31.552,36.017,31,36.017z"
            />
          </svg>
        </div>
        <div className="item">asdas as d</div>
        <div className="item">asdas as d</div>
        <div className="item">asdas as d</div>
      </div>
    </div>
  )
}

export default MenuCategory