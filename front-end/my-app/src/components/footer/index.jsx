import './style.css';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {ReactComponent as CommitJr} from "../../assets/commitjr_new_cinza.svg"
import Logo from '../../assets/logoMovies.png'

function Footer() {
    return (
        <footer className="footer-edit">
        
            <div className='LogoCommit'>
                <CommitJr />
            </div>

            <div className="footer-icons">
                Produzido por River Junior
                <div>   

                    <a href="https://github.com/RiverJnr" target="_new">
                        <GitHubIcon htmlColor="black" />
                    </a>

                    <a href="https://www.linkedin.com/in/river-junior-1665a3224/" target="_new">
                    <LinkedInIcon htmlColor="black" />
                    </a>

                </div>
            </div>

            <img src={Logo} className="LogoMovies" />
        
        </footer>
    );
}

export default Footer;