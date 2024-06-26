import * as React from "react";
import { Link, NavLink } from "react-router-dom";



export default function Footer() {
    return (
        <footer className="bg-dark" style={{ position: "absolute", bottom: 0, width: "100%" }}>
            <hr></hr>
            <div className="container py-4 py-md-5 px-4 px-md-3 ">
                <div className="col-6 mb-3 text-primary  mx-auto">
                    <h5>Informacion</h5>
                    <ul className="list-unstyled">
                        <li className="mb-2"><a href="https://www.linkedin.com/in/juanestebanliendo/" target="_blank">Contacto</a></li>
                        <li className="mb-2"><a href="https://github.com/juan-lien-do" target="_blank">Otros proyectos</a></li>
                        <li className="mb-2">
                            <NavLink to="/repartir/faq/" >
                            Preguntas frecuentes
                            </NavLink>
                            </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}