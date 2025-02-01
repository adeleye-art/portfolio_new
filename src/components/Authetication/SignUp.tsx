"use client";
import { useState } from "react";
import { Box, Button, HStack, Input, Text, VStack } from "@chakra-ui/react";
import PortofolioTestimonial from "./testimonial";
import { InputGroup } from "../ui/input-group";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  
  return (
    <HStack
      flexDirection={{ base: "column", md: "row" }}
      className="bg-gradient-to-b from-white to-black"
      p={{ base: 4, md: 6 }}
      w="100%"
      h={{ base: "100vh", md: "100vh" }}
      overflow="hidden"
      justifyContent="space-around"
      alignItems="center"
      gap={{ base: 4, md: 8 }}
    >
      <Box
        w={{ base: "100%", md: "100%", lg: "50%" }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        p={{ base: 4, md: 8 }}
        bg="transparent"
        rounded="xl"
        pos="relative"
        minH={{ base: "auto", md: "600px" }}
      >
        <VStack gap={6} align="stretch" w="100%">
          {/* Responsive positioning for heading: static for base & md (up to 768px), then absolute for lg */}
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="bold"
            pos={{ base: "static", lg: "absolute" }}
            top={{ lg: 2 }}
            px={{ base: 2, md: 0 }}
            zIndex={1}
          >
            Please Enter Your Details
            <span className="text-red-600 text-xs font-light">
              {" "}
              already have an account? <a href="/login">Login</a>
            </span>
          </Text>

          <VStack
            gap={{ base: 4, md: 20 }}
            align="stretch"
            mt={{ base: "2rem", lg: "6rem" }}
          >
            <Box>
              <Input
                bg="#ffff"
                type="email"
                w="100%"
                placeholder="Enter Your Email"
                size="lg"
                p={4}
                _focus={{ borderColor: "emerald.700" }}
              />
            </Box>

            <HStack
              gap={{ base: 4, md: 10 }}
              flexDirection={{ base: "column", md: "row" }}
            >
              <InputGroup
                w={{ base: "100%", md: "20rem" }}
                endElement={
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                }
                endElementProps={{ width: "4.5rem" }}
              >
                <Input
                  pr="4rem"
                  bgColor="#ffff"
                  p={4}
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                />
              </InputGroup>
              <Input
                type="password"
                bgColor="#ffff"
                w={{ base: "100%", md: "20rem" }}
                p={4}
                placeholder="Confirm Your Password"
                size="lg"
                _focus={{ borderColor: "emerald.500" }}
              />
            </HStack>

            <HStack
              gap={{ base: 4, md: 10 }}
              flexDirection={{ base: "column", md: "row" }}
            >
              <Input
                bgColor="#ffff"
                w={{ base: "100%", md: "20rem" }}
                p={4}
                placeholder="Enter Your First Name"
                size="lg"
                _focus={{ borderColor: "emerald.500" }}
              />
              <Input
                bgColor="#ffff"
                w={{ base: "100%", md: "20rem" }}
                p={4}
                placeholder="Enter Your Last Name"
                size="lg"
                _focus={{ borderColor: "emerald.500" }}
              />
            </HStack>

            <HStack
              gap={{ base: 4, md: 10 }}
              flexDirection={{ base: "column", md: "row" }}
            >
              <Input
                bgColor="#ffff"
                w={{ base: "100%", md: "20rem" }}
                p={4}
                placeholder="Enter Your Mobile Number"
                size="lg"
                _focus={{ borderColor: "emerald.500" }}
              />
              <Input
                bgColor="#ffff"
                w={{ base: "100%", md: "20rem" }}
                p={4}
                placeholder="Enter Your Address"
                size="lg"
                _focus={{ borderColor: "emerald.500" }}
              />
            </HStack>
          </VStack>
        </VStack>
        <Box display="flex" justifyContent="flex-end" mt={4}>
          <Button
            colorScheme="emerald"
            size={{ base: "md", md: "lg" }}
            w={{ base: "100%", md: "10rem" }}
            bgColor="#33a03c"
            maxW="xs"
          >
            Register
          </Button>
        </Box>
      </Box>

      {/* Testimonial shows only on large screens */}
      <Box display={{ base: "none", lg: "block" }} w={{ base: "100%", lg: "40%" }}>
        <PortofolioTestimonial />
      </Box>
    </HStack>
  );
};

export default SignUp;
