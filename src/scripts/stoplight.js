import React from 'react'

import STORE from './store'

const StopLight = React.createClass({
	_makeLights: function() {
		var colors = ['red','yellow','green']
		// the callback function to map tells it what to do to each element from the original array
		return colors.map((colorString) => <Light 
			key={colorString} 
			activeColor={this.state.activeColor} 
			color={colorString} />)
	},

	componentWillMount: function() {
		STORE.on('dataUpdated', ()=>{
			// whenever there's been a change in the store's data, 
			// 	our top-level component should update its state, so that it re-renders,
			//	and re-renders all of its children.
			this.setState(STORE.data)
		})
	},

	getInitialState: function() {
		// the state of the app is stored externally in the store. therefore whenever we 
		// 	need to get or update the state, we just read it from the store's data. 
		return STORE.data
	},

	 render: function() {
	 	return (
	 		<div className='stoplight' >
	 			{this._makeLights()}
	 			{/* running the line above yields the following: 
	 			[<Light color='green' />,
	 			<Light color='yellow' />,
	 			<Light color='red' />] 
	 			*/}
	 		</div>
	 	)
 	}
})

const Light = React.createClass({
	_turnLightOn: function() {
		STORE.set({
			activeColor: this.props.color
		})
	},

	render: function() {
		// is the activeColor the same as my color?
		var activeClass = this.props.activeColor === this.props.color ? 'active' : ''

		return <div onClick={this._turnLightOn} id={this.props.color} className={'light ' + activeClass} />
	}
})

export default StopLight
