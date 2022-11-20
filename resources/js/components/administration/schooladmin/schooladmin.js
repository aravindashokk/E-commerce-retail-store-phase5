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
function SchoolAdmin() {
    const [clubs, setClub] = useState([]);
    const [posts, setPost] = useState([]);
    const [students, setstudents] = useState([]);
    const [businesss, setBusiness] = useState([]);
    useEffect(() => {
        validateSession('SchoolAdmin');
        document.getElementsByClassName('nav-item active')[0].classList.remove('active');
        document.getElementById('authenticationTab').classList.add('active');
    //    getAllstudents();
    updateCustomerTable();
    updateBusinessTable();
    updatePostsTable();
    updateClubsTable();
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

    function deletePosts(elementId) {
        axios({
            method: 'post',
            url: 'http://localhost/wdm_phase4/React/src/api' + '/posts.php',
            headers: {
                'content-type': 'application/json'
            },
            data: { Function: 'deletePosts', Data: { post_ID: elementId } }
        }).then(result => {
            
            posts.splice(posts.findIndex(post => post.post_ID === elementId), 1)
            
            setPost(posts);
            console.log(posts)
            updatePostsTable();
        }).catch(error => {
        });
    }

    function deleteClubs(elementId) {
        axios({
            method: 'post',
            url: 'http://localhost/wdm_phase4/React/src/api' + '/clubs.php',
            headers: {
                'content-type': 'application/json'
            },
            data: { Function: 'deleteClubs', Data: { club_ID: elementId } }
        }).then(result => {
            
            clubs.splice(clubs.findIndex(club => club.club_ID === elementId), 1)
            
            setClub(clubs);
            console.log(clubs)
            updateClubsTable();
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

    function updatePostsTable() {
        axios({
            method: 'post',
            url: 'http://localhost/wdm_phase4/React/src/api' + '/posts.php',
            headers: {
                'content-type': 'application/json'
            },
            data: { Function: 'getAllPosts',Data:{} }
        }).then(result => {
            console.log(result.data);
            setPost(result.data);
            
        }).catch(error => {
        });
    }

    function updateClubsTable() {
        axios({
            method: 'post',
            url: 'http://localhost/wdm_phase4/React/src/api' + '/clubs.php',
            headers: {
                'content-type': 'application/json'
            },
            data: { Function: 'getAllClubs',Data:{} }
        }).then(result => {
            console.log(result.data);
            setClub(result.data);
            
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

    function editPostsColumn(post) {
        posts.map(post => {
            if (post.addpost) {
                post.addpost = false;
            }
        });
        post.editpost = true;
        let index = posts.findIndex(cus => cus.post_ID === post.post_ID);
        posts[index] = post;
        setPost([...posts]);
    }

    function editClubsColumn(club) {
        clubs.map(club => {
            if (club.addclubs) {
                club.addclubs = false;
            }
        });
        club.editclubs = true;
        let index = clubs.findIndex(cus => cus.club_ID === club.club_ID);
        clubs[index] = club;
        setClub([...clubs]);
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

    function addPostColumn() {
        if (posts.find(post => post.addposts)) {
            return;
        }
        let post = {
            post_ID: (1433 || (Number(posts[posts.length - 1].ID) + 1)).toString(),
            creator_ID:'',
            post_desc:'',
            created_date:'',
            addposts: true,
            
        }
        posts.push(post);
        setPost([...posts]);
    }

    function addClubColumn() {
        if (clubs.find(club => club.addclubs)) {
            return;
        }
        let club = {
            club_ID: (9491 || (Number(clubs[clubs.length - 1].ID) + 1)).toString(),
            club_name:'',
            club_email:'',
            school_Id:'',
            club_description:'',
            addclubs: true,
            
        }
        clubs.push(club);
        setClub([...clubs]);
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

    function addOrEditposts(post) {
        axios({
            method: 'post',
            url: 'http://localhost/wdm_phase4/React/src/api' + '/posts.php',
            headers: {
                'content-type': 'application/json'
            },
            data: { Function: (post.editposts ? 'alterRecordp' : 'addNewPost'), Data: post }
        }).then(result => {
            post.editposts = false;
            post.addposts = false;
            setPost(posts);
            updatePostsTable();
        }).catch(error => {
        });
    }

    function addOrEditclubs(club) {
        axios({
            method: 'post',
            url: 'http://localhost/wdm_phase4/React/src/api' + '/clubs.php',
            headers: {
                'content-type': 'application/json'
            },
            data: { Function: (club.editclubs ? 'alterRecords' : 'addNewClub'), Data: club }
        }).then(result => {
            club.editclubs = false;
            club.addclubs = false;
            setClub(clubs);
            updateClubsTable();
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

    function handlePosChange(event, post) {
        const { name, value } = event.target;
        posts.forEach((cus) => {
            if (cus.post_ID === post.post_ID) {
                cus[name] = value;
            }
        });
        setPost([...posts]);
    }

    function handleCluChange(event, club) {
        const { name, value } = event.target;
        clubs.forEach((cus) => {
            if (cus.club_ID === club.club_ID) {
                cus[name] = value;
            }
        });
        setClub([...clubs]);
    }

    const data = {
        labels: [
          'Student',
          'BusinessOwner',
          'Posts',
          'Clubs'
        ],
        datasets: [{
          data: [3, 5, 4,2],
          backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FFFF00',
          ],
          hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FFFF00.',
          ]
        }]
      };
    

    return (
        <section className='administration-bg hide-section'>
            {/* Header section title */}
            <div className="container" id="heading-container">
                <div className="font-oswald heading"> School Admin  </div>
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

                    {/* Manage Posts table  */}
                    <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Posts </span>
                        <div className="table-container">
                        <table id="posts-table" className="material-table">
                                <tbody>
                                    <tr>
                                        <th>Post_ID</th>
                                        <th>Creator_ID</th>
                                        <th>Post_Description</th>
                                        <th>Created_Date</th>
                                        <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                            onClick={() => addPostColumn()} src={add} height="13px"
                                            width="13px" alt='add records' /></th>
                                    </tr>

                                    {posts.map(post => {
                                        if ((post.editposts || post.addposts))
                                        return (<tr>
                                            <td><input type="text" id="post_ID" name="post_ID" className="font-roboto" placeholder="Post ID" value={post.post_ID} onChange={(event) => handlePosChange(event, post)}  /></td>
                                            <td><input type="text" id="creator_ID" name="creator_ID" className="font-roboto" placeholder="Creator ID" value={post.creator_ID} onChange={(event) => handlePosChange(event, post)}  /></td>
                                            <td><input type="text" id="post_desc" className="font-roboto" name="post_desc" placeholder="description" value={post.post_desc} onChange={(event) => handlePosChange(event, post)}  /></td>
                                            <td><input type="date" id="created_date" className="font-roboto" name="created_date" placeholder="created_date" value={post.created_date} onChange={(event) => handlePosChange(event, post)}  /></td>
                                            <td>
                                                <span className="action-icons">
                                                    <img src={confirmIcon} onClick={() => addOrEditposts(post)} title="Confirm" />
                                                    <img src={discardIcon} onClick={() => post.editposts = false} title="Cancel" />
                                                </span></td>
                                        </tr>);
                                    else return (
                                        <tr>
                                            <td>{post.post_ID}</td>
                                            <td>{post.creator_ID}</td>
                                            <td>{post.post_desc}</td>
                                            <td>{post.created_date}</td>
                                            
                                            <td>
                                                <span className="action-icons">
                                                    <img src={edit} onClick={() => editPostsColumn(post)} title="edit" />
                                                    <img src={deleteIcon} onClick={() => deletePosts(post.post_ID)} title="delete" />
                                                </span>
                                            </td>
                                        </tr>)
                                    })}
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Manage clubs table  */}
                    <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Clubs </span>
                        <div className="table-container">
                        <table id="clubs-table" className="material-table">
                                <tbody>
                                    <tr>
                                        <th>Club_ID</th>
                                        <th>Club_Name</th>
                                        <th>Club_Email</th>
                                        <th>School_ID</th>
                                        <th>Club_Description</th>
                                        <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                            onClick={() => addClubColumn()} src={add} height="13px"
                                            width="13px" alt='add records' /></th>
                                    </tr>

                                    {clubs.map(club => {
                                        if ((club.editclubs || club.addclubs))
                                        return (<tr>
                                            <td><input type="text" id="club_ID" name="club_ID" className="font-roboto" placeholder="club ID" value={club.club_ID} onChange={(event) => handleCluChange(event, club)}  /></td>
                                            <td><input type="text" id="club_name" name="club_name" className="font-roboto" placeholder="club name" value={club.club_name} onChange={(event) => handleCluChange(event, club)}  /></td>
                                            <td><input type="text" id="club_email" className="font-roboto" name="club_email" placeholder="club_email" value={club.club_email} onChange={(event) => handleCluChange(event, club)}  /></td>
                                            <td><input type="text" id="school_Id" className="font-roboto" name="school_Id" placeholder="school_Id" value={club.school_Id} onChange={(event) => handleCluChange(event, club)}  /></td>
                                            <td><input type="text" id="club_description" className="font-roboto" name="club_description" placeholder="description" value={club.club_description} onChange={(event) => handleCluChange(event, club)}  /></td>

                                            <td>
                                                <span className="action-icons">
                                                    <img src={confirmIcon} onClick={() => addOrEditclubs(club)} title="Confirm" />
                                                    <img src={discardIcon} onClick={() => club.editclubs = false} title="Cancel" />
                                                </span></td>
                                        </tr>);
                                    else return (
                                        <tr>
                                            <td>{club.club_ID}</td>
                                            <td>{club.club_name}</td>
                                            <td>{club.club_email}</td>
                                            <td>{club.school_Id}</td>
                                            <td>{club.club_description}</td>
                                            
                                            <td>
                                                <span className="action-icons">
                                                    <img src={edit} onClick={() => editClubsColumn(club)} title="edit" />
                                                    <img src={deleteIcon} onClick={() => deleteClubs(club.club_ID)} title="delete" />
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
                <div className="d-flex flex-direction-column align-items-start section-content">
                    <span className="font-oswald section-header">Report </span>
                    <Doughnut data={data} />

                    {/* Manage students table  */}
                    

                    {/* Manage Pickup/Delivery table  */}
                    {/* <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Pickup / Delivery</span>
                        <div className="table-container">
                            <table id="pickup-table" className="material-table">
                                <tbody>
                                    <tr>
                                        <th>ID</th>
                                        <th>First Nmae</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Phone Number</th>
                                        <th>Subscription</th>
                                        <th>Plan</th>
                                        <th>Day</th>
                                        <th>Address</th>
                                        <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                            onClick={() => { }} src={add} height="13px"
                                            width="13px" alt='add records' /></th>
                                    </tr>
                                    {pickup.map(pickup => (
                                        <tr>
                                            <td>{pickup.ID}</td>
                                            <td>{pickup.First_Name}</td>
                                            <td>{pickup.Last_Name}</td>
                                            <td>{pickup.Email}</td>
                                            <td>{pickup.Phonenumber}</td>
                                            <td>{pickup.subscribe}</td>
                                            <td>{pickup.plan}</td>
                                            <td>{pickup.day}</td>
                                            <td>{pickup.address}</td>
                                            <td>
                                                <span className="action-icons">
                                                    <img src={edit} onClick={() => { }} title="edit" />
                                                    <img src={deleteIcon} onClick={() => deletePickup(pickup.ID)} title="delete" />
                                                </span>
                                            </td>
                                        </tr>))}
                                </tbody>
                            </table>
                        </div>
                    </div> */}
                </div>

                {/* Horizontal row section containing Employee table  */}
                {/* <div className="d-flex flex-direction-row justify-around section-container" id='employee-table-container'>
                    <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Employees</span>
                        <div className="table-container">
                            <table id="employee-table" className="material-table">
                                <tbody>
                                    <tr>
                                        <th>ID</th>
                                        <th>First Nmae</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Created Date</th>
                                        <th>User Type</th>
                                        <th>Address</th>
                                        <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                            onClick={() => { }} src={add} height="13px"
                                            width="13px" alt='add records' /></th>
                                    </tr>
                                    {employee.map(emp => (
                                        <tr>
                                            <td>{emp.ID}</td>
                                            <td>{emp.First_Name}</td>
                                            <td>{emp.Last_Name}</td>
                                            <td>{emp.Email}</td>
                                            <td>{emp.Created_Date}</td>
                                            <td>{emp.User_Type}</td>
                                            <td>{''}</td>
                                            <td>
                                                <span className="action-icons">
                                                    <img src={edit} onClick={() => { }} title="edit" />
                                                    <img src={deleteIcon} onClick={() => deleteEmployee(emp.ID)} title="delete" />
                                                </span>
                                            </td>
                                        </tr>))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
export default SchoolAdmin;