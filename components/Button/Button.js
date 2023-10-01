import style from "./Button.module.css"

const Bouton = () => {
    return (
        <button className={`${style.button} my-5`}>
            <span className={style.circle}>
                <span className={style.fleche}>▼</span>
            </span>
            télécharger
        </button>

    );
}
export default Bouton;