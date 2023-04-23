import RoundedImage from "../RoundedImage"
import {Headline} from "../Typo";
import './style.scss'

export default function Hero() {
    return (
        <section className="hero-section">

            <div className="hero-section__left">
                <Headline title="Jan Behrens" type={'h2'}/>
            </div>



            <div className="hero-section__right">
                <RoundedImage id="image-1" />
            </div>

        </section>
    )
}