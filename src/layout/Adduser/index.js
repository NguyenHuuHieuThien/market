
import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Navbars from "../../component/Navbars";
import Footer from "../../component/Footer";
function Adduser() {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        image: "",
    });
    const handle = e => {
        let newData = { ...data }
        newData[e.target.id] = e.target.value;
        if (e.target.id === "image") {
            newData[e.target.id] = e.target.files[0];
        }
        setData(newData);
        
    }
    const handleSubmit = async(e) => {
        e.preventDefault(); 
        let formData = new FormData();
        formData.append("name", data.name)
        formData.append("email", data.email)
        formData.append("password", data.password)
        formData.append("phone", data.phone)
        formData.append("address", data.address)
        formData.append("file", data.image)
        axios.post(`http://localhost:8080/user/insertUserFIle`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then(res => {
            console.log(res)
        }).catch(error=>{
            console.log(error)
        })
        
    }
    
    return ( 
        <div>
            <Navbars />
            <div className="container mt-5 mb-5">
                <h1 className="mb-5">New User</h1>
                <div>
                    <form encType="multipart/form-data" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-6 pe-5">                             
                                <div class="mb-3 d-flex flex-column justify-content-center">
                                    <div className="me-5 mb-5 text-center">
                                        <img src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"
                                            style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
                                    </div>
                                    <div>
                                        <label for="image" htmlFor="image" className="form-label upload p-2 px-3 text-white">
                                            <FontAwesomeIcon icon={faPlus} className="me-2" />
                                            Tải lên
                                        </label>
                                    </div>
                                    <input type="file" onChange={e => handle(e)} className="form-control d-none" id="image" />
                                </div>
                               
                                <button type="submit" className="btn btn-primary rounded-1 px-5 mt-3">Submit</button>

                            </div>
                            <div className="col-6 pe-5 text-start">
                                <div class="mb-3">
                                    <label for="name" className="form-label">Tên tài khoản</label>
                                    <input type="text" onChange={e => handle(e)} className="form-control" id="name" />
                                </div>
                                <div class="mb-3">
                                    <label for="name" className="form-label">Họ và tên</label>
                                    <input type="text" onChange={e => handle(e)} className="form-control" id="name" />
                                </div>
                                <div class="mb-3">
                                    <label for="email" className="form-label">Email</label>
                                    <input type="email" onChange={e => handle(e)} className="form-control" id="email" />
                                </div>

                                <div class="mb-3">
                                    <label for="address" className="form-label">Địa chỉ</label>
                                    <input type="text" onChange={e => handle(e)} className="form-control w-50" id="address" />
                                </div>
                                <div class="mb-3">
                                    <label for="password" className="form-label">Mật khẩu</label>
                                    <input type="password" onChange={e => handle(e)} className="form-control" id="password" />
                                </div>
                                <div class="mb-3">
                                    <label for="phone" className="form-label">Số điện thoại</label>
                                    <input type="text" onChange={e => handle(e)} className="form-control w-50" id="phone" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    
     );
}

export default Adduser;