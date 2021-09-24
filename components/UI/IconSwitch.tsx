//import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/layout';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useColorModeValue } from '@chakra-ui/color-mode';

interface IconSwitchProps {
  hasSwitched: boolean;
  onClick: () => void;
}

const SIZE = 28;
const SPACING = 5000;
const BOX_PADDING = 8;
const DURATION = 0.3;

export const IconSwitch: React.FC<IconSwitchProps> = ({
  hasSwitched = false,
  onClick,
}) => {
  const containerBg = useColorModeValue('gray.100', 'gray.800');
  return (
    <Box
      onClick={onClick}
      w={`${SIZE + BOX_PADDING * 2}px`}
      h={`${SIZE + BOX_PADDING * 2}px`}
      overflow="hidden"
      position="relative"
      p={`${BOX_PADDING}px`}
      borderRadius="4px"
      bg={containerBg}
      transition={`background-color ${DURATION}s ease`}
      _hover={{ cursor: 'pointer' }}
    >
      <Flex
        position="absolute"
        transition={`${DURATION}s ease transform`}
        transform={hasSwitched ? '' : `translateX(-${SIZE + SPACING}px)`}
      >
        <FaSun size={`${SIZE}px`} />
        <Box w={`${SPACING}px`} />
        <FaMoon size={`${SIZE}px`} />
      </Flex>
    </Box>
  );
};
