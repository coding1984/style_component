import styled from "styled-components";

const LogoBrandingStyle = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top:-28px;
        padding: 1.5rem 1rem;
        img{
            width:80%;
        }
  `
function LogoBranding() {
    return (  
        <LogoBrandingStyle>
            <img src="images/Frame 8.png " alt="" srcset="" />
        </LogoBrandingStyle>   
    );
}

export default LogoBranding;