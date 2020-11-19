import React from 'react';
import Icons from './Icons';
import { ReactComponent as EventMarker } from '../assets/images/event_marker.svg'

function Event(props) {
	return (
		<div
			className={ "event" + (
				props.now ? " event--now" : ""
			) }
		>
			<div className="header">
				{ props.now ?
					<Icons
						id="event_live_marker"
						width="182"
						height="164"
					/>
					:
					<EventMarker />
				}
				<div className="tournament">{ props.tournamentName }</div>
				<div
					className="when"
				>
					{ props.now ?
						<a href="#">
							<Icons
								id="play"
								width="35"
								height="35"
							/>
							<div className="live">WATCH LIVE!</div>
						</a>
						:
						<>
							<div className="time">{ props.time }</div>
							<div className="date">{ props.date }</div>
						</>
					}
				</div>
			</div>
			<div className="info">
				<div className="labels">
					{
						props.label1 && props.label2 ?
							<>
								<div className="label">
									<Icons
										id={ props.label1 }
										width="50"
										height="50"
									/>
								</div>
								<div className="label">
									<Icons
										id={ props.label2 }
										width="50"
										height="50"
									/>
								</div>
							</>
							:
							<div className="label">
								<Icons
									id={ props.label }
									width="50"
									height="50"
								/>
							</div>
					}
				</div>
				{
					props.count1 && props.count2 ?
						<div className="teams teams--matches">
							<div className="team">
								<div className="teamName">{ props.team1 }</div>
								<div className="count">{ props.count1 }</div>
							</div>
							<div className="team">
								<div className="teamName">{ props.team2 }</div>
								<div className="count">{ props.count2 }</div>
							</div>
						</div>
						:
						<div className="teams teams--battles">
							<div className="team">
								<div className="teamName">{ props.team1 }</div>
								<div className="teamName">{ props.team2 }</div>
							</div>
							<div className="match">
								MATCH #{ props.match }
							</div>
						</div>
				}
				<div className="footer">
					<div className="bo">{ props.bo }</div>
					{
						!props.match &&
						<Icons
							id="ggbet_logo"
							width="62"
							height="30"
						/>
					}
				</div>
			</div>
		</div>
	);
}

export default Event;