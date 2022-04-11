import {collection, getDocs,  addDoc, deleteDoc , doc, updateDoc, setDoc } from 'firebase/firestore/lite';
import {db} from "./firebase";

export default async function getColections(coll){
    
    const tasks = collection(db, coll);
    const tasksList = await getDocs(tasks);
    const data = tasksList.docs.map(doc => {return {
      text:doc.data().text,
      color:doc.data().color,
      completed:doc.data().completed,
      id:doc.id, 
      order:doc.data().order
    }});
    const result = data.sort((a,b)=> a.order - b.order)
    return result;
}

export async function setData(coll, id, data){
  const docRef = await setDoc(doc(db, coll, id), data);
  return docRef;
}

export async function setDocument(coll, data){
  const docRef = await addDoc(collection(db, coll), data);
  return docRef;
}

export async function deleteDocument(coll, id){
  const docRef = await deleteDoc(doc(db, coll, id));
  return docRef;
}

export async function update(coll, id, data){
  const docRef = await updateDoc(doc(db, coll, id), data);
  return docRef;
}