import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 10px 10px;
    Cursor: pointer;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #03002E;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    margin-top: 0;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
      <a className='navigation1ref' href='#aboutus'><h4>ABOUT US</h4></a></li>
      
      <li>
      <a className='navigation1ref' href='#services'><h4>SERVICES</h4></a>
      </li>

      <li>
      <a className='navigation1ref' href='#otherservices'><h4>OTHER SERVICES</h4></a>
      </li>
      <li>
      <a className='navigation1ref' href='#contactus'><h4>CONTACT US</h4></a>
      </li>
    </Ul>
  )
}

export default RightNav;
