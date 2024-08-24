import NavBar from "../widgets/nav"
import Footer from "../widgets/footer"
const Layout = ({children}) => {
    return (
        <div>
            <NavBar />
            <div className="bg-gray-200">
                {children}

            </div>
            <Footer />

        </div>
    )
}

export default Layout