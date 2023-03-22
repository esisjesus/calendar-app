import { useState } from 'react'
import { useCalendarStore, useEventForm, useUiState} from '../../hooks';
import { Calendar } from 'react-big-calendar'
import { CalendarEventBox, CalendarModal, Navbar, FormModal } from "../components"
import { localizer } from '../../helpers'
import { AddNewEventButton } from '../components/AddNewEventButton';
import { addHours } from 'date-fns';
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
  
  const handleSelectSlot = (event) => {
    handleSetValuesOfSelected({startTime: event.start, endTime: event.end})
    handleShowModal()
  } 

  const handleClickOnPlusButton = () => {
    handleSetValuesOfSelected({startTime: new Date(), endTime: addHours( new Date,  0.5) })
    handleShowModal()
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
  const {handleActivateEvent, events} = useCalendarStore()
  //UI hook (modal)
  const {dateModalIsOpen, handleShowModal, handleCloseModal} = useUiState()
 
  
  //Form Functions
  const {formValues, formStatus, handleSetValuesOfSelected, handleInputChange, handleDateChange, handleSubmit } = useEventForm( )



  return (
    <>
      <Navbar/>

      <CalendarModal
        isOpen={ dateModalIsOpen }
        onClose= { handleCloseModal }
      >
        <FormModal formValues= {formValues} formStatus= {formStatus} handleInputChange={ handleInputChange } handleDateChange= { handleDateChange } handleSubmit = { handleSubmit }  />
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
        onSelectSlot = { handleSelectSlot }
        selectable
      />

      <AddNewEventButton handleEvent={handleClickOnPlusButton}/>
    </>
  )
}
