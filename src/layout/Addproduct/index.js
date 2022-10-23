import Navbars from "../../component/Navbars"
import Footer from "../../component/Footer"

export default function AddproductPage() {
    return (
        <div>
            <Navbars />
            <div className="container mt-5 mb-5">
                <h1 className="mb-5">New Product</h1>
                <div>
                    <form>
                        <div className="row">
                            <div className="col-6 pe-5 text-start">
                                <div class="mb-3">
                                    <label for="name" class="form-label">Product Name</label>
                                    <input type="text" class="form-control" id="name" />
                                </div>
                                <div class="mb-3">
                                    <label for="category" class="form-label">Category</label>
                                    <input type="text" class="form-control" id="category" />
                                </div>
                                <div class="mb-3">
                                    <label for="price" class="form-label">Price</label>
                                    <input type="number" class="form-control w-50" id="price" />
                                </div>
                                <div class="mb-3">
                                    <label for="amount" class="form-label">Amount</label>
                                    <input type="number" class="form-control w-50" id="amount" />
                                </div>
                            </div>
                            <div className="col-6 ps-5 text-start">
                                <div class="mb-3">
                                    <label for="description" class="form-label">Description</label>
                                    <textarea class="form-control" rows={5}></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="image" class="form-label">Image</label>
                                    <input type="file" class="form-control" id="image" />
                                </div>
                                <button type="submit" class="btn btn-primary px-5 mt-3">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}