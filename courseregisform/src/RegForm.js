
import React, { useState } from 'react'
import './Regform.css'
function RegForm() {
    const [firstname, setFirstname] = useState(" ")
    const [lastname, setLastname] = useState(" ")
    const [mobilenumber, setMobnumber] = useState(" ")
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(" ")
    const [confpassword, setConfpassword] = useState(" ")
    const [passwordError, setPasswordError] = useState("false ")
    const [dob, setDob] = useState(" ")
    const [gender, setSelectedOption] = useState(" ")
    const [selectstate, setSelectstate] = useState(" ")
    const [selectcourse, setSelectcourse] = useState(" ")
    const [deliverymode, setSelectedDelivery] = useState(" ")
    const [comments, setComments] = useState(" ")
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);

    };
    const handleOption = (event) => {
        setSelectedDelivery(event.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confpassword) {
            setPasswordError(true);
        }
        else {
            setPasswordError(false);
            console.log("Firstname:", firstname);
            console.log("Lastname:", lastname);
            console.log("Mobilenumber:", mobilenumber);
            console.log("Password:", password);
            console.log("ConfirmPassword:", confpassword);
            console.log("DOB:", dob);
            console.log("Gender:", gender);
            console.log("SelectState:", selectstate);
            console.log("SelectCourse:", selectcourse);
            console.log("DeliveryMode:", deliverymode);
            console.log("Comments:", comments);
            alert('Your response Updated Successfullu:' + firstname);

        }
    };

    return (
        <>
            <form className="registration-Form" onSubmit={handleSubmit}>
                <fieldset>
                    <legend> Personal Information </legend>
                    <div className="form-group">
                        <label htmlFor="firstname">Firstname:</label>
                        <input type="text" placeholder="Enter Your First Name" 
                            id="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Lastname:</label>
                        <input type="text" placeholder="Enter Your Last Name" 
                            id="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobilenumber">Mobilenumber:</label>
                        <input type="text" placeholder="Enter Mobile Number" maxLength={"10"} 
                            id="mobilenumber" value={mobilenumber} onChange={(e) => setMobnumber(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email"  placeholder="Enter Your E=mail" 
                            id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">PassWord:</label>
                        <input type="password" placeholder="Enter Your PassWord" maxLength={"10"} 
                            id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confpassword"> Confirm PassWord:</label>
                        <input type="password" placeholder="Enter Your onfirm PassWord" maxLength={"10"} 
                            id="confpassword" value={confpassword} onChange={(e) => setConfpassword(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">Date-Of-Birth:</label>
                        <input type="date"
                            id="dob" value={dob} onChange={(e) => setDob(e.target.value)} required />
                    </div>

                    <div className=" form-group1">
                        <label htmlFor="gender">Gender: </label>
                        <input className="gender" type="radio" value=" Male"
                            checked={gender === "Male"} onChange={handleOptionChange} />
                        <label> Male </label>
                        <input className="gender" type="radio" value="Female"
                            checked={gender === "Female"} onChange={handleOptionChange} />
                        <label>Female</label>
                        <input className="gender" type="radio" value="Others"
                            checked={gender === "Others"} onChange={handleOptionChange} />
                        <label> Others</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="selectstate">SelectState:</label>
                        <select id="selectstate" value={selectstate}
                            onChange={(e) => setSelectstate(e.target.value)} required >
                            <option></option>
                            <option> Mahrastra</option>
                            <option> Delhi</option>
                            <option>Kerala</option>
                            <option> Uttar pradesh</option>
                            <option>Andra Pradesh</option>
                        </select>
                    </div>
                </fieldset>

                <fieldset>
                    <legend> Information </legend>
                    <div className="form-group">
                        <label htmlFor="selectcourse">SelectCourse:</label>
                        <select id="selectcourse" value={selectcourse}
                            onChange={(e) => setSelectcourse(e.target.value)} required >
                            <option></option>
                            <option>Java FullStack</option>
                            <option>Python FullStack</option>
                            <option>Software Testing</option>
                            <option>DataScience</option>
                            <option>Machine learning</option>
                        </select>
                    </div>

                    <div className=" form-group1">
                        <label htmlFor="deliverymode">DeliveryMode: </label>
                        <input className="delivery" type="radio" value="Online"
                            checked={deliverymode === "Online"} onChange={handleOption} />
                        <label> Online </label>
                        <input className="delivery" type="radio" value="Offline"
                            checked={deliverymode === "Offline"} onChange={handleOption} />
                        <label>Offline</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="comments"> Comments:</label>
                        <textarea id="comments" value={comments}
                            onChange={(e) => setComments(e.target.value)} required >
                        </textarea>
                    </div>
                </fieldset>
                <br></br>
                {passwordError && <p className="warning">*Password do not match*</p>}
                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default RegForm