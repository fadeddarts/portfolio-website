import React from 'react'
import { Link } from '@chakra-ui/react'
import AvatarIMG from './IMG_0974.jpg'
import AvatarImg from './IMG_0964.jpg'
import { useColorModeValue } from './ui/color-mode'
import {
  Avatar,
  AvatarGroup,
  Container,
  Flex,
  Circle,
  Float,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { IoLocationOutline } from 'react-icons/io5'

const Content = () => {
  const textColor = useColorModeValue("gray.800", "white")
  const subTextColor = useColorModeValue("gray.600", "gray.300")

  return (
    <Container maxW="4xl" py={8}>
      <Flex direction="column" align="center" gap={8}>
        <HStack spacing={4} align="center" flexWrap="wrap">
          <AvatarGroup>
            <Avatar.Root size="2xl" colorPalette={textColor} variant="subtle">
              <Avatar.Fallback name="Harpuneet Singh" />
              <Avatar.Image src={AvatarIMG} />
              <Float placement="bottom-end" offsetX="3" offsetY="1">
                <Circle
                  bg="green.500"
                  size="12px"
                  outline="0.1em solid"
                  outlineColor="bg"
                />
              </Float>
            </Avatar.Root>
          </AvatarGroup>

          <VStack spacing={0} align="start">
            <Text fontSize="x-large">Hi, I'm Harpuneet</Text>
            <Text color={textColor} mt="-1">CS Student</Text>
            <HStack spacing={1} color={subTextColor} mt="-1">
              <IoLocationOutline size={20} />
              <Text fontSize="md">Brampton, ON</Text>
            </HStack>
          </VStack>
        </HStack>

        <VStack textAlign="center" px={4}>
          <Text>
            I'm a second year computer science student at <Link href="https://torontomu.ca" variant="underline">Toronto Metropolitan University</Link> (formerly Ryerson), passionate about learning new technologies and expanding my technical skills.
          </Text>
          <Text>
            I like coding and consuming literature.
          </Text>
          <Text>This portfolio highlights my projects, showcases my learning journey with modern technologies and frameworks, and connects to my blog where I share insights and updates.</Text>
        </VStack>
      </Flex>
    </Container>
  )
}

export default Content
