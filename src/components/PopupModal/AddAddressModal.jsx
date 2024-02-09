import React, {useState } from "react";
import { fetchData } from "../../api/apiService";
import { API_URLS } from "../../api/apiUrls";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    CitySelect,
    CountrySelect,
    StateSelect,
  } from "react-country-state-city";
  import "react-country-state-city/dist/react-country-state-city.css";

  import {
    validateFullname,
    validateMobileNumber,
    validateHouseNo,
    validateArea,
    validateLandmark,
    validateZipCode,
  } from "../Auth/Validation";

const AddAddressModal = () => {

    const userId = localStorage.getItem('user_id');

    // Country State City Usestate Start ---------------
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);   

    const handleCountryChange = (selectedCountry) => {
      setCountryid(selectedCountry.id);
      setFormData({
        ...formData,
        country: selectedCountry.name,
      });
    };
  
    const handleStateChange = (selectedState) => {
      setstateid(selectedState.id);
      setFormData({
        ...formData,
        state: selectedState.name,
      });
    };
  
    const handleCityChange = (selectedCity) => {
      setFormData({
        ...formData,
        city: selectedCity.name,
      });
    };
     // Country State City Usestate End --------------- 

     // Validtion Code Start----------------------
      const [formData, setFormData] = useState({
        fullname: "",
        mobileNumber: "",
        houseNo: "",
        area: "",
        landmark: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
      });
    
      const [errors, setErrors] = useState({
        fullname: "",
        mobileNumber: "",
        houseNo: "",
        area: "",
        landmark: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...formData,
          [name]: value,
        }));
    
    switch (name) {
        case "fullname":
          setErrors({
            ...errors,
            fullname: validateFullname(value),
          });
          break;
        case "mobileNumber":
          setErrors({
            ...errors,
            mobileNumber: validateMobileNumber(value),
          });
          break;
        case "houseNo":
          setErrors({
            ...errors,
            houseNo: validateHouseNo(value),
          });
          break;
        case "area":
          setErrors({
            ...errors,
            area: validateArea(value),
          });
          break;
        case "landmark":
          setErrors({
            ...errors,
            landmark: validateLandmark(value),
          });
          break;
          case "zipCode":
          setErrors({
            ...errors,
            zipCode: validateZipCode(value),
          });
          break;
        default:
          break;
      }
    };
    // Validtion Code End ----------------------

    // Clear Form Code Start ----------------------
    const handleCloseModal = () => {
      setFormData({
        fullname: "",
        mobileNumber: "",
        houseNo: "",
        area: "",
        landmark: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
      });
    };
    // Clear Form Code End ----------------------
    
     // Add Address API Code Start----------------------
      const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        const requestBody = {
            userID : userId,
          name : formData.fullname,
          phone : formData.mobileNumber,
          houseNo : formData.houseNo,
          area : formData.area,
          landmark : formData.landmark,
          city : formData.city,
          state : formData.state,
          country : formData.country,
          zipCode : formData.zipCode,
        };  
    
        try {
          const response = await fetchData(API_URLS.addAddress, requestBody);
          if (response.responseCode === 1) {
    
            toast.success(`${response.responseMessage}`, {
              toastId: "unique-success-toast",
            });
    
    
          } else {
            toast.error(`Error: ${response.responseMessage}`, {
              toastId: "unique-error-toast",
            });
          }
        } catch (error) {
          toast.error(`Error: ${error.message}`, {
            toastId: "unique-error-toast",
          });
        }
      };
      //Add Address API Code End----------------------

  return (
    <>
    {/* <!-- Add address modal box start --> */}
    <div className="modal fade theme-modal" id="add-address" tabIndex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add a new address</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleFormSubmit}>
                    <div className="row g-4">
                        <div className="col-xxl-12">
                            <div className="form-floating theme-form-floating">
                                <input type="text" className="form-control" id="fullname" name="fullname" required
                                value={formData.fullname}
                                onChange={handleChange}/>
                                <label htmlFor="name">Full Name</label>
                                <span className="position-absolute" style={{ color: "red" }}>{errors.fullname}</span>
                            </div>
                        </div>

                        <div className="col-xxl-6">
                            <div className="form-floating theme-form-floating">
                                <input className="form-control" type="tel" name="mobileNumber" id="mobileNumber" maxLength="10" required
                                value={formData.mobileNumber}
                                onChange={handleChange}/>
                                <label htmlFor="mobileNumber">Phone Number</label>
                                <span className="position-absolute" style={{ color: "red" }}>{errors.mobileNumber}</span>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="form-floating theme-form-floating">
                                <input type="text" className="form-control" id="houseNo" name="houseNo" required
                                value={formData.houseNo}
                                onChange={handleChange}/>
                                <label htmlFor="houseNo">House Number</label>
                                <span className="position-absolute" style={{ color: "red" }}>{errors.houseNo}</span>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="form-floating theme-form-floating">
                                <input type="text" className="form-control" id="area" name="area" required
                                value={formData.area}
                                onChange={handleChange}/>
                                <label htmlFor="area">Area</label>
                                <span className="position-absolute" style={{ color: "red" }}>{errors.area}</span>
                                </div>
                        </div>

                        <div className="col-6">
                            <div className="form-floating theme-form-floating">
                                <input type="text" className="form-control" id="landmark" name="landmark" required
                                value={formData.landmark}
                                onChange={handleChange}/>
                                <label htmlFor="landmark">Landmark</label>
                                <span className="position-absolute" style={{ color: "red" }}>{errors.landmark}</span>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="form-floating theme-form-floating">
                                <CountrySelect className="country-input" id="country" name="country" required onChange={handleCountryChange} placeHolder="Select Country"
                            value={formData.country} />
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="form-floating theme-form-floating">
                                <StateSelect className="form-control" id="state" name="state" required countryid={countryid} onChange={handleStateChange} placeHolder="Select State" value={formData.state}/>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="form-floating theme-form-floating">
                                <CitySelect countryid={countryid} id="city" name="city" required stateid={stateid} onChange={handleCityChange} placeHolder="Select City" 
                            value={formData.city}/>
                            </div>
                        </div>

                        <div className="col-xxl-6">
                            <div className="form-floating theme-form-floating">
                                <input type="text" className="form-control" id="zipCode" name="zipCode" required value={formData.zipCode} onChange={handleChange}/>
                                <label htmlFor="zipCode">Pin Code</label>
                                <span className="position-absolute" style={{ color: "red" }}>{errors.zipCode}</span>
                            </div>
                        </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary btn-md" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn theme-bg-color btn-md text-white" data-bs-dismiss="modal" onClick={(e) => {
    e.preventDefault();  // Ensure that the event object is passed and preventDefault is called
    handleFormSubmit(e);
    handleCloseModal();
  }}>
                      Save Changes</button>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Add address modal box end --> */}
    </>
  )
}

export default AddAddressModal