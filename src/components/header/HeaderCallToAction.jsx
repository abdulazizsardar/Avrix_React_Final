import React from 'react';

const HeaderCallToAction = () => {
    return (
        <>
            <div className="attr-right">
                <div className="attr-nav flex">
                    <ul>
                        <li className="contact">
                            <div className="call">
                                <div className="icon">
                                    <i className="fa-solid fa-comments-dollar"></i>
                                </div>
                                <div className="info">
                                    <p>Have any Questions?</p>
                                    <h5><a href="mailto:info@crysta.com">info@atozen.com</a></h5>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default HeaderCallToAction;