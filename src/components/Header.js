import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><strong>Techlis</strong> <span>Systems Inc.</span></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
