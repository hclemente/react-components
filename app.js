// TODO
var App = () => (
  <div>
    <GroceryList />
  </div>


);

var GroceryList = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryListItem item={items[0]}/>
    <GroceryListItem item={items[1]}/>
    <GroceryListItem item={items[2]}/>
  </div>


);

var GroceryListItem = (props) => (
  <ul>
    <li>{props.item}</li>
  </ul>
);

var items = ['eggs', 'bacon', 'sausage'];

ReactDOM.render(<App />, document.getElementById("app"));


