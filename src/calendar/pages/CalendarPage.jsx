import { useState } from 'react'
import { Calendar } from 'react-big-calendar'
import DatePicker from "react-datepicker";
import { addHours} from 'date-fns'
import { CalendarEventBox, CalendarModal, Navbar } from "../components"
import { localizer } from '../../helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCircleExclamation, faSave } from '@fortawesome/free-solid-svg-icons'
import { useCalendarStore, useEventForm, useUiState} from '../../hooks';
import "react-datepicker/dist/react-datepicker.css";
import 'react-big-calendar/lib/css/react-big-calendar.css'


export const CalendarPage = () => {  
  //Calendar Functions
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')
  
  const eventStyleGetter = (event, start, end, isSelected) => {
    let className = "bg-green-500"

    isSelected && (className = "bg-green-700 border-green-800 border outline-green-800")
    
    return {
      className
    }
  }
  
  const onDoubleClick = (event) => {
    handleActivateEvent(event)
    handleShowModal()
  } 
  const onSelect = (event) => {
    console.log({select: event});
  } 
  const onChangeView = (event) => {
    localStorage.setItem('lastView', event)
  } 

  //Events:
  const {handleActivateEvent, handleAddEvent, events, activeEvent} = useCalendarStore()
  //UI hook (modal)
  const {dateModalIsOpen, handleShowModal, handleCloseModal,} = useUiState()
 

  //Form Functions
  const {formStatus, formValues, handleDateChange, handleInputChange, handleSubmit} = useEventForm( )

  return (
    <>
      <Navbar/>

      <CalendarModal
        isOpen={ dateModalIsOpen }
        onClose= { handleCloseModal }
      >
        
        <div className="bg-white rounded-lg p-6">

          <form onSubmit={ handleSubmit } >

            <h1 className='font-bold text-3xl mb-4'> <FontAwesomeIcon className='text-green-500' icon={faBookmark}/> New Event</h1>
            <hr />

            <div>
              <h2 className='text-lg my-1'>Start date and hour</h2>
              <DatePicker  selected={ activeEvent? activeEvent.startTime : formValues.startTime } name='startTime' onChange={ ( date ) => handleDateChange(date, 'startTime') } minDate={formValues.startTime} dateFormat='Pp' showTimeSelect className='h-10 pl-2 py-2 rounded-md  border-2 w-full focus:outline-green-500'/>
            </div>
            
            <div>
              <h2 className='text-lg my-1'>End date and hour</h2>
              <DatePicker selected={ activeEvent? activeEvent.endTime : formValues.endTime } name='endTime' onChange={ ( date ) => handleDateChange(date, 'endTime') } minDate={formValues.startTime} dateFormat='Pp' showTimeSelect className='h-10 pl-2 py-2 rounded-md  border-2 w-full focus:outline-green-500'/>
            </div>

            <hr />

            <div>
              <h2 className='text-lg my-1'>Title and notes</h2>
              <input type="text" className='h-10 pl-2 py-2 rounded-md  border-2 w-full focus:outline-green-500' placeholder='Event title'  name='title' onChange={ handleInputChange } value={ activeEvent? activeEvent.title: formValues.title }/>
            </div>
            
            <div>
              <h2 className='text-lg my-1'>Short description</h2>
              {/* <input type="text" className='h-10 pl-2 py-2 rounded-md  border-2 w-full focus:outline-green-500' /> */}
              <textarea className='h-40 pl-2 py-2 rounded-md  border-2 w-full focus:outline-green-500 resize-none' cols="30" rows="10" placeholder='Write a brief description of this event' name='description' onChange={ handleInputChange } value={ activeEvent? activeEvent.description : formValues.description }></textarea>
            </div>
            {
              !formStatus.valid && <span className='text-red-500 block'> <FontAwesomeIcon icon={faCircleExclamation} /> {formStatus.errorMsg} </span>
            }
            
            <button className='w-24 h-11 p-2 mt-5 bg-green-500 border-sm rounded-md text-white hover:bg-green-400 active:bg-green-600'>
              Save <FontAwesomeIcon icon={faSave}  className="text-lg mx-2"/>
            </button>
          </form>

        </div>

      </CalendarModal>

      <Calendar
        localizer={localizer}
        defaultView = {lastView}
        events={ events }
        startAccessor="startTime"
        endAccessor="endTime"
        style={{ height: 'calc(100vh - 112px)' }}
        eventPropGetter = { eventStyleGetter }
        components= {{
          event: CalendarEventBox
        }}
        onDoubleClickEvent = {onDoubleClick}
        onSelectEvent = {onSelect}
        onView = {onChangeView}
      />
    </>
  )
}
