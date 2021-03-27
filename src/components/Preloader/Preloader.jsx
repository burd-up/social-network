import loader from "../../assets/loader/oval.svg";
import React from "react";
import s from "./Preloader.module.css"

let Preloader = (props) => <>
    <img className={s.loader} src={loader}/>
    </>

export default Preloader;