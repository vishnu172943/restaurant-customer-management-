let customers = [];
const capacity = 25;
let seatsLeft = 25;
const gRef=React.createRef();
const nRef=React.createRef();
const pRef=React.createRef();



// Create form submit handler here
const handleSubmit=(e)=>{
  e.preventDefault();
  const guestRef=gRef.current.value;
  const nameRef=nRef.current.value;
  const phoneRef=pRef.current.value;
   const now = new Date();
  const options = { 
      timeZone: 'Asia/Kolkata', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric', 
      second: 'numeric', 
      hour12: true 
  };
  const formatter = new Intl.DateTimeFormat('en-IN', options);
  
   const indianDateTime = formatter.format(now);
  
       customers.push({
      guestRef:guestRef,
      nameRef:nameRef,
      phoneRef:phoneRef,
      timex:indianDateTime,
      checkOut: <p>-</p> ,
      status:<button>click to checkout</button>,
      remove:<button onClick={removeGuest(this)}>remove</button>
    }
    ); 
    rootElement.render(<App />);

 }
 const checkoutFun=()=>{
 
 }
 const removeGuest=(obj)=>{
  console.log(obj);
   }
    
const Form=()=>(
  <div>
  <input type="number" placeholder="guest count" ref={gRef}/><br/>
  <input type="text" placeholder="name" ref={nRef}/><br/>
  <input type="text" placeholder="phone number" ref={pRef}/><br/>
  <br/>
  <br/>
  <button onClick={handleSubmit}>Add Entry</button>
  </div>
)

const CurrentCap=()=>(
  <div>
  <h2>Total Capacity: </h2>
  <h2>Seats Left: </h2>
</div>
)

const AllCustomers=()=>(
  <table border="1px" style={{ margin: "auto" }}>
  <thead>
      <tr>
          <th>guest count</th>
          <th>name of guest</th>
          <th>phone number</th>
          <th>check in</th>
          <th>check out</th>
          <th>status</th>
          <th>remove entry</th>
      </tr>
  </thead>
  <tbody>
  {customers.map((res,index)=>{
    return (
      <>
      <tr key={index}>
        <td>{res.guestRef}</td>
        <td >{res.nameRef}</td>
        <td >{res.phoneRef}</td>
        <td >{res.timex}</td>
        <td >{res.checkOut}</td>
        <td >{res.status}</td>
        <td >{res.remove}</td>
     </tr>
      </>
    )
  })}
   </tbody>
  </table>
)

const App = () => (
  <div className="App" style={{ textAlign: "center" }}>
    <CurrentCap/>
    <Form/>
    <AllCustomers/>
  </div>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
