import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    const botsArray = this.props.bots;

		const botCards = botsArray.map( (bot, index) => {
			return <BotCard key={index} bot={bot} enlisted={true} handleClickBot={this.props.handleClickBot}/>
			});

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {botCards}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
