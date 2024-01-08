import React from "react";
import UserContext from "../utils/UserContext";
//this is way to define a class based component in react.
//React.component is a class that provided by react and Userclass is uses some property of the React.component class so we extend that class.
class Userclass extends React.Component {
 //props ne handle karva mate class based component ma aavu constructor banavu pade jema as a parameter tarike props aave
  constructor(props)
  {
    //props ne handle karva mate aa super lakhvu jaruri che
    super(props);
    console.log(props);
    //uper na console ma props no object print thase {name:"tejpatel(class)",location:"dhansura(class)"}

    //aa rite aapde class based component ma state variable ne create kari sakie means object banavano ane ema jetla state variable banava hoy e banavana ane ene default value je aapvi hoy e aapi devani
    this.state={
        // count:0,
        // count1:1
        userInfo:{
            name:"name",
            location:"location"
        }
    }
  }
  async componentDidMount()
  {
    const data =await fetch("https://api.github.com/users/Tejpatel1806");
    const jsondata =await data.json();
    console.log(jsondata);
    this.setState({
        userInfo:{
            name:jsondata.name,
            location:jsondata.company
        }
    })
  }


  //aama je render method che tema aapde JSX code lakhsu je aapde display karava magta hoy te
  //ane render method che te JSX code return kare je aapde display karavano hoy te
  render() {
    return (
      <div className="user-card">
        {/* //aa rite aapde state variable ne access kari sakie */}
        {/* <h1>{this.state.count}</h1>
        <h1>{this.state.count1}</h1> */}
        {/* //props ne use krva mate aam this.props.propertyname aam lakhvu pade this jaruri che lakhvu ena vagar error aavse */}
        {/* <h2>Name:{this.props.name}</h2>
        <h3>Location:{this.props.location}</h3>
        <h3>Contact:-tejpatel1806@gmail.com</h3> */}
        {/* <button onClick={()=>{
            //class based component ma aapde aa niche ni rite state variable ni value change kari sakie ane aama pan jevi state variable ni value change thase ke tarat j component re-render thase setState method che jeni andar object jay je aapde this.state ma moklyo che te ane ema jeni value aapde change karvani hoy eni karvani
           this.setState({
            count:this.state.count+1,
           })
        }}>Increase count in class</button> */}
        <h2>Name is:- {this.state.userInfo.name}</h2>
        <h2>Company is:- {this.state.userInfo.location}</h2>

        {/* //aa rite context no data aapde class based component ma use kari sakie chie UserContext ne aapde uper import karyu che have .consumer kari aapde ema aapde callback function lakhvanu ane e callback function ma parameter tarike data aavse je UserContext no data hase  */}
        <UserContext.Consumer>
          {(data)=><h1>LoggedInuser is :- {data.loggedInuser}</h1>}
        </UserContext.Consumer>


      </div>
    );
  }
}
export default Userclass;
