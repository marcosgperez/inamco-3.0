import { FaWhatsapp, FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function Contacto () {
    const textContacto = "text-xl"
    return (
        <div>
            <div class="hidden lg:flex">
                <div class="mockup-window border bg-second-color m-auto w-5/6 mb-20">
                    <div class="flex px-4 pt-8 bg-fourth-color">
                        <div class="bg-gray-900 w-1/2 p-4 m-2 rounded-2xl text-white text-center hover:bg-second-color">
                            <span class="text-2xl text-fourth-color">Tenes alguna consulta?</span>
                            <br/>
                            <span class={textContacto}>No dudes en contactarnos!</span>
                        </div>
                        <div class="bg-gray-900 w-1/2 p-10 m-2 rounded-2xl text-white text-center relative hover:bg-first-color">
                            <SiGmail class="absolute text-5xl left-5 top-3 text-white"/>
                            <a href="mailto:ing_ariel_perez@gmail.com">
                                <span class={textContacto}>Ariel Perez: ing_ariel_perez@gmail.com</span>
                            </a>
                            <br/>
                            <a href="mailto:saravifacundo@gmail.com">
                                <span class={textContacto}>Facundo Saravi: saravifacundo@gmail.com</span>
                            </a>
                        </div>
                    </div>
                    <div class="flex px-4 bg-fourth-color">
                        <div class="bg-gray-900 w-1/2 p-6 m-2 rounded-2xl text-white text-center relative hover:bg-first-color">
                            <FaWhatsapp class="absolute text-5xl left-5 top-3 text-white"/>
                            <a href='https://wa.me/5492235463048'>
                                <span class={textContacto}>Ariel Perez: (+54) 0223-546-3048</span>
                            </a>
                            <br/>
                            <a href='https://wa.me/5492235035646'>
                                <span class={textContacto}>Facundo Saravi: (+54) 0223-503-5646</span>
                            </a>
                        </div>
                        <a href='https://www.instagram.com/inamcoarg/?hl=es-la' class="bg-gray-900 w-1/2 p-4 m-2 rounded-2xl text-white text-center hover:bg-first-color">
                            <div class="w-1/2 p-4 m-2 rounded-2xl text-white text-center relative">
                                <GrInstagram class="absolute text-5xl left-0 top-0 text-white"/>
                                    <span class={textContacto}>Inamcoarg</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* RESPONSIVE */}

            <div class="flex lg:hidden">
                <div class="mockup-window border bg-second-color m-auto w-5/6 mb-20">
                    <div class="flex px-4 pt-4 bg-fourth-color">
                        <div class="bg-gray-900 w-full p-4 m-2 rounded-xl text-white text-center ">
                            <span class="text-l">Tenes alguna consulta?</span>
                            <br/>
                            <span class="text-l">No dudes en contactarnos!</span>
                        </div>
                    </div>
                    <div class="flex px-4 bg-fourth-color">
                        <div class="bg-gray-900 w-full p-6 m-2 rounded-2xl text-white text-center relative">
                            <SiGmail class="absolute text-l left-5 top-3 text-white"/>
                            <span class="text-l">Ariel Perez: ing_ariel_perez@gmail.com</span>
                            <br/>
                            <span class="text-l">Facundo Saravi: saravifacundo@gmail.com</span>
                        </div>
                    </div>
                    <div class="flex px-4 bg-fourth-color">
                        <div class="bg-gray-900 w-full p-6 m-2 rounded-2xl text-white text-center relative">
                            <FaWhatsapp class="absolute text-l left-5 top-3 text-white"/>
                            <span class="text-l">Ariel Perez: (+54) 0223-546-3048</span>
                            <br/>
                            <span class="text-l">Facundo Saravi: (+54) 0223-503-5646</span>
                        </div>
                    </div>
                    <div class="flex px-4 bg-fourth-color">
                        <div class="bg-gray-900 w-full p-4 m-2 rounded-2xl text-white text-center relative">
                            <GrInstagram class="absolute text-l left-5 top-3 text-white"/>
                            <span class="text-l">Inamcoarg</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
};