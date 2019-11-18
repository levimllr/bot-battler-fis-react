import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const url = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  state = {
    allBots: [],
    yourBots: []
  };

  componentDidMount() {
    fetch(url)
      .then( response => response.json() )
      .then( json =>  this.setState({allBots: json}) );
  };

  handleClickBot = (botCardProps) => {
    // console.log(botCardProps);
    let yourBots = this.state.yourBots;
    let allBots = this.state.allBots;
    let indexOfBot;
    if (botCardProps.enlisted === false) {
      yourBots.push(botCardProps.bot);
      indexOfBot = allBots.indexOf(botCardProps.bot);
      allBots.splice(indexOfBot, 1);
      this.setState({  allBots: allBots, yourBots: yourBots });
      // return botCardProps.bot;
    } else {
      indexOfBot = yourBots.indexOf(botCardProps.bot);
      yourBots.splice(indexOfBot, 1);
      allBots.push(botCardProps.bot);
      this.setState({  allBots: allBots, yourBots: yourBots });
      // return botCardProps.bot;
    };
  };



  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.yourBots} handleClickBot={this.handleClickBot} />
        <BotCollection bots={this.state.allBots} handleClickBot={this.handleClickBot} />
      </div>
    );
  };
};

export default BotsPage;
