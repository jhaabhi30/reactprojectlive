import React from 'react';

function Banner(){
    return(
        <div>
             <div className="hero-text-box">
                <h1>Goodbye junk food.<br/>Hello super healthy meals.</h1>
                <a className="btn btn-full js--scroll-to-plans" href="#">I'm hungry</a>
                <a className="btn btn-ghost js--scroll-to-start" href="#">Show me more</a>
            </div>
        </div>
    );
}
export default Banner;