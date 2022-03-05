import homeFoto from '../../Images/27.jpeg';
import foto1 from '../../Images/2.jpg';
import foto2 from '../../Images/7.jpeg';
import foto5 from '../../Images/17.jpeg';
import foto6 from '../../Images/15.jpeg';

import foto3 from '../../Images/20.jpeg';
import foto4 from '../../Images/10.jpeg';
export default function Carousel() {
    return (
        <div class="w-full carousel">
            <div id="slide1" class="relative w-full carousel-item max-h-80">
                <img src={foto1} class="w-full object-cover"/> 
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" class="btn btn-circle ">❮</a> 
                <a href="#slide2" class="btn btn-circle ">❯</a>
                </div>
            </div> 
            <div id="slide2" class="relative w-full carousel-item max-h-80">
                <img src={foto2} class="w-full object-cover"/> 
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn btn-circle ">❮</a> 
                <a href="#slide3" class="btn btn-circle ">❯</a>
                </div>
            </div> 
            <div id="slide3" class="relative w-full carousel-item max-h-80">
                <img src={foto5} class="w-full object-cover"/> 
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" class="btn btn-circle ">❮</a> 
                <a href="#slide4" class="btn btn-circle ">❯</a>
                </div>
            </div> 
            <div id="slide4" class="relative w-full carousel-item max-h-80">
                <img src={foto6} class="w-full object-cover"/> 
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" class="btn btn-circle">❮</a> 
                <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
}