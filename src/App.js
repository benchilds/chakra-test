import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

import { App as BannerLink } from './components/BannerLink/App'
import { App as CTASimple } from './components/CTASimple/App'
import { App as TwoByTwoFeatures } from './components/TwoByTwoFeatures/App'
import { App as CenteredWithSlider } from './components/CenteredWithSlider/App'
import { App as StatWithThreeColumns } from './components/StatWithThreeColumns/App'
import { App as SimpleFooter } from './components/SimpleFooter/App'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <BannerLink/>
          <CTASimple/>
          <TwoByTwoFeatures/>
          <CenteredWithSlider/>
          <StatWithThreeColumns/>
          <SimpleFooter/>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
