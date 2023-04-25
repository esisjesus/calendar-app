export const LoadingDots = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="w-6 h-6 m-1 rounded-full bg-green-500 animate-bounce"></div>
        <div style={{animationDelay: "-0.5s"}} className="w-6 h-6 m-1 rounded-full bg-green-500 animate-bounce" ></div>
        <div className="w-6 h-6 m-1 rounded-full bg-green-500 animate-bounce"></div>
    </div>
  )
}
