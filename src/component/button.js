import styled from "styled-components";

const Button = styled.button`
background: black;
color:${({theme}) => theme.whiteText};
padding:8px 12px;
border-radius:5px;
cursor:pointer;
`;
export default Button;