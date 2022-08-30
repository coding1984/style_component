import styled from "styled-components";

const Flex = styled.div`
    display: flex;
    justify-content: ${({contentValue}) => contentValue??'center'};
    align-items: ${({itemValue}) => itemValue??'center'};
    gap:${({gapValue}) => gapValue};

    
  @media (max-width: ${({screenSize}) => screenSize??''} ){
    flex-wrap: wrap;
}
  `
  export default Flex;