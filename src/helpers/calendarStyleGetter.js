export const eventStyleGetter = (event, start, end, isSelected) => {
    let className = "bg-green-500"

    isSelected && (className = "bg-green-700 border-green-800 border outline-green-800")
    
    return {
      className
    }
  }