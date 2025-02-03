import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { goitApi } from '../auth/operations';

axios.defaults.baseURL = 'https://679648b4bedc5d43a6c4cbb5.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await goitApi.get('/contacts');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addContacts = createAsyncThunk('contacts/addContact', async ({ name, number }, thunkAPI) => {
  try {
    const response = await goitApi.post('/contacts', { name, number });
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteContacts = createAsyncThunk('contacts/deleteContacts', async (contactId, thunkAPI) => {
  try {
    const response = await goitApi.delete(`/contacts/${contactId}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
