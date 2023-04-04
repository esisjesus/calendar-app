import { useState } from 'react'
import { useCalendarStore, useEventForm, useUiState} from '../../hooks';
import { Calendar } from 'react-big-calendar'
import { CalendarEventBox, CalendarModal, Navbar, FormModal } from "../components"
import { eventStyleGetter, localizer } from '../../helpers'
import { AddNewEventButton } from '../components/AddNewEventButton';
import "react-datepicker/dist/react-datepicker.css";
import 'react-big-calendar/lib/css/react-big-calendar.css'


export const CalendarPage = () => {  
  //Calendar Functions
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')

  //Calendar event listeners handlers
  const handleBeginAdditionOfNewEvent = (event) => {
    handleSetValuesOfSelected({startTime: event.start, endTime: event.end})
    handleShowModal()
  } 

  //React big Calendar Event listeners handlers
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

  //Calendar Events :
  const {handleActivateEvent, events} = useCalendarStore()
  //UI hook (modal)
  const {dateModalIsOpen, handleShowModal, handleCloseModal} = useUiState()
 
  //Form Functions
  const {formValues, formStatus, handleSetValuesOfSelected, handleInputChange, handleDateChange, handleSubmit, handleDelete } = useEventForm()



  return (
    <>
      <Navbar/>

      <CalendarModal
        isOpen={ dateModalIsOpen }
        onClose= { handleCloseModal }
      >
        <FormModal formValues= {formValues} formStatus= {formStatus} handleInputChange={ handleInputChange } handleDateChange= { handleDateChange } handleSubmit = { handleSubmit } handleDelete = {handleDelete} />
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
        onSelectSlot = { handleBeginAdditionOfNewEvent }
        selectable
      />

      <AddNewEventButton handleEvent={handleBeginAdditionOfNewEvent}/>
    </>
  )
}
