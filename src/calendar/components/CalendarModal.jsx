export const CalendarModal = ({ isOpen, onClose, bgColor = "bg-black", children }) => {

  return (
    <>
        {
            isOpen && (
                <div className='z-50 flex justify-center items-center fixed top-0 left-0 w-full h-full'>
                    {/* background opacity surface */}
                    <div className={`fixed top-0 left-0 w-full h-full ${bgColor} opacity-50 absolute`} onClick={onClose}>

                    </div>
                    
                    {/* content */}
                    <div className='w-11/12 md:w-3/4 lg:w-2/6 z-70 relative'>
                        { children }
                    </div>
                </div>
            )
        }
    </>
  );
};
