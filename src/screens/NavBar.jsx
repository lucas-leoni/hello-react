import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a href="" className="navbar-brand logo">


                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menusite"
                        data-bs-controls="menusite">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="menusite">
                        <ul className="nav">
                            <li className="nav-item"><Link className="nav-link" to="/">Inicial</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sobre">Sobre</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/servicos">Serviços</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contato">Contato</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}