import React from "react";
import BotCollection from "./BotCollection";

const url = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  state = {
    allBots: null
  };

  componentDidMount() {
    fetch(url)
      .then( response => response.json() )
      .then( json =>  this.setState({allBots: json}));
  };

  render() {
    return (
      <div>
        <h1>Bots Page</h1>
        <BotCollection bots={this.state.allBots} />
      </div>
    );
  }

}

export default BotsPage;
