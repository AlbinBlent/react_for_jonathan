import React, { useState } from "react";
import styled from "styled-components";
import HeroButton from "../parts/hero_button/HeroButton";

const Form = styled.form`
  color: "green";
`;

const Input = styled.input`
  color: "blue";
`;

const Label = styled.label`
  color: "red";
`;

const LoginForm = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onLoginClick = event => {
    // I vanliga fall så vill ett knapptryck
    // ladda om sidan och det vill vi ju inte.

    // När du kör appen i browsern och inspekterar den så
    // skapar debugger en breakpoint.
    //debugger;
    event.preventDefault();
    console.log(`calling api to login ${username} with password ${password}`);
    setUsername("");
    setPassword("");
  };
  return (
    <Form>
      <Label>Username:</Label>
      <Input
        value={username}
        onChange={event => setUsername(event.target.value)}
      ></Input>
      <Label>Password:</Label>
      <Input
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      ></Input>
      <HeroButton onClick={event => onLoginClick(event)} buttonText={"login"} />
    </Form>
  );
};

export default LoginForm;
