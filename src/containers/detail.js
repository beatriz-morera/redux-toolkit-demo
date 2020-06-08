import React from 'react';
import { useSelector } from 'react-redux';

import { selectSelected } from '../store/slices/citizens';

import CitizenDetail from '../components/citizen-detail';

export default () => {
  const citizen = useSelector(selectSelected);

  return <>{citizen && <CitizenDetail {...citizen} />}</>;
};
