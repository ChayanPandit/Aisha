import React from 'react'
import './footer.css'

const Footer = () => {
    return (
       
            <div className="footer-dark">
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 item">
                                <h3>Skills</h3>
                                <ul>
                                    <li><a href="#">Web Development</a></li>
                                    <li><a href="#">HTML</a></li>
                                    <li><a href="#">CSS</a></li>
                                    <li><a href="#">JavaScript</a></li>
                                    <li><a href="#">React</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3>Author</h3>
                                <ul>
                                    <li><a href="#">Chayan Pandit</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 item text">
                                <h3>ConnectAll: </h3>
                                <p>A community for like-minded people to cope with anxiety and stress-related problems</p>
                            </div>
                            <div className="col item social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="#"><i className="fa fa-instagram" ></i></a>
                            </div>
                        </div>
                        <p className="copyright">ConnectAll © 2022</p>
                    </div>
                </footer>
            </div>
            
        
     
  
  )
}

export default Footer