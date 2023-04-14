import { createGlobalStyle } from "styled-components";
import { Theme } from "~/features/theme";

const GlobalStyle = createGlobalStyle<{theme: Theme}>`
:root {
  --cta-primary: #635fc7;
  --cta-primary-light: #a8a4ff;
  --cta-secondary: #ea5555;
  --cta-secondary-light: #ff9898;
  --black-primary: #000112;
  --white-primary: #ffffff;
  --text-primary: #828fa3;
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  box-sizing: border-box;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  min-height: 100vh;
}

.btn {
  border: none;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
}

a {
  text-decoration: none;
  color: inherit;
}

input, textarea, button {font-family: inherit}

ul {
  list-style-type: none;
}
`

export default GlobalStyle;