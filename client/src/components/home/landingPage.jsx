import React from 'react'
<<<<<<< HEAD
import Image from './holaa.png'
import { Link } from 'react-router-dom'

=======
import Image from './images/holaa.png'
import { Link } from 'react-router-dom'
>>>>>>> main

export default function Landing() {
    
    return (
        <div className='div-container-landingPage'>
            <div className='titulo-landingPage'>
                <p>Henry App</p>
                
            </div>
            <div className='container-img-text'>
                <div style={{display:"flex"}}>
                        <img className='image-landingPage' src={Image} />
                    <div className='text-content'>
                        <p>Bienvenidos a la henry app un lugar para administrar tus oficios</p>
                    </div>
                </div>
                <div className='button-container-landingPage'>
                    <Link to='/home'>
                    <button className='button-landingPage'> Ingresar</button>
                    </Link>
                </div>
            </div>
                <div className='button-container-landingPage'>
                    <Link to="/userprofile" className='button-landingPage'>Perfil del alumno</Link>
                </div>
        </div>
    )
}