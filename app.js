// // TODO
var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['eggs', 'bacon', 'sausage']}/>
  </div>
);

var GroceryList = (props) => (
<ul>
  {/* {props.items.map((currentElement) => (
    <GroceryListItem item={currentElement}/>
  ))} */}
  <GroceryListItem item={props.items[0]}/>
  <GroceryListItem item={props.items[1]}/>
  <GroceryListItem item={props.items[2]}/>
</ul>
);

class GroceryListItem extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render () {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (<li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.item}</li>);
  };
}

ReactDOM.render(<App />, document.getElementById("app"));


