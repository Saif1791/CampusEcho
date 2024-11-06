import { useState } from 'react'
import { Button, Flex, useColorModeValue } from '@chakra-ui/react'
export default function ClickMe(props) {

  return (
    <Flex>
      <Button
        px={8}
        bg={useColorModeValue('#D4F6FF', 'gray.900')}
        color={'#37AFE1'}
        rounded={'md'}
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        }}
        onClick={""}>
        {props.name}
      </Button>
    </Flex>
  )
}