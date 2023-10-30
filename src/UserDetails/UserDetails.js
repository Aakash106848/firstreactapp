import { Component } from "react";
import "./UserDetails.css";
class UserDetails extends Component {
    constructor()
    {
        super();
        this.state={
            firstName:"Unknown",
            lastName :"Unknown"
        }
        this.updateFirstName=this.updateFirstName.bind(this);
        this.updateLastName=this.updateLastName.bind(this);
    }
    updateFirstName(event)
    {   
        console.log(event.target.value);
        this.setState({firstName:event.target.value});
    }
    updateLastName(event)
    {   
        console.log(event.target.value);
        this.setState({lastName:event.target.value});
    }
    render() {
        return (
            <div className="user-details">
                <fieldset>
                    <legend>User Details</legend>
                    <form>
                        <label>First Name</label><input type="text"onBlur={this.updateFirstName} name="firstName" /><br />
                        <label>Last Name</label><input type="text" onBlur={this.updateLastName} name="lastName"/><br />
                        <input type="button" value="Save"/>
                        <b>Your FullName :  {this.state.firstName}&nbsp;{this.state.lastName}</b>
                    </form>
                </fieldset>
            </div>
        );
    }
}
export default UserDetails;