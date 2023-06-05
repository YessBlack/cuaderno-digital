import { collection, addDoc, doc, onSnapshot, getDocs, deleteDoc } from 'firebase/firestore'

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

export const onGetTasks = (callback, idUser) => {
  const q = collection(db, 'tasks')
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const tasks = []
    querySnapshot.forEach((doc) => {
      if (doc.data().idUser === idUser) {
        tasks.push({ ...doc.data(), id: doc.id })
      }
    })
    callback(tasks)
  })
  return unsubscribe
}

export const deleteTask = async (id) => {
  try {
    await deleteDoc(doc(db, 'tasks', id))
  } catch (e) {
    return e
  }
}
