import { collection, addDoc } from 'firebase/firestore'
import { db } from './config.js'

export const createTask = async (task) => {
  try {
    const docRef = await addDoc(collection(db, 'tasks'), task)
    console.log(docRef)
    return docRef
  } catch (e) {
    return e
  }
}
