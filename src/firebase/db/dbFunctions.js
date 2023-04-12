import { database } from "../config";
import { ref, set, get, child } from "firebase/firebase-database";

export const postEventToDb = async( {title, description, startTime, endTime, _id, user} ) => {

    try {

        const postEventResponse = await set(ref(database, 'events/' + user._id), {
          title,
          description,
          startTime,
          endTime,
          _id,
          user
        });

        return postEventResponse
        
    } catch (error) {
        console.error(error)
        return new Error( Error )
    }
}

<<<<<<< HEAD
const getDataFromDb = async(user) => {
=======
const getDataFromDb = async({ user }) => {
>>>>>>> 921f6af4445003da44ae9cde93dbaac7b5547d52
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