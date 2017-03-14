import Backbone from 'backbone'

// Object.assign will merge our store object with the Backbone event emitter. 
// note that the first input is an empty object. that object will be the
// receptacle for all the key-value pairs of Backbone.Events as well as our 
// custom input object
var STORE = Object.assign({},Backbone.Events,{

	data: { // the data on the store becomes the state of our top-level component.
		activeColor: 'red',
		alertMessage: null
	},

	broadcastChange: function() {
		this.trigger('dataUpdated')
	},

	// whenever we want to modify the store, we will call .set(), passing in 
	// the new key-value pairs. 
	// set will 
	// 	(1) merge our key-value pairs into the store's data, then it will
	// 	(2) trigger a 'dataUpdated' event
	set: function(newAttributes) {
		// 1)
		this.data = Object.assign({}, this.data, newAttributes) 
		// 2) 
		this.broadcastChange()
	}
})


export default STORE