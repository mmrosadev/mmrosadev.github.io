import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Acme", 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
  }

  a {
    cursor: pointer;
  }

  body{
    background-color: #f5f5f5;
  }
`

export default GlobalStyle