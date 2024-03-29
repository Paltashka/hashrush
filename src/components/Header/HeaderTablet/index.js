import React from 'react';
import './index.scss';
import {Link, useHistory} from 'react-router-dom';

import fb from '../../../assets/footer_social-media/fb.svg';
import tw from '../../../assets/footer_social-media/tw.svg';
import discord from '../../../assets/footer_social-media/discord.svg';
import tlgrm from '../../../assets/footer_social-media/tlgrm.svg';
import rc from '../../../assets/about/rc.svg';
import hc from '../../../assets/about/hc.svg';
import lightning from '../../../assets/responsive/lightning.svg';

const HeaderTablet = ({isLogin}) => {
    const history = useHistory();

    return (
        <div className="header-tablet">
            <div>
                {isLogin && (
                    <>
                        <div className="header-tablet__border"></div>
                        <div className="header-tablet__currency">
                            <span
                                className={'header__choice--active'}
                            >
                                <img className="header__choice-icon" src={rc} alt="rc"/>23
              </span>
                            <span
                                className={'header__choice--active'}
                            >
                                <img className="header__choice-icon" src={hc} alt="hc"/>142
              </span>
                        </div>
                        <div className="header-tablet__border"></div>
                    </>
                )}
                <ul className="footer__nav">
                    <li className="footer__nav-item" onClick={() => history.push('/')}>main</li>
                    <li className="footer__nav-item" onClick={() => history.push('/about')}>about game</li>
                    <li className="navigation__item navigation__item__pre-sale" onClick={() => history.push('/bundles')}>
                        <Link to="/bundles">hero pre-sale</Link>
                        <img src={lightning} alt="hero pre-sale"/>
                    </li>
                    {/* <li className="footer__nav-item">store</li>
          <li className="footer__nav-item">leaderboard</li> */}
                </ul>
                <ul className="footer__nav">
                    <li className="footer__nav-item footer__nav-item--thin"><a
                        href="https://medium.com/@Hash_Rush/has-recommended" target="_blank">Read our Blog</a></li>
                    <li className="footer__nav-item footer__nav-item--thin"><a href="mailto:community@hashrush.com"
                                                                               target="_blank">Contact Support</a></li>
                    <li className="footer__nav-item footer__nav-item--thin"
                        onClick={() => history.push('/privacypolicy')}>Privacy policy
                    </li>
                </ul>
            </div>

            <div className="footer__right">
                <span className="footer__headline">join our community</span>
                <div className="footer__medias">
                    <img className="footer__icon" src={fb} alt="face"/>
                    <img className="footer__icon" src={tw} alt="twitt"/>
                    <img className="footer__icon" src={discord} alt="discord"/>
                    <img className="footer__icon" src={tlgrm} alt="telegram"/>
                </div>
            </div>
        </div>
    );
};

export default HeaderTablet;