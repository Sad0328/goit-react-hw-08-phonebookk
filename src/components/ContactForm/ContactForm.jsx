import { useState } from 'react';
import { avatarStyle } from './ContactForm.styled';
import { selectPhoneBookValue } from '../../redux/contacts/contacts-selectors';
import { addContacts } from '../../redux/contacts/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button, TextField, Box, Typography } from '@mui/material';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const phoneBook = useSelector(selectPhoneBookValue);

  const OnChangeInput = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const OnChangeSubmit = evt => {
    evt.preventDefault();
    const data = { name, number };

    if (
      phoneBook.some(({ name }) => {
        return name.toLocaleLowerCase() === data.name.toLocaleLowerCase();
      })
    ) {
      Notify.warning(`${data.name} is already in the contact list`, {
        width: '400px',
        timeout: 500,
        fontSize: '24px',
      });
      return;
    }
    dispatch(addContacts(data));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Avatar sx={avatarStyle}>
        <PermContactCalendarIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Add Contact
      </Typography>
      <Box component="form" onSubmit={OnChangeSubmit} sx={{ mt: 1 }}>
        <TextField
          sx={{ backgroundColor: '#f656cd' }}
          inputProps={{
            inputMode: 'text',
            pattern: '^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$',
          }}
          margin="normal"
          fullWidth
          label="Name"
          type="text"
          name="name"
          value={name}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={OnChangeInput}
        />
        <TextField
          sx={{ backgroundColor: '#f656cd' }}
          inputProps={{
            inputMode: 'tel',
            pattern:
              '+?d{1,4}?[ .-s]?(?d{1,3}?)?[ .-s]?d{1,4}[ .-s]?d{1,4}[ .-s]?d{1,9}',
          }}
          margin="normal"
          fullWidth
          label="Phone number"
          type="tel"
          name="number"
          value={number}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={OnChangeInput}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
         
          sx={{ backgroundColor: '#f656cd' }}
        >
          <p>Add contact</p>
        </Button>
      </Box>
    </>
  );
};
