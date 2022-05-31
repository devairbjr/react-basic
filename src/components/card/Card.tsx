import React, { ReactElement } from "react";
import { Title, BoxCard, Amount } from "./styles";
import { Props } from './types';

 function Card({title, amount}: Props): ReactElement{
  return (
    <BoxCard>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </BoxCard>
  );
}

export default Card