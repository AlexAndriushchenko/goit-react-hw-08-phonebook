import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import {
  Input,
  FormLabel,
  FormControl,
  Wrap,
  WrapItem,
  Center,
} from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = evt => dispatch(setFilter(evt.currentTarget.value));

  return (
    <Wrap spacing="30px">
      <WrapItem>
        <Center w="360px">
          <FormControl as="fieldset">
            <FormLabel>
              Find contacts by name
              <Input
                placeholder="enter name"
                type="text"
                onChange={changeFilter}
              />
            </FormLabel>
          </FormControl>
        </Center>
      </WrapItem>
    </Wrap>
  );
};
