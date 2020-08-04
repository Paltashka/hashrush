import {ADD_PURCHASED_BUNDLE, FAILED, STRIPE_PAYMENT, SUCCESS} from '../types';
import melighar1 from '../assets/bundle-page/offensive-staff-min.png';
import melighar2 from '../assets/bundle-page/crystal-helm-min.png';
import melighar3 from '../assets/bundle-page/lingering-hope-min.png';
import brownUrsara from '../assets/bundle-page/brown-ursara-min.png';
import username from '../assets/bundle-page/username-min.png';
import carax from '../assets/bundle-page/carax-grandmaster.jpg';
import carax1 from '../assets/bundle-page/defensive-chainmail-min.png';
import carax2 from '../assets/bundle-page/support-chalice-min.png';
import carax3 from '../assets/bundle-page/vanguard-lance-min.png';
import farion from '../assets/bundle-page/fario-grandmaster.jpg';
import farion1 from '../assets/bundle-page/defensive-shield-min.png';
import farion2 from '../assets/bundle-page/offensive-hammer-min.png';
import farion3 from '../assets/bundle-page/support-stew-min.png';
import melighar from '../assets/bundle-page/melighar-grandmaster.jpg';
import farionBg from '../assets/bundle-page/farion-bg.png';
import meligharArticle from '../assets/bundle-page/melighar-article.png';
import farionArticle from '../assets/bundle-page/farion-article.png';
import caraxArticle from '../assets/bundle-page/carax-article.png';
import melighar1Full from '../assets/bundle-page/melighar1_full.jpg';
import melighar2Full from '../assets/bundle-page/melighar2_full.jpg';
import melighar3Full from '../assets/bundle-page/melighar3_full.jpg';
import carax1Full from '../assets/bundle-page/carax1_full.jpg';
import carax2Full from '../assets/bundle-page/carax2_full.jpg';
import carax3Full from '../assets/bundle-page/carax3_full.jpg';
import farion1Full from '../assets/bundle-page/farion1_full.jpg';
import farion2Full from '../assets/bundle-page/farion2_full.jpg';
import farion3Full from '../assets/bundle-page/farion3_full.jpg';
import brownUrsaraFull from '../assets/bundle-page/brown-ursara_full.jpg';
import usernameFull from '../assets/bundle-page/username_full.jpg';

const initialState = {
    stripeStatus: null,
    bundles: [
        {
            id: 1,
            name: 'Melighar',
            image: melighar,
            type: 'the grandmaster melighar',
            text: 'Devestate your enemies with fire and thunder with Melighar and his Hero Items, along with a limited edition skin for your Ernack workers',
            detailText: 'Master of the Arcane arts, Melighar casts destructive spells and aids his magic using counterparts.',
            bgImg: farionBg,
            articleImg: meligharArticle,
            price: '$20.00',
            items: [
                melighar1,
                melighar2,
                melighar3,
                brownUrsara,
                username,
            ],
            otherBundles: [
                {
                    id: 2,
                    name: 'Carax',
                    img: carax,
                    items: [carax1, carax2, carax3],
                },
                {
                    id: 3,
                    name: 'Farion',
                    img: farion,
                    items: [farion1, farion2, farion3],
                },
            ],
            bundleIncluded: [
                {
                    id: 1,
                    name: 'Thaliel Staff',
                    description: 'Once weilded by the Archemage Thaliel, this staff is passed down as a relic to each Trinell Archmage.',
                    img: melighar1Full,
                    specialEffect: 'Special effect: Increases the Heros Damage Stat by 10 %',
                    type: 'defense',
                    subheader: '',
                },
                {
                    id: 2,
                    name: 'Crystal Helm',
                    description: 'Durable as steel but light as a feather, this helmet will protect anyone who wears it.',
                    img: melighar2Full,
                    specialEffect: 'Special effect: Increases the Heros Blunt Damage Resistance by 10%',
                    type: 'offense',
                    subheader: '',
                },
                {
                    id: 3,
                    name: 'Lingering Hope',
                    description: 'Magical locket that was created by one of the great sages, it is said to have prolonged his life to an unnaturaly long time.',
                    img: melighar3Full,
                    specialEffect: 'Special effect: When Hero HP becomes less than 10%, the Hero heals itself for 100 HP (60 CD)',
                    type: 'support',
                    subheader: '',
                },
                {
                    id: 4,
                    name: 'The legendary Brown Ursara Ernack worker skin',
                    description: 'Made from the furs of a vanquished feral Ursara, these cloaks will make your Workers shine from the Crystals still visible on the Ursaras antlers.',
                    img: brownUrsaraFull,
                    type: '',
                    subheader: 'Make your Workers stand out in the limited edition Beastly Worker skin, first of its kind! ',
                },
                {
                    id: 5,
                    name: 'Mark your name in Hash Rush history!',
                    description: 'Have your username on the Hero Systems Founders banner that will be visable while the game loads. ',
                    img: usernameFull,
                    type: '',
                    subheader: '',
                },
            ],
        },
        {
            id: 2,
            name: 'Carax',
            image: carax,
            type: 'the grandmaster carax',
            text: 'Carve your way through the field of battle with Carax and his arsenal of Hero Items, along with a limited edition skin for you Ernack workers',
            detailText: 'Wielder of the Braces of Cryptar, Carax can conjur a spiritual manifestation of him to wreak Havok on the battlefiend.',
            bgImg: farionBg,
            articleImg: caraxArticle,
            price: '$20.00',
            items: [
                carax1,
                carax2,
                carax3,
                brownUrsara,
                username
            ],
            otherBundles: [
                {
                    id: 1,
                    name: 'Melighar',
                    img: melighar,
                    items: [melighar1, melighar2, melighar3],
                },
                {
                    id: 3,
                    name: 'Farion',
                    img: farion,
                    items: [farion1, farion2, farion3],
                },
            ],
            bundleIncluded: [
                {
                    id: 1,
                    name: 'Runic Chainmail',
                    description: 'An sturdy piece or armour engraved with Ernack runes.',
                    img: carax1Full,
                    specialEffect: 'Special effect: Increases the Heros Piercing Damage Resistance by 10%',
                    type: 'defense',
                    subheader: '',
                },
                {
                    id: 2,
                    name: 'Chalice of Filling',
                    description: 'If water is consumed from this challice, it turns into a powerful elixir that increases the consumers fortitude.',
                    img: carax2Full,
                    specialEffect: 'Special effect: Increases the Heros Slashing damage by 10% if the Heros HP falls below 35 %',
                    type: 'offense',
                    subheader: '',
                },
                {
                    id: 3,
                    name: 'Vanguard Lance',
                    description: 'An engraved lance, used by Trinell lancers during the Lone Tower Rebellion.',
                    img: carax3Full,
                    specialEffect: 'Special effect: Increases the Piercing damage by 10% to all Raken Lancer units around the Hero.',
                    type: 'support',
                    subheader: '',
                },
                {
                    id: 4,
                    name: 'The legendary Brown Ursara Ernack worker skin',
                    description: 'Made from the furs of a vanquished feral Ursara, these cloaks will make your Workers shine from the Crystals still visible on the Ursaras antlers.',
                    img: brownUrsaraFull,
                    type: '',
                    subheader: 'Make your Workers stand out in the limited edition Beastly Worker skin, first of its kind! ',
                },
                {
                    id: 5,
                    name: 'Mark your name in Hash Rush history!',
                    description: 'Have your username on the Hero Systems Founders banner that will be visable while the game loads. ',
                    img: usernameFull,
                    type: '',
                    subheader: '',
                },
            ],
        },
        {
            id: 3,
            name: 'Farion',
            image: farion,
            type: 'the grandmaster farion',
            text: 'Shield your allies with Farion and his unique Hero Items, along with a limited edition skin for your Ernack workers.',
            detailText: 'Using his trusty Hammer and Shield, Farion will thin the enemy ranks and will hold them back without breaking a sweat.',
            bgImg: farionBg,
            articleImg: farionArticle,
            price: '$20.00',
            items: [
                farion1,
                farion2,
                farion3,
                brownUrsara,
                username,
            ],
            otherBundles: [
                {
                    id: 2,
                    name: 'Carax',
                    img: carax,
                    items: [carax1, carax2, carax3],
                },
                {
                    id: 1,
                    name: 'Melighar',
                    img: melighar,
                    items: [melighar1, melighar2, melighar3],
                },
            ],
            bundleIncluded: [
                {
                    id: 1,
                    name: 'Crystal shield',
                    description: 'Issued to all Trinell Citadel Guard members, believed to be near indestructable. ',
                    img: farion1Full,
                    specialEffect: 'Increases the Heros Slashing Damage Resistance by 10%',
                    type: 'defense',
                    subheader: '',
                },
                {
                    id: 2,
                    name: 'Hammer of Embers',
                    description: 'Burning with a bright flame, this hammer will scourch anyone who opposes it. ',
                    img: farion2Full,
                    specialEffect: '15% of Blunt Damage Burns the enemy for 3 seconds (10 CD) ',
                    type: 'offense',
                    subheader: '',
                },
                {
                    id: 3,
                    name: 'Grandmaster Spicy Ernack Stew',
                    description: 'Magically infused stew that Ernacks consume before heading into battle.',
                    img: farion3Full,
                    specialEffect: 'Increase the Damage of melee units by 15% and their HP by 50',
                    type: 'support',
                    subheader: '',
                },
                {
                    id: 4,
                    name: 'The legendary Brown Ursara Ernack worker skin',
                    description: 'Made from the furs of a vanquished feral Ursara, these cloaks will make your Workers shine from the Crystals still visible on the Ursaras antlers.',
                    img: brownUrsaraFull,
                    type: '',
                    subheader: 'Make your Workers stand out in the limited edition Beastly Worker skin, first of its kind! ',
                },
                {
                    id: 5,
                    name: 'Mark your name in Hash Rush history!',
                    description: 'Have your username on the Hero Systems Founders banner that will be visable while the game loads. ',
                    img: usernameFull,
                    type: '',
                    subheader: '',
                },
            ],
        },

    ],
    purchasedBundle: {},
};

export default function reducer(state = initialState, {type, payload}) {
    switch (type) {
        case STRIPE_PAYMENT + SUCCESS:
            return {
                ...state,
                stripeStatus: payload,
            }
        case STRIPE_PAYMENT + FAILED:
            return {
                ...state,
                stripeStatus: payload,
            }
        case ADD_PURCHASED_BUNDLE:
            return {
                ...state,
                purchasedBundle: payload,
            }
        default:
            return state;
    }
}

export const getStripePaymentStatus = (state) => state.purchase.stripeStatus;
export const getBundleById = (state, id) => state.purchase.bundles.filter(item => item.id === id)[0]
export const getPurchasedBundle = (state) => state.purchase.purchasedBundle;
