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
    <Filter name="Age" onRangeChange={(value) => {setMinAgeState(value.min); setMaxAgeState(value.max)}} minValue={minAge} maxValue={maxAge} unity="years"/>
    <Filter name="Height" onRangeChange={(value) => {setMinHeightState(value.min); setMaxHeightState(value.max)}} minValue={minHeight} maxValue={maxHeight} unity="cm"/>
    <Filter name="Weight" onRangeChange={(value) => {setMinWeightState(value.min); setMaxWeightState(value.max)}} minValue={minWeight} maxValue={maxWeight} unity="kg"/>
    <br/>
    <SeeProfileBtn onClick={filterHandler}>
      Apply filters
    </SeeProfileBtn>
    
   
  </Aside>);
};
