import React from 'react';
import { Box, Icon } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

interface DarkModeToggleProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <Box
      onClick={toggleTheme}
      cursor="pointer"
      p='2'
      borderRadius="md"
      transition="all 0.3s"
      _hover={{
        transform: 'scale(1.1)',
        backgroundColor: theme === 'dark' ? 'gray.600' : 'gray.400',
      }}
      position="absolute"
      right="20"
      top="0"
      mt="3"
    >
      <Icon as={theme === 'dark' ? SunIcon : MoonIcon} color={theme === 'dark' ? 'white' : 'black'} w={6} h={6} />
    </Box>
  );
};

export default DarkModeToggle;
