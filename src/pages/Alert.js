import React,{useState} from 'react'

const Alert = () => {
const [alert, setalert] = useState("")
setTimeout(() => {setalert("hidden");},2000);

    return (
            <div role="alert" className={alert}>
            <div className="bg-blue-500 text-white font-bold rounded-t px-4 py-2">
            Hello!
            </div>
            <div className="border border-t-0 border-blue-400 rounded-b bg-blue-100 px-4 py-3 text-blue-700">
            <p>Success</p>
            </div>
            </div>
        
    )
}

export default Alert
