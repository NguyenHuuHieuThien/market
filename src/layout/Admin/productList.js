import SideBars from "../../component/SideNav"
import { Row, Col, Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   
import { faPlus, faTrash, faCheckDouble, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import {
    MDBInputGroup,
    MDBBtn,
    MDBBadge,
    MDBIcon
} from 'mdb-react-ui-kit';

const products = [
    {
        name: 'table',
        price: 100,
        image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg',
        description: 'this is a table',
        date: '2021-11-11',
        quantity: 10
    },
    {
        name: 'motobike',
        price: 100,
        image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg',
        description: 'this is a motobike',
        date: '2021-11-11',
        quantity: 10
    },
    {
        name: 'chair',
        price: 100,
        image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg',
        description: 'this is a chair',
        date: '2021-11-11',
        quantity: 10
    },
    {
        name: 'cabinet',
        price: 100,
        image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg',
        description: 'this is a cabinet',
        date: '2021-11-11',
        quantity: 10
    },
    {
        name: 'bed',
        price: 100,
        image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg',
        description: 'this is a bed',
        date: '2021-11-11',
        quantity: 10
    },
]

const actions = [
    { name: 'selectAll', icon: faCheckDouble, bg: 'success' },
    { name: 'create', icon: faPlus, bg: 'primary' },
    { name: 'delete', icon: faTrash, bg: 'danger' },

]
export default function ProductList() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this product?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleClose}>Xóa</Button>
                </Modal.Footer>
            </Modal>
            <Row>
                <Col md={2}>
                    <SideBars/>
                </Col>
                <Col md={8}>

                    <h1 className="text-center mt-4 text-uppercase">Product List</h1>
                    <Row>
                        <Col>
                            <div className="col-6 d-flex justify-content-start mb-2">
                                {actions.map((action, index) => (
                                    action.name === 'trash' ?
                                        <button role="button" key={index} className={`border-0 me-2 py-1 text-white bg-${action.bg}`}>
                                            <FontAwesomeIcon icon={action.icon} className="mr-2" /> {action.name}
                                        </button>

                                        :
                                        <button role="button" key={index} className={`border-0 me-1 py-1 text-white px-2 bg-${action.bg}`}>
                                            <FontAwesomeIcon icon={action.icon} className="mr-2" /> {action.name}
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
                    <div className="mt-5 mr-5">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Hình ảnh</th>
                                    <th>Tên</th>
                                    <th>Giá</th>
                                    <th>Số Lượng</th>
                                    <th>Ngày Đăng</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={index}>
                                        <td className="col-1"><img src={product.image} alt="" width="100px" /></td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.date}</td>
                                        <td>
                                            <button className="btn btn-success me-2">Confirm</button>
                                            <button className="btn btn-danger">Remove</button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </div>
    )
}