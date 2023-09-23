import React,{useState} from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
export default function AddProduct() {
  const [des, setDes] = useState();
  const handleDescription = (e) => {
    setDes(e);
  };
    return (
        <div>
            <h3 className='mb-4'>Add Product</h3>
            <form action="" className='form-control'>
            <input type="text" placeholder="Enter Product" className='form-control' />
            <ReactQuill
            value={des}
            className="mt-2 form-control"
            theme="snow"
            onChange={(evt) => {
              handleDescription(evt);
            }}
          />
            <input type="number" placeholder="Enter Product price" className='form-control' />
            <select className="mt-4 form-control" name="" id="">
            <option value="">Enter Brand</option>
          </select>
            <select className="mt-4 form-control" name="" id="">
            <option value="">Enter Category</option>
          </select>
          <select className="mt-4 form-control" name="" id="">
            <option value="">Enter Color</option>
          </select>
          <input type="number" placeholder="Enter Quantity" className='form-control mt-4' />
          <div className='mt-4'>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
          </div>
            <button
            type="submit"
            className="btn btn-success border-0 rounded-3 my-5"
          >
            Add Product
          </button>
            </form>
            
        </div>
    )
}
