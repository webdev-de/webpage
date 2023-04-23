import Image_Jan_Behrens from '../../assets/webentwickler_aus_karlsruhe_jan_behrens.png';
import './style.css'

function RoundedImage(props) {

    const { image, id } = props;
    const defaultImage = 'https://dalarun-static.s3.amazonaws.com/media/blog_thumbnails/cb27b330-dc50-4928-b5f4-794cdf56baa0.png';
    const defaultID = 'svg-rounded'

    return (
        <svg className='rounded-image' viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <mask id={id ? id : defaultID}>
                    <path d="M 0, 75 C 0, 18.75 18.75, 0 75, 0 S 150, 18.75 150, 75 131.25, 150 75, 150 0, 131.25 0, 75" fill="white" transform="rotate(0, 100, 100) translate(0 0)"></path>
                </mask>
            </defs>
            <div className='image-frame'></div>
            <image href={image ? image : Image_Jan_Behrens} x="0" y="0" width="100%" height="100%" mask={`url(#${id ? id : defaultID})`}></image>

        </svg>
    )
}
export default RoundedImage;