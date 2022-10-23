import ImageGallery from 'react-image-gallery';
import { Row, Col } from 'react-bootstrap'

import Navbars from "../../component/Navbars"
import Footer from "../../component/Footer"
import { useParams } from 'react-router-dom';
import province from './../../Province/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faPlus, faCirclePlus, faCircleMinus, faCartPlus } from '@fortawesome/free-solid-svg-icons';
const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];


export default function DetailProduct() {
    let provinces = Object.values(province);
    console.log(provinces);
    let { id } = useParams();
    console.log(id);
    return (
        <div>
            <Navbars />
            <div className='container mt-4 text-left'>
                <Row>
                    <Col md={6}>
                        <ImageGallery items={images} />
                    </Col>
                    <Col md={6}>
                        <h2 className='mb-4'>Product Name</h2>
                        <h3 className='mb-4'>Price: 1000$</h3>
                        <div className='d-flex mb-5'>
                            <div className='me-3'>
                                <FontAwesomeIcon icon={faTruck} className="me-2" />
                                Vận chuyển tới
                            </div>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>-- Nơi nhận --</option>
                                {provinces.map((item, index) => 
                                        <option key={index} value={index}>{item.name}</option>)}
                            </select>
                        </div>
                        <div className='mb-4 d-flex'>
                            <div className='me-5'>Số lượng</div>
                            <div>
                                <FontAwesomeIcon icon={faCircleMinus} />
                                <input type="number" className='w-25 text-center' value='1' />
                                <FontAwesomeIcon icon={faCirclePlus} />
                            </div>
                            <div className='form-text'>8384 Số lượng có sẵn</div>
                        </div>
                        <div className='mt-4'>
                            <button className='btn btn-primary me-3'>
                                <FontAwesomeIcon icon={faCartPlus} className="me-2" />
                                Thêm vào giỏ hàng
                            </button>
                            <button className='btn btn-primary'>Mua ngay</button>
                        </div>
                    </Col>

                </Row>
                <div className='mt-4'>
                    <h2 className='text-left'>Mô tả sản phẩm</h2>
                </div>
                <div>
                    <h2>Đánh giá sản phẩm</h2>
                    <div className='mt-5'>
                        <div className='d-flex'>
                            <div className='me-3'>
                                <img className='avt' src='https://danviet.mediacdn.vn/296231569849192448/2021/6/28/huakhai4-1624835323234-1624835323406100909784.jpg' />
                            </div>
                            <div>
                                <div className='fw-bold'>Hua Khai</div>
                                <div className='form-text'>2022-10-10 14:28 | Phân loại hàng: Tủ lạnh</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}




