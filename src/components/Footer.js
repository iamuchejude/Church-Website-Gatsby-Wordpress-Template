import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../src/images/logo-white.png"
const Footer = ({ siteTitle, type }) => {


  return (
    <footer>
      © {new Date().getFullYear()}, Built with
            {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
     )
  

}

Footer.propTypes = {
  // siteTitle: PropTypes.string,
  // type: PropTypes.string,
}

Footer.defaultProps = {
  // siteTitle: ``,
  // type: "transparent"
}

export default Footer
