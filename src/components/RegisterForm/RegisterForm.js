import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Input,
  Button,
  Wrap,
  WrapItem,
  Center,
  FormLabel,
} from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
              Username
              <Input
                id="name"
                placeholder="enter name"
                type="text"
                name="name"
              />
            </FormLabel>
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
              Register
            </Button>
          </form>
        </Center>
      </WrapItem>
    </Wrap>
  );
};
