import styled from "styled-components";
import Button from "./button";
const ShowCaseStyled = styled.div`
    position: relative;
    width: 90%;
    margin:2rem auto 0;
    min-width: 380px;
        .girlImage{
        position: absolute;
         width:50%;   
        bottom:8px;
        right:5px;
    }
    .position{
        position: absolute;
        left:25%;
        bottom:16%;
    }
`

function ShowCase() {
    return (  
        <ShowCaseStyled>
            <img className="girlImage" src="images/girl.png" alt="" />
            <img src="images/showCase.svg" alt="" srcset="" />
            <Button className="position">Showp Now</Button>
        </ShowCaseStyled>
    );
}

export default ShowCase;