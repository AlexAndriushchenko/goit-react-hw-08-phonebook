import { NavLink } from 'react-router-dom';
import { Box, Link } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Box>
      <Link
        as={NavLink}
        to="/register"
        display="inline-block"
        textDecoration="none"
        padding="12px"
        fontWeight="bold"
        color="#2a363b"
        _hover={{ color: '#e84a5f' }}
        mr="4"
      >
        Register
      </Link>
      <Link
        as={NavLink}
        to="/login"
        display="inline-block"
        textDecoration="none"
        padding="12px"
        fontWeight="bold"
        color="#2a363b"
        _hover={{ color: '#e84a5f' }}
      >
        Login
      </Link>
    </Box>
  );
};
