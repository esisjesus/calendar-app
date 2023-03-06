import { Calendar } from 'react-big-calendar'
import { addHours } from 'date-fns'
import { CalendarEventBox, CalendarModal, Navbar } from "../components"
import { localizer } from '../../helpers'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react'

const events = [{
  title: 'Boss birthday',
  notes: 'Buy a cake',
  start: new Date(),
  end:  addHours(new Date(), 0.5),
  user: {
    _id:'123',
    name: 'Jesus E.'
  }
}]


export const CalendarPage = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')
  
  const eventStyleGetter = (event, start, end, isSelected) => {
    const className = "bg-green-500"
  
    return {
      className
    }
  }
  
  const onDoubleClick = (event) => {
    console.log({doubleClick: event});
  } 
  const onSelect = (event) => {
    console.log({select: event});
  } 
  const onChangeView = (event) => {
    localStorage.setItem('lastView', event)
  } 

  const [showModal, setShowModal] = useState(true);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <>
      <Navbar/>

      <CalendarModal
        isOpen={showModal}
        onClose= {handleCloseModal}
      >
        
        <div className="bg-white rounded-lg p-6">
          {/* modal content */}
          <h2 className="text-2xl font-bold mb-4">Modal title</h2>
          <p className="mb-4">Modal content goes here</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={handleCloseModal}>
            Close
          </button>
        </div>

      </CalendarModal>

      <Calendar
        localizer={localizer}
        defaultView = {lastView}
        events={ events }
        startAccessor="start"
        endAccessor="end"
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
