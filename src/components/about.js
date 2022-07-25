import { useNavigate } from "react-router-dom";

export default function About() {

    const openPop = o => {
        document.getElementById("loginForm").style.display = "block";
    }

    const closePop = c => {
        document.getElementById("loginForm").style.display = "none";
    }

    return (
        <div id="top">
            <div className="topnav">
                <a href="/">
                    <div className="logo-image">
                        <img src="pictures/PSP_Shield_4c.png"></img>
                    </div>
                </a>
                <a className="active" href="/about">About</a>
                <a href="/recruitment">Recruitment</a>
                <a href="/gallery">Gallery</a>
                <a onClick={openPop}>Siblings</a>

                <div className="form-popup" id="loginForm">
                    <form action="/siblings" className="form-container">
                        <h1>Sibling Login</h1>
                        <label name="email">Email</label>
                        <input type="text" placeholder="Enter Email" name="email" required></input>
                        <label name="password">Password</label>
                        <input type="password" placeholder="Enter Password" name="password" required></input>
                        <button type="submit" className="btn">Login</button>
                        <button type="button" className="btn cancel" onClick={closePop}>Close</button>
                    </form>
                </div>
                
            </div>
            <div>
                <section className="special-container">
                    <h1 className="has-text-centered">Our Chapter</h1>
                </section>

                <section className="special-container has-text-centered">
                    <h4>Mission</h4>
                </section>

                <section className="container">
                    <p className="has-text-centered">Phi Sigma Pi National Honor Fraternity is an inclusive organization dedicated to: promoting lifelong learning, inspiring Members to lead, and cultivating lasting fraternal bonds, while always conducting our lives with honor. We commit ourselves to a life of social service with the goal of improving humanity through our principles: Scholarship, Leadership, and Fellowship.</p>
                </section>

                <div className="mission-row">
                    <div className="mission-col">
                        <img src="pictures/soccer.jpg" alt="4 Girls With Sign"></img>
                    </div>
                    <div className="mission-col">
                        <img src="pictures/shirts.jpg" alt="Phi Sig Shirts"></img>
                    </div>
                    <div className="mission-col">
                        <img src="pictures/arboretum.jpg" alt="Arboretum Image"></img>
                    </div>
                </div>
                
                <section className="special-container has-text-centered">
                    <h4>Tripod</h4>
                </section>

                <section className="special-qualification-container">
                    <p className="has-text-centered">Scholarship</p>
                </section>

                <section className="container">
                    <p className="has-text-centered">As an honor organization, we expect our members to maintain good academic standing. Academic standing, however, is just a small part of the scholarship ideal. Scholarship in our organization expands outside the classroom and is a part of a larger “always learning” philosophy. Our chapters coordinate scholarship events such as painting nights, TED Talks and mental health awareness panels.</p>
                </section>

                <section className="no-top-special-qualification-container">
                    <p className="has-text-centered">Leadership</p>
                </section>

                <section className="container">
                    <p className="has-text-centered">Phi Sigma Pi provides the opportunity for students to gain core leadership skills to strengthen oneself; but then, just as importantly, how they apply that skill to pay it forward. Our nationally award-winning Leadership in Action is a personal/professional leadership training and certification program that provides members with the skills to inspire a positive change. This certification program goes beyond the traditional organization leadership roles by exploring communication skills for emerging leaders and team management. Leadership in Phi Sigma Pi also extends through service in our communities. Our chapters support our National Philanthropy and also plan philanthropic events with their local organizations that have a meaningful impact to the local community.</p>
                </section>

                <section className="no-top-special-qualification-container">
                    <p className="has-text-centered">Fellowship</p>
                </section>

                <section className="container">
                    <p className="has-text-centered">Phi Sigma Pi develops a culture of fellowship within the organization. In addition to a culture that develops friendships, it also fosters a sense of teamwork and camaraderie that allows for the local chapter to plan successful events and activities. In Phi Sigma Pi, you’re a member for life. Fellowship provides the passion and stability to fully remain involved with Phi Sigma Pi.</p>
                </section>

                <section className="email-container">
                    <h4 className="has-text-centered">For more information, visit:</h4>
                    <h4 className="has-text-centered"><a href="https://phisigmapi.org/" target="_blank">https://phisigmapi.org/</a></h4>
                </section>

                <section className="special-container">
                    <h1 className="has-text-centered">Leadership</h1>
                </section>

                <section className="footer-container">
                    <a href="https://www.instagram.com/phisigmapiunc/" target="_blank" className="fa fa-instagram"></a>
                    <a></a>
                    <h1 className="has-text-centered">PHI SIGMA PI - ALPHA KAPPA CHAPTER</h1>
                    <h1 className="has-text-centered">2022</h1>
                    <a></a>
                    <a href="#top" className="fa fa-arrow-up"></a>
                </section>
            </div>
        </div>
    )

}

/*export default function About() {

    const navigate = useNavigate();

    return (
        <div>
            <h1>This is the about page</h1>
            <button onClick={() => navigate('/')}>Go Home</button>
        </div>
    )
} */