import React from 'react';
import { PrincipalBox, NextButton } from './styles';

function Main() {
  return (
    <PrincipalBox>
      <div>
        <h1>Planet Name</h1>

        <ul>
          <li>
            <label>Population</label> <span>20000</span>
          </li>
          <li>
            <label>Climate</label> <span>Arido</span>
          </li>
          <li>
            <label>Terrain</label> <span>Well ok</span>
          </li>

          <li>
            Featured in <b>8</b> films
          </li>
        </ul>
      </div>

      <NextButton> Next </NextButton>
    </PrincipalBox>
  );
}

export default Main;
