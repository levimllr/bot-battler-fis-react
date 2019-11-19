import React from "react";
import BotCollection from "./BotCollection";
import BotSpecs from "../components/BotSpecs";
import YourBotArmy from "./YourBotArmy";

const url = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  state = {
    allBots: [],
    yourBots: [],
    currentBot: null
  };

  componentDidMount() {
    fetch(url)
      .then( response => response.json() )
      .then( json =>  this.setState({allBots: json}) );
  };

  inspectBot = botCardProps => this.setState({currentBot: botCardProps.bot.id});
  
  dismissBot = botCardProps => {
    let yourBots = this.state.yourBots;
    let allBots = this.state.allBots;
    let index = this.state.yourBots.indexOf(botCardProps.bot);
    yourBots.splice(index, 1);
    allBots.push(botCardProps.bot);
    this.setState({ allBots: allBots, yourBots: yourBots });
  };

  enlistBot = botCardProps => {
    let yourBots = this.state.yourBots;
    let allBots = this.state.allBots;
    let index = this.state.allBots.indexOf(botCardProps.bot);
    allBots.splice(index, 1);
    yourBots.push(botCardProps.bot);
    this.setState({ allBots: allBots, yourBots: yourBots });
    this.setState({ currentBot: null });
  };

  goBack = () => this.setState({ currentBot: null });

  render() {
    let view;
    const currentBot = this.state.allBots.find(bot => bot.id === this.state.currentBot);
    if (!currentBot) {
      view = (<BotCollection bots={this.state.allBots} handleClickBot={this.inspectBot} />);
    } else {
      view = (<BotSpecs bot={currentBot} handleEnlist={this.enlistBot} handleGoBack={this.goBack} /> );
    };

    return (
      <div>
        <YourBotArmy bots={this.state.yourBots} handleClickBot={this.dismissBot} />
        { view }
      </div>
    );
  };
};

export default BotsPage;
