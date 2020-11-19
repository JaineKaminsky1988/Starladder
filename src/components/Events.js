import React, { Component } from 'react';
import Event from './Event';
import { matches, battles, tabs, commands } from './const';

class Events extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeIndex: 0,
		}
		
		this.handleTabChange = this.handleTabChange.bind(this)
	}
	
	handleTabChange(index) {
		this.setState({
			activeIndex: index,
		})
	}
	
	render() {
		const {activeIndex} = this.state
		return (
			<div className="events">
				<h2>Расписание и результаты</h2>
				<div className="tabs">
					{
						tabs.map((item, idx) => {
							return (
								<button
									key={ idx }
									className={ "tab" + (
										activeIndex === idx ? " tab--active" : ""
									) }
									onClick={ () => this.handleTabChange(idx) }
								>
									{ item.tab }
								</button>
							)
						})
					}
				</div>
				<div className="tabPanel">
					{
						activeIndex === 0 ?
							matches.map((item, idx) => {
								return (
									<Event
										key={ idx }
										tournamentName={ item.tournament.name }
										now={ item.tournament.now }
										time={ item.tournament.time }
										date={ item.tournament.date }
										
										label1={ item.team1.labelId }
										team1={ item.team1.name }
										count1={ item.team1.count }
										
										label2={ item.team2.labelId }
										team2={ item.team2.name }
										count2={ item.team2.count }
										bo={ item.bo }
									/>
								)
							}) :
							battles.map((item, idx) => {
								return (
									<Event
										key={ idx }
										tournamentName={ item.tournament }
										now={ item.now }
										time={ item.time }
										date={ item.date }
										
										label={ item.label }
										team1={ item.team1 }
										team2={ item.team2 }
										match={ item.match }
										bo={ item.bo }
									/>
								)
							})
					}
				</div>
			</div>
		);
	}
}

export default Events;





