
import React from 'react';
import ReactDOM from 'react-dom';

const Info=(props)=>(
    <div>
    <p>this is info details {props.info}</p>
    </div>
);


const withAdminMessage=(WrappedComponent)=>{
    return (props)=>(
        
        <div>
            <WrappedComponent info="this is info" />
            
        </div>
    )  
};


const Authentication=(WrappedComponent)=>{
    return (props)=>(
        <div>
        {console.log(props)}
          {props.isAuth?(
              <WrappedComponent {...props}/>
          ):(
              <p>Please login </p>
          )}
           
        </div>
    )
}

const IsAuthenticate= Authentication(Info);

// const AdminMessage=withAdminMessage(Info);



// ReactDOM.render(<AdminMessage info="this is info details" />,document.getElementById("app"));
ReactDOM.render(<IsAuthenticate isAuth={true} info="this is my info"/>,document.getElementById("app"));