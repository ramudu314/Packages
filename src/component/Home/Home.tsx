import React from 'react';
import { useNavigate } from "react-router-dom";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button as ChakraButton, Flex, Box } from '@chakra-ui/react';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleClick = () => {
    navigate('/add');
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <>
      <h1 className="text-xl m-20 text-center">Welcome to Favorite NPM Packages</h1>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="center"
        p={5}
      >
        <Box
          textAlign="center"
          borderWidth="2px"
          p={5}
          w={{ base: "80%", md: "50%" }}
          rounded="lg"
        >
          <p className="text-xl m-7 text-sm text-gray-600">You don't have any favs yet. Please add.</p>
          <ChakraButton onClick={handleClick} colorScheme="teal">
            Add fav
          </ChakraButton>
        </Box>
      </Flex>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} size={{ base: 'full', md: 'sm' }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Success</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Package added to favorites
          </ModalBody>
          <ModalFooter>
            <ChakraButton onClick={closeModal} colorScheme="blue" variant="outline" mr={3}>
              Close
            </ChakraButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Home;
