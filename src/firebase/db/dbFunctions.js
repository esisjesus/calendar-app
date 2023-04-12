import { database } from "../config";
import { ref, set, get, child } from "firebase/database";

export const postEventToDb = async({ title, description, startTime, endTime, _id, user} ) => {

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

export const getDataFromDb = async({ user }) => {
    try {
        const dataSnapshot = await get(child( ref(database) , `users/${user._id}`))
        if(dataSnapshot.exists()){
            console.log( dataSnapshot.val() )
        }else{
            console.log( 'Data is unavailable' )
        }
        
    } catch (error) {
        console.error(error)
        return new Error( Error ) 
    }
}