import { createSelector, createSlice } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, fetchContacts } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const selectContacts = (state) => state.contacts.contacts;
export const selectFilter = (state) => state.filters.filter;

export const selectFilteredContacts = createSelector([selectContacts, selectFilter], (contacts = [], filter = '') => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));
});

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const sliceContact = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContacts.pending, handlePending)
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(addContacts.rejected, handleRejected)
      .addCase(deleteContacts.pending, handlePending)
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = state.contacts.filter((task) => task.id !== action.payload.id);
      })
      .addCase(deleteContacts.rejected, handleRejected);
  },
});

export const contactsReducer = sliceContact.reducer;
export const { deleteContact, addContact } = sliceContact.actions;
