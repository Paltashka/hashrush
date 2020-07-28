import React from 'react';
import Header from '../components/Header';
import BundleHeader from '../components/BundleHeader';
import BundleIncluded from '../components/BundleIncluded';
import OtherBundles from '../components/OtherBundles';
import Footer from '../components/Footer';
import otherBundleBG from '../assets/bundle-page/3-heroes-bw.png';
import melighar from '../assets/bundle-page/melighar-grandmaster.jpg';
import melighar1 from '../assets/bundle-page/offensive-staff-min.png';
import melighar2 from '../assets/bundle-page/crystal-helm-min.png';
import melighar3 from '../assets/bundle-page/lingering-hope-min.png';
import carax from '../assets/bundle-page/carax-grandmaster.jpg';
import carax1 from '../assets/bundle-page/defensive-chainmail-min.png';
import carax2 from '../assets/bundle-page/support-chalice-min.png';
import carax3 from '../assets/bundle-page/vanguard-lance-min.png';
import farion from '../assets/bundle-page/fario-grandmaster.jpg';
import farion1 from '../assets/bundle-page/defensive-shield-min.png';
import farion2 from '../assets/bundle-page/offensive-hammer-min.png';
import farion3 from '../assets/bundle-page/support-stew-min.png';
import brownUrsara from '../assets/bundle-page/brown-ursara-min.png';
import usernameMin from '../assets/bundle-page/username-min.png';
import caraxBg from '../assets/bundle-page/carax-bg.png';

const CaraxPage = () => {

    return (
        <>
            <Header isLogin={true}/>
            <BundleHeader
                heroName="Carax"
                heroType="the crystal shield"
                heroText="Shield your allies with Farion and his unique Hero Items, along with a limited edition skin for your Ernack workers."
                heroImg={carax}
                heroDetailText="Using his trusty Hammer and Shield, Farion will thin the enemy ranks and will hold them back without breaking a sweat."
                items={[carax1, carax2, carax3, brownUrsara, usernameMin]}
                bgImg={caraxBg}
            />
            <BundleIncluded items={[
                {
                    name: 'Crystal shield',
                    description: 'Issued to all Trinell Citadel Guard members, believed to be near indestructable. ',
                    img: carax1,
                    specialEffect: 'Increases the Heros Slashing Damage Resistance by 10%',
                    type: 'defense',
                    subheader: '',
                },
                {
                    name: 'Hammer of Embers',
                    description: 'Burning with a bright flame, this hammer will scourch anyone who opposes it. ',
                    img: carax2,
                    specialEffect: '15% of Blunt Damage Burns the enemy for 3 seconds (10 CD) ',
                    type: 'offense',
                    subheader: '',
                },
                {
                    name: 'Grandmaster Spicy Ernack Stew',
                    description: 'Magically infused stew that Ernacks consume before heading into battle.',
                    img: carax3,
                    specialEffect: 'Increase the Damage of melee units by 15% and their HP by 50',
                    type: 'support',
                    subheader: '',
                },
                {
                    name: 'The legendary Brown Ursara Ernack worker skin',
                    description: 'Made from the furs of a vanquished feral Ursara, these cloaks will make your Workers shine from the Crystals still visible on the Ursaras antlers.',
                    img: brownUrsara,
                    type: '',
                    subheader: 'Make your Workers stand out in the limited edition Beastly Worker skin, first of its kind! ',
                },
                {
                    name: 'Mark your name in Hash Rush history!',
                    description: 'Have your username on the Hero Systems Founders banner that will be visable while the game loads. ',
                    img: usernameMin,
                    type: '',
                    subheader: '',
                },
            ]} bgImg={caraxBg}
            />
            <OtherBundles bgImg={otherBundleBG} otherBundles={[
                {
                    name: 'Melighar',
                    img: melighar,
                    items: [melighar1, melighar2, melighar3],
                },
                {
                    name: 'Farion',
                    img: farion,
                    items: [farion1, farion2, farion3],
                },
            ]}/>
            <Footer/>
        </>
    );
};

export default CaraxPage;
