import React from 'react';
import {
  Flex,
  Box,
  Text,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
} from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';

const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      padding="1rem"
      bg="white"
      borderBottom="1px solid"
      borderBottomColor="gray.200"
      boxShadow="sm"
      zIndex="1"
      position="fixed"
      top="0"
      left="0"
      right="0"
      height="20"
    >
      <Box>
        <Text fontSize="2xl" fontWeight="bold">
          Campus Echo
        </Text>
      </Box>
      <Flex align="center">
        <Menu>
          <MenuButton as={Button} rightIcon={<FiChevronDown />}>
            <Avatar size="sm" name="User Name" src="https://bit.ly/broken-link" />
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuDivider />
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Header;