// TODO

class GroceryListItem extends React.Component {
	  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);

    this.state = {
    	isHovering: false,
    }
  }
    // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
 handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }
   // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {
  	  // Making the style conditional on our `state` lets us 
    // update it based on user interactions.
    var style = {
    	textDecoration : this.state.done ? 'linethrough' : 'none',
       fontWeight: this.state.hovering ? 'bold' : 'normal'
    };
    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    // You can pass inline styles using React's `style` attribute to any component
   return (
    
    <div>
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
          <li>
          style={style}
          </li>
          {this.props.element}
    </div>
         
    );
  }
}

var GroceryList = (props) => (

	<ul>
		{props.groceryList.map((key, element) => (
       <GroceryListItem key = {key} value ={element} />
      ))
    }
		</ul>
);


// const divStyle = {
//   WebkitTransition: 'all', // note the capital 'W' here
//   msTransition: 'all' // 'ms' is the only lowercase vendor prefix
// };

// function ComponentWithTransition() {
//   return <div style={divStyle}>This should work cross-browser</div>;
// }

ReactDOM.render<GroceryList items={["cucumbers", "kale"]} />,
   document.getElementById("app")
 );