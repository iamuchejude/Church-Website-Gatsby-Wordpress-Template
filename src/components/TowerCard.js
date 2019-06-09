import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../src/images/logo-white.png"
const TowerCard = ({ siteTitle, type }) => {


  return (
    <div className = "w-1/4 p-8 mr-2 bg-gray-200 rounded-lg " >
      <div className="flex h-md flex-col justify-between">
        <ul className="flex flex-wrap">
          <li className="rounded-full bg-white hover:bg-gray-300 hover:text-white font-bold px-6 py-2 mr-2 mb-2"><a>King & 1</a></li>
          <li className="rounded-full bg-white hover:bg-gray-300 hover:text-white font-bold px-6 py-2 mr-2 mb-2"><a>Sermon</a></li>
          <li className="rounded-full bg-white hover:bg-gray-300 hover:text-white font-bold px-6 py-2 mr-2 mb-2"><a>Pastor K</a></li>
        </ul>
      </div>

      <div>
        <h2>TOD Connect</h2>
        <p>Explore our departments, VG-Groups, and Clusters <br />
          - see where you might plug in and grow!
            </p>
      </div>
        </div>)
  

}

TowerCard.propTypes = {
  // siteTitle: PropTypes.string,
  // type: PropTypes.string,
}

TowerCard.defaultProps = {
  // siteTitle: ``,
  // type: "transparent"
}

export default TowerCard
