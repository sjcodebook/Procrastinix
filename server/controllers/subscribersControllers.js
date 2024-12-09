import firebase from '../firebase.js'
import {
  getFirestore,
  collection,
  // doc,
  addDoc,
  // getDoc,
  // getDocs,
  // updateDoc,
  // deleteDoc,
} from 'firebase/firestore'
import { isDisposableEmail, isValidEmail } from '../utils.js'

const db = getFirestore(firebase)

export const addEmailToList = async (req, res) => {
  try {
    const { email } = req.body

    if (!email) {
      return res.status(400).send('Email is required')
    }

    if (!isValidEmail(email)) {
      return res.status(400).send('Invalid email')
    }

    if (isDisposableEmail(email)) {
      return res.status(400).send('Disposable email is not allowed')
    }

    const data = {
      email,
      createdAt: new Date().toISOString(),
      subscribed: true,
      subscribedAt: new Date().toISOString(),
      source: 'DIRECT_WEBSITE',
    }

    await addDoc(collection(db, 'hh_subscribers'), data)

    return res.status(200).send('Email added to list successfully')
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

// export const createProduct = async (req, res, next) => {
//   try {
//     const data = req.body
//     await addDoc(collection(db, 'products'), data)
//     res.status(200).send('product created successfully')
//   } catch (error) {
//     res.status(400).send(error.message)
//   }
// }

// export const getProducts = async (req, res, next) => {
//   try {
//     const products = await getDocs(collection(db, 'products'))
//     const productArray = []

//     if (products.empty) {
//       res.status(400).send('No Products found')
//     } else {
//       products.forEach((doc) => {
//         const product = new Product(
//           doc.id,
//           doc.data().name,
//           doc.data().price,
//           doc.data().retailer,
//           doc.data().amountInStock
//         )
//         console.log(product)
//         productArray.push(product)
//       })

//       res.status(200).send({
//         products: productArray,
//         message: 'Products fetched successfully',
//       })
//     }
//   } catch (error) {
//     res.status(400).send(error.message)
//   }
// }

// export const getProduct = async (req, res, next) => {
//   try {
//     const id = req.params.id
//     const product = doc(db, 'products', id)
//     const data = await getDoc(product)
//     if (data.exists()) {
//       res.status(200).send(data.data())
//     } else {
//       res.status(404).send('product not found')
//     }
//   } catch (error) {
//     res.status(400).send(error.message)
//   }
// }

// export const updateProduct = async (req, res, next) => {
//   try {
//     const id = req.params.id
//     const data = req.body
//     const product = doc(db, 'products', id)
//     await updateDoc(product, data)
//     res.status(200).send('product updated successfully')
//   } catch (error) {
//     res.status(400).send(error.message)
//   }
// }

// export const deleteProduct = async (req, res, next) => {
//   try {
//     const id = req.params.id
//     await deleteDoc(doc(db, 'products', id))
//     res.status(200).send('product deleted successfully')
//   } catch (error) {
//     res.status(400).send(error.message)
//   }
// }
