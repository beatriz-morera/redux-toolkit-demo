import React from 'react';

import Card from '../card';

export default ({ citizens }) => {
  return <ul>{citizens && citizens.slice(0, 20).map((c) => <Card key={c.id} {...c} />)}</ul>;
};
