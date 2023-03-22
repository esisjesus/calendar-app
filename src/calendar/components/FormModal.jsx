

import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCircleExclamation, faSave, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useCalendarStore, useEventForm } from "../../hooks";

export const FormModal = ({formValues, formStatus, handleDateChange, handleInputChange, handleSubmit}) => {
    
    const {activeEvent} = useCalendarStore()

  return (
    <div className="bg-white rounded-lg p-6">

          <form onSubmit={ handleSubmit } >

            <h1 className='font-bold text-3xl mb-4'> <FontAwesomeIcon className='text-green-500' icon={faBookmark}/> New Event</h1>
            <hr />

            <div>
              <h2 className='text-lg my-1'>Start date and hour</h2>
              <DatePicker  selected={ formValues.startTime } name='startTime' onChange={ ( date ) => handleDateChange(date, 'startTime') } minDate={formValues.startTime} dateFormat='Pp' showTimeSelect className='h-10 pl-2 py-2 rounded-md  border-2 w-full focus:outline-green-500'/>
            </div>
            
            <div>
              <h2 className='text-lg my-1'>End date and hour</h2>
              <DatePicker selected={ formValues.endTime } name='endTime' onChange={ ( date ) => handleDateChange(date, 'endTime') } minDate={formValues.startTime} dateFormat='Pp' showTimeSelect className='h-10 pl-2 py-2 rounded-md  border-2 w-full focus:outline-green-500'/>
            </div>

            <hr />

            <div>
              <h2 className='text-lg my-1'>Title</h2>
              <input type="text" className='h-10 pl-2 py-2 rounded-md  border-2 w-full focus:outline-green-500' placeholder='Event title'  name='title' onChange={ handleInputChange } value={ formValues.title }/>
            </div>
            
            <div>
              <h2 className='text-lg my-1'>Short description and notes</h2>
              {/* <input type="text" className='h-10 pl-2 py-2 rounded-md  border-2 w-full focus:outline-green-500' /> */}
              <textarea className='h-40 pl-2 py-2 rounded-md  border-2 w-full focus:outline-green-500 resize-none' cols="30" rows="10" placeholder='Write a brief description of this event' name='description' onChange={ handleInputChange } value={ formValues.description }></textarea>
            </div>
            {
              !formStatus.valid && <span className='text-red-500 block'> <FontAwesomeIcon icon={faCircleExclamation} /> {formStatus.errorMsg} </span>
            }
            
            <div className='w-full flex justify-between'>
              <button className='w-auto h-11 p-2 mt-5 bg-green-500 border-sm rounded-md text-white hover:bg-green-400 active:bg-green-600'>
                {
                 activeEvent && activeEvent._id? 
                  'Save'
                  : 'Create event'
                } <FontAwesomeIcon icon={faSave}  className="text-lg mx-2"/>
              </button>
              {
                activeEvent && activeEvent._id && 
                <button className='w-auto h-11 p-2 mt-5 bg-red-500 border-sm rounded-md text-white hover:bg-red-400 active:bg-red-600'>
                  Delete <FontAwesomeIcon icon={faTrash}  className="text-lg mx-2"/>
                </button>
              }
            </div>
          </form>

        </div>
  )
}
