import styled from "styled-components";
const Container = styled.div`
  max-width: 1920px;
  margin:auto;
  padding: 2rem ${({padding}) => padding??0} 0;
  background:${({bg}) => bg}
  `
  export default Container;