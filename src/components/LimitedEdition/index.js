import React from 'react';
import './index.scss';
import scrollArrow from '../../assets/bundle-page/caret.svg';

const LimitedEdition = () => {
    return (
        <div className="limited-edition">
            <div className="limited-edition__content">
                <h1 className="heading">limited edition hero bundles</h1>
                <p className="limited-edition__text">
                    Be one of the first to call upon the mighty Heroes of the Hermeian Galaxy!
                </p>
                <div className="limited-edition__scroll">
                    <p className="heading heading--small">Scroll Down</p>
                    <img src={scrollArrow} alt="scroll down"/>
                </div>
                <div className="dash"/>
            </div>
        </div>
    );
};

export default LimitedEdition;
