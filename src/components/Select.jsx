import { forwardRef, useId } from "react"

function Select ({
    label,
    options,
    className,
    ...props
}, ref){
    const id = useId()
    return(
        <div className="w-full">
            {
                    label && (
                        <label htmlFor={id} className="inline-block mb-1 pl-1">
                            {label}
                        </label>
                    )
            }
            <select {...props} id={id} ref={ref}
            className={`${className} px-3 py-2 rounded-lg bg-white
            text-black outline-none focus:bg-gray-50 
            duration-200 border border-gray-200 w-full`} >
                {
                    options.map((option) => (
                         <option value={option} key={option}>{option}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default forwardRef(Select)