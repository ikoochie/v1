import { createGlobalStyle } from "styled-components"

const GlobalCSS = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;
  }

  @media (max-wdith: 1080px) {
    padding: 200px 100px;
  }

  @media (max-width: 768px) {
    padding: 150px 50px;
  }

  @media (max-width: 480x) {
    padding: 125px 25px;
  }

  &.fillHeight {
    padding: 0 150px;

    @media (max-width: 1080px) {
      padding: 0 100px;
    }
    @media (max-width: 768px) {
      padding: 0 50px;
    }
    @media (max-width: 480px) {
      padding: 0 25px;
    }
  }
`

export default GlobalCSS
