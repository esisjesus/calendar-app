import { useState } from "react"

export const useLoginForm = ( formStructure ) => {
    const [formValues, setFormValues] = useState(formStructure)

    const handleInputChange = ( evt ) => {
        setFormValues( prevState => (
                {
                    ...prevState,
                    [evt.target.name]: evt.target.value
                }
            )
        ) 
    }

    return {
        formValues,
        handleInputChange
    }
}
