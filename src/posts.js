import axios from "axios";

export default axios.create({
    baseURL:"mongodb+srv://Natnael:<password>@cluster0.idbugid.mongodb.net/?retryWrites=true&w=majority"
})
