import styled from "styled-components";
import Button from "./button";

const SellNowStyle = styled.div`
    max-height:968px;
    margin-top:50px;
    position: relative;


`
const ButtonPositon = styled(Button)`
    position: absolute;
    right: 38%;
    bottom: 20%;
    
    `


function SellNow() {
    return (  
        <SellNowStyle>
           <img src="images/sellNow.png" alt="" srcset="" />
            <ButtonPositon>SHOP NOW</ButtonPositon> 
        </SellNowStyle>

    );
}

export default SellNow;