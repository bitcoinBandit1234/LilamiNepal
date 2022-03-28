import React, { useState } from "react";
import * as p from "./auctionAdd.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, InputLabel } from "@mui/material";

let AuctionAdd = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      description: "",
      category: "",
      price: "",
      usedDuration: "",
      contactNumber: "",
      email: "",
      location: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().min(5, "Must be 5 characters").required("Required"),
      description: Yup.string()
        .min(20, "Must be 20 characters")
        .required("Required"),
      category: Yup.string().required("Required"),
      price: Yup.string()
        .matches(/^[0-9\b]+$/, "number only")
        .required("Required"),
      usedDuration: Yup.string().required("Required"),
      contactNumber: Yup.string()
        .min(10, "Phone number is not valids")
        .max(13, "Phone number is not valids")
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Phone number is not valid"
        )
        .required("Required"),
      email: Yup.string().email("Invalid Email Format"),
      location: Yup.string().required("Location is required"),
    }),

    onSubmit: (values) => {
      console.log("hello");
      sendToDatabase(values);
    },
  });

  const [pic, setPic] = useState(null);

  // const fileSelectedHandler = (event) => {
  //   setPic(event.target.files[0]);
  // };
  const id = 1;
  const [checkImage, setCheckImage] = useState("");
  const sendToDatabase = (values) => {
    if (pic != null) {
      var formData = new FormData();
      formData.append("title", values.title);
      formData.append("image", pic);
      formData.append("description", values.description);
      formData.append("category", values.category);
      formData.append("price", values.price);
      formData.append("used_duration", values.usedDuration);

      formData.append("contact_number", values.contactNumber);
      formData.append("email", values.email);
      formData.append("location", values.location);
      formData.append("user_id", id);

      // const data = {
      //   title: values.title,
      //   image: pic,
      //   description: values.description,
      //   category: values.category,
      //   price: values.price,
      //   used_duration: values.usedDuration,
      //   contact_number: values.contactNumber,
      //   email: values.email,
      //   location: values.location,
      //   user_id: id,
      // };

      axios
        .post("http://localhost:4000/secondProduct/", formData, {
          headers: { sandesh: "sandesh" },
        })
        .then((res) => {
          console.log("Data inserted");
          console.log(res);
          setCheckImage("");
          formik.resetForm();
        })
        .catch((err) => {
          console.log(err);
          console.log("data insert fail");
        });
    } else {
      setCheckImage("image required");
    }
  };
  // console.log(pic);
  return (
    <p.root>
      <p.div>
        <p.addSellForm>
          <p
            style={{
              marginBottom: "3rem",
              marginTop: "-0.9rem",
              color: "#10162f",
              fontSize: "2rem"
            }}
          >
            Add Auction
          </p>
          <p.part>
            <p>Title</p>
            {formik.touched.title && formik.errors.title ? (
              <TextField
                id="title"
                className="title"
                variant="outlined"
                error
                label={formik.errors.title}
                {...formik.getFieldProps("title")}
              />
            ) : (
              <TextField
                id="title"
                className="title"
                label="Title"
                variant="outlined"
                {...formik.getFieldProps("title")}
              />
            )}
          </p.part>

          {/* <p.part>
            <p>Image</p>{" "}
            <input
              onChange={fileSelectedHandler}
              multiple
              type="file"
              required
              style={{ marginLeft: "-5.5rem" }}
            />{" "}
            <span style={{ color: "red" }}> {checkImage}</span>
          </p.part> */}

          <p.part>
            <p>Image</p>
            <div className="cropperDiv">
              <span style={{ color: "red" }}> {checkImage}</span>
            </div>
          </p.part>

          <p.part>
            <p>Description</p>
            {formik.touched.description && formik.errors.description ? (
              <TextField
                id="description"
                className="Description"
                multiline
                rows={5}
                variant="outlined"
                error
                label={formik.errors.description}
                {...formik.getFieldProps("description")}
              />
            ) : (
              <TextField
                id="description"
                className="Description"
                label="Description"
                multiline
                rows={5}
                variant="outlined"
                {...formik.getFieldProps("description")}
              />
            )}
          </p.part>
          <p.part>
            <p style={{ marginRight: "11rem" }}>Category</p>
            <FormControl fullWidth>
              {formik.touched.category && formik.errors.category ? (
                <>
                  <InputLabel
                    id="demo-simple-select-label"
                    style={{ color: "#D32F2F" }}
                  >
                    Required
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    error
                    className="category"
                    label="Category"
                    {...formik.getFieldProps("category")}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Drum">Drum</MenuItem>
                    <MenuItem value="Guitar">Guitar</MenuItem>
                    <MenuItem value="Bass">Bass</MenuItem>
                    <MenuItem value="Keyboard">Keyboard</MenuItem>
                    <MenuItem value="Microphone">Microphone</MenuItem>
                    <MenuItem value="Accessories">Accessories</MenuItem>
                  </Select>
                </>
              ) : (
                <>
                  <InputLabel id="demo-simple-select-label">Select</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-selecl"
                    className="category"
                    label="Category"
                    {...formik.getFieldProps("category")}
                  >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="Drum">Drum</MenuItem>
                      <MenuItem value="Guitar">Guitar</MenuItem>
                      <MenuItem value="Bass">Bass</MenuItem>
                      <MenuItem value="Keyboard">Keyboard</MenuItem>
                      <MenuItem value="Microphone">Microphone</MenuItem>
                      <MenuItem value="Accessories">Accessories</MenuItem>
                  </Select>
                </>
              )}
            </FormControl>
          </p.part>

          <p.part>
            <p>Price</p>
            {formik.touched.price && formik.errors.price ? (
              <TextField
                id="price"
                className="Price"
                variant="outlined"
                error
                label={formik.errors.price}
                {...formik.getFieldProps("price")}
              />
            ) : (
              <TextField
                id="price"
                className="Price"
                label="(Rs) Price"
                variant="outlined"
                {...formik.getFieldProps("price")}
              />
            )}
          </p.part>
          <p.part>
            <p>Used Duration</p>
            {formik.touched.usedDuration && formik.errors.usedDuration ? (
              <TextField
                id="usedDuration"
                className="UsedDuration"
                variant="outlined"
                error
                label={formik.errors.usedDuration}
                {...formik.getFieldProps("usedDuration")}
              />
            ) : (
              <TextField
                id="usedDuration"
                className="UsedDuration"
                label="Used Duration"
                variant="outlined"
                {...formik.getFieldProps("usedDuration")}
              />
            )}
          </p.part>
          <p.part>
            <p>Contact Number</p>
            {formik.touched.contactNumber && formik.errors.contactNumber ? (
              <TextField
                id="contactNumber"
                className="contactNumber"
                variant="outlined"
                error
                label={formik.errors.contactNumber}
                {...formik.getFieldProps("contactNumber")}
              />
            ) : (
              <TextField
                id="contactNumber"
                className="contactNumber"
                label="Contact Number"
                variant="outlined"
                {...formik.getFieldProps("contactNumber")}
              />
            )}
          </p.part>
          <p.part>
            <p>Email</p>
            {formik.touched.email && formik.errors.email ? (
              <TextField
                id="email"
                className="Email"
                variant="outlined"
                error
                label={formik.errors.email}
                {...formik.getFieldProps("email")}
              />
            ) : (
              <TextField
                id="email"
                className="Email"
                label="Email"
                variant="outlined"
                {...formik.getFieldProps("email")}
              />
            )}
          </p.part>
          <p.part>
            <p>Location</p>
            {formik.touched.location && formik.errors.location ? (
              <TextField
                id="location"
                className="location"
                variant="outlined"
                error
                label={formik.errors.location}
                {...formik.getFieldProps("location")}
              />
            ) : (
              <TextField
                id="location"
                className="location"
                label="location"
                variant="outlined"
                {...formik.getFieldProps("location")}
              />
            )}
          </p.part>
          <p.part>
            <Button
              className="addbutton"
              onClick={formik.handleSubmit}
              // onClick={()=>customAlert.current.success("good boy")}

              variant="outlined"
            >
              Add
            </Button>
          </p.part>
        </p.addSellForm>
      </p.div>
    </p.root>
  );
};

export default AuctionAdd;