import React from 'react';
import Auth from './button.jsx';
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
import { Link } from 'react-router-dom';

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
      <div className='flex flex-row gap-3'>
        <Link to="/signin">
          <Auth name='Sign In'/>
        </Link>
        <Link to="/signup">
          <Auth name='Sign Up'/>
        </Link>
      </div>
    </Flex>
  );
};

export default Header;