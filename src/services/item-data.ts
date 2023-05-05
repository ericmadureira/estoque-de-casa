import { addDoc, collection, doc, getDocs, query, updateDoc } from 'firebase/firestore'

import { firebaseApp } from '../firebase'
import { Item, ItemCreationParams, ItemUpdateParams } from '../types/Item'

// Adds item to db/firebase.
export const addNewItem = async (itemCreationParams: ItemCreationParams) => {
    try {
        await addDoc(collection(firebaseApp, 'products'), { ...itemCreationParams })
    } catch (err) {
        console.log('ERROR - Add New Item: ', err)
    }
}

export const updateItem = async (updateParams: ItemUpdateParams) => {
    try {
        const productCollectionRef = doc(firebaseApp, 'products', 'DOC ID');
        await updateDoc(productCollectionRef, { ...updateParams });
    } catch (err) {
        console.log('ERROR - Update Item: ', err)
    }
}

export const getAllItems = async () => {
    const q = query(collection(firebaseApp, 'products'))
    const querySnapshot = await getDocs(q)

    return querySnapshot.docs.map((doc) => {
        // doc.data() is never undefined for query doc snapshots
        return { id: doc.id, ...doc.data() } as Item
    })
}
