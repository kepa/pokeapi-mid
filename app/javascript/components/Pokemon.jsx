import React from "react";
import { Layout, Typography } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

class Pokemon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      pokemon: null
    };
  }
  
  componentDidMount() {
    this.loadPoke('blastoise')
  }

  loadPoke = (query) => {
    const url = `api/pokemons?pokemon_name=${query}`;
    fetch(url)
      .then(res => res.json())
      .then(

        (result) => {
          console.log(result)
          if(result.error) {
            this.setState({
              isLoaded: true,
              error: result
            });
          } else {
            this.setState({
              isLoaded: true,
              pokemon: result
            });
          }
          
        },

      )
  }  

  render() {
    const { error, isLoaded, pokemon } = this.state;
    console.log(this.state)
    if (error) {
      return <Text type="danger">Error: {error.error}</Text>;
    } else if (!isLoaded) {
      return <Text type="secondary">Loading...</Text>;
    } else {
      return (
        <div className="poke-desc">
          <Title>{pokemon.name}</Title>
          <ul>
            {pokemon.abilities.map( ability => (
                <li key={ability.id}>
                  {ability}
                </li>
              )
              )}
          </ul>
        </div>
      );
    }
  }


  
};

export default Pokemon;