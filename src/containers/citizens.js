import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { filter, selectSearchTerm, selectFilteredCitizens } from '../store/slices/citizens';

import List from '../components/citizens-list';

export default () => {
  const citizens = useSelector(selectFilteredCitizens);

  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const [name, setName] = useState(searchTerm);

  const searchTermHandler = useCallback((ev) => setName(ev.target.value), []);
  const filterHandler = useCallback(() => dispatch(filter(name)), [dispatch, name]);

  return (
    <List
      citizens={citizens}
      value={name}
      filterHandler={filterHandler}
      searchTermHandler={searchTermHandler}
    />
  );
};
