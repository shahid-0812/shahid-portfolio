


// const NavItem = ({ text, link }) => {
//     const [activeTab, setactiveTab] = useState(null);
//     // const navigate = useNavigate();

//     const handleTabClick = (tab) => {
//         if (activeTab === tab) {
//             setactiveTab(null);
//         }
//         else {
//             setactiveTab(tab);
//         }
//     }
//     return (
//         <Tilt
//             className="nav-item"
//             tiltMaxAngleX={10}
//             tiltMaxAngleY={40}
//             perspective={800}
//             transitionSpeed={1500}
//             scale={1.1}
//             gyroscope={true}
//         // onClick={() => navigate(link)}
//         >
//             <h1 className="link">
//                 <button onClick={handleTabClick({ text })} className="nav-button">{text}</button>
//                 {/* <NavLink to={link}>{text}</NavLink> */}
//             </h1>
//         </Tilt>
//     );
// };


// function Navbar() {

//     const navItems = [
//         { text: "Skills", link: "/skills" },
//         { text: "Projects", link: "/projects" },
//         { text: "About", link: "/about" },
//         { text: "Contact", link: "/contact" }
//     ]

//     return (
//         <>
//             <div className="nav-container">
//                 <nav className="right-nav flex flex-col items-end justify-center">
//                     {
//                         navItems.map((item, index) => (
//                             <NavItem key={index} text={item.text} link={item.link} />
//                         ))
//                     }
//                 </nav>
//             </div>
//         </>
//     )
// }

// export default Navbar


import { Link } from "react-router-dom";
import "../styles/navbar.css"
import Tilt from "react-parallax-tilt"
const NavItem = ({ text, setActiveTab }) => {
    const handleTabClick = () => {
        setActiveTab(text.toLowerCase()); // Convert to lowercase to match ContentModal conditions
    };

    return (
        <Tilt
            className="nav-item"
            tiltMaxAngleX={10}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true}
        >
            <h1 className="link">
                <Link to={`/${text.toLowerCase()}`} className="nav-button">{text}</Link>
            </h1>
        </Tilt>
    );
};


function Navbar({ setActiveTab }) {
    const navItems = [
        { text: "Skills", link: "/skills" },
        { text: "Projects", link: "/projects" },
        { text: "About", link: "/about" },
        { text: "Contact", link: "/contact" }
    ];

    return (
        <>
            <div className="nav-container">
                <nav className="right-nav flex flex-col items-end justify-center">
                    {
                        navItems.map((item, index) => (
                            <NavItem
                                key={index}
                                text={item.text}
                                link={item.link}
                                setActiveTab={setActiveTab} // Pass setActiveTab
                            />
                        ))
                    }
                </nav>
            </div>
        </>
    );
}

export default Navbar;
