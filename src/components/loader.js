import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import styled from "styled-components"
import IconLogo from "./icons/logo"

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  /* background-color: var(--dark-navy); */
  /* background-color: #252934; */
  background-color: #171c28;
  z-index: 99;

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    opacity: ${props => (props.isMounted ? 1 : 0)};
    svg {
      display: block;
      width: 70px;
      height: 70px;
      margin: 0 auto;
      fill: none;
      user-select: none;
      opacity: 0;
      animation: fade 0.6s ease-in alternate infinite;
    }
  }
`

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10)

    setTimeout(() => {
      finishLoading()
      return () => {
        clearTimeout(timeout)
      }
    }, 5000)
  }, [])

  return (
    <StyledLoader className="loader" isMounted={isMounted}>
      <Helmet bodyAttributes={{ class: `hidden` }} />

      <div className="logo-wrapper">
        <IconLogo />

        <div id="loader-wrapper">
          <div id="loader"></div>
        </div>
      </div>
    </StyledLoader>
  )
}

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
}

export default Loader
