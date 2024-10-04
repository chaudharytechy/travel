import React, { useState } from "react";
const Home = () => {
  const [buttonColor, setButtonColor] = useState("btn-primary");
  const [data, setData] = useState({
    salutation: "",
    name: "",
    lastname: "",
    email: "",
    mobile: "",
    floor: "",
    area: "",
    unit: "",
    paymentPlan: "",
  });
  const resetData = () => {
    setData({
      salutation: "",
      name: "",
      lastname: "",
      email: "",
      mobile: "",
      floor: "",
      area: "",
      unit: "",
      paymentPlan: "",
    });
  };
  const [form, setForm] = useState({
    floor: "selected floor",
    area: "",
  });

  const handleForm = (e, field) => {
    const value = e.target.value;
    setForm((prevState) => ({
      ...prevState,
      [field]: value,
      ...(field === "floor" && { area: getAreaByFloor(value) }),
    }));
  };

  const getAreaByFloor = (floor) => {
    switch (floor) {
      case "ground floor":
        return "100 sq.ft";
      case "first floor":
        return "40 sq.ft";
      case "second floor":
        return "50 sq.ft";
      case "third floor":
        return "";
      default:
        return "";
    }
  };

  const handlevalue = (e, name) => {
    const newvalue = e.target.value;

    setData((prevdata) => ({
      ...prevdata,
      [name]: newvalue,
    }));
  };
  const handleSubmit = async (e) => {
    setButtonColor("btn-secondary");
    e.preventDefault();
    try {
      const response = await fetch("https://api.100acress.com/pahleGhar", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const responseData = await response.json();
        resetData();
        alert("We received your request !");

        setButtonColor("btn-primary");
      } else {
        console.log("Error", response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <img
              src="../../Images/baneer.jpg"
              className="imgbanner"
              style={{ height: "auto" }}
              alt="pahle ghar fir makan yojna"
            />
          </div>
          <div className="col-1"></div>
        </div>
      </div>

      <div className="text-center w-100 my-5">
        <p className="text-danger" style={{ fontWeight: "bold", fontSize: 20, marginTop: "-22px" }}>Registration Amount <span className="" style={{ fontWeight: "bold", fontSize: 30 }}>₹ 31000 /-</span></p>
        <p className="text-danger" style={{ fontWeight: "bold", fontSize: 20, }}>Area Options 50/97/150 SQ.FT (in multiples)</p>
        <a
          className="button apply_btn"
          type="button"
          class="btn btn-primary"
          // data-bs-toggle="modal"
          // data-bs-target="#staticBackdrop"
          style={{
            width: 200,
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            backgroundColor: "red",
            padding: "4px",
            borderRadius: "4px",
            border: "none",
          }}
          href="https://delhimallcomplex.com/poc/S12#registration_form"
        >
          Registration Open
        </a>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col-sm-6">
            <h3>Overview of Delhi Mall Complex</h3>
            <br />
            <p>
              Delhi Mall Complex, as a part of a Public-Private Partnership with DDA, the Government of India, proudly launches DDA Dwara Manyata Prapt Pre Leased Commercial Scheme
            </p>
            <p>
              The project is located in the heart of Central Delhi, on Pusa Road, in Patel Nagar, a major residential locality known for its social infrastructure and amenities. The mall is part of The Leela Sky Villas complex, which is the tallest planned tower in Delhi, standing more than 2.5 times taller than the Qutub Minar.
            </p>
            <p>
              The Delhi Mall Complex is designed to be the most happening commercial building in Central/West Delhi. It is strategically located in the middle of a highly populated residential area, and high footfall is expected in the future as there are not many shopping malls within a 5 km radius. The mall is well connected through public transport and the metro, with the nearest metro stations being Shadipur and Kirti Nagar.
            </p>
            <p>
              The project is part of a larger development with over 2800 flats,
              It is close to highly populated residential catchment areas like Kirti Nagar, Patel Nagar, Punjabi Bagh, Rajendra Nagar, Pitampura, Model Town, Karol Bagh and many more. This complex is under construction and 60% built and shall be inaugurated soon. Once the complex is ready, one can expect good rental income and capital appreciation as expression of interest has been received from various national and international brands.
            </p>
            <p>
              Spanning over 3 lac Sq. Ft., the project boasts an array of premium brands like Inox-PVR cinemas, Shoppers Stop, Haldiram’s, and many more. The complex is thoughtfully designed, with retail on the Ground floor, and has dedicated anchor stores and cafes on the First and Second Floors. The third floor is dedicated to Food Court, Restaurants, and Children’s Entertainment, while the Fourth Floor is devoted to Inox-PVR cinemas.
            </p>
            <p>
              The Delhi Shopping Complex benchmarks modern commercial infrastructure, boasting state-of-the-art amenities like Super Luxury Interiors, Lifts, Escalators, Power Back-Up, CCTV Cameras, Fire Fighting Equipment, 3 Level Basements, and Multi-Level Car Parking. The project is RERA approved with timelines till 2025.
            </p>
            <p>
              The project is RERA approved with timelines till 2025. It is
              equipped with all the modern facilities and amenities, such as
              Super Luxury Interiors, Lifts, Escalators, Power Back Up, CCTV
              Cameras, Fire Fighting Equipment, 3 level basements and a Multi
              Level Car Parking.
            </p>
          </div>
          <div className="col-sm-6 mb-2">
            <h3>Our Location</h3>
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7002.354249931301!2d77.14782171458246!3d28.65441470000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03a77d14a199%3A0x41aefa31e1b48f7a!2sDelhi%20Mall!5e0!3m2!1sen!2sin!4v1708863520088!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="pahle ghar fir makan yojna"
            />
          </div>
          <div className="col-sm-12">
          
          </div>
        </div>
      </div>

      <>
        <div className="container py-1">
          <div className="row">
            <div className="col-sm-12">
              {" "}
              <img
                className="img-fluid"
                src="../../Images/multiplexcinema.png"
                alt=""
              />{" "}
            </div>
          </div>
        </div>
        <br />
        <div className="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <div className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  />
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="1000">
                    <img
                      src="../../Images/slider1image.jpg"
                      className="d-block w-100"
                      style={{ height: 400 }}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval="1000">
                    <img
                      src="../../Images/slider2image.jpg"
                      className="d-block w-100"
                      style={{ height: 400 }}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval="1000">
                    <img
                      src="../../Images/slider3image.jpg"
                      className="d-block w-100"
                      style={{ height: 400 }}
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </>
      <>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={3}
                    aria-label="Slide 4"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={4}
                    aria-label="Slide 5"
                  />
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="1000">
                    <img
                      src="../../Images/cp1image.png"
                      className="d-block w-100"
                      style={{ height: 400 }}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval="1000">
                    <img
                      src="../../Images/cp2image.png"
                      className="d-block w-100"
                      style={{ height: 400 }}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval="1000">
                    <img
                      src="../../Images/cp3image.png"
                      className="d-block w-100"
                      style={{ height: 400 }}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval="1000">
                    <img
                      src="../../Images/cp4image.png"
                      className="d-block w-100"
                      style={{ height: 400 }}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval="1000">
                    <img
                      src="../../Images/cp5image.png"
                      className="d-block w-100"
                      style={{ height: 400 }}
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <iframe
                width="100%"
                height={353}
                src="https://www.youtube.com/embed/msl-2QRXwaI?si=hxT6xEzvOtdMOVzR"
                // src="https://www.youtube.com/watch?v=T6gTKiKnWNs"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen=""
              />
              {/* <iframe
              width="100%"
              height={353}
                src="https://www.youtube.com/embed/LzZfRl1CKMc?si=YVhfcY3t_ErG8WJ6"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe> */}
            </div>
          </div>
        </div>
        <br />
      </>
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col">

            </div>
            <div className="col-1"></div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <div id="LIVE" className="w3-container w3-border city">
                <div
                  style={{
                    display: "flex",
                    boxShadow: "0px 3px 6px rgb(0 0 0 / 16%)",
                    padding: 10,
                    marginTop: 20,
                  }}
                >
                  <div style={{ width: "60%", borderRight: "1px solid #ccc" }}>
                    <p style={{ fontWeight: "bold" }}>
                      1) Project : DLRERA2018P0013
                    </p>
                    <p style={{ fontWeight: "bold" }}>
                      Application invited for DDA Dwara Manyata prapt Pre Leased Commercial Space
                    </p>
                    <p style={{}}>
                      <a
                        className="fa fa-calendar"
                        aria-hidden="true"
                        style={{ color: "#4285f4" }}
                      />
                      PROJECT NAME : DDA Dwara Manyata prapt Pre Leased Commercial Space
                    </p>
                    <p >

                      Online Application Start Date & Time : 3rd October 2024 08:00 AM
                    </p>
                    <p >

                      Online Application End Date & Time : 11th October 2024 11:59:00
                    </p>

                    <p >
                      <a
                        className="fa fa-calendar"
                        aria-hidden="true"
                        style={{ color: "#4285f4" }}
                      />
                      Unit Allocation Date & Time : 13th October 2024
                    </p>
                    <p >

                      Colonizer : Raheja Developers Limited in PPP with DDA
                    </p>

                    <p style={{}}>
                      <a
                        className="fa fa-calendar"
                        aria-hidden="true"
                        style={{ color: "#4285f4" }}
                      />
                      LOCATION : Delhi Mall Complex, NEW DELHI-110008(INDIA)
                    </p>
                  </div>
                  <div
                    style={{
                      width: "40%",
                      position: "relative",
                      marginTop: "auto",
                      marginBottom: "auto",
                      paddingLeft: 10,
                    }}
                  >
                    <a
                      className="button apply_btn"
                      style={{
                        width: 300,
                        color: "white",
                        fontSize: 20,
                        fontWeight: "bold",
                        backgroundColor: "green",
                        padding: "8px",
                        borderRadius: "4px",
                      }}
                      href="https://delhimallcomplex.com/poc/S12#registration_form"
                    >
                      Registration Open
                    </a>
                    <br />
                    <br />
                    <i
                      className="far fa-file-pdf"
                      aria-hidden="true"
                      style={{ color: "red" }}
                    />{" "}
                    <a
                      href="../../Pdf/pricelist.pdf"
                      style={{ color: "#337ab7" }}
                      target="_blank"
                    >
                      Price List
                    </a>
                    <br />
                    <i
                      className="far fa-file-pdf"
                      aria-hidden="true"
                      style={{ color: "red" }}
                    />{" "}
                    <a
                      href="../../Pdf/reracertificate-1.pdf"
                      style={{ color: "#337ab7" }}
                      target="_blank"
                    >
                      Scheme RERA
                    </a>
                    <br />
                    <i
                      className="far fa-file-pdf"
                      aria-hidden="true"
                      style={{ color: "red" }}
                    />{" "}
                    <a
                      href="../../Pdf/ApplicationForm.pdf"
                      style={{ color: "#337ab7" }}
                      target="_blank"
                    >
                      Application Form
                    </a>
                    <br />
                    <i
                      className="far fa-file-pdf"
                      aria-hidden="true"
                      style={{ color: "red" }}
                    />{" "}
                    <a
                      href="../../Pdf/brochure.pdf"
                      style={{ color: "#337ab7" }}
                      target="_blank"
                    >
                      Scheme Brochure
                    </a>
                    <br />
                    <i
                      className="far fa-file-pdf"
                      aria-hidden="true"
                      style={{ color: "red" }}
                    />{" "}
                    <a
                      href="../../Pdf/clusterplan.pdf"
                      style={{ color: "#337ab7" }}
                      target="_blank"
                    >
                      Scheme Cluster Plan
                    </a>
                    <br />
                    <a
                      href="../../Pdf/FAQ.pdf"
                      style={{ color: "#337ab7" }}
                      target="_blank"
                    >
                      FAQs
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </>
      <>
        <div
          id="CLOSED"
          className="w3-container w3-border city"
          style={{ display: "none" }}
        >
          <div
            style={{
              display: "flex",
              boxShadow: "0px 3px 6px rgb(0 0 0 / 16%)",
              padding: 10,
              marginTop: 20,
            }}
          ></div>
        </div>
        <div
          id="CANCELLED"
          className="w3-container w3-border city"
          style={{ display: "none" }}
        ></div>
        {/* <div
          id="ALL"
          className="w3-container w3-border city"
          style={{ display: "none" }}
        >
          <div
            style={{
              display: "flex",
              boxShadow: "0px 3px 6px rgb(0 0 0 / 16%)",
              padding: 10,
              marginTop: 20,
            }}
          >
            <div style={{ width: "60%", borderRight: "1px solid #ccc" }}>
              <p style={{ fontWeight: "bold" }}>1) Project : DLRERA2018P0013</p>
              <p style={{ fontWeight: "bold" }}>
                Application invited for Delhi Shopping Complex hjsdhkwfhkq
              </p>
              <p >
  
                PROJECT NAME : Delhi Shopping Complex
              </p>
              <p >
               
               Investment Starts From &amp; 32.46 LACS*
              </p>
              <p style={{}}>
              
                <a
                  className="fa fa-calendar"
                  aria-hidden="true"
                  style={{ color: "#4285f4" }}
                />
              Registration Starting from &amp; Time : 01-June-2024 16:00:00
              </p>
              
              <p >
                <a
                  className="fa fa-calendar"
                  aria-hidden="true"
                  style={{ color: "#4285f4" }}
                />
               Last Date Of Registration &amp; Time : 12-June-2024 23:59:00
              </p>
              <p >
               
                Unit Allocation Date &amp; Time : 16-June-2024 16:00:00
              </p>
              <p>
               
                Colonizer : Raheja Developers Limited in PPP with DDA
              </p>
              <p >
              
                LOCATION : Delhi Shopping Complex, NEW DELHI-110008(INDIA)
              </p>
            </div>
            <div
              style={{
                width: "40%",
                position: "relative",
                marginTop: "auto",
                marginBottom: "auto",
                paddingLeft: 10,
              }}
            >
              <a className="button" href="#">
                Registration Closed
              </a>
              <br />
              <i
                className="far fa-file-pdf"
                aria-hidden="true"
                style={{ color: "red" }}
              />{" "}
              <a
                href="https://www.delhishoppingcomplex.com/public/assets/DelhiMall/pricelist.pdf"
                style={{ color: "#337ab7" }}
              >
                Price List
              </a>
              <br />
              <i
                className="far fa-file-pdf"
                aria-hidden="true"
                style={{ color: "red" }}
              />{" "}
              <a
                href="https://www.delhishoppingcomplex.com/public/assets/DelhiMall/reracertificate-1.pdf"
                style={{ color: "#337ab7" }}
              >
                Scheme RERA
              </a>
              <br />
              <i
                className="far fa-file-pdf"
                aria-hidden="true"
                style={{ color: "red" }}
              />{" "}
              <a
                href="https://www.delhishoppingcomplex.com/public/assets/DelhiMall/Application Form.pdf"
                style={{ color: "#337ab7" }}
              >
                Application Form
              </a>
              <br />
              <i
                className="far fa-file-pdf"
                aria-hidden="true"
                style={{ color: "red" }}
              />{" "}
              <a
                href="https://www.delhishoppingcomplex.com/public/assets/DelhiMall/brochure.pdf"
                style={{ color: "#337ab7" }}
              >
                Scheme Brochure
              </a>
              <br />
              <i
                className="far fa-file-pdf"
                aria-hidden="true"
                style={{ color: "red" }}
              />{" "}
              <a
                href="https://www.delhishoppingcomplex.com/public/assets/DelhiMall/clusterplan.pdf"
                style={{ color: "#337ab7" }}
              >
                Scheme Cluster Plan
              </a>
              <br />
              <i
                className="far fa-file-pdf"
                aria-hidden="true"
                style={{ color: "red" }}
              />{" "}
              <a
                href="https://www.delhishoppingcomplex.com/public/assets/DelhiMall/GROUND-FLOOR-PLAN.pdf"
                style={{ color: "#337ab7" }}
              >
                Ground Floor Plan
              </a>
              <br />
              <i
                className="far fa-file-pdf"
                aria-hidden="true"
                style={{ color: "red" }}
              />{" "}
              <a
                href="https://www.delhishoppingcomplex.com/public/assets/DelhiMall/1st-FLOOR-PLAN.pdf"
                style={{ color: "#337ab7" }}
              >
                1st Floor Plan
              </a>
              <br />
              <i
                className="far fa-file-pdf"
                aria-hidden="true"
                style={{ color: "red" }}
              />{" "}
              <a
                href="https://www.delhishoppingcomplex.com/public/assets/DelhiMall/2nd-FLOOR-PLAN.pdf"
                style={{ color: "#337ab7" }}
              >
                2nd Floor Plan
              </a>
              <br />
              <i
                className="far fa-file-pdf"
                aria-hidden="true"
                style={{ color: "red" }}
              />{" "}
              <a
                href="https://www.delhishoppingcomplex.com/public/assets/DelhiMall/3rd-FLOOR-PLAN.pdf"
                style={{ color: "#337ab7" }}
              >
                3rd Floor Plan
              </a>
              <br />
            </div>
          </div>
        </div> */}
      </>

      <div className="container-fluid mt-5">
        <div className="row">
          <img
            className="img-fluid px-0"
            style={{ width: "100%", height: 250 }}
            src="../../Images/Line Art Design .png"
            alt=""
          />
        </div>
      </div>

      <>
        {/* Modal */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4>DELHI SHOPPING COMPLEX REGISTRATION FORM</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              {/* <div className="modal-body">
                <form>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <h4>Personal Details</h4>
                        <div className="form-group ">
                          <label htmlFor="pleaseselect" className="my-2">
                            Please Select
                          </label>
                          <select
                            className="form-control"
                            id="pleaseselect"
                            name="salutation"
                            value={data.salutation}
                            onChange={(e) => handlevalue(e, "salutation")}
                          >
                            <option value="mr">Mr.</option>
                            <option value="ms">Ms.</option>
                            <option value="mrs">Mrs.</option>
                            <option value="m/s">M/S.</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="name" className="my-2">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter Your Name"
                            name="name"
                            value={data.name}
                            onChange={(e) => handlevalue(e, "name")}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="surname" className="my-2">
                            Surname
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="surname"
                            placeholder="Enter Your Surname"
                            name="surname"
                            value={data.surname}
                            onChange={(e) => handlevalue(e, "surname")}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputEmail4" className="my-2">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Email"
                            name="email"
                            value={data.email}
                            onChange={(e) => handlevalue(e, "email")}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="dob" className="my-2">
                            Date Of Birth
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="dateofbirth"
                            placeholder="Enter Your DOB"
                            name="dob"
                            value={data.dob}
                            onChange={(e) => handlevalue(e, "dob")}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="pan" className="my-2">
                            PAN
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="pan"
                            placeholder="Enter Your PAN"
                            name="pan"
                            value={data.pan}
                            onChange={(e) => handlevalue(e, "pan")}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h4>Contact Details</h4>
                        <div className="form-group">
                          <label htmlFor="contact" className="my-2">
                            Contact
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="contact"
                            placeholder="Enter Your Number"
                            name="contact"
                            value={data.contact}
                            onChange={(e) => handlevalue(e, "contact")}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="city" className="my-2">
                            City
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="city"
                            placeholder="Enter Your City"
                            name="city"
                            value={data.city}
                            onChange={(e) => handlevalue(e, "city")}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="state" className="my-2">
                            State
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="state"
                            placeholder="Enter Your State"
                            name="state"
                            value={data.state}
                            onChange={(e) => handlevalue(e, "state")}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="address" className="my-2">
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="Enter Your Address"
                            name="address"
                            value={data.address}
                            onChange={(e) => handlevalue(e, "address")}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="pincode" className="my-2">
                            Pincode
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="pincode"
                            placeholder="Enter Your Pincode"
                            name="pincode"
                            value={data.pincode}
                            onChange={(e) => handlevalue(e, "pincode")}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="pointofcontact" className="my-2">
                            Point Of Contact
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="pointofcontact"
                            placeholder="Enter Your Point Of Contact"
                            name="ofContact"
                            value={data.ofContact}
                            onChange={(e) => handlevalue(e, "ofContact")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="container">
                    <div className="row">
                      <h3 className="mt-4">Registration Form</h3>

                      <div className="col-md-8">
                        <div className="form-group row">
                          <label
                            htmlFor="towerfloor"
                            className="col-sm-4 col-form-label "
                          >
                            Tower/Floor
                          </label>
                          <div className="col-sm-8">
                            <select
                              className="form-control my-2"
                              id="towerfloor"
                              name="floor"
                              value={data.floor}
                              onChange={(e) => handlevalue(e, "floor")}
                            >
                              <option value="selected floor">
                                Select Floor
                              </option>
                              <option value="ground floor">Ground Floor</option>
                              <option value="first floor">First Floor</option>
                              <option value="second floor">Second Floor</option>
                              <option value="third floor">Third Floor</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label
                            htmlFor="propertyselected"
                            className="col-sm-4 col-form-label"
                          >
                            Property Selected
                          </label>
                          <div className="col-sm-8">
                            <select
                              className="form-control my-2"
                              id="propertyselected"
                              name="area"
                              value={data.area}
                              onChange={(e) => handlevalue(e, "area")}
                            >
                              <option value="50 sq.ft">50 Sq.Ft</option>
                              <option value="150 sq.ft">150 Sq.Ft</option>
                              <option value="1000 sq.ft">1000 Sq.Ft</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label
                            htmlFor="numberunits"
                            className="col-sm-4 col-form-label"
                          >
                            Number Units
                          </label>
                          <div className="col-sm-8">
                            <select
                              className="form-control my-2"
                              id="numberunits"
                              name="unit"
                              value={data.unit}
                              onChange={(e) => handlevalue(e, "unit")}
                            >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label
                            htmlFor="paymentplan"
                            className="col-sm-4 col-form-label"
                          >
                            Payment Plan
                          </label>
                          <div className="col-sm-8">
                            <select
                              className="form-control my-2"
                              id="paymentplan"
                              name="paymentPlan"
                              value={data.paymentPlan}
                              onChange={(e) => handlevalue(e, "paymentPlan")}
                            >
                              <option value="constructionlinkedplan">
                                Construction Linked Plan (CLP)
                              </option>
                              <option value="downpaymentplan">
                                Down Payment Plan (DPP)
                              </option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group row">
                          <div className="col-sm-8 offset-sm-4">
                            <a
                              href="../../Pdf/pricelist.pdf"
                              style={{ color: "#337ab7" }}
                              target="_blank"
                              type="button"
                              className="btn btn-primary"
                            >
                              <span className="text-white">
                                View Payment Plan
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={`btn ${buttonColor}`}
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </form>
              </div> */}
              <div className="modal-body">
                <form>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-5">
                        <h4>Personal Details</h4>
                        <div className="form-group ">
                          <label htmlFor="pleaseselect" className="my-2">
                            Please Select
                          </label>
                          <select
                            className="form-control"
                            id="pleaseselect"
                            name="salutation"
                            value={data.salutation}
                            onChange={(e) => handlevalue(e, "salutation")}
                          >
                            <option value="mr">Mr.</option>
                            <option value="ms">Ms.</option>
                            <option value="mrs">Mrs.</option>
                            <option value="m/s">M/S.</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="name" className="my-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter Your Name"
                            name="name"
                            value={data.name}
                            onChange={(e) => handlevalue(e, "name")}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="lastname" className="my-2">
                            LastName
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            placeholder="Enter Your Last Name"
                            name="lastname"
                            value={data.lastname}
                            onChange={(e) => handlevalue(e, "lastname")}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputEmail4" className="my-2">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Email"
                            name="email"
                            value={data.email}
                            onChange={(e) => handlevalue(e, "email")}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="mobile" className="my-2">
                            Mobile
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="mobile"
                            placeholder="Mobile"
                            name="mobile"
                            pattern="[0-9]*"
                            maxlength="10"
                            value={data.mobile}
                            onChange={(e) => handlevalue(e, "mobile")}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-7">
                        <h3 className="mt-4">Registration Form</h3>

                        <div className="form-group row">
                          <label
                            htmlFor="towerfloor"
                            className="col-sm-4 col-form-label "
                          >
                            Tower/Floor
                          </label>
                          <div className="col-sm-8">
                            <select
                              className="form-control my-2"
                              id="towerfloor"
                              name="floor"
                              value={form.floor}
                              onChange={(e) => handleForm(e, "floor")}
                            >
                              <option value="selected floor">
                                Select Floor
                              </option>
                              <option value="ground floor">Ground Floor</option>
                              <option value="first floor">First Floor</option>
                              <option value="second floor">Second Floor</option>
                              <option value="third floor">Third Floor</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label
                            htmlFor="propertyselected"
                            className="col-sm-4 col-form-label"
                          >
                            Property Selected
                          </label>
                          <div className="col-sm-8">
                            <select
                              className="form-control my-2"
                              id="propertyselected"
                              name="area"
                              value={form.area}
                              onChange={(e) => handleForm(e, "area")}
                            >
                              <option value="100 sq.ft">100 Sq.Ft</option>
                              <option value="40 sq.ft">40 Sq.Ft</option>
                              <option value="50 sq.ft">50 Sq.Ft</option>

                            </select>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label
                            htmlFor="numberunits"
                            className="col-sm-4 col-form-label"
                          >
                            Number Units
                          </label>
                          <div className="col-sm-8">
                            <select
                              className="form-control my-2"
                              id="numberunits"
                              name="unit"
                              value={data.unit}
                              onChange={(e) => handlevalue(e, "unit")}
                            >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label
                            htmlFor="paymentplan"
                            className="col-sm-4 col-form-label"
                          >
                            Payment Plan
                          </label>
                          <div className="col-sm-8">
                            <select
                              className="form-control my-2"
                              id="paymentplan"
                              name="paymentPlan"
                              value={data.paymentPlan}
                              onChange={(e) => handlevalue(e, "paymentPlan")}
                            >
                              <option value="constructionlinkedplan">
                                Construction Linked Plan (CLP)
                              </option>
                              <option value="downpaymentplan">
                                Down Payment Plan (DPP)
                              </option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group row">
                          <div className="col-sm-8 offset-sm-4 mt-4">
                            <a
                              href="../../Pdf/pricelist.pdf"
                              style={{ color: "#337ab7" }}
                              target="_blank"
                              type="button"
                              className="btn btn-danger"
                            >
                              <span className="text-white ">
                                View Payment Plan
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="mt-4"
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <button
                        type="button"
                        className={`btn ${buttonColor} px-5`}
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Home;
