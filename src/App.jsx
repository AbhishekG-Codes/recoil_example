import {RecoilRoot,useRecoilState,useRecoilValue, useSetRecoilState} from "recoil"
import { countAtom } from "./store/atoms/countAtom";

export default function App() {
  return (
    <>
      <RecoilRoot>
        <CountVar />
        <Button />
      </RecoilRoot>
    </>
  )
}
function CountVar(){
  const count = useRecoilValue(countAtom);
  console.log("re-render in countvar");
  return(<>
  from Count === 
    {count}
  </>)
}

function Button(){
  const setCount = useSetRecoilState(countAtom)
  // const [count,setCount] = useRecoilState(countAtom) 
  // function handleClick(){
  //   setCount(count+1)
  // }                            //if you are using these 4 lines then button wil also re- render why because you are using count+1 state variable but we dont want count to update count because we can use only setCount
  function handleClick(){
    setCount((prevcount)=>prevcount+1)
  }
  console.log("re-render in button");
  return(<>
    <button onClick={handleClick}>click</button>
  </>)
}
