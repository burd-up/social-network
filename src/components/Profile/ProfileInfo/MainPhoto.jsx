import s from './ProfileInfo.module.css';
import React, {useState} from 'react';
import userPhoto from '../../../assets/images/user.png';
import photo from '../../../assets/photo.svg';

const MainPhoto = ({photos, savePhoto, isOwner}) => {
    const [onMouseEnter, setOnMouseEnter] = useState(null)

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div onMouseEnter={() => setOnMouseEnter(true)} onMouseLeave={() => setOnMouseEnter(false)}
             className={s.photoBlock}>
            <img className={s.ava} src={photos.large || userPhoto}/>
            {isOwner ? <div className={onMouseEnter ? s.mouseEnter : s.mouseLeave}>
                <label htmlFor={'upload'}><img src={photo}/></label>
                <input id={"upload"} type={'file'} onChange={(event) => onMainPhotoSelected(event)}/>
            </div> : null}
        </div>
    )
};
export default MainPhoto;
