import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { addHours, format, parse, startOfWeek, getDay } from 'date-fns'
import { enUS } from 'date-fns/locale'
import { Navbar } from "../components"

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

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
