import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../src/images/logo-white.png"
const EventCard = ({ siteTitle, type }) => {


  return (
    <div className="w-1/4 mr-2 rounded">
      <div className="w-full h-64 bg-gray-100">
        <img src={logo} className="" />
      </div>
      <div className="mt-2">
        <h3 className="text-xl font-bold">Another Event Title</h3>
        <p className="text-sm font-bold">Loprem ipsum delrem fetu</p>
      </div>
    </div>  )
  

}

EventCard.propTypes = {
  // siteTitle: PropTypes.string,
  // type: PropTypes.string,
}

EventCard.defaultProps = {
  // siteTitle: ``,
  // type: "transparent"
}

export default EventCard
