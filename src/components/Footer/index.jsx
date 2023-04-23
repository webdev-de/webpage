import data from '../../data/main'
import './style.css'
const currentYear = new Date().getFullYear()

const baseURL = data.baseUrl ?? 'https://example.com';
const creator = data.creator ?? 'Max Muster'

function Footer() {

    return (
        <footer className="app-footer">
            <div className='app-footer__copyright'>
                &copy; {currentYear} by <a href={baseURL}>{creator}</a>
            </div>
            <div className='app-footer__links'>
                ME ON GITHUB
            </div>
        </footer>
    )
}

export default Footer