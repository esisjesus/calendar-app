import { database } from "../config";
import { ref, set, get, child, remove } from "firebase/database";

export const postEventToDb = async({ title, description, startTime, endTime, _id, user} ) => {
    debugger
    try {
        await set(ref(database, `events/${user.id}/${_id}`), {
          title,
          description,
          startTime,
          endTime,
          _id,
          user
        });
        
    } catch (error) {
        console.error(error)
        return new Error( Error )
    }
}

export const getDataFromDb = async(id) => {
    try {
        const dataSnapshot = await get(child( ref(database) , `events/${id}`))
        if(dataSnapshot.exists()){
            return dataSnapshot.val()
        }else{
            console.log( 'Data is unavailable' )
        }
        
    } catch (error) {
        console.error(error)
        return new Error( Error ) 
    }
}