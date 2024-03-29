import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/header'
import Content from '../components/content1'
import SideContent from '../components/sidecontent'
import Address from '../components/address'
import Footer from '../components/footer'

function Home() {
    return (
        <>
            <Header/>
            <Content/>
            <SideContent/>
            <Address />
            <Footer />
        </>
    )
}

export default Home