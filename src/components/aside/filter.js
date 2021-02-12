import React from 'react'
import {Filter, FilterInput, Span} from "./styled"

export default ({minValue, maxValue, onMinChange, onMaxChange, name}) => {
  return (
    <Filter>
      <label>
        {name}
      </label>
      <br/>
      <Span>
      <FilterInput placeholder={`Min ${name}`} value={minValue} onChange={(ev) => onMinChange(ev.target.value)}/>
      <FilterInput placeholder={`Max ${name}`} value={maxValue}  onChange={(ev) => onMaxChange(ev.target.value)}/>
      </Span>
    </Filter>
  )
}
