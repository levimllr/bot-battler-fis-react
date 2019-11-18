import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	renderBots = (botsArray) => botsArray.forEach( bot => {
	return <div>{bot.name}</div>
	});

  render() {


  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {renderBots(this.props.bots)}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
		};
};

export default BotCollection;
