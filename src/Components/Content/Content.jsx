import { Boxes } from '../Box/Box';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { url } from '../URL/url';
import { useSelector } from 'react-redux';

export const Content = ({dude}) => {
  let {id} = useParams();
  const [data,setData] = useState([]);
  const theme = useSelector((store)=>{return store.theme});
  useEffect(()=>{
    if(id == "Extras"){
      id = "Important Q&A"
    }
    fetch(`${url}/data/${id}`).then((res)=>{
      res.json().then((res)=>{
        setData([...res]);
      })
    })
  },[id])

  const AnotherFn = ()=>{
    return <div  className={theme ? "light" : "darkk"}>
    {data.map((el,i)=>{
      return <div key={i}>< Boxes subtopic={el.subtopic} image={el.img} example= {el.example} arr= {el.definition}/></div>
    })}
    </div>
  }

   // "topic":"React",
  // "subtopic":"VDOM",
  // "img":"https://res.cloudinary.com/practicaldev/image/fetch/s--1WUwOUiR--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/02llb1lq9vc25v7l8dfb.PNG",
  // "definition":["Virtual DOM is light weight representation of actual DOM or ot is a copy of real dom. It ensures to re-render only those components which have gone through some changes rather than updating all the components.It pretty faster than the real DOM concept.","Related Things","DIFFING ALGORITHM - The comparison process in b/w real and virtual dom is diffing algorithm.","Reconcilliation : The process thrug which react updates the actual DOM."],
  // "example":""



  return (
    <div className = "content">
      
      {dude ? <img src='https://rentindiancoders.com/wp-content/uploads/2020/05/The-MERN-fullstack-Developer%E2%80%99s-Guide-%E2%80%93-React-NodeJs-Express-MongoDB.png' width={"100%"} height={"100%"}/> : <AnotherFn/>}
    </div>
  )
}


