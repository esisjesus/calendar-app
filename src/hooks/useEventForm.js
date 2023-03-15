import { differenceInSeconds } from "date-fns";
import { useEffect, useState } from "react";
import { useCalendarStore } from "./useCalendarStore";

export const useEventForm = () => {
  
    const { activeEvent } = useCalendarStore()

    const [formValues, setFormValues] = useState({
        startTime: undefined,
        endTime: undefined,
        title: undefined,
        description: undefined
      })
    
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
      }

      return {
        formValues,
        formStatus,
        handleInputChange,
        handleDateChange,
        handleSubmit
      }

}
