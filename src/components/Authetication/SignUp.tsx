"use client"
import { useState } from 'react';
import { Box, Button, HStack, Input, Text, VStack } from "@chakra-ui/react";
import PortofolioTestimonial from "./testimonial";
import { InputGroup } from '../ui/input-group';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
    const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <HStack 
      className="bg-gradient-to-b from-white to-black min-h-screen p-6" 
      justifyContent="space-around"
      alignItems="center"
      gap={8}
    >
      <Box 
        h="full" 
        display="flex"
        flexDirection="column"
        justifyContent="center"
        p={8}
bg={"transparent"}        
rounded="xl"
        
        pos={"relative"}
        minH="600px"  // Match testimonial height
      >
        <VStack gap={6} align="stretch" w="full">
          <Text 
            fontSize="2xl" 
            fontWeight="bold"
            top={0}
            pos={"absolute"}
          >
            Please Enter Your Details
          </Text>
          
          <VStack gap={20} align="stretch">
            <Box>
              <Input 
              bg={"#ffff"}
                type="email" 
                w="full" 
                placeholder="Enter Your Email"
                size="lg"
                p={4}
                _focus={{ borderColor: 'emerald.700' }}
              />
              
            </Box>
            
            <HStack gap={10}>
              
              <InputGroup
      w={"20rem"}
      endElement={
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? <FaEyeSlash /> : <FaEye />}
        </Button>
      }
      endElementProps={{ width: "4.5rem" }}
    >
      <Input
        pr="4rem"
        bgColor={"#ffff"}
        p={4}
        type={show ? "text" : "password"}
        placeholder="Enter password"
      />
    </InputGroup>
              <Input 
                type="password"
                bgColor={"#ffff"}
                w="20rem"
                p={4}
                placeholder="Confirm Your Password"
                size="lg"
                _focus={{ borderColor: 'emerald.500' }}
              />
            </HStack>
            
            <HStack gap={10}>
              <Input 
                bgColor={"#ffff"}
                w="20rem"
                p={4}
                placeholder="Enter Your First Name"
                size="lg"
                _focus={{ borderColor: 'emerald.500' }}
              />
              <Input 
                bgColor={"#ffff"}
                w="20rem"
                p={4}
                placeholder="Enter Your Last Name"
                size="lg"
                _focus={{ borderColor: 'emerald.500' }}
              />
            </HStack>
            
            <HStack gap={10}>
              <Input 
                bgColor={"#ffff"}
                w="20rem"
                p={4}
                placeholder="Enter Your Mobile Number"
                size="lg"
                _focus={{ borderColor: 'emerald.500' }}
              />
              <Input 
                bgColor={"#ffff"}
                w="20rem"
                p={4}
                placeholder="Enter Your Address"
                size="lg"
                _focus={{ borderColor: 'emerald.500' }}
              />
            </HStack>
          </VStack>
        </VStack>
        <Box display={"flex"} justifyContent={"flex-end"}>

        <Button
          colorScheme="emerald"
          size="lg"
          w="10rem"
          mt={6}
          bgColor={"#33a03c"}
          
          maxW="xs"
        >Register</Button>
        </Box>
      </Box>

      <Box>
        <PortofolioTestimonial />
      </Box>
    </HStack>
  );
};

export default SignUp;