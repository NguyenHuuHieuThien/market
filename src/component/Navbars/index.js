import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faHome, faUser, faBagShopping, faBell, faArrowRightToBracket, faCartShopping, faPenToSquare, faSearch, faEdit, faUserPlus } from "@fortawesome/free-solid-svg-icons"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Navbars() {
    const isUser = false;
    const menu = {
        menu1: [
            {
                name: "Trang chủ",
                link: "/",
                icon: faHome

            },
            {
                name: "Sản phẩm",
                link: "/products",
                icon: faBagShopping

            },
            {
                name: "Thông báo",
                link: "/",
                icon: faBell

            },
            {
                name: "Giỏ hàng",
                link: "/carts",
                icon: faCartShopping

            },
        ],
        menu2: [
            {
                name: "Đăng nhập",
                link: "/sign-in",
                icon: faArrowRightToBracket

            },
            {
                name: "Đăng ký",
                link: "/sign-up",
                icon: faUserPlus

            },
        ],
    }

    // {
    //     name: "Quản Lý",
    //     icon: faBars,
    //     more: [
    //         {
    //             name: "Bài viết",
    //             link: "/",
    //             icon: faUser

    //         },

    //         {
    //             name: "Đăng tin",
    //             link: "/",
    //             icon: faEdit

    //         },
    //     ]

    // },


    return (
        <div className="bg-main">
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Link to="/">
                        <img className="w-75 navbar-brand" src="https://static.chotot.com/storage/marketplace/transparent_logo.png"/>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {menu.menu1.map((item, index) => (
                                <Link key={index} to={item.link} style={{textDecoration: 'none', color:'white', marginRight:'10px'}}>
                                    <FontAwesomeIcon icon={item.icon} />
                                    <span className="ms-2">{item.name}</span>
                                </Link>
                            ))}
                        </Nav>
                        <Nav>
                            {/* {menu.menu2.map((item, index) => (
                                <Nav.Link key={index} href={item.link}>
                                    <FontAwesomeIcon icon={item.icon} />
                                    <span className="ms-2">{item.name}</span>
                                </Nav.Link>
                            ))} */}
                            <div className="nav-profile">
                                <img src="https://kenh14cdn.com/203336854389633024/2022/3/3/photo-1-1646304398991341232620.jpg" width="100px" alt="" />
                                <div className="nav-profile-detail">
                                    <div className="nav-profile-detail-item">
                                        <div>
                                            <div>Hiếu thiên</div>
                                            <br />
                                            Signed in as <br />
                                            <span>nguyenthienn3347@gmail.com</span>
                                        </div>
                                    </div>

                                    <div className="nav-profile-detail-item">
                                        <i className="fas fa-user-circle"></i>
                                        Profile
                                    </div>
                                    <div className="nav-profile-detail-item">
                                        <i className="fas fa-cog"></i>
                                        Setting
                                    </div>
                                    <div className="nav-profile-detail-item">
                                        <i className="fas fa-comment-dots"></i>
                                        Status
                                    </div>
                                    <div className="nav-profile-detail-item">
                                        <i className="fas fa-sign-out-alt"></i>
                                        Sign out
                                    </div>


                                </div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )
}