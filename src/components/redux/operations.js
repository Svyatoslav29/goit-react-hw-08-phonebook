import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://61a13a6a6c3b400017e69c6a.mockapi.io";

const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async (_, { rejectWithValue }) => {
        try{
            const { data } = await axios.get("/contacts");
            return data
        }
        catch(error){
          rejectWithValue(error)
        }
    }
);

const addContacts = createAsyncThunk(
    "contacts/addContact",
    async (contact, { rejectWithValue }) => {
       try{
           const { data } = await axios.post("/contacts", contact);
           return data
       } 
       catch(error){
           rejectWithValue(error)
       }
    }
);

const deleteContacts = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, {rejectWithValue}) => {
        try{
            const {data: {id}} = await axios.delete(`contacts/${contactId}`)
            return id
       }
       catch(error){
           rejectWithValue(error)
       }
    }
);

const operations = { fetchContacts, deleteContacts, addContacts };
export default operations
