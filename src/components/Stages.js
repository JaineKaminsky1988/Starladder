import React, { Component } from 'react';
import { commands } from './const';
import Icons from './Icons';

class Stages extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeRow: 0,
			windowWidth: window.innerWidth,
			isVisible: false
		}
		this.handleRowSelect = this.handleRowSelect.bind(this)
		this.handleResize = this.handleResize.bind(this)
	}
	
	handleRowSelect(index) {
		this.setState({
			activeRow: index,
		})
		this.state.windowWidth <= 768 &&
		this.setState({
			isVisible: true
		})
	}
	
	handleResize(e) {
		this.setState({
			windowWidth: window.innerWidth
		});
	};
	
	handlePopupHidden() {
		this.setState({
			isVisible: false
		})
	}
	
	componentDidMount() {
		window.addEventListener("resize", this.handleResize);
	}
	
	componentWillUpdate() {
		window.addEventListener("resize", this.handleResize);
	}
	
	render() {
		const {activeRow, windowWidth, isVisible} = this.state
		console.log(windowWidth >= 769 || isVisible)
		return (
			<div className="stages">
				<h2>Этапы проведения</h2>
				<p>The path to every Major begins with the open qualifiers for the regional Minor Championships, spanning Europe, CIS, Americas, and Asia. <span>Here is</span> the schedule of every qualifying stage of StarLadder Major.</p>
				<div className="registered">
					Зарегистрировано: { commands.length }
				</div>
				<div
					className="teamsBl"
				>
					<div className="teamsTable">
						<div className="row row--head">
							<div className="column1">#</div>
							<div className="column2">Команда</div>
						</div>
						{
							commands.map((item, idx) => {
								return (
									<div
										key={ idx }
										className={ "row" + (
											this.state.activeRow === idx ?
												" row--active" :
												""
										) }
										onClick={ () => this.handleRowSelect(idx) }
									>
										<div className="column1">{ item.id }</div>
										<div className="column2">
											<Icons
												id="flag_UA"
												width="62"
												height="15"
											/>
											<span>{ item.name }</span>
										</div>
									</div>
								)
							})
						}
					</div>
					
					<div
						className={ "teamsInfo" + (
							isVisible ? " teamsInfo--blur" : ""
						) }
					>
						
						{
							(
								windowWidth >= 769 || isVisible
							) &&
							<div
								className={
									windowWidth <= 768 ? "popup" : ""
								}
							>
								{ (
									isVisible && windowWidth <= 768
								) &&
								<div
									className="closeBtn"
									onClick={ () => this.handlePopupHidden() }
								>
									<Icons
										id="close"
										width="15"
										height="15"
									/>
								</div>
								}
								{
									commands.map((item, idx) => {
										return (
											activeRow === idx &&
											<div
												className="teamInfo"
												key={ idx }
											>
												<div className="infoDate">
													<Icons
														id="trophy_outline"
														width="60"
														height="60"
													/>
													<div>
														<div className="infoLabel">
															Registration
														</div>
														<div className="date">
															{ item.registration }
														</div>
													</div>
												</div>
												<div className="infoDate">
													<Icons
														id="security"
														width="60"
														height="60"
													/>
													<div>
														<div className="infoLabel">
															Check-in
														</div>
														<div className="date">
															{ item.checkIn }
														</div>
													</div>
												</div>
												<div className="infoDate">
													<Icons
														id="calendar"
														width="60"
														height="60"
													/>
													<div>
														<div className="infoLabel">
															Scheduling:
														</div>
														<div className="date">
															{ item.scheduling }
														</div>
													</div>
												</div>
												<div className="success">
													<Icons
														id="check"
														width="44"
														height="44"
													/>
													<div>
														<div className="successMarker">ВЫ ЗАРЕГИСТРИРОВАНЫ</div>
														<div className="successTeam">
															Team: { item.name } (#{ item.id })
														</div>
													</div>
												</div>
											</div>
										)
									})
								}
							</div>
						}
						
						<div className="help">
							<div>
								<span>SUPPORT</span>
								<Icons
									id="shevron_right"
									width="10"
									height="16"
								/>
							</div>
							<div>
								<span>RULES</span>
								<Icons
									id="shevron_right"
									width="10"
									height="16"
								/>
							</div>
							<div>
								<span>FAQ</span>
								<Icons
									id="shevron_right"
									width="10"
									height="16"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Stages;