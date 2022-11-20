import React, { useEffect, useState } from "react";
import '../administration.css';
import add from '../../assets/images/plus.png';
import { populateTables } from '../administration';
import validateSession from "../../session/session";
import axios from "axios";
import deleteIcon from '../../assets/images/delete.png';
import confirmIcon from '../../assets/images/tick.png';
import discardIcon from '../../assets/images/close.png';
import edit from '../../assets/images/edit.png';
import {Doughnut} from 'react-chartjs-2';
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
function SuperAdmin() {
    const [students, setstudents] = useState([]);
    const [businesss, setBusiness] = useState([]);
    const [schools, setSchool] = useState([]);
    useEffect(() => {
        validateSession('SuperAdmin');
        document.getElementsByClassName('nav-item active')[0].classList.remove('active');
        document.getElementById('authenticationTab').classList.add('active');
        updateCustomerTable();
        updateBusinessTable(); 
        updateSchoolTable();
    }, []);
    
    function deleteCustomer(elementId) {
        axios({
            method: 'post',
            url: 'http://localhost/wdm_phase4/React/src/api' + '/students.php',
            headers: {
                'content-type': 'application/json'
            },
            data: { Function: 'deleteCustomer', Data: { ID: elementId } }
        }).then(result => {
            
            students.splice(students.findIndex(customer => customer.ID === elementId), 1)
            
            setstudents(students);
            console.log(students)
            updateCustomerTable();
        }).catch(error => {
        });
    }

    function deleteBusiness(elementId) {
        axios({
            method: 'post',
            url: 'http://localhost/wdm_phase4/React/src/api' + '/business.php',
            headers: {
                'content-type': 'application/json'
            },
            data: { Function: 'deleteBusiness', Data: { ID: elementId } }
        }).then(result => {
            
            businesss.splice(businesss.findIndex(business => business.ID === elementId), 1)
            
            setBusiness(businesss);
            console.log(businesss)
            updateBusinessTable();
        }).catch(error => {
        });
    }

    function deleteSchool(elementId) {
        axios({
            method: 'post',
            url: 'http://localhost/wdm_phase4/React/src/api' + '/school.php',
            headers: {
                'content-type': 'application/json'
            },
            data: { Function: 'deleteSchool', Data: { ID: elementId } }
        }).then(result => {
            
            schools.splice(schools.findIndex(school => school.ID === elementId), 1)
            
            setSchool(schools);
            console.log(schools)
            updateSchoolTable();
        }).catch(error => {
        });
    }

    function updateCustomerTable() {
        axios({
            method: 'post',
            url: 'http://localhost/wdm_phase4/React/src/api' + '/students.php',
            headers: {
                'content-type': 'application/json'
            },
            data: { Function: 'getAllstudents',Data:{} }
        }).then(result => {
            console.log(result.data);
            setstudents(result.data);
            
        }).catch(error => {
        });
    }

    function updateBusinessTable() {
        axios({
            method: 'post',
            url: 'http://localhost/wdm_phase4/React/src/api' + '/business.php',
            headers: {
                'content-type': 'application/json'
            },
            data: { Function: 'getAllBusiness',Data:{} }
        }).then(result => {
            console.log(result.data);
            setBusiness(result.data);
            
        }).catch(error => {
        });
    }

    function updateSchoolTable() {
        axios({
            method: 'post',
            url: 'http://localhost/wdm_phase4/React/src/api' + '/school.php',
            headers: {
                'content-type': 'application/json'
            },
            data: { Function: 'getAllSchools',Data:{} }
        }).then(result => {
            console.log(result.data);
            setSchool(result.data);
            
        }).catch(error => {
        });
    }

    
    function editCustomerColumn(customer) {
        students.map(customer => {
            if (customer.addcustomer) {
                customer.addcustomer = false;
            }
        });
        customer.editcustomer = true;
        let index = students.findIndex(cus => cus.ID === customer.ID);
        students[index] = customer;
        setstudents([...students]);
    }

    function editBusinessColumn(business) {
        businesss.map(business => {
            if (business.addbusiness) {
                business.addbusiness = false;
            }
        });
        business.editbusiness = true;
        let index = businesss.findIndex(cus => cus.ID === business.ID);
        businesss[index] = business;
        setBusiness([...businesss]);
    }

    function editSchoolColumn(school) {
        schools.map(school => {
            if (school.addschool) {
                school.addschool = false;
            }
        });
        school.editschool = true;
        let index = schools.findIndex(cus => cus.ID === school.ID);
        schools[index] = school;
        setSchool([...schools]);
    }

    function addCustomerColumn() {
        if (students.find(customer => customer.addcustomer)) {
            return;
        }
        let customer = {
            ID: (100 || (Number(students[students.length - 1].ID) + 1)).toString(),
            First_Name: '',
            Last_Name: '',
            Email: '',
            Phone: '',
            User_Type: '',
            addcustomer: true,
            
        }
        students.push(customer);
        setstudents([...students]);
    }

    function addBusinessColumn() {
        if (businesss.find(business => business.addbusiness)) {
            return;
        }
        let business = {
            ID: (1020 || (Number(businesss[businesss.length - 1].ID) + 1)).toString(),
            First_Name: '',
            Last_Name: '',
            Email: '',
            Phone: '',
            User_Type: '',
            addbusiness: true,
            
        }
        businesss.push(business);
        setBusiness([...businesss]);
    }

    function addSchoolColumn() {
        if (schools.find(school => school.addschool)) {
            return;
        }
        let school = {
            ID: (100 || (Number(schools[schools.length - 1].ID) + 1)).toString(),
            First_Name: '',
            Last_Name: '',
            Email: '',
            Phone: '',
            User_Type: '',
            addschool: true,
            
        }
        schools.push(school);
        setSchool([...schools]);
    }

    function addOrEditCustomer(customer) {
        axios({
            method: 'post',
            url: 'http://localhost/wdm_phase4/React/src/api' + '/students.php',
            headers: {
                'content-type': 'application/json'
            },
            data: { Function: (customer.editcustomer ? 'alterRecord' : 'addNewCustomer'), Data: customer }
        }).then(result => {
            customer.editcustomer = false;
            customer.addcustomer = false;
            setstudents(students);
            updateCustomerTable();
        }).catch(error => {
        });
    }

    function addOrEditBusiness(business) {
        axios({
            method: 'post',
            url: 'http://localhost/wdm_phase4/React/src/api' + '/business.php',
            headers: {
                'content-type': 'application/json'
            },
            data: { Function: (business.editbusiness ? 'alterRecordb' : 'addNewBusiness'), Data: business }
        }).then(result => {
            business.editbusiness = false;
            business.addbusiness = false;
            setBusiness(businesss);
            updateBusinessTable();
        }).catch(error => {
        });
    }

    function addOrEditSchool(school) {
        axios({
            method: 'post',
            url: 'http://localhost/wdm_phase4/React/src/api' + '/school.php',
            headers: {
                'content-type': 'application/json'
            },
            data: { Function: (school.editschool ? 'alterRecordsc' : 'addNewSchool'), Data: school }
        }).then(result => {
            school.editschool = false;
            school.addschool = false;
            setSchool(schools);
            updateSchoolTable();
        }).catch(error => {
        });
    }

    function handleCusChange(event, customer) {
        const { name, value } = event.target;
        students.forEach((cus) => {
            if (cus.ID === customer.ID) {
                cus[name] = value;
            }
        });
        setstudents([...students]);
    }

    function handleBusChange(event, customer) {
        const { name, value } = event.target;
        businesss.forEach((cus) => {
            if (cus.ID === customer.ID) {
                cus[name] = value;
            }
        });
        setBusiness([...businesss]);
    }

    function handleSchChange(event, customer) {
        const { name, value } = event.target;
        schools.forEach((cus) => {
            if (cus.ID === customer.ID) {
                cus[name] = value;
            }
        });
        setSchool([...schools]);
    }

    const data = {
        labels: [
          'Student',
          'BusinessOwner',
          'SchoolAdmin'
        ],
        datasets: [{
          data: [3, 5, 2],
          backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
          ],
          hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
          ]
        }]
      };

    return (
        <section className='administration-bg hide-section'>
            {/* Header section title */}
            <div className="container" id="heading-container">
                <div className="font-oswald heading"> Super Admin  </div>
            </div>

            {/* School admin section tables structure  */}
            <div className="manage-container d-flex flex-direction-column align-items-around justify-evenly">

                {/* Horizontal row section containing multiple tables  */}
                <div className="d-flex flex-direction-row justify-around section-container">

                    {/* Manage Student table  */}
                    <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Students</span>
                        <div className="table-container">
                        <table id="customer-table" className="material-table">
                                <tbody>
                                    <tr>
                                        
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>User_Type</th>
                                        <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                            onClick={() => addCustomerColumn()} src={add} height="13px"
                                            width="13px" alt='add records' /></th>
                                    </tr>

                                    {students.map(customer => {
                                        if ((customer.editcustomer || customer.addcustomer))
                                        return (<tr>
                                            <td><input type="text" id="First_Name" name="First_Name" className="font-roboto" placeholder="First Name" value={customer.First_Name} onChange={(event) => handleCusChange(event, customer)}  /></td>
                                            <td><input type="text" id="Last_Name" name="Last_Name" className="font-roboto" placeholder="Last Name" value={customer.Last_Name} onChange={(event) => handleCusChange(event, customer)}  /></td>
                                            <td><input type="text" id="Email" className="font-roboto" name="Email" placeholder="Email" value={customer.Email} onChange={(event) => handleCusChange(event, customer)}  /></td>
                                            <td><input type="text" id="Phone" className="font-roboto" name="Phone" placeholder="Phone" value={customer.Phone} onChange={(event) => handleCusChange(event, customer)}  /></td>
                                            <td><input type="text" id="User_Type" className="font-roboto" name="User_Type" placeholder="User_Type " value='Student'  /></td>
                                            <td>
                                                <span className="action-icons">
                                                    <img src={confirmIcon} onClick={() => addOrEditCustomer(customer)} title="Confirm" />
                                                    <img src={discardIcon} onClick={() => customer.editcustomer = false} title="Cancel" />
                                                </span></td>
                                        </tr>);
                                    else return (
                                        <tr>
                                            
                                            <td>{customer.First_Name}</td>
                                            <td>{customer.Last_Name}</td>
                                            <td>{customer.Email}</td>
                                            <td>{customer.Phone}</td>
                                            <td>{customer.User_Type}</td>
                                            
                                            <td>
                                                <span className="action-icons">
                                                    <img src={edit} onClick={() => editCustomerColumn(customer)} title="edit" />
                                                    <img src={deleteIcon} onClick={() => deleteCustomer(customer.ID)} title="delete" />
                                                </span>
                                            </td>
                                        </tr>)
                                    })}
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Manage Business Owners table  */}
                    <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Business Owners </span>
                        <div className="table-container">
                        <table id="business-table" className="material-table">
                                <tbody>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>User_Type</th>
                                        <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                            onClick={() => addBusinessColumn()} src={add} height="13px"
                                            width="13px" alt='add records' /></th>
                                    </tr>

                                    {businesss.map(business => {
                                        if ((business.editbusiness || business.addbusiness))
                                        return (<tr>
                                            <td><input type="text" id="First_Name" name="First_Name" className="font-roboto" placeholder="First Name" value={business.First_Name} onChange={(event) => handleBusChange(event, business)} required /></td>
                                            <td><input type="text" id="Last_Name" name="Last_Name" className="font-roboto" placeholder="Last Name" value={business.Last_Name} onChange={(event) => handleBusChange(event, business)} required /></td>
                                            <td><input type="text" id="Email" className="font-roboto" name="Email" placeholder="Email" value={business.Email} onChange={(event) => handleBusChange(event, business)} required /></td>
                                            <td><input type="text" id="Phone" className="font-roboto" name="Phone" placeholder="Phone" value={business.Phone} onChange={(event) => handleBusChange(event, business)} required /></td>
                                            <td><input type="text" id="User_Type" className="font-roboto" name="User_Type" placeholder="User_Type " value='BusinessOwner'  /></td>
                                            <td>
                                                <span className="action-icons">
                                                    <img src={confirmIcon} onClick={() => addOrEditBusiness(business)} title="Confirm" />
                                                    <img src={discardIcon} onClick={() => business.editbusiness = false} title="Cancel" />
                                                </span></td>
                                        </tr>);
                                    else return (
                                        <tr>
                                            <td>{business.First_Name}</td>
                                            <td>{business.Last_Name}</td>
                                            <td>{business.Email}</td>
                                            <td>{business.Phone}</td>
                                            <td>{business.User_Type}</td>
                                            
                                            <td>
                                                <span className="action-icons">
                                                    <img src={edit} onClick={() => editBusinessColumn(business)} title="edit" />
                                                    <img src={deleteIcon} onClick={() => deleteBusiness(business.ID)} title="delete" />
                                                </span>
                                            </td>
                                        </tr>)
                                    })}
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Horizontal row section containing multiple tables  */}
                <div className="d-flex flex-direction-row justify-around section-container" id="manager-actions">

                    {/* Manage SchoolAdmin table  */}
                    <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage School Admin </span>
                        <div className="table-container">
                        <table id="scadmin-table" className="material-table">
                                <tbody>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>User_Type</th>
                                        <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                            onClick={() => addSchoolColumn()} src={add} height="13px"
                                            width="13px" alt='add records' /></th>
                                    </tr>

                                    {schools.map(school => {
                                        if ((school.editschool || school.addschool))
                                        return (<tr>
                                            <td><input type="text" id="First_Name" name="First_Name" className="font-roboto" placeholder="First Name" value={school.First_Name} onChange={(event) => handleSchChange(event, school)} required /></td>
                                            <td><input type="text" id="Last_Name" name="Last_Name" className="font-roboto" placeholder="Last Name" value={school.Last_Name} onChange={(event) => handleSchChange(event, school)} required /></td>
                                            <td><input type="text" id="Email" className="font-roboto" name="Email" placeholder="Email" value={school.Email} onChange={(event) => handleSchChange(event, school)} required /></td>
                                            <td><input type="text" id="Phone" className="font-roboto" name="Phone" placeholder="Phone" value={school.Phone} onChange={(event) => handleSchChange(event, school)} required /></td>
                                            <td><input type="text" id="User_Type" className="font-roboto" name="User_Type" placeholder="User_Type " value='SchoolAdmin'  /></td>
                                            <td>
                                                <span className="action-icons">
                                                    <img src={confirmIcon} onClick={() => addOrEditSchool(school)} title="Confirm" />
                                                    <img src={discardIcon} onClick={() => school.editschool = false} title="Cancel" />
                                                </span></td>
                                        </tr>);
                                    else return (
                                        <tr>
                                            <td>{school.First_Name}</td>
                                            <td>{school.Last_Name}</td>
                                            <td>{school.Email}</td>
                                            <td>{school.Phone}</td>
                                            <td>{school.User_Type}</td>
                                            
                                            <td>
                                                <span className="action-icons">
                                                    <img src={edit} onClick={() => editSchoolColumn(school)} title="edit" />
                                                    <img src={deleteIcon} onClick={() => deleteSchool(school.ID)} title="delete" />
                                                </span>
                                            </td>
                                        </tr>)
                                    })}
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Report </span>
                        <Doughnut data={data} />
                    </div>
                </div>
                

                

                    
                
            </div>
        </section>
    );
}
export default SuperAdmin;