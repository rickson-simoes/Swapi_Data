import React, { Component } from 'react';
import { PrincipalBox, NextButton } from './styles';

// https://swapi.co/api/planets/?search=alderaan

export default class Main extends Component {
  state = {
    novaData: [],
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log('ta ok');
  };

  render() {
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

        <NextButton onClick={this.handleSubmit}> Next </NextButton>
      </PrincipalBox>
    );
  }
}
