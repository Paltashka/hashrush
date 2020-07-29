import React from 'react';
import Header from '../components/Header';
import BundleHeader from '../components/BundleHeader';
import BundleIncluded from '../components/BundleIncluded';
import OtherBundles from '../components/OtherBundles';
import Footer from '../components/Footer';
import otherBundleBG from '../assets/bundle-page/3-heroes-bw.png';
import farion from '../assets/bundle-page/fario-grandmaster.jpg';
import farion1 from '../assets/bundle-page/defensive-shield-min.png';
import farion2 from '../assets/bundle-page/offensive-hammer-min.png';
import farion3 from '../assets/bundle-page/support-stew-min.png';
import farionBg from '../assets/bundle-page/farion-bg.png';
import melighar from '../assets/bundle-page/melighar-grandmaster.jpg';
import melighar1 from '../assets/bundle-page/offensive-staff-min.png';
import melighar2 from '../assets/bundle-page/crystal-helm-min.png';
import melighar3 from '../assets/bundle-page/lingering-hope-min.png';
import carax from '../assets/bundle-page/carax-grandmaster.jpg';
import carax1 from '../assets/bundle-page/defensive-chainmail-min.png';
import carax2 from '../assets/bundle-page/support-chalice-min.png';
import carax3 from '../assets/bundle-page/vanguard-lance-min.png';
import brownUrsara from '../assets/bundle-page/brown-ursara-min.png';
import usernameMin from '../assets/bundle-page/username-min.png';

const MeligharPage = () => {
    return (
        <>
            <Header isLogin={true}/>
            <BundleHeader
                heroName="Melighar"
                heroType="the grandmaster melighar"
                heroText="Devestate your enemies with fire and thunder with Melighar and his Hero Items, along with a limited edition skin for your Ernack workers"
                heroImg={melighar}
                heroDetailText="Master of the Arcane arts, Melighar casts destructive spells and aids his magic using counterparts."
                items={[melighar1, melighar2, melighar3, brownUrsara, usernameMin]}
                bgImg={farionBg}
                price="$20.00"
            />
            <BundleIncluded items={[
                {
                    name: 'Thaliel Staff',
                    description: 'Once weilded by the Archemage Thaliel, this staff is passed down as a relic to each Trinell Archmage.',
                    img: melighar1,
                    specialEffect: 'Special effect: Increases the Heros Damage Stat by 10 %',
                    type: 'defense',
                    subheader: '',
                },
                {
                    name: 'Crystal Helm',
                    description: 'Durable as steel but light as a feather, this helmet will protect anyone who wears it.',
                    img: melighar2,
                    specialEffect: 'Special effect: Increases the Heros Blunt Damage Resistance by 10%',
                    type: 'offense',
                    subheader: '',
                },
                {
                    name: 'Lingering Hope',
                    description: 'Magical locket that was created by one of the great sages, it is said to have prolonged his life to an unnaturaly long time.',
                    img: melighar3,
                    specialEffect: 'Special effect: When Hero HP becomes less than 10%, the Hero heals itself for 100 HP (60 CD)',
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
            ]} bgImg={farionBg}
            />
            <OtherBundles bgImg={otherBundleBG} otherBundles={[
                {
                    name: 'Carax',
                    img: carax,
                    items: [carax1, carax2, carax3],
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

export default MeligharPage;
