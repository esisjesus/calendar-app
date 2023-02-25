import { Calendar } from 'react-big-calendar'
import { addHours } from 'date-fns'
import { Navbar } from "../components"
import { localizer } from '../../helpers'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const events = [{
  title: 'Boss birthday',
  notes: 'Buy a cake',
  start: new Date(),
  end:  addHours(new Date(), 1),
  bgColor: '#fff',
  user: {
    _id:'123',
    name: 'Jesus E.'
  }
}]

export const CalendarPage = () => {
  return (
    <>
      <Navbar/>
      <Calendar
        localizer={localizer}
        events={ events }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 112px)' }}
      />
    </>
  )
}
