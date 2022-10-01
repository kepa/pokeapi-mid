import React from "react";
import { Layout, Typography, Input, Divider } from "antd";

const { Title, Text } = Typography;
const { Search } = Input;

class Pokemon extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      pokemon: null
    };

    this.loadPoke = this.loadPoke.bind(this)
  };
  
  componentDidMount() {
    this.loadPoke(this.props.poke_name);
  };

  loadPoke(q){
    const url = `api/pokemons?pokemon_name=${q}`;
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
  };  

  render() {
    const { error, isLoaded, pokemon } = this.state;

    if (error) {
      return (
        
          <Text type="danger">Error: {error.error}</Text>
        
      );
    } else if (!isLoaded) {
      return <Text type="secondary">Loading...</Text>;
    } else {
      return (
        <div>
          <Search
            placeholder="Serach pokemon"
            enterButton="Search"
            size="large"
            onSearch={this.loadPoke}
          />

        
        <div className="poke-desc">
          
          <div className="poke-desc-header">
            <Title>{pokemon.name}</Title>
            <img className="sprite" src={pokemon.sprite}/>
          </div>

          <Divider />

          <Title level={3}>Main abilities:</Title>
          

          <ul className="poke-desc-list">
            {pokemon.abilities.map( ability => (
                <li key={ability.id}>
                  {ability}
                </li>
              )
              )}
          </ul>
        </div>
      </div>
      );
    }
  }


  
};

export default Pokemon;