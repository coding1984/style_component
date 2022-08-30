import { createGlobalStyle } from "styled-components";
// font-family: 'Poppins', sans-serif;
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;900&display=swap');

*{
    box-sizing: border-box;
    margin: 0;
    padding:0;
}
body{
    font-family: 'Poppins', sans-serif;
}
img{
    max-width: 100%;
}
p{
    line-height: 1.5;
}
`;

export default GlobalStyle;