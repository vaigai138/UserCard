const UserData = [
    {
        name:"Jerald",
        city:"Coimbatore",
        description:"Front-end Developer",
        skills:["UI & UX","Front-end Development","HTML","CSS","JavaScript","React","Node"],
        profile:"images/2.jpg",
        online:true


    },

    {
        name:"Nancy",
        city:"Chennai",
        description:"Web Designer",
        skills:["Node.js","Web Designer","HTML","CSS","JavaScript","React","Angular"],
        profile:"images/3.jpg",
        online:false


    },


    {
        name:"Marcus",
        city:"Tirupattur",
        description:"Full Stact Developer",
        skills:["Next.js","Fullstack Developer","HTML","Angular","JavaScript","Spring boot","Node"],
        profile:"images/1.jpg",
        online:true


    },
    {
        name:"Luna",
        city:"Delhi",
        description:"Software Engineer",
        skills:["AWS","Web Designer","HTML","Angular","JavaScript","Spring boot","Express.js"],
        profile:"images/4.jpg",
        online:false


    }
]

function User(props){
    return <div className="card-container">
        <span className={props.online ? "pro online":"pro offline"}>
            {props.online? "ONLINE":"OFFLINE"}
            </span>
        <img src={props.profile} className="img" alt="User" width="100px"/>
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
                {props.skills.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    </div>

}



export const UserCard = () => {
  return (
    <>
    {UserData.map((user,index)=>(
        <User key={index} name={user.name} 
        city={user.city}
        description={user.description}
        skills={user.skills}
        profile={user.profile}
        online={user.online}
        />
    ))}
    </>
        
    
  )
}

{/* <User name="Jerald" city="Coimbatore" description="Front-end Developer"
        skills={["UI & UX","Front-end Development","HTML","CSS","JavaScript","React","Node"]}
        profile="images/2.jpg" online={true}
        /> */}