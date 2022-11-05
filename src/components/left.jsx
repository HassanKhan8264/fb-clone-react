import homeIcon from "../images/homepage.png";
import videoIcon from "../images/videos.png";
import menuIcon from "../images/menu.png";
import profile from "../images/profile.jpg";
import './App.css'


// import {
    
// } from "react-router-dom";


const Left = (mode) => {
    return (

        <div className={`LeftMain ${mode}`}>
            <div className="divMain">
                <div to="/">
                    <div
                        className="divIcon"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Home"
                    >
                        <img src={homeIcon} alt="home page" />
                    </div>
                </div>
                <div className="div" to="/">
                    <div
                        className="divText"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Home"
                    >
                        Home
                    </div>
                </div>
            </div>

            <div className="divMain">
                <div to="/pages/profilepage">
                    <div
                        className="divIcon profileIcon"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Profile"
                    >
                        <img src={profile} alt="profile" />
                    </div>
                </div>
                <div className="div" to="/pages/profilepage">
                    <div
                        className="divText"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Profile"
                    >
                        Hassan Khan
                    </div>
                </div>
            </div>

            <div className="divMain">
                <div to="/pages/vidoespage">
                    <div
                        className="divIcon"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Watch"
                    >
                        <img src={videoIcon} alt="videos" />
                    </div>
                </div>
                <div className="div" to="/pages/vidoespage">
                    <div
                        className="divText"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Watch"
                    >
                        Watch
                    </div>
                </div>
            </div>

            <div className="divMain">
                <div to="/pages/menupage">
                    <div
                        className="divIcon"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Menu"
                    >
                        <img src={menuIcon} alt="videos" />
                    </div>
                </div>
                <div className="div" to="/pages/menupage">
                    <div
                        className="divText"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Menu"
                    >
                        Menu
                    </div>
                </div>
            </div>
            {/* <div className="groups">
                <div
                    className="divText"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Menu"
                >
                    <h3>Groups</h3>
                </div>

                <div className="divMain">
                    <div
                        className="divIcon profileIcon"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Menu"
                    >
                        <img src={profile} alt="videos" />
                    </div>
                    <div
                        className="divText"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Menu"
                    >
                        Menu
                    </div>
                </div>
                <div className="divMain">
                    <div
                        className="divIcon profileIcon"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Menu"
                    >
                        <img src={profile} alt="videos" />
                    </div>
                    <div
                        className="divText"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Menu"
                    >
                        Menu
                    </div>
                </div>
                <div className="divMain">
                    <div
                        className="divIcon profileIcon"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Menu"
                    >
                        <img src={profile} alt="videos" />
                    </div>
                    <div
                        className="divText"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Menu"
                    >
                        Menu
                    </div>
                </div>
                <div className="divMain">
                    <div
                        className="divIcon profileIcon"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Menu"
                    >
                        <img src={profile} alt="videos" />
                    </div>
                    <div
                        className="divText"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Menu"
                    >
                        Menu
                    </div>
                </div>
                <div className="divMain">
                    <div
                        className="divIcon profileIcon"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Menu"
                    >
                        <img src={profile} alt="videos" />
                    </div>
                    <div
                        className="divText"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Menu"
                    >
                        Menu
                    </div>
                </div>
            </div> */}

            {/* <div to="/components/videos">Videos Page</div> */}

            {/* <div to="/components/profile">Profile Page</div> */}
        </div>
    )
}

export default Left