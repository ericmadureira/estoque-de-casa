import { collection, addDoc } from 'firebase/firestore'

import { firebaseApp } from '../firebase'
import { ItemCreationParams } from '../types/Item'

export const addNewItem = async (itemCreationParams: ItemCreationParams) => {
    try {
        await addDoc(collection(firebaseApp, 'products'), { ...itemCreationParams })
    } catch (err) {
        console.log('Error during fetch: ', err)
    }
}
