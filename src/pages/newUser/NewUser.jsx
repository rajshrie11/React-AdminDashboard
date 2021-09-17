import './newUser.css';

export default function NewUser() {
    return (
     <div className="newUser">
      <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>Username</label>
            <input type="text" placeholder="jason" /> 
          </div>  
          <div className="newUserItem">
            <label>Full Name</label>
            <input type="text" placeholder="Jason Mamoa" /> 
          </div> 
          <div className="newUserItem">
            <label>Email</label>
            <input type="email" placeholder="jasonm77@gmail.com" /> 
          </div> 
          <div className="newUserItem">
            <label>Password</label>
            <input type="password" placeholder="password" /> 
          </div> 
          <div className="newUserItem">
            <label>Phone</label>
            <input type="number" placeholder="+1 234 567 89" /> 
          </div> 
          <div className="newUserItem">
            <label>Address</label>
            <input type="text" placeholder="New York | USA" /> 
          </div> 
          <div className="newUserItem">
            <label>Gender</label>
            <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" /> 
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" /> 
            <label for="female">Female</label>
            </div>
          </div> 

        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>  
          </select>
        </div>  
        <button type="" className="newUserButton">Create</button>
            
        </form>
      </div>    
    </div>
    )
}
