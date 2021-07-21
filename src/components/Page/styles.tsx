import styled from 'styled-components';

import modelS from "../../assets/img/modelS.jpeg";
import modelY from "../../assets/img/modelY.jpeg";
import model3 from "../../assets/img/model3.jpeg";
import modelX from "../../assets/img/modelX.jpeg";
import solarPanels from "../../assets/img/solarPanels.jpeg";
import solarRoof from "../../assets/img/solarRoof.jpeg";
import accessories from "../../assets/img/accessories.jpeg";

export const Container = styled.div`
  .colored:nth-child(1) {
    background: lightblue url(${modelS}) no-repeat center;
    background-size: cover;
  }
  .colored:nth-child(2) {
    background: lightblue url(${modelY}) no-repeat center;
    background-size: cover;
  }
  .colored:nth-child(3) {
    background: lightblue url(${model3}) no-repeat center;
    background-size: cover;
  }
  .colored:nth-child(4) {
    background: lightblue url(${modelX}) no-repeat center;
    background-size: cover;
  }
  .colored:nth-child(5) {
    background: lightblue url(${solarPanels}) no-repeat center;
    background-size: cover;
  }
  .colored:nth-child(6) {
    background: lightblue url(${solarRoof}) no-repeat center;
    background-size: cover;
  }
  .colored:nth-child(7) {
    background: lightblue url(${accessories}) no-repeat center;
    background-size: cover;
  }
`;

export const Spacer = styled.div`
  height: 15vh;
  background: #fff;
`;