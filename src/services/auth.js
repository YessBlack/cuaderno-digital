import { app } from './config.js'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth()

export const createUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    return userCredential
  } catch (error) {
    return error.message
  }
}
