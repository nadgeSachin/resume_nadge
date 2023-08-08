import React from 'react';
import Particles from 'react-particles-js';
import { background } from '../../profile';
import DigitalWatch from '../section/DigitalWatch';
const ParticlesBackground = () => {
    const particlesConfig = {
        particles: {
            number: {
                value: background.type === 'Snow' ? 75 : 200,
                density: {
                    enable: false
                }
            },
            shape: {
                type: background.type === 'Snow' ? 'circle' : 'star',
            },
            color: {
                value: [
                    '#000000',  // white
                    '#ff0000',  // red
                    '#0000ff',  // blue
                    '#00ff00',  // green
                    '#ffff00',  // yellow
                    '#ff00ff',  // magenta
                    '#00ffff'   //cyan
                ] ,
                animation: {
                    enable: true,
                    speed: 20,
                    sync: true
                }
            },
            size: {
                value: 5,
                random: true,
                anim: {
                    speed: 4,
                    size_min: 0.3
                }
            },
            line_linked: {
                enable: true,
                color: '#000000'
            },
            move: {
                random: true,
                speed: 5,
                direction: 'top',
                out_mode: 'out'
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                }
            },
            modes: {
                bubble: {
                    distance: 250,
                    duration: 2,
                    size: 6,
                    opacity: 0.4
                },
                push: {
                    particles_nb: 5
                }
            },
            retina_detect: true
        }
    };

    return (
        <div className="particle">

            <Particles height="100vh" width="100vw" params={particlesConfig} />
             
        </div>
    );
};

export default ParticlesBackground;




