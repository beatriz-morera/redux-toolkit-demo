import React, {useCallback, useState, useEffect} from 'react'
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css"
import {Filter} from "./styled"

const range = (min = 0, max = 0) => ({ min, max })

export default ({ minValue, maxValue, onRangeChange, name }) => {
  const [value, setValue] = useState(range(minValue, maxValue))
    
  const rangeHandler = useCallback(
    (val) => {
      setValue(val)
      onRangeChange && onRangeChange(value)
    },
    [value, onRangeChange],
  )

  useEffect(() =>  setValue(range(minValue, maxValue)), [minValue, maxValue])
  
  return (
    <Filter>
      <label>
        {name}
      </label>
      <br/>
      <br/>
      <InputRange
      minValue= {minValue}
      maxValue= {maxValue}
        value= {value}
        onChange={(val) => rangeHandler(val)}
        />
    </Filter>
  )
}
