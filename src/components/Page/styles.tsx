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
    background: url(${modelS}) no-repeat center;
    background-size: cover;
  }
  .colored:nth-child(2) {
    background: url(${modelY}) no-repeat center;
    background-size: cover;
  }
  .colored:nth-child(3) {
    background: url(${model3}) no-repeat center;
    background-size: cover;
  }
  .colored:nth-child(4) {
    background: url(${modelX}) no-repeat center;
    background-size: cover;
  }
  .colored:nth-child(5) {
    background: url(${solarPanels}) no-repeat center;
    background-size: cover;
  }
  .colored:nth-child(6) {
    background: url(${solarRoof}) no-repeat center;
    background-size: cover;
  }
  .colored:nth-child(7) {
    background: url(${accessories}) no-repeat center;
    background-size: cover;
  }
`;

export const Spacer = styled.div`
  height: 15vh;
  background: #fff;
`;