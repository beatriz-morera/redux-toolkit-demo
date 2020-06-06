import React from 'react';

import { Col } from './styled';
import { roundNumber } from '../../services/formatters';

export default ({ name, age, height, weight, children }) => (
  <>
    <Col sz={2}>{name}</Col>
    <Col sz={1} extraInfo>
      {age}
    </Col>
    <Col sz={1} extraInfo>
      {roundNumber(height)}
    </Col>
    <Col sz={1} extraInfo>
      {roundNumber(weight)}
    </Col>
    <Col sz={1} reverse>
      {children}
    </Col>
  </>
);
