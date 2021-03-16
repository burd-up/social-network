import s from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div>
            <div className={s.boxForMainImg}>
                <img className={s.main_img} src="../../../../forest.jpg"/>
            </div>
            <div>
                <img className={s.ava}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU"/>+
                info
            </div>
        </div>
    )
};
export default ProfileInfo;