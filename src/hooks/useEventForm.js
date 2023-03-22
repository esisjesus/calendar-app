import { differenceInSeconds } from "date-fns";
import { useEffect, useState } from "react";
import { uuidv4Generator } from "../helpers";
import { useCalendarStore } from "./useCalendarStore";
import { useUiState } from "./useUiState";

const baseFormValues = {
  startTime: '',
  endTime: '',
  title: '',
  description: '',
  _id: '',
  user: {
    name: 'Jesus E.', 
    id: 123 
  } 
}

export const useEventForm = () => {
  
    const { events, activeEvent, handleAddEvent, handleUpdateEvent, handleDeleteEvent } = useCalendarStore()

    const {handleCloseModal} = useUiState()

    const [formValues, setFormValues] = useState(baseFormValues)
    
      const [formStatus, setFormStatus] = useState({
        valid: true,
        errorMsg: null
      })
      
      useEffect(() => {
        if(activeEvent != null){
          setFormValues({...activeEvent})
        }
      }, [activeEvent])

      const handleInputChange = ( event ) => {
    
        console.log(event);
    
        setFormValues( prevState => {
          return {
            ...prevState,
            [event.target.name]: event.target.value
          }
        })
    
      }
    
      const handleDateChange = ( event, target ) => {
        setFormValues(prevState => {
          return {
            ...prevState,
            [target]: event
          }
        })
    
      }

      const  handleSetValuesOfSelected = (object) => {
        setFormValues({
          ...object, _id: uuidv4Generator(), user: {
            name: 'Jesus E.', 
            id: 123 
          } 
        })
      }
    
      const handleSubmit = evt => {
        evt.preventDefault()
    
        const difference = differenceInSeconds(formValues.endTime, formValues.startTime)
    
        if( isNaN( difference ) || difference <= 0 ){
          return setFormStatus({
            valid: false,
            errorMsg: 'Set a valid time range'
          })
        }
    
        if( !formValues.title ) return setFormStatus({
          valid: false,
          errorMsg: 'Title is required'
        })

        setFormStatus({
          valid:true,
          errorMsg: null
        })
        
        if(
          events.find(e => e._id === formValues._id) !== undefined
        ){ 
          handleUpdateEvent( {...formValues} )
        }else{
          handleAddEvent( {...formValues } )
        }


        handleCloseModal()
        handleClearFormValues()
        
      }

      const handleDelete = () => {
        handleDeleteEvent(formValues._id)
        handleCloseModal()
        handleClearFormValues()
      }

      const handleClearFormValues = () => {
        setFormValues(
          baseFormValues
        )
      }

      return {
        formValues,
        formStatus,
        handleInputChange,
        handleDateChange,
        handleSetValuesOfSelected,
        handleSubmit,
        handleDelete,
        handleClearFormValues
      }

}
