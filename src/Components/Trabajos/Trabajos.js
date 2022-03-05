import foto1 from "../../Images/17.jpeg"
export default function Trabajos() {
    return (
        <div class="hero min-h-screen mb-2">
            <img src={foto1} class="object-cover w-full h-full"/>
            <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                    <h1 class="mb-5 lg:text-5xl font-bold">Bienvenido!</h1>
                    <p class="mb-5 lg:text-xl">
                        Los mejores trabajadores y maquinaria para todos los trabajos!
                        Te invitamos a leer nuestra carpeta y cualquier duda estamos a disposicion! 
                    </p>
                    <a href="https://drive.google.com/file/d/1e3EAxChUuy9Xs3zxL-6M3dBioCth5fdl/view?usp=sharing" download="Carpeta-Inamco" class="btn bg-first-color hover:bg-second-color border-none">Descarga</a>
                </div>
            </div>
        </div>
    );
};