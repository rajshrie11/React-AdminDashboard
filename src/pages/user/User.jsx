import './user.css';
import { PermIdentity, PhoneAndroid, MailOutline, LocationSearching, CalendarToday, Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';
export default function User() {
    return (
        <div className="user">        

        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
            <button className="userAddButton">Create</button>
            </Link>
            
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                    alt="" className="userShowImg" 
                    />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Angel heavens</span>
                        <span className="userShowUserTitle">Software Engineer</span>  
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                    <PermIdentity className="userShowIcon" />
                    <span className="userShowInfoTitle">angel99</span>
                    </div>

                    <div className="userShowInfo">
                    <CalendarToday className="userShowIcon" />
                    <span className="userShowInfoTitle">10.12.1999</span>
                    </div>

                    <span className="userShowTitle">Contact Details</span>

                    <div className="userShowInfo">
                    <PhoneAndroid className="userShowIcon" />
                    <span className="userShowInfoTitle">+1 123 456 67</span>
                    </div>

                    <div className="userShowInfo">
                    <MailOutline className="userShowIcon" />
                    <span className="userShowInfoTitle">angel99@gmail.com</span>
                    </div>

                    <div className="userShowInfo">
                    <LocationSearching className="userShowIcon" />
                    <span className="userShowInfoTitle">New York | USA</span>
                    </div>
                </div>

            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
{/*--------------------- User Updae form ---------------------*/}

                <form className="userUpdteForm">
                  <div className="userUpdateLeft">
                      <div className="userUpdateItem">
                          <label>Username</label>
                          <input type="text" 
                          placeholder="Angel heavens"  
                          className="userUpdateInput" 
                          />  
                      </div>

                      <div className="userUpdateItem">
                          <label>Full Name</label>
                          <input type="text" 
                          placeholder="Angel heavens"  
                          className="userUpdateInput" 
                          /> 
                      </div>

                      <div className="userUpdateItem">
                          <label>Email</label>
                          <input type="text" 
                          placeholder="angel99@gmail.com"  
                          className="userUpdateInput" 
                          />
                      </div>

                      <div className="userUpdateItem">
                          <label>Phone</label>
                          <input type="text" 
                          placeholder="+1 123 456 67"  
                          className="userUpdateInput" 
                          />
                      </div>

                      <div className="userUpdateItem">
                          <label>Address</label>
                          <input type="text" 
                          placeholder="New York | USA"  
                          className="userUpdateInput" 
                          /> 
                      </div>
                  </div>  
                  <div className="userUpdateRight">
                   <div className="userUpdateUpload">
                       <img className="userUpdateImg" 
                       src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                       alt="userimage" 
                       />
                       <label htmlFor="file">
                        <Publish className="userUpdateIcon" />  </label>
                       <input type="file" id="file" style={{display:"none"}} />
                   </div>
                   <button className="userUpdateButton">Update</button>
                  </div>  
                </form>
            </div>       
        </div>
        </div> 
    );
}
