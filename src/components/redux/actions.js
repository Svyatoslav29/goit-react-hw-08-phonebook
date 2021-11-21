import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addContacts = createAction("contacts/add", ({ name, number }) => ({
    payload: {
        id: uuidv4(),
        name,
        number
    },
}));
const deleteContacts = createAction("contacts/delete");
const filterChange = createAction("contacts/filter");
const actions = { addContacts, deleteContacts, filterChange };

export default actions