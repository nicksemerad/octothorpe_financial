import React from 'react';
import img from '../../images/OCTO_LOGO_W_TEXT.jpg';
import styled from 'styled-components';

const Content = styled.div`
.center{
  text-align: center;
  display: block;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 100px;
  height: 250px;
  width: 300px;
}
`;
const Home = () => (
  <Content>
    <img src={img} className='center'/>
  </Content>

)
export default Home;