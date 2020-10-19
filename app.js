// // TODO
var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['eggs', 'bacon', 'sausage']}/>
  </div>
);

var GroceryList = (props) => (
<ul>
  {props.items.map((currentElement) => (
    <GroceryListItem item={currentElement}/>
  ))}
</ul>
);

var GroceryListItem = (props) => (
    <ul>
          <li>{props.item}</li>
    </ul>
);



ReactDOM.render(<App />, document.getElementById("app"));


