import Carousel from "../Carousel/Carousel";

import foto3 from '../../Images/20.jpeg';
import foto4 from '../../Images/10.jpeg';
import foto1 from '../../Images/4.jpeg';


import foto5 from '../../Images/14.jpeg';
import foto6 from '../../Images/18.jpeg';
import foto7 from '../../Images/3.jpeg';


export default function Home() {
    const imagenesInicio = "w-5/6 object-cover m-auto h-44"
    return (
        <div class="bg-white mb-5">
            <Carousel />
            <div class="lg:columns-2 bg-white mt-20 ">
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <img src={foto3} alt="Inamco" class={imagenesInicio}/>
                    <blockquote class="justify-center text-center items-center w-5/6 m-auto">
                        <figcaption class="font-medium">
                            <div class="dark:text-first-color text-xl">
                                Que hacemos?
                            </div>
                        </figcaption>
                        <p class="text-lg font-medium">
                        Realizamos movimiento de suelos, obras de pavimentacion, naves industriales, obras civiles, 
                        proyectos urbanisticos, proyectos de gestion de ingenieria ambiental y otros proyectos de ingenieria.
                        </p>
                    </blockquote>
                </div>
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <img src={foto4} alt="Inamco" class={imagenesInicio}/>
                    <blockquote class="justify-center text-center items-center w-5/6 m-auto">
                        <figcaption class="font-medium">
                            <div class="dark:text-first-color text-xl">
                                Trabajos
                            </div>
                        </figcaption>
                        <p class="text-lg font-medium">
                        Nuestros trabajos mas importantes se han realizado en barrios privados, industrias agroalimenticias y 
                        centros deportivos,
                        contando a la fecha con una gran cantidad de referencias de nuestros clientes.
                        </p>
                    </blockquote>
                </div>
            </div>
            <div class="hidden lg:block">
                <div class='lg:columns-3 bg-white mt-20 mb-5 relative overflow-hidden'>
                    <img class="mask mask-parallelogram object-cover h-50 w-full " src={foto5} />
                    <img class="mask mask-parallelogram object-cover h-50 w-full" src={foto6} />
                    <img class="mask mask-parallelogram object-cover h-50 w-full" src={foto7} />
                </div>
                    <img class="w-full h-60 object-cover" src={foto1}/>
            </div>
            <div class="lg:hidden sm:block mt-10">
                <div class='columns-2 max-20 gap-2'>
                    <img class="pl-5 mb-5" src={foto5} />
                    <img class="pl-5" src={foto6} />
                    <img class="pr-5 mb-5"  src={foto7} />
                    <img class="pr-5" src={foto1} />
                </div>
            </div>
        </div>
    )
}