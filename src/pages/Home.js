import { Wrap, WrapItem, Center, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <Wrap spacing="30px">
      <WrapItem>
        <Center w="850px">
          <Heading as="h1" fontSize="48px" marginTop="100px">
            Welcome to Phone book
          </Heading>
        </Center>
      </WrapItem>
    </Wrap>
  );
}
