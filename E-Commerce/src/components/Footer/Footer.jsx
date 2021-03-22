import React from 'react'

import './styles.css';

const Footer = () => {
    return (
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col">
                        <h4>TakeOff</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Affiliate Program</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Follow Us</h4>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
