import React from 'react';
import './globals.css';
import {
  Box, Heading, Text, Input, Button, Menu, MenuButton, MenuList, MenuItem
} from './lib/chakra';


const DummyPage = () => {
  return (
    <Box
      bg="white"
      color="black"
      minHeight="100vh"
      p={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        mb={350}
        width="100%"
      >
        <Box flex="1" textAlign="center">
          <Heading fontSize="2xl" mb={4}>Dummy Title</Heading>
        </Box>
        <Box>
          <Button variant="outline" mr={20}>Signup</Button>
          <Button variant="outline" mr={20}>Login</Button>
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        maxWidth="400px"
        width="100%"
        borderRadius="full"
        overflow="hidden"
        border="1px solid #ccc"
        mb={4}
      >
        <Input
          
          placeholder="Search..."
          flex="1"
          px={4}
          py={2}
          borderRadius="full"
          border="none"
          bg="transparent"
        />
        <Button
          px={4}
          py={2}
          bg="blue.500"
          color="white"
          fontWeight="bold"
          borderRadius="full"
        >
          Search
        </Button>
      </Box>

      <Heading fontSize="2xl" mt={5} mb={0} textAlign="center">This is a Dummy Page</Heading>

      <Menu>
        <MenuButton as={Button}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default DummyPage;
