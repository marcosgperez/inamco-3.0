import { SiWhatsapp, SiGmail, SiInstagram } from "react-icons/si";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer class="p-5 footer bg-second-color text-base-content footer-center rounded">
            <div class="grid grid-flow-col gap-4">
                <Link to='/nosotros'>
                    <a class="link link-hover text-l font-semibold">Nosotros</a> 
                </Link>
                <Link to='/contacto'>
                    <a class="link link-hover text-l font-semibold">Contacto</a> 
                </Link>
                <Link to='/trabajos'>
                    <a class="link link-hover text-l font-semibold">Trabajos</a> 
                </Link>
                <Link to='/folder'>
                    <a class="link link-hover text-l font-semibold">Folder</a>
                </Link>
            </div> 
            <div>
                <div class="grid grid-flow-col gap-4">
                    <a href='https://wa.me/5492235463048'>
                        <SiWhatsapp class="fill-current text-2xl md:text-4xl ml-5"/>
                    </a>
                    <a href="mailto:inamcoargentina@gmail.com">
                        <SiGmail class="fill-current text-2xl md:text-4xl ml-5"/>
                    </a>
                    <a href='https://www.instagram.com/inamcoarg/?hl=es-la'>
                        <SiInstagram class="fill-current text-2xl md:text-4xl ml-5"/>
                    </a>
                </div>
            </div> 
            <div>
                <p>Copyright © 2022 - All right reserved by INAMCO</p>
            </div>
        </footer>
    )
}