import { addDoc, collection, doc, getDocs, query, updateDoc } from 'firebase/firestore'

import { firebaseApp } from '../firebaseDB/firebase'
import { Item, ItemCreationParams, ItemUpdateParams } from '../types/Item'

/**
 * Adds a new item to the Firebase database.
 * @param {ItemCreationParams} item - The item to be added.
 */
export const addNewItem = async (item: ItemCreationParams) => {
    try {
        await addDoc(collection(firebaseApp, 'products'), { ...item })
    } catch (error) {
        console.error('Error adding new item:', error)
    }
}

/**
 * Update an item in the database.
 * @param updateParams - The parameters for updating the item.
 * @returns Promise<void>
 */
export const updateItem = async (updateParams: { id: string, /* add other required types */ }): Promise<void> => {
    try {
        const productCollectionRef = doc(firebaseApp, 'products', updateParams.id);
        await updateDoc(productCollectionRef, { ...updateParams });
    } catch (err) {
        console.log('ERROR - Update Item: ', err)
    }
}

export const getAllItems = async (): Promise<Item[]> => {
    const querySnapshot = await getDocs(collection(firebaseApp, 'products'))

    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Item))
}
