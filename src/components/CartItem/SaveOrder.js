import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore"
import { useCart } from "../../context/CartContexProvider"


const SaveItem = () => {
    const { orden } = useCart()
    
    const saveItemHandler = () => {
      const client = {
        user: 'Maria',
        phone: '123456',
        email: 'maria@gmail.com'
      }
      

      const orden = {
        buyer: client,
        items: 'id, title, price',
        total: cartList.length,
        }

      console.log( orden );
      saveToFirestore( orden )
    }

    const saveToFirestore = async (orden) => {
      const db = getFirestore()
      const { id } = await addDoc(collection(db, 'Orden'), orden)
      console.log(id);
    }
    
    const updateHandler = async () => {
      const id = ''//Falta el ID de la compra 
      const db = getFirestore()
      const docToUpdate = doc(db,'Orden', id)
      try {
        await updateDoc(docToUpdate, {otraprop: 22})
      } catch (error) {
        console.log('hubo algún error', error);
      }
    }

    const batchHandler = () => {
      const db = getFirestore()
      const batch = writeBatch(db)

      const doc1 = doc(db, 'Orden', 'TSqZMcRNKT0q6byZ6yCN')
      batch.update(doc1, { total: 33 })

      const doc2 = doc(db, 'Orden', 'WkRngjOzgZFJkfn4huSa')
      batch.update(doc2, { total: 55 })

      const doc3 = doc(db, 'Orden', 'eL3o1eV1gNnLMGcKa4Ap')
      batch.delete(doc3)

      batch.commit()
    }

    return (
    <div>
        { orden.map( o => <li key={o}> {o} </li>) }
        <button onClick={saveItemHandler} className='btn'>Salvar carrito</button>    
        <button onClick={updateHandler} className='btn ml-5'>Actualizar Total</button>
        <button onClick={batchHandler} className='btn ml-5'>Batch</button>
    </div>
  )
}
export default SaveItem


