import "../style/header.css"
const  Header=()=>{
    return(
        <>
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/25539c29532269.55f7d6a0a8c71.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Contact us
                    </li>
                    <li>
                        Cart
                    </li>
                </ul>

            </div>
        </div>
        </>
    )
}
export default Header