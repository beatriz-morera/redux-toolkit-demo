import React from 'react';

import { Col } from './styled';
import { format } from '../../services/formatters';

export default ({ name, age, height, weight, children }) => (
  <>
    <Col sz={2}>{name}</Col>
    <Col sz={1} extraInfo>
      {age} years
    </Col>
    <Col sz={1} extraInfo>
      {format(height)} cm
    </Col>
    <Col sz={1} extraInfo>
      {format(weight)} kg
    </Col>
    <Col sz={1} reverse>
      {children}
    </Col>
  </>
);
