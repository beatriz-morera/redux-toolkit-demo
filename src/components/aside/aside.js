import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux"
import {selectMinAge, selectMaxAge, selectMinHeight, selectMaxHeight, selectMinWeight, selectMaxWeight, applyFilters} from "../../store/slices/citizens"

import {Aside} from "./styled"
import Filter from "./filter"
import {SeeProfileBtn} from "../button"

export default () => {
  const dispatch = useDispatch()
  const minAge = useSelector(selectMinAge)
  const maxAge = useSelector(selectMaxAge)

  const minHeight = useSelector(selectMinHeight)
  const maxHeight = useSelector(selectMaxHeight)

  const minWeight = useSelector(selectMinWeight)
  const maxWeight = useSelector(selectMaxWeight)

 

  const [minAgeState, setMinAgeState] = useState(minAge)
  const [maxAgeState, setMaxAgeState] = useState(maxAge)

  const [minHeightState, setMinHeightState] = useState(minHeight)
  const [maxHeightState, setMaxHeightState] = useState(maxHeight)

  const [minWeightState, setMinWeightState] = useState(minWeight)
  const [maxWeightState, setMaxWeightState] = useState(maxWeight)

  const filterHandler= 
    () => {
      dispatch(applyFilters(
        {
          "minAge": Number(minAgeState), 
          "maxAge": Number(maxAgeState), 
          "minHeight": Number(minHeightState), 
          "maxHeight": Number(maxHeightState), 
          "minWeight": Number(minWeightState), 
          "maxWeight": Number(maxWeightState)
        }))
    }
  
  return (
  <Aside>
    <h2>Filters</h2>
    <Filter name="Age" onMinChange={(value) => setMinAgeState(value)} onMaxChange={(value) => setMaxAgeState(value)} minValue={minAgeState} maxValue={maxAgeState}/>
    <Filter name="Height" onMinChange={(value) => setMinHeightState(value)} onMaxChange={(value) => setMaxHeightState(value)} minValue={minHeightState} maxValue={maxHeightState}/>
    <Filter name="Weight" onMinChange={(value) => setMinWeightState(value)} onMaxChange={(value) => setMaxWeightState(value)} minValue={minWeightState} maxValue={maxWeightState}/>
    <br/>
    <SeeProfileBtn onClick={filterHandler}>
      Apply filters
    </SeeProfileBtn>
    
   
  </Aside>);
};
