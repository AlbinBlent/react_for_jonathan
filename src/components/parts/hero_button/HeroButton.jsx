import React from "react";
import styled from "styled-components";

/*
    Det här är något som kallas styled-components.
    Det är lite hype och rätt nice.
    Det går såklart också bra att köra med en vanlig css
    fil också men jag gillar detta.
*/
const Button = styled.button`
  color: orange;
`;

const HeroButton = props => {
  const { onClick, buttonText } = props;
  return <Button onClick={event => onClick(event)}>{buttonText}</Button>;
};

export default HeroButton;
