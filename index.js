// We can render things that look like html
function Welcome(props) 
{  
    return <h1>Hello, {props.name}</h1>;
}


ReactDOM.render(<div><Welcome name="cory"/></div>, document.getElementById("root"));

// now trying to do the same with Vanilla Javascript

// create a new h1 element
// give it textContent
// give it a class name of 'header'
// append it as a child of the div#root
// NOT ALLOWED TO USE innerHTML

const root = document.getElementById("root");

const h2 = document.createElement("h2");
h2.textContent = "This is Vanilla JS";
h2.className = "header";

root.append(h2);