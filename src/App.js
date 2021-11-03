
import './App.css';

export default function App() {
  const mod=[
    {
      type:"FREE",
      price:"$0",
      user:"✔ Single User",
      storage:"✔ 5GB Storage",
      pubproject:"✔ Unlimited Public Projects",
      community:"✔ Comminty Access",
      priproject:"❌ Unlimited Private project",
      support:"❌ Dedicated Phone Support",
      domain:"❌ Free Subdomain",
      status:"❌ Monthly Status Support",
    },
    {
      type:"PLUS",
      price:"$9",
      user:"✔ 5 User",
      storage:"✔ 50GB Storage",
      pubproject:"✔ Unlimited Public Projects",
      community:"✔ Comminty Access",
      priproject:"✔ Unlimited Private project",
      support:"✔ Dedicated Phone Support",
      domain:"✔ Free Subdomain",
      status:"❌ Monthly Status Support",
    },
    {
      type:"PRO",
      price:"$49",
      user:"✔ Unlimited User",
      storage:"✔ 150GB Storage",
      pubproject:"✔ Unlimited Public Projects",
      community:"✔ Comminty Access",
      priproject:"✔ Unlimited Private project",
      support:"✔ Dedicated Phone Support",
      domain:"✔ Unlimited Free Subdomain",
      status:"✔ Monthly Status Support",
    },
  ]

  return(
    <div className="App">
      
       {mod.map(obj=> <Print type={obj.type} price={obj.price} user={obj.user} storage={obj.storage} 
       pubproject={obj.pubproject} community={obj.community} priproject={obj.priproject} support={obj.support}
       domain={obj.domain} status={obj.status}
        />)}
        
    </div>
  )
}

function Print({type,price,user,storage,pubproject,community,priproject,support,domain,status}){
  const dis={opacity:0.5};
  const bld={"font-weight":"bold"};
  if(type==="PRO"){
    return (
  
    <div className="phone">
      <div className="space">
        
           <h4>{type}</h4>
           <h1>{price}</h1>/month<hr></hr>
           <p style={bld}>{user}</p>
           <p>{storage}</p>
           <p>{pubproject}</p>
           <p>{community}</p>
           <p >{priproject}</p>
           <p>{support}</p>
           <p>{domain}</p>
           <p>{status}</p>
        </div>
           <button>BUTTON</button>
    </div>
  )
    }
    else if(type==="FREE"){
      return (
  
        <div className="phone">
          <div className="space">
            
               <h4>{type}</h4>
               <h1>{price}</h1>/month<hr></hr>
               <p>{user}</p>
               <p>{storage}</p>
               <p>{pubproject}</p>
               <p>{community}</p>
               <p style={dis}>{priproject}</p>
               <p style={dis}>{support}</p>
               <p style={dis}>{domain}</p>
               <p style={dis}>{status}</p>
            </div>
               <button>BUTTON</button>
        </div>
      )
    }
    else if(type==="PLUS"){
      return (
  
        <div className="phone">
          <div className="space">
            
               <h4>{type}</h4>
               <h1>{price}</h1>/month<hr></hr>
               <p style={bld}>{user}</p>
               <p>{storage}</p>
               <p>{pubproject}</p>
               <p>{community}</p>
               <p>{priproject}</p>
               <p>{support}</p>
               <p>{domain}</p>
               <p style={dis}>{status}</p>
            </div>
               <button>BUTTON</button>
        </div>
      )
    }
}
 
