import { Flex, Box, Button, Image, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';
import iconReact from "/styles/icons/react.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <Flex
        as="nav"
        bg="blue.800"
        color="white"
        p={4}
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex alignItems="center">
          <Image
            src={iconReact}
            alt="React Icon"
            boxSize="30px"
            marginRight={2}
          />
          <Box fontSize="xl" fontWeight="bold">
            Web Front
          </Box>
        </Flex>
        <Flex gap={50} display={{ base: 'none', md: 'flex' }}>
          <Button variant="link" color="white">
            Sobre
          </Button>
          <Button variant="link" color="white">
            Serviços
          </Button>
          <Button variant="link" color="white">
            Contato
          </Button>
        </Flex>
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          colorScheme="whiteAlpha"
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="blue.800">
          <DrawerCloseButton color="white" />
          <DrawerHeader color="white">Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={20} align="stretch">
              <Button variant="link" color="white" width="100%" onClick={onClose}>
                Sobre
              </Button>
              <Button variant="link" color="white" width="100%" onClick={onClose}>
                Serviços
              </Button>
              <Button variant="link" color="white" width="100%" onClick={onClose}>
                Contato
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
