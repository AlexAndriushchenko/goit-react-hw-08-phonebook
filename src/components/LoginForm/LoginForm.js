import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Input,
  Button,
  FormLabel,
  Wrap,
  WrapItem,
  Center,
} from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Wrap spacing="30px">
      <WrapItem>
        <Center w="320px">
          <form onSubmit={handleSubmit} autoComplete="off">
            <FormLabel>
              Email
              <Input
                id="email"
                placeholder="enter email"
                type="email"
                name="email"
              />
            </FormLabel>
            <FormLabel>
              Password
              <Input
                id="password"
                placeholder="enter password"
                type="password"
                name="password"
              />
            </FormLabel>
            <Button colorScheme="blue" type="submit">
              Login
            </Button>
          </form>
        </Center>
      </WrapItem>
    </Wrap>
  );
};
