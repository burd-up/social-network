import React from "react";
import s from "./FormControl.module.css"

const FormControl = ({input, meta, element, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (<div className={hasError ? s.error : s.formControl }>
            {element === "textarea" && <textarea {...input} {...props}/>}
            {element === "input" && <input {...input} {...props}/>}
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export default FormControl;