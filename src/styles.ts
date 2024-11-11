import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  html{
    /* scroll-behavior: smooth; */
  }

  * {
    font-family: 'Roboto', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
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
    background-color: #18171D;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
  }

  #root{
    display: flex;
    position: relative;
  	min-height: 100vh;
  	flex-direction: column;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`

export default GlobalStyle