
import profile from "../images/profile.jpg";
import sponsor from "../images/sponsor1.jpg";
import "./App.css"

function RightSide(mode) {
    return (
        <div className={`rightSideMain ${mode}`}>
            <h4>Sponsors</h4>
            <div className="sponsor">
                <img src={sponsor} alt="spons" />
                GoDaddy.com
            </div>
            <div className="sponsor">
                <img src={sponsor} alt="spons" />
                GoDaddy.com
            </div>
            <div className="request">
                <div className="requestInfo">
                    <div>Friend Requests</div>
                    <div className="see">See all</div>
                </div>
                <div className="name">
                    <img src={profile} alt="person" />
                    <div className="requestInfo2">
                        <div>Hassan</div>
                        <div className="see">See all</div>
                    </div>
                    <div className="name">
                        <div className="requestInfo2">
                            <div className="del">Confirm</div>
                            <div className="confirm">Delete</div>
                        </div>
                    </div>
                </div>
                <div className="name">Contacts</div>
                <div className="name2">
                    <img src={profile} alt="pro" />
                    Hassan
                </div>
                <div className="name2">
                    <img src={profile} alt="pro" />
                    Babar
                </div>
                <div className="name2">
                    <img src={profile} alt="pro" />
                    Rizwan
                </div>
                <div className="name2">
                    <img src={profile} alt="pro" />
                    Shaheen
                </div>
            </div>
        </div>
    );
}

export default RightSide;