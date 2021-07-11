import React from "react";
import s from "./FormControl.module.css"

const FormControl = ({input, meta: {touched, error}, element, ...props}) => {
    const hasError = error && touched;
    return (<div className={hasError ? s.error : s.formControl }>
            {element === "textarea" && <textarea {...input} {...props}/>}
            {element === "input" && <input {...input} {...props}/>}
            {hasError && <span>{error}</span>}
        </div>
    )
}

export default FormControl;