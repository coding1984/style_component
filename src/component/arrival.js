import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

const Card = styled.div`

    
  .crdContent{
    width:300px;
  }
  h3{
    font-weight: 500;
  }
  .small{
    font-size: 0.8rem;
    position: relative;
  }
  .icon{
    font-size: 1.2rem;
    position: absolute;
    right:0;
  }


  `


function Arrival({image,title,text}) {
    return ( 
        <Card>
            <div className="crdContent">
                <img src={image} alt="" />
                <h3>{title}</h3>
                <p className="small">{text}<span className="icon"><BsArrowRight/></span></p>
            </div>
        </Card>
     );
}

export default Arrival;
