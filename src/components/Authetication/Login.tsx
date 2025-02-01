/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import {
  Box,
  Button,
  HStack,
  Input,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import NextLink from "next/link";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Box className="min-h-screen p-6 flex items-center justify-center bg-gradient-to-b from-white to-black">
      <Box
        w="full"
        maxW="500px"
        h="600px"
        p={8}
        rounded="xl"
        bg="transparent"
        boxShadow="xl"
        css={{
          perspective: "1000px",
        }}
      >
        <Box
          position="relative"
          w="full"
          h="full"
          transition="transform 0.6s"
          transform={isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"}
          css={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front Side - Login Form */}
          <Box
            position="absolute"
            w="full"
            h="full"
            backfaceVisibility="hidden"
            visibility={isFlipped ? "hidden" : "visible"}
            opacity={isFlipped ? 0 : 1}
            transition="visibility 0s linear 0.3s, opacity 0.3s"
          >
            <VStack gap={6} align="stretch">
              <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={6}>
                Welcome Back
              </Text>

              <Button
                
                colorScheme="red"
                variant="outline"
                size="lg"
                _hover={{ bg: "red.50" }}
              >
               <FaGoogle /> Continue with Google
              </Button>

              <VStack gap={4}>
                <Input
                  bg="gray.50"
                  type="email"
                  placeholder="Enter Your Email"
                  size="lg"
                  p={4}
                  _focus={{ borderColor: "green.500" }}
                />

                <Box position="relative" width="full">
                  <Input
                    bg="gray.50"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    p={4}
                    size="lg"
                    _focus={{ borderColor: "green.500" }}
                  />
                  <Button
                    position="absolute"
                    top="50%"
                    right="0.5rem"
                    transform="translateY(-50%)"
                    height="1.75rem"
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                    variant="ghost"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </Box>
              </VStack>

              <Button
                colorScheme="green"
                size="lg"
                mt={6}
                bg="#33a03c"
                _hover={{ bg: "#2a802a" }}
              >
                Login
              </Button>

              <HStack justify="space-between" mt={4}>
                <Text
                  fontSize="sm"
                  color="gray.600"
                  cursor="pointer"
                  _hover={{ color: "green.600" }}
                  onClick={handleFlip}
                >
                  Forgot Password?
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Don't have an account?{" "}
                  <Link
                    as={NextLink}
                    href="/Auth/signup"
                    color="green.600"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Register
                  </Link>
                </Text>
              </HStack>
            </VStack>
          </Box>

          {/* Back Side - Forgot Password */}
          <Box
            position="absolute"
            w="full"
            h="full"
            backfaceVisibility="hidden"
            transform="rotateY(180deg)"
            visibility={isFlipped ? "visible" : "hidden"}
            opacity={isFlipped ? 1 : 0}
            transition="visibility 0s linear 0.3s, opacity 0.3s"
          >
            <VStack gap={6} align="stretch">
              <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={6}>
                Forgot Password?
              </Text>

              <VStack gap={4}>
                <Input
                  bg="gray.50"
                  type="email"
                  placeholder="Enter Your Email"
                  size="lg"
                  p={4}
                  _focus={{ borderColor: "green.500" }}
                />
              </VStack>

              <Button
                colorScheme="green"
                size="lg"
                mt={6}
                bg="#33a03c"
                _hover={{ bg: "#2a802a" }}
              >
                Send Reset Link
              </Button>

              <HStack justify="center" mt={4}>
                <Text
                  fontSize="sm"
                  color="gray.600"
                  cursor="pointer"
                  _hover={{ color: "green.600" }}
                  onClick={handleFlip}
                >
                  Back to Sign In
                </Text>
              </HStack>
            </VStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;