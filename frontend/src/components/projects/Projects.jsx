import React from 'react'
import { VStack, HStack, Flex, Container, Text } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <Container maxW="4xl" centerContent mt="16">
  
      <Flex direction="column" gap="8" justify="center" align="center" mt="8">
      <Text textStyle="3xl">Projects</Text>
      <VStack gap="10" align="center" justify="center" w="100%">
        <HStack gap="20" justify="center" align="start" flexWrap="wrap">
          
          <ProjectCard title="Twitter Discord Webhook" description="View on GitHub" accordionTitle="Technologies" accordionItems={["Python","Workflows","API"]}></ProjectCard>
          <ProjectCard title="Portfolio Website" description="Reload" link="/" accordionTitle="Technologies" accordionItems={["React","HTML/CSS/JS","Chakra UI"]}></ProjectCard>
          
        </HStack>
        <HStack gap="20" spacing={4} justify="center" align="start" flexWrap="wrap">
          <ProjectCard title="Blog Tweet Integration" link="/blog" description="View" accordionTitle="Technologies" accordionItems={["Python","API","GitHub Actions"]}></ProjectCard>
          <ProjectCard title="CAPTCHA solver" accordionTitle="Technologies" accordionItems={["TensorFlow","Image Processing","Labelling"]}></ProjectCard>
          
        </HStack>
      </VStack>
      </Flex>
    </Container>
  )
}

export default Projects

