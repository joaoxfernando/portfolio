import Header from '../components/Header/Header'
import Portfolio from '../components/Portfolio/Portfolio'

export default function Home() {
    return (
        <div><Header 
            title="Home page"
            link="/"
            />          
            <Portfolio/>
        </div>
    )
}