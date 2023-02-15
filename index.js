// We can render things that look like html
function Welcome(props) 
{  
    return <h1>Hello, {props.name}</h1>;
}


ReactDOM.render(<div><Welcome name="cory"/></div>, document.getElementById("root"));