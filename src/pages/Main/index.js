import React, { Component } from 'react';
import { PrincipalBox, NextButton } from './styles';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    novaData: [],
    loading: false,
  };

  componentDidMount() {
    this.handleSubmit();
  }

  handleSubmit = async () => {
    this.setState({ loading: true });

    const planets = [
      'Alderaan',
      'Yavin IV',
      'Hoth',
      'Dagobah',
      'Bespin',
      'Endor',
      'Naboo',
      'Coruscant',
      'Kamino',
      'Geonosis',
      'Utapau',
      'Mustafar',
      'Kashyyyk',
      'Polis Massa',
      'Mygeeto',
    ];
    const randomPlanets = planets[Math.floor(Math.random() * planets.length)];

    const response = await api.get(`/?search=${randomPlanets}`);

    this.setState({
      novaData: [response.data.results[0]],
      loading: false,
    });
  };

  render() {
    const { loading, novaData } = this.state;

    return (
      <PrincipalBox>
        <div>
          {novaData.map(planets => (
            <main key={planets.rotation_period}>
              <h1 key={planets.name}>{planets.name}</h1>

              <ul>
                <li>
                  <label>Population: </label>
                  <span key={planets.population}>{planets.population}</span>
                </li>

                <li>
                  <label>Climate: </label>
                  <span key={planets.climate}>{planets.climate}</span>
                </li>

                <li>
                  <label>Terrain: </label>
                  <span key={planets.terrain}>{planets.terrain}</span>
                </li>

                <li>
                  Featured in
                  <b key={planets.films.length}> {planets.films.length}</b> film
                  {planets.films.length > 1 ? 's' : ''}
                </li>
              </ul>
            </main>
          ))}
        </div>

        <NextButton loading={loading ? 1 : 0} onClick={this.handleSubmit}>
          {loading ? 'Carregando SWApi...' : 'Next'}
        </NextButton>
      </PrincipalBox>
    );
  }
}
