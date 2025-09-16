import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useColorModeValue } from './ui/color-mode'

const Footer = () => {
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box
      as="footer"
      w="100%"
      py={4}
      mt={8}
      textAlign="center"
      bg={useColorModeValue("000000", "fffffff")}
    >
      <Text color={textColor} fontSize="sm">
        © {new Date().getFullYear()} Harpuneet Singh. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
