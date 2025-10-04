import React from "react";
import "./Header.css";

class Header extends React.Component 
{
    handleEmailClick = (e) => {
        e.preventDefault();
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=masha@dash.ru&su=Обратная связь&body=Здравствуйте,', '_blank');
    }

    render() 
    {
        return (
            <div className="header">
                <div className="wrap">
                    <div className="logo">video</div>
                    <div className="right">
                        <div>+7 911 123 45 67</div>
                        <div>
                            <a 
                                href="mailto:masha@dash.ru" 
                                className="email-link"
                                onClick={this.handleEmailClick}
                            >
                                masha@dash.ru
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;