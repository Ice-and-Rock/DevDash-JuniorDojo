import React from "react"

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">⚡️ Nicholas Valente ⚡️</h5>
                <p>As a former business owner in electrical engineering, I'm now aspiring to become a Junior Developer. Let's connect!</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="">About me 🚀</h5>
                <ul className="list-unstyled">
                    <li><a href="https://www.linkedin.com/in/nicholas-valente-electrics/">LinkedIn</a></li>
                    <li><a href="https://github.com/Ice-and-Rock">Github</a></li>
                    <li><a href="mailto:nicholas@valente-engineering.com">Email</a></li>
                    {/* <li><a href="#!">Link 4</a></li> */}
     

                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="">Projects 💼</h5>
                <ul className="list-unstyled">
                    <li><a href="https://javascript-quiz-v2.netlify.app/">Javascript Quiz</a></li>
                    <li><a href="https://nicks-asteroid-shooter.netlify.app/">Asteroid Blaster!</a></li>
                    <li><a href="https://geo-weather-data.netlify.app/">Offshore Weather</a></li>
                    <li><a href="https://rebecca-expedition-kyrgystan.netlify.app/">Expedition Planner</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright:
    <a href="mailto:nicholas@valente-engineering.com"> Valente-Engineering</a>
</div>

</footer>

export default Footer