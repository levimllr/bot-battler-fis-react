import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	constructor(props) {
		super(props);
	};

  render() {
		const botsArray = this.props.bots;

		const botCards = botsArray.map( (bot, index) => {
			return <BotCard key={index} bot={bot} enlisted={false} handleClickBot={this.props.handleClickBot}/>
			});

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {botCards}
    		</div>
  	  </div>
  	);
	};
};

export default BotCollection;
