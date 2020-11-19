import React from 'react';
import Icons from './Icons/Icons';

function Banner() {
	return (
		<div className="banner">
			<div className="inner">
				<div className="logo">
					<Icons
						id="battlegrounds_logo"
						width="192"
						height="60"
					/>
				</div>
				<div className="content">
					<div className="left">
						<h1>StarSeries <span>i-League</span> CSGO <span>Season 8</span></h1>
						<p className="text">
							Parimatch League CS:GO is the new online league in Counter-Strike: Global Offensive from Parimatch and StarLadder, with $100,000 total prize pool. 16 teams from Europe and the CIS will take part in the League, with 4 teams going to League through open qualifiers.
						</p>
						<div className="buttons">
							<button className="button button--fill">
								<span>Read Announcement</span>
								<Icons
									id="arrow_right"
									width="20"
									height="20"
								/>
							</button>
							<button className="button button--empty">
								<span>GET TICKETS</span>
								<Icons
									id="tickets"
									width="26"
									height="30"
								/>
							</button>
						</div>
					</div>
					<div className="right">
						<div className="event">
							<p>
								<span>Место:</span>
								<b>Берлин, Германия</b>
							</p>
							<p>
								<span>Даты:</span>
								<b>22 Сентября - 30 Октября 2020</b>
							</p>
							<p>
								<span>Призы:</span>
								<b>$1,000,000</b>
							</p>
						</div>
						<div className="social">
							<a href="#">
								<Icons
									id="twitter_logo"
									width="22"
									height="18"
								/>
							</a>
							<a href="">
								<Icons
									id="twitch_logo"
									width="19"
									height="19"
								/>
							</a>
							<a href="">
								<Icons
									id="facebook_logo"
									width="11"
									height="20"
								/>
							</a>
							<a href="">
								<Icons
									id="vk_logo"
									width="26"
									height="16"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Banner;