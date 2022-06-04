import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Image,
  Center,
  Text
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'

export const Boxes = ({subtopic,image,arr,example}) => {
  const theme = useSelector((store)=>{return store.theme});
  return (
    <div className={theme? "lightbox":"darkbox"} style={{borderRadius: "10px"}}>
      <Accordion allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
        <Box flex='1' textAlign='center'>
          <Heading as={"i"} >{subtopic}</Heading> 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign= {"left"} margin= {"auto"}>

    <Center>
    <Box >
  <Image src={image} boxSize={"70%"}  />
  </Box>
    </Center>
    <Text fontSize='4xl' as='i'>Definition</Text><br />
    {arr.map((el,i)=>{
     return <div key={i}>{el.length <= 15? <><Text fontSize='2xl' as='i'>{el}</Text><br /></> : <><Text as={"samp"}>{el}</Text><br/></>}</div>
    })}
    

    {example.length == 0 ? "" :  <Center>
    <Box >
  <Image src={example}  width= {"100%"}/>
  </Box>
    </Center>}
  
    </AccordionPanel>
  </AccordionItem>
</Accordion>
</div>
  )
}


 



