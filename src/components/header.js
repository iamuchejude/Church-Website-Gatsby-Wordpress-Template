import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../src/images/logo-white.png"
const Header = ({ siteTitle, type }) => {

  switch (type) {
    case "transparent":
      return <header className="container flex items-center justify-between content-center h-16 z-10">
          {/* logo */}
          <img src={logo} className="w-32 h-auto m-0" />

        <nav>
          <ul className="flex uppercase m-0 text-sm text-gray-200 group">
            <li className="m-0 mr-8 hover:text-white ">
              <Link to="/contact/">The Jolt</Link>
            </li>
            <li className="m-0 mr-8 hover:text-white">
              <Link to="/contact/">Home</Link>
            </li>
            <li className="m-0 mr-8 hover:text-white">
              <Link to="/contact/">About</Link>
            </li>
            <li className="m-0 mr-8 hover:text-white">
              <Link to="/contact/">Sermon</Link>
            </li>
            <li className="m-0 mr-8 hover:text-white">
              <Link to="/contact/">Event</Link>
            </li>
            <li className="m-0 mr-8 hover:text-white">
              <Link to="/contact/">The Tower</Link>
            </li>
            <li className="m-0 mr-8 hover:text-white">
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>

          {/* navigation */ }
        </nav>

        <div className="flex">
          <Link to="/contact/" className="text-sm font-bold text-orange-500 mr-8 flex"><span><svg className="w-4 h-4 inline mr-2 fill-current" version="1.1" x="0px" y="0px"
	viewBox="0 0 314.068 314.068">
<g>
	<g id="_x33_56._Play">
		<g>
			<path d="M293.002,78.53C249.646,3.435,153.618-22.296,78.529,21.068C3.434,64.418-22.298,160.442,21.066,235.534
				c43.35,75.095,139.375,100.83,214.465,57.47C310.627,249.639,336.371,153.62,293.002,78.53z M219.834,265.801
				c-60.067,34.692-136.894,14.106-171.576-45.973C13.568,159.761,34.161,82.935,94.23,48.26
				c60.071-34.69,136.894-14.106,171.578,45.971C300.493,154.307,279.906,231.117,219.834,265.801z M213.555,150.652l-82.214-47.949
				c-7.492-4.374-13.535-0.877-13.493,7.789l0.421,95.174c0.038,8.664,6.155,12.191,13.669,7.851l81.585-47.103
				C221.029,162.082,221.045,155.026,213.555,150.652z"/>
		</g>
	</g>
</g>

</svg>
</span>LiveStream</Link>

<div className="mr-4 text-white">
            <svg  className="w-6 h-6 fill-current" version="1.1"  x="0px" y="0px"
             width="459px" height="459px" viewBox="0 0 459 459">
<g>
              <g id="menu">
                <path d="M0,382.5h459v-51H0V382.5z M0,255h459v-51H0V255z M0,76.5v51h459v-51H0z" />
              </g>
            </g>
           
</svg>

  </div>
          {/* side menu  and live stream */}
        </div>
      </header>
      break;

    default:
      return <header>

      </header>
  }

}

Header.propTypes = {
  siteTitle: PropTypes.string,
  type: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  type: "transparent"
}

export default Header
