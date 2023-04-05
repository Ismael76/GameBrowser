import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/game-icon.svg.png"

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <Text>Dark Mode</Text>
    </HStack>
  )
}

export default NavBar
