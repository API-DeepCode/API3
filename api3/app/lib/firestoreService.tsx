import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  doc 
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase"; // Se o firebaseConfig está exportado do seu arquivo firebase.ts

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// === CREATE ===
export async function addResponse(collectionName: string, data: any) {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Documento adicionado com ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Erro ao adicionar documento:", error);
    throw error;
  }
}

// === READ ===
export async function getResponses(collectionName: string) {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return data;
  } catch (error) {
    console.error("Erro ao obter documentos:", error);
    throw error;
  }
}

// === UPDATE ===
export async function updateResponse(collectionName: string, id: string, newData: any) {
  try {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, newData);
    console.log("Documento atualizado com sucesso!");
  } catch (error) {
    console.error("Erro ao atualizar documento:", error);
    throw error;
  }
}

// === DELETE ===
export async function deleteResponse(collectionName: string, id: string) {
  try {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
    console.log("Documento deletado com sucesso!");
  } catch (error) {
    console.error("Erro ao deletar documento:", error);
    throw error;
  }
}