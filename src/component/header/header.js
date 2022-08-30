import {useState} from "react";
import styled from "styled-components";
import Button from "../button";
import { FaListAlt } from 'react-icons/fa';
import { AiFillCaretLeft } from "react-icons/ai";

const HeaderNav = styled.header`
 
  `
 const Nav = styled.nav`
  display:flex;
  justify-content:space-between;  
  align-items: center;
  .navButton{
    display: none;
  }
  @media (max-width:1000px){
    
    .navButton{
        font-size: 2rem;
        display:flex;
        cursor:pointer;
    }
  }
  ` 
  const Logo = styled.div`
    font-weight: 900;
    font-size: clamp(1.5rem,3vw,2.5rem);
  `
  const Ul = styled.ul`
    display: flex;
    list-style: none;
    gap:3rem;
    align-items: center;
    margin-left:auto; 
    margin-right:2rem;  
    letter-spacing: 0.01em;
    font-weight: 400;
    font-size: clamp(1rem,1vw,1.375rem);
    li{
        cursor: pointer;
    }
    .closeBtn{
        display: none;
    }
    @media (max-width:1000px) {
        flex-direction: column;
        align-items: start;
        background: black;
        color:white;
        padding:3rem;
        gap:1rem;
        position: absolute;
        left:0;
        top:30px;
        transform: translateX(${({show}) => show??-190}px);
        transition: transform 0.5s ease;
        z-index: 999;
        .closeBtn{
        font-size: 2rem;
        margin-left:auto; 
        display:block;
        }
    }
  `
function Header() {
    const [show, setShow] = useState()
    const showBtn = (value) => {
       value===190?setShow(-190):setShow(0)
    }
    return ( 
          <HeaderNav color="red">
            <Nav>
                <div className="navButton" onClick={showBtn}><FaListAlt/></div>
                <Logo> <img src="images/logo.svg" alt="" srcset="" />FASHION</Logo>
                <Ul show={show}>
                    <li className="closeBtn" onClick={() => showBtn(190)} ><AiFillCaretLeft/></li>
                    <li>CATALOGUE</li>
                    <li>FASHION</li>
                    <li>FAVOURITE</li>
                    <li>LIFESTYLE</li>
                </Ul>
                <Button>SIGN UP</Button>
            </Nav>
          </HeaderNav>  
     );
}

export default Header;