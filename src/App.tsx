import { Grid, GridItem, } from "@chakra-ui/layout"
import { Show, Hide } from '@chakra-ui/react'


function App() {

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area="nav" bg="red">NAV</GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="orange">ASIDE</GridItem>
      </Show>
      <GridItem area="main" bg="pink">MAIN</GridItem>
    </Grid>
  )
}

export default App
