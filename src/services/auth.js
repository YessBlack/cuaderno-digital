import { app } from './config.js'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth'

const auth = getAuth()

export const createUser = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const userCurrent = updateProfile(userCredential, {
      displayName: name,
      photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ9J4o1n77Jtkz4DCltlA_lhqTZGgTUoIYRw&usqp=CAU'
    })
    return userCurrent
  } catch (error) {
    return error.message
  }
}

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential
  } catch (error) {
    return error.message
  }
}

export const authState = (user) => onAuthStateChanged(auth, user)

export const logoutUser = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    return error.message
  }
}
