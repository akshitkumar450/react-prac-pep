import { Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Instagram from './Assets/Instagram.JPG'
import insta from './Assets/insta.png'
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import img1 from './Assets/img1.jpg';
import img2 from './Assets/img2.jpg';
import img3 from './Assets/img3.jpg';
import img4 from './Assets/img4.jpg';
import img5 from './Assets/img5.jpg';

function Login() {
    return (
        <div className="login">
            <div className="login__carouselContainer" style={{ backgroundImage: 'url(' + insta + ')', backgroundSize: 'cover' }}>
                <div className="login__imgCarousel">
                    <CarouselProvider
                        visibleSlides={1}
                        totalSlides={5}
                        // step={3}
                        naturalSlideWidth={238}
                        naturalSlideHeight={423}
                        hasMasterSpinner
                        isPlaying={true}
                        infinite={true}
                        dragEnabled={false}
                        touchEnabled={false}
                    >
                        <Slider>
                            <Slide index={0}><Image src={img1} /></Slide>
                            <Slide index={1}><Image src={img2} /></Slide>
                            <Slide index={2}><Image src={img3} /></Slide>
                            <Slide index={3}><Image src={img4} /></Slide>
                            <Slide index={4}><Image src={img5} /></Slide>
                        </Slider>
                    </CarouselProvider>
                </div>
            </div>

            <div className='login__form'>
                <img src={Instagram} alt="logo" />
                <TextField
                    id="outlined-email-input"
                    label="email"
                    type="text"
                    size='small'
                    margin='dense'
                    fullWidth={true}
                />
                <TextField
                    id="outlined-email-input"
                    label="password"
                    type="text"
                    size='small'
                    margin='dense'
                    fullWidth={true}
                />
                <Button variant="outlined"
                    fullWidth={true}
                    margin='dense'
                    color='secondary'
                >Forgot Password</Button>

                <Button variant="contained"
                    fullWidth={true}
                    margin='dense'

                >Login</Button>

                <p>New to Instagram?
                    <Link to='/signup' style={{ textDecoration: 'none' }}>
                        <strong>SingUp</strong>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login