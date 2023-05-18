import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Box, Link } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box as="nav">
      <Link
        as={NavLink}
        to="/"
        display="inline-block"
        textDecoration="none"
        padding="12px"
        fontWeight="bold"
        color="#2a363b"
        _hover={{ color: '#e84a5f' }}
        mr="4"
      >
        Home
      </Link>

      {isLoggedIn && (
        <Link
          as={NavLink}
          to="/contacts"
          display="inline-block"
          textDecoration="none"
          padding="12px"
          fontWeight="bold"
          color="#2a363b"
          _hover={{ color: '#e84a5f' }}
        >
          Contacts
        </Link>
      )}
    </Box>
  );
};
