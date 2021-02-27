import { fetchJSON } from './utils';
//import {firebase} from "../firebase"

const SERVICE_URL = process.env.REACT_APP_SERVICE_URL;


export async function fetchAll() {
  const { Brastlewark } = await fetchJSON(SERVICE_URL);
  return Brastlewark;
}

// async function fetchInitial() {
//   const { Brastlewark } = await fetchJSON(SERVICE_URL);
//   return Brastlewark;
// }


// async function fetchAll1 () {
//   const array = await fetchInitial()
//   try {
//     const db = firebase.firestore()
//     //Verify the database initial info
//     const data = await db.collection("citizens").get()
//     const arrayData =  data.docs.map(doc => ({id: doc.id, ...doc.data()}))
//     //If the element ID does't exist in the database, add the element
//     return await array.forEach(el => {
//       const existingElement = arrayData.find(item => item.id === el.id)
//       if(!existingElement) {
//         db.collection("citizens").add(el)
//       }
//       return
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }


// export async function fetchAll () {
//   await fetchAll1()
//   try {
//     const db = firebase.firestore()
//     //Check the database
//     const data = await db.collection("citizens").get()
//     const arrayData =  new Set(data.docs.map(doc => ({id: doc.id, ...doc.data()})))
//    return [...arrayData]
//   } catch (error) {
//     console.log(error)
//   }
// }




