import React from 'react'

import Card from '../ui/Card'
import './Hero.css'
const Hero = (props) => {
	return (
		<div className='heroes'>
			{props.data.map((el, id) => (
				<Card key={id}>
					<div className='heroInfo'>
						<h2>{el.nameHero}</h2>
						<img src={el.urlHero} />
					</div>
					<div className='power'>
						<h3>Способности: </h3>
						{el.heroPower}
					</div>
					<p>{el.textHero}</p>
				</Card>
			))}
		</div>
	)
}

export default Hero
