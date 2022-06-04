import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../../Redux/action'

export const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((store)=>{return store.theme});
  const change_theme = ()=>{

      localStorage.setItem("theme",!theme);
      dispatch(changeTheme());
  }

  


  return (
    <div >
      <Tabs variant='soft-rounded' colorScheme='green'>
        <div className = "mainnav">
  <TabList>
    <Link to={"/content/HTML & CSS"}><Tab>HTML & CSS</Tab></Link>
    <Link to={"/content/JS"}><Tab>JS</Tab></Link>
    <Link to={"/content/React"}><Tab>React</Tab></Link>
  </TabList>

  <TabList>
  <Tab onClick={change_theme}>{theme ? <MoonIcon/> : <SunIcon/>}</Tab>
    <Link to={"/content/Extras"}><Tab>Extras</Tab></Link>
  {/* <Tab>About Me</Tab> */}
  </TabList>
  </div>
  
  
</Tabs>
    </div>
  )
}


