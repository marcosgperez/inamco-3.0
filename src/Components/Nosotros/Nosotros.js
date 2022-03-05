import foto1 from '../../Images/7.jpeg';
import foto2 from '../../Images/6.jpeg';
export default function Nosotros() {
    return (
        <div>
            <img class="w-full object-cover lg:max-h-80 max-h-40" src={foto1} alt="Inamco" />
            <div class="text-right">
                <h2 class="lg:text-3xl lg:mr-10 mt-2 mr-5">Nuestra experiencia nos acompaña</h2>
            </div>
            <div class="flex flex-wrap mb-7 mt-10">
                <div class="lg:w-1/2 h-64">
                    <img class="w-full max-h-full object-cover pr-7 pl-7 object-left-top" src={foto2} alt="Inamco" />
                </div>
                <span class="lg:w-2/5 lg:text-start lg:text-2xl text-start ml-5 mr-5">
                    Somos una empresa especializada en obras y servicios de ingenieria, 
                    construccion y ambiente. Realizamos proyectos, gestion y ejecucion, 
                    buscando siempre la optimizacion de los recursos y el mayor beneficio 
                    para nuestros clientes.
                </span>
            </div>
        </div>
    );
};