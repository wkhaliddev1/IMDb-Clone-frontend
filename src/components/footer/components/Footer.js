import React from 'react'
import "../../../css/footer.css"

function Footer() {
    return (
        <div>
            <footer className="bg dark text-white-50">
                <div className="container text-center">
                    <div className="row justify-content-md-center">
                        <div className="col-1 ">
                            <a className="fa fa-facebook-official fa-2x"></a>
                        </div>
                        <div className="col-1">
                            <a className="fa fa-instagram fa-2x"></a>
                        </div>
                        <div className="col-1">
                            <a className="fa fa-twitch fa-2x"></a>
                        </div>
                        <div className="col-1">
                            <a className="fa fa-youtube fa-2x"></a>
                        </div>
                        <div className="col-1">
                            <a className="fa fa-twitter fa-2x"></a>
                        </div>
                    </div>
                    {/* Another Row for other links */}
                    <div id="footer-links" className="row justify-content-md-center">
                        <div className="col-2">
                            <a >Get the IMDb App</a>
                        </div>
                        <div className="col-2">
                            <a >Contact Us</a>
                        </div>
                        <div className="col-2">
                            <a >IMDb Support</a>
                        </div>
                        <div className="col-2">
                            <a >Queries</a>
                        </div>
                    </div>
                </div>

            </footer>
            
        </div>
    )
}

export default Footer
