import s from './Loader.module.css'
import spinner from './img/Spinner-1.8s-200px.svg'


export const Loader = () => {
    return (
        <div className={s.loader}>
            <img src={spinner}/>
        </div>
    )
}