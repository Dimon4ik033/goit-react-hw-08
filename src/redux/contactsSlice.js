import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: [],
};

const sliceContact = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        },
    }
})

export const contactsReducer = sliceContact.reducer;
export const { deleteContact, addContact } = sliceContact.actions; 

export const selectContacts = state => state.contacts.contacts;
