import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logar } from "../../Redux/UserSlice";
import Style from "./pageCardapio.module.css";
import ExibeItem from "./exibeItens";
const CardapioRestaurante = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.user);

    const navegador = useNavigate()
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('userCurrent'));
        if (storedUser) {
            const [email, senha, tipo] = storedUser;
            dispatch(logar([email, senha, tipo]));
        }
    }, []);
    return (
        <section className={Style.containerCardapio}>
            <p className={Style.cabecalhoTipo}>Restaurante</p>

            <div className={Style.cabecalhoPerfil}>
                <h2>{state.name}</h2>
                <img src={state.img} alt="img do restaurante" />
            </div>
            <div>
                {state.cardapio.map((item, i) => {
                    return (
                    <ExibeItem
                        key={i}
                        item={item}
                    />)
                })}


            </div>
        </section>
    )
}
export default CardapioRestaurante;