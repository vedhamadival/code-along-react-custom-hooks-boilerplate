import{ useEffect} from 'react';

function UseStorage(text){
  useEffect(()=>{
    if(text){
      localStorage.setItem("text",text)
    }
  },[text])
}

export default UseStorage;
