import { useDispatch, useSelector } from "react-redux";
import { closeDateModal, openDateModal } from "../store";

export const useUiState = () => {
   const { dateModalIsOpen } = useSelector(( state ) => state.ui)
   const dispatch = useDispatch()
   
   const handleShowModal = () => {
     dispatch(openDateModal())
   };
 
   const handleCloseModal = () => {
     dispatch(closeDateModal())
   };

   return {
    handleShowModal,
    handleCloseModal,
    dateModalIsOpen
   }
}
