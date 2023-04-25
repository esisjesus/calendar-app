import { faCalendar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SplashScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <FontAwesomeIcon className="text-green-500 text-8xl" icon={faCalendar}/>
    </div>
  )
}
