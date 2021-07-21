import { Box, Button, Heading, Text } from '@chakra-ui/react'
import * as React from 'react'

export const App = () => (
  <Box as="section">
    <Box
      maxW="2xl"
      mx="auto"
      px={{
        base: '6',
        lg: '8',
      }}
      py={{
        base: '16',
        sm: '20',
      }}
      textAlign="center"
    >
      <Heading as="h2" size="3xl" fontWeight="extrabold" letterSpacing="tight">
        Out with the old.<br/>
        Insure with the new.
      </Heading>
      <Text mt="4" fontSize="lg">
      Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </Text>
      <Button mt="8" as="a" href="#" size="lg" colorScheme="blue" fontWeight="bold">
        Check our prices
      </Button>
    </Box>
  </Box>
)