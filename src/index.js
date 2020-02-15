import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./components/login_form/LoginForm";

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello dude {this.props.name}
        <LoginForm />
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Jane" />, mountNode);
