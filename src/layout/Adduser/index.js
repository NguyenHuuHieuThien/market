
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
        full_name:"",
        password: "",
        phone_number: "",
        address: "",
        image: "",
        gender: "",
        birthdate: "",
    });
    console.log(typeof data.birthdate);
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
        formData.append("address", data.address)
        formData.append("birthday", data.birthdate)
        formData.append("email", data.email)
        formData.append("fullName", data.full_name)
        formData.append("password", data.password)
        formData.append("phoneNumber", data.phone_number)
        formData.append("sex", data.gender)
        formData.append("username", data.name)
        formData.append("file", data.image)
        axios.post(`http://localhost:8080/user/insertUserFile`, formData, {
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
                    <form encType="multipart/form-data" onSubmit={e=>handleSubmit(e)}>
                        <div className="row">
                            <div className="col-6 pe-5">                             
                                <div class="mb-3 d-flex flex-column justify-content-center">
                                    <div className="me-5 mb-5 text-center">
                                        <img src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"
                                            style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
                                    </div>
                                    {/* <div>
                                        <label for="image" htmlFor="image" className="form-label upload p-2 px-3 text-white">
                                            <FontAwesomeIcon icon={faPlus} className="me-2" />
                                            Tải lên
                                        </label>
                                    </div> */}
                                    <input type="file" onChange={e => handle(e)} className="form-control" id="image" />
                                </div>
                               
                                <button type="submit" className="btn btn-primary rounded-1 px-5 mt-3">Submit</button>

                            </div>
                            <div className="col-6 pe-5 text-start">
                                <div class="mb-3">
                                    <label for="name" className="form-label">Tên tài khoản</label>
                                    <input type="text" onChange={e => handle(e)} className="form-control" id="name" />
                                </div>
                                <div class="mb-3">
                                    <label for="full_name" className="form-label">Họ và tên</label>
                                    <input type="text" onChange={e => handle(e)} className="form-control" id="full_name" />
                                </div>
                                <div className="mb-3">
                                    <div class="form-floating">
                                        <select class="form-select" onChange={e => handle(e)} id="gender" aria-label="Floating label select example">
                                            <option selected>--Chọn giới tính--</option>
                                            <option value="male">Nam</option>
                                            <option value="female">Nữ</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <input type="date" onChange={e => handle(e)} id="birthdate"/>
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
                                    <label for="phone_number" className="form-label">Số điện thoại</label>
                                    <input type="text" onChange={e => handle(e)} className="form-control w-50" id="phone_number" />
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