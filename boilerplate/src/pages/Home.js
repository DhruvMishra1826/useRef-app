import { useRef,useState } from "react";
import "./Home.css";
import Modal from "./Modal";

const Home = () =>{
    const name = useRef();
    const city = useRef();
    const hobby = useRef();
    const college = useRef();
    const [flag,setFlag] = useState(false);

    const funcn = () =>{
       const nam = name.current.value;
       const cit = city.current.value;
       const hobb = hobby.current.value;
       const colleg = college.current.value;

        if (nam.length==0){
                alert(`Please enter your name`);
        }
        else if (cit.length==0){
                alert(`Please enter where you live`);
        }
        else if(hobb.length==0){
                alert(`Please enter your hobby :(`);
        }
        else if (colleg.length==0){
                alert(`Please let me know your college too!! : )`);
        }
        else{
               setFlag(true);
        }
        
    }
 
    return (
        <div className="screen">
           <div className="container">
              <img src="./friends.png" alt="" className="friends" />
              <h1 className="head">Hey!! Tell me something about you</h1>
              <form className="form"> 
                  <input ref={name} type="text" className="name" placeholder="Your name" required/>
                  <input ref={city} type="text" className="city" placeholder="City where you live"/>
                  <input ref={hobby} type="text" className="hobbies" placeholder="Your hobbies"/>
                  <input ref={college} type="text" className="college" placeholder="Your college name"/>
              </form>
              <button className="btn" onClick={funcn} name="Let me know you!!">Let me know you!!</button>
              {
                  flag ? <Modal name={name.current.value}
                                city={city.current.value}
                                hobby={hobby.current.value}
                                college={college.current.value}
                  /> : null
              }
              
           </div>
           
        </div>
    )
}

export default Home;