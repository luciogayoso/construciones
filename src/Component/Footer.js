import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';

const Footer = () => {

    return (
        <footer class="page-footer font-small blue" style={{backgroundColor:"black",color:"white"}}>
            <h3>Contactenos</h3>
            <Icon.Telephone /> +5491127721449<br />
            <Icon.Envelope /> avera4942@gmail.com 
            <div class="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="#!"> VSLsoftdeveloper</a>
            </div>

        </footer>
    )

}

export default Footer;