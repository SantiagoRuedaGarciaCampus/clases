import React, { Component, useState, useMemo } from "react";

import styled from 'styled-components'

const Box = styled.div`
padding: 1em`;

const Label = styled.div`
font-heigth: bold`

const concat = (first, second) =>`${first}|||${second}`

const WithoutMemo = ({first, second}) =>{
  const str = concat(first, second)
  return(
    <div>
      {str}
    </div>
  )
};

const UseMemo = ({first, second})=>{
  const str = UseMemo(()=>concat(first, second), [first, second])

  return(
    <div>
      {str}
    </div>
  )
};

const UsefirstMemo = ({first, second}) =>{
  const srt = useMemo(()=>
    concat(first, second, [first, second])
  )
  return(
    <div>
      {srt}
    </div>
  )

}
const UsesecondMemo = ({first, second}) =>{
  const srt = useMemo(()=>
    concat(first, second, [first, second])
  )
  return(
    <div>
      {srt}
    </div>
  )
  
}

const UseNoRemovedMemo = ({first, second}) =>{
  const srt = useMemo(()=>
    concat(first, second,[])
  )
  return(
    <div>
      {srt}
    </div>
  )
  
}

const Inputs = ()=>{
  const [first, setFirst] = useState("first")
  const [second, setSecond] = useState("second")

  return(
    <div>
    <Box>
        <div>
          First:
          <input
          onChange={(e)=>{setFirst(e.target.value)}}
          value={first}
          >
          </input>
        </div>
        <div>
          Second:
          <input
          onChange={(e)=>{setSecond(e.target.value)}}
          value={second}
          >
          </input>
        </div>
        <Box>
          <Label>
            Ejercicio Memo:
          </Label>
          <WithoutMemo first={first} second={second}></WithoutMemo>
        </Box>
        <Box>
          <Label>
            useMemo(...,[first,second]);
          </Label>
          {" "}
          <UseMemo first={first} second={second}></UseMemo>
        </Box>
        <Box>
          <Label>
            useMemo(...,[first]);
          </Label>
          {" "}
          <UsefirstMemo first={first} second={second}></UsefirstMemo>
        </Box>
        <Box>
          <Label>
            useMemo(..., [second]);
          </Label>
          {" "}
          <UsesecondMemo first={first} second={second}></UsesecondMemo>
        </Box>
        <Box>
          <Label>
            usememo(...,[])
          </Label>
          <UseNoRemovedMemo first={first} second={second}></UseNoRemovedMemo>
        </Box>
      </Box>
    </div>
  )
}

class App extends Component{
  render(){
    return(
      <div>
        <Inputs/>
      </div>
    )
  }
}

export default App