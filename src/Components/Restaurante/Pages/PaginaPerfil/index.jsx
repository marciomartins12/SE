import { Link, useNavigate } from "react-router-dom";
import Style from "./paginaPerfil.module.css";
import Restaurantes from "../../../../Services/restauranteUsuario.json";
import { useEffect } from "react";

const RestaurantePerfil = ({id}) => {
    const navigate = useNavigate();

    useEffect(() => {
        const restaurante = Restaurantes.find((e) => e.id == id);
        if (restaurante) {
            if (restaurante.email === JSON.parse(localStorage.getItem("userCurrent")).email) {
                if (restaurante.email === JSON.parse(localStorage.getItem("userCurrent")).senha) {
                    window.localStorage.clear();
                    navigate('/');
                }
            }
        }
    }, [])
    const restaurante = Restaurantes.find((e) => e.email === JSON.parse(localStorage.getItem("userCurrent")).email)

    return (
        <section className={Style.containerPerfil}>
            <div className={Style.cabecalhoperfil}>
                <div className={Style.cabecalhoperfilItem}>
                    <h2>{restaurante.nome}</h2>
                    <img src="" alt="" />
                </div>
                <div className={Style.cabecalhoperfilItem}>
                    <p>Avaliações : {restaurante.avaliacao}</p>
                    <p>Cardapio :  </p>
                </div>
            </div>
            <div className={Style.navbarIn}>
                <p>Inforamções</p>
                <Link to="cardapio">
                    Cardápio
                </Link>
            </div>

            {/* 

            <section>
                <div>
                    <h3>{descricao}</h3>
                    <button>x</button>
                </div>
                <p>
                    Descricao
                </p>
                {true ? <p>Aberto</p> : <p>Fechado</p>}
                <div>
                    <h4>Formas de Pagamento</h4>
                    <button>x</button>
                </div>
            </section> */}


        </section>
    )
}

export default RestaurantePerfil;