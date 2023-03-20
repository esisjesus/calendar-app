import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const AddNewEventButton = ({handleEvent}) => {
  return (
    <FontAwesomeIcon onClick={handleEvent} icon={faPlusCircle} className="text-green-500 hover:text-green-400 active:text-green-800 bg-white rounded-full w-16 h-16 fixed bottom-8 right-8 cursor-pointer z-10"/>
  )
}
