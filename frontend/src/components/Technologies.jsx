import React from 'react'
import { Box, Flex, Spacer, Text, VStack } from '@chakra-ui/react'
import { FaReact, FaNode, FaPython, FaJava } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiChakraui } from 'react-icons/si'
import { DiJavascript1 } from 'react-icons/di'
import Marquee from "react-fast-marquee";


const Technologies = () => {
  const fontsize = "8xl";
  const marqueeProps = {gradientWidth:"15%",speed:30, gradient:false, autoFill:true}
  return (
    <Flex direction="column" gap="8" justify="center" align="center" mt="8">
    <Text textStyle="3xl">Technologies</Text>

  {/* First marquee */}
  <Box w={["100%", "70%", "65%", "60%"]} maxW="800px" overflow="hidden" mx="auto">
  {/* <Box w="80%" display={"flex"} justifyContent={"space-around"} alignItems={"center"} overflow="hidden" mx="auto"> */}
    <Marquee {...marqueeProps}>
      <Flex gap="8" justify="center" align="center" >
        <VStack>
          <Box fontSize={fontsize}><FaReact /></Box>
          <Text>React</Text>
        </VStack>

        <VStack>
          <Box fontSize={fontsize}><FaNode /></Box>
          <Text>Node</Text>
        </VStack>

        <VStack>
          <Box fontSize={fontsize}><SiMongodb /></Box>
          <Text>MongoDB</Text>
        </VStack>

        <VStack>
          <Box fontSize={fontsize}><SiExpress /></Box>
          <Text>Express</Text>
        </VStack>

        <Spacer />
      </Flex>
    </Marquee>
  </Box>

  {/* Second marquee */}
  <Box w={["100%", "70%", "65%", "60%"]} maxW="800px" overflow="hidden" mx="auto">
  {/* <Box w="80%" display={"flex"} justifyContent={"space-around"} alignItems={"center"} overflow="hidden" mx="auto" gap={"2rem"}> */}
    <Marquee direction="right" {...marqueeProps}>
      <Flex gap="8" justify="center" align="center">
      <VStack>
          <Box fontSize={fontsize}><SiChakraui /></Box>
          <Text>Chakra UI</Text>
        </VStack>

        <VStack>
          <Box fontSize={fontsize}><FaPython /></Box>
          <Text>Python</Text>
        </VStack>

        <VStack>
          <Box fontSize={fontsize}><FaJava /></Box>
          <Text>Java</Text>
        </VStack>

        <VStack>
          <Box fontSize={fontsize}><DiJavascript1 /></Box>
          <Text>JavaScript</Text>
        </VStack>
        
        <Spacer />
      </Flex>
    </Marquee>
  </Box>
</Flex>

  )
}

export default Technologies

