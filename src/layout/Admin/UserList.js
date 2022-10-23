import {
    MDBInputGroup,
    MDBBtn,
    MDBBadge,
    MDBIcon,
    MDBTable, MDBTableHead, MDBTableBody
} from 'mdb-react-ui-kit';
import { Row, Col, Button, Form  } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faCheckDouble, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';



import ModalReact from "../../component/Modal";
import SideBars from "../../component/SideNav"

const actions = [
    { name: 'selectAll', icon: faCheckDouble, bg: 'success' },
    { name: 'create', icon: faPlus, bg: 'primary' },
    { name: 'delete', icon: faTrash, bg: 'danger' },

]
const Users = [
    {
        id: 1,
        name: 'thiennhh',
        avt: 'https://znews-photo.zingcdn.me/w660/Uploaded/kbd_pilk/2021_06_27/hua_khai5.jpg',
        email: 'nguyenthienn3347@gmail.com',
        phone: '0123456789',
        address: 'Hanoi',
        role: 'admin',
        badge: 'success'
    },
    {
        id: 2,
        name: 'anhdd',
        avt: 'https://znews-photo.zingcdn.me/w660/Uploaded/kbd_pilk/2021_06_27/hua_khai5.jpg',
        email: 'ducanh81@gmail.com',
        phone: '0123456789',
        address: 'Gia Lai',
        role: 'user',
        badge: 'warning'
    },
    {
        id: 3,
        name: 'namnc',
        avt: 'https://znews-photo.zingcdn.me/w660/Uploaded/kbd_pilk/2021_06_27/hua_khai5.jpg',
        email: 'congnam43@gmail.com',
        phone: '0123456789',
        address: 'Đà Nẵng',
        role: 'user',
        badge: 'warning'
    },
    {
        id: 4,
        name: 'chiennd',
        avt: 'https://znews-photo.zingcdn.me/w660/Uploaded/kbd_pilk/2021_06_27/hua_khai5.jpg',
        email: 'dangchien43@gmail.com',
        phone: '0123456789',
        address: 'Đà Nẵng',
        role: 'user',
        badge: 'warning'
    },

]
export default function UserList() {
    const [show, setShow] = useState(false);
    const [users, setUsers] = useState(Users);
    const handleClose = () => setShow(false);
    const [userid, setUserId] = useState();
    const [ischecked, setIsChecked] = useState(false);
    const handleShow = (id) => {
        setShow(true);
        setUserId(id)
    }
    const selectAll = () => {
        setIsChecked(!ischecked);
        users.map((user) => {
            user.isChecked = ischecked;
        })
    }
const checkId = (id) => {
    let a =[...id]
    console.log(a);
}
    const deleteUser = () => {
        let newUsers =  users.filter(user => user.id !== userid);
        setUsers(newUsers)
        setShow(false);
    }

    return (
        <div className='mt-4'>
            <ModalReact show={show} handleClose={handleClose} deleteUser = {deleteUser} handleShow={handleShow}>Do you want delete user?</ModalReact>

            <Row>
                <Col md={2}>
                    <SideBars />
                </Col>
                <Col md={8}>
                    <h1 className="mb-3 text-center fw-bold text-uppercase">Danh sách người dùng</h1>
                    <Row>
                        <Col>
                            <div className="col-6 d-flex justify-content-start mb-2">
                                {actions.map((action, index) => (
                                    action.name === 'selectAll' ? 
                                    <button role="button" onClick={selectAll} key={index} className={`border-0 me-1 py-1 text-white px-2 bg-${action.bg}`}>
                                    <FontAwesomeIcon icon={action.icon} className="mr-0" /> {action.name}
                                </button> : 
                                    <button role="button" key={index} className={`border-0 me-1 py-1 text-white px-2 bg-${action.bg}`}>
                                        <FontAwesomeIcon icon={action.icon} className="mr-0" /> {action.name}
                                    </button>
                                ))}

                            </div>
                        </Col>
                        <Col xs={4}>
                            <MDBInputGroup className='mb-3'>
                                <input className='form-control' placeholder="Recipient's username" type='text' />
                                <MDBBtn outline>Button</MDBBtn>
                            </MDBInputGroup>
                        </Col>
                    </Row>
                    <Col xs={2}>
                        <div className='d-flex justify-content-start'>
                            <Link to='/admin/trash'>
                                <FontAwesomeIcon icon={faTrashCan} /> Go to Trash (9)
                            </Link>
                        </div>
                    </Col>


                    <div className="mt-4 mr-5">
                        {/* <Table striped bordered hover>
                            <MDBTableHead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Status</th>
                                    <th scope='col'>Position</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <img
                                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                                alt=''
                                                style={{ width: '45px', height: '45px' }}
                                                className='rounded-circle'
                                            />
                                            <div className='ms-3'>
                                                <p className='fw-bold mb-1'>John Doe</p>
                                                <p className='text-muted mb-0'>john.doe@gmail.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>Software engineer</p>
                                        <p className='text-muted mb-0'>IT department</p>
                                    </td>
                                    <td>
                                        <MDBBadge color='success' pill>
                                            Admin
                                        </MDBBadge>
                                    </td>
                                    <td>Senior</td>
                                    <td>
                                        <button type="button" className="btn btn-outline-info me-2">Sửa</button>
                                        <button type="button" className="btn btn-outline-danger" onClick={handleShow}>Xóa</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <img
                                                src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                                                alt=''
                                                style={{ width: '45px', height: '45px' }}
                                                className='rounded-circle'
                                            />
                                            <div className='ms-3'>
                                                <p className='fw-bold mb-1'>Alex Ray</p>
                                                <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>Consultant</p>
                                        <p className='text-muted mb-0'>Finance</p>
                                    </td>
                                    <td>
                                        <MDBBadge color='primary' pill>
                                            Onboarding
                                        </MDBBadge>
                                    </td>
                                    <td>Junior</td>
                                    <td>
                                        <button type="button" className="btn btn-outline-info me-2">Sửa</button>
                                        <button type="button" className="btn btn-outline-danger" onClick={handleShow}>Xóa</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <img
                                                src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                                                alt=''
                                                style={{ width: '45px', height: '45px' }}
                                                className='rounded-circle'
                                            />
                                            <div className='ms-3'>
                                                <p className='fw-bold mb-1'>Kate Hunington</p>
                                                <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>Designer</p>
                                        <p className='text-muted mb-0'>UI/UX</p>
                                    </td>
                                    <td>
                                        <MDBBadge color='warning' pill>
                                            Awaiting
                                        </MDBBadge>
                                    </td>
                                    <td>Senior</td>
                                    <td>
                                        <button type="button" className="btn btn-outline-info me-2">Sửa</button>
                                        <button type="button" className="btn btn-outline-danger" onClick={handleShow}>Xóa</button>
                                    </td>
                                </tr>
                            </MDBTableBody>
                        </Table> */}
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>STT</th>
                                    <th>Avatar</th>
                                    <th>Tên</th>
                                    <th>Email</th>
                                    <th>SDT</th>
                                    <th>Địa chỉ</th>
                                    <th>Role</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length > 0 ? users.map((user, index) => (
                                    <tr key={index}>
                                        <td><Form.Check aria-label="option 1" role="button" onClick={()=> checkId(user.id)}/></td>
                                        <td>{index + 1}</td>
                                        <td className='col-1'><img style={{width: '50px', height:'50px', borderRadius: '50%'}} src={user.avt} /></td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.address}</td>
                                        <td>
                                            <MDBBadge color={user.badge} pill>
                                                {user.role}
                                            </MDBBadge>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-info me-2"><Link style={{textDecoration: 'none', color:'white'}} to={`/update/${user.id}`}>Update</Link></button>
                                            <button type="button" className="btn btn-danger" onClick={()=>handleShow(user.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )) : <tr ><td colSpan="8">No user.<Link to='/signup'>Create new user</Link></td></tr>}

                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </div>

    )

}  