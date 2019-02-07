import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Logo = ({className, history, href, text}) =>
  <span
    data-testid='logo'
    className={className}
    data-nav={'about'}
    href={href}
    onClick={event => {
      event.preventDefault()
      history.push(`/about/`)
    }}
  >
    {text}
  </span>

Logo.defaultProps = {
  href: '/about/',
  text: 'qit'
}

Logo.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}

export default styled(Logo)`
  position: absolute;
  right: 20px;
  top: 15px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`
