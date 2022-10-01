import React from "react";
import { Layout, Typography, Input, Divider } from "antd";

const { Title, Paragraph, Text, Link } = Typography;
const { Search } = Input;
// const [q, setQ] = useState("");

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
     //this.loadPoke('blastoise')
    this.loadPoke(this.props.poke_name)
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

  reloadSection = (query) =>{
    this.setState({});
  }

  render() {
    const { error, isLoaded, pokemon } = this.state;

    if (error) {
      return (
        <>
          <Search
            placeholder="Serach pokemon"
            enterButton="Search"
            size="large"
            onSearch={this.loadPoke}
          />
          <Text type="danger">Error: {error.error}</Text>
        </>
      );
    } else if (!isLoaded) {
      return <Text type="secondary">Loading...</Text>;
    } else {
      return (
        <>
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
      </>
      );
    }
  }


  
};

export default Pokemon;