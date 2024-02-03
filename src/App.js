import React, { useState } from 'react'
import './App.css'

const App = () => {

  const[formData, setFormData] = useState({
                          firstName:"", 
                          lastName:"", 
                          email:"", 
                          country:"", 
                          streatAddress:"",
                          city:"",
                          zip:"", 
                          state:"", 
                          comment:false, 
                          candidate:false, 
                          offer:false, 
                          notification:"", 
                          langauge:"",
})
  console.log(formData)
  const changeHandler = (event)=>{
    const {type, name, checked, value} = event.target
          setFormData((prevFormData)=>{
            return {
              ...prevFormData,
              [name]: type === "checkbox"? checked:value
            }
          })
      
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData)
    alert("Form is successfully submitted")
  }

  return (
    <div className='main'>
     <form onSubmit={handleSubmit} className='form'>
    <div>
      <label htmlFor='firstName' >First Name</label>
      <input type='text'
      name='firstName'
      id='firstName'
      value={FormData.firstName}
      onChange={changeHandler}
      className='input'
      />
    </div>

    <div>
      <label htmlFor='lastName'>Last Name</label>
      <input type='text'
      name='lastNamejjkl;lkjl;'
      id='lastName'
      value={FormData.lastName}
      onChange={changeHandler}
      className='input'
      />
    </div>
    <div>
      <label htmlFor='email'>Email</label>
      <input type='email'
      name='email'
      id='email'
      value={FormData.email}
      onChange={changeHandler}
      className='input'
      />
    </div>
    <div>
      <label htmlFor='country'>Country</label>
      <input type='text'
      name='country'
      id='country'
      value={FormData.country}
      onChange={changeHandler}
      className='input'
      />
    </div>
    <div>
      <label htmlFor='streatAddress'>Streat Address </label>
      <input type='text'
      name='streatAddress'
      id='streatAddress'
      value={FormData.streatAddress}
      onChange={changeHandler}
      className='input'
      />
    </div>
    <div>
      <label htmlFor='city'>City</label>
      <input type='text'
      name='city'
      id='city'
      value={FormData.city}
      onChange={changeHandler}
      className='input'
      />
    </div>
    <div>
      <label htmlFor='state'>State/Province</label>
      <input type='text'
      name='state'
      id='state'
      value={FormData.state}
      onChange={changeHandler}
      className='input'
      />
    </div>
    <div>
      <label htmlFor='zip'>Zip/Pin</label>
      <input type='number'
      name='zip'
      id='zip'
      value={FormData.zip}
      onChange={changeHandler}
      className='input'
      />
    </div>
      <h4>By Email</h4>
    <div>
      <div>
      <input type='checkbox'
      name='comment'
      id='comment'
      value={FormData.comment}
      onChange={changeHandler}
      />
      
      <label htmlFor='comment' className='checkbox-label'>Comment</label>
      <br></br>
      <span>Get notification when someone comments</span>
      </div>
      <div>
      <input type='checkbox'
      name='candidate'
      id='candidate'
      value={FormData.candidate}
      onChange={changeHandler}
      />
      <label htmlFor='candidate' className='checkbox-label'>Candidate</label>
      <br></br>
      <span>Get notification when candidate applies for a job</span>
      </div>
      <div>
      <input type='checkbox'
      name='offer'
      id='offer'
      value={FormData.offer}
      onChange={changeHandler}
      />
      <label htmlFor='offer' className='checkbox-label'>Offer</label>
      <br></br>
      <span>Get notification when someone comments</span>
      </div>

    </div>

    <div>
      <h4>Push Notification</h4>
      <div>
      <input type='radio'
      name='notification'
      id='everything'
      value="everything"
      checked={formData.notification==="everything"}
      onChange={changeHandler}
      />
      <label htmlFor='everything' className='radio-label'>Everything</label>
      </div>
      <div>
      <input type='radio'
      name='notification'
      id='same as email'
      value="same as email"
      checked={formData.notification==="same as email"}
      onChange={changeHandler}
      />
      <label htmlFor='same as email' className='radio-label'>Same as email</label>
      </div>
    </div>
    <div>
      <br></br>
      <label>Select Your Langauge</label>
      <select value={formData.langauge}
      onChange={changeHandler}
      id='langauge'
      name='langauge'
      >
        <option value = "hindi">Hindi</option>
        <option vlaue= "english">English</option>
        <option value="other">Other</option>
      </select>
    </div>
    <button>
         Submit
    </button>
      </form>
    </div>
  )
}

export default App



































// import { useState } from 'react';
// import './App.css';

// function App() {
      
//   // const[firstName, setFirstName] = useState("")
//   // const[lastName, setLastName] = useState("")

//   const[formData, setFormData] = useState({firstName:"", lastName:"", email:"", isVisible:true, comment:"", mode:""})

//   //  console.log(firstName)
//   //  console.log(lastName)


//   // function firstNameHandler(e){
//   //   setFirstName(e.target.value)
    
//   // }
//   // function lastNameHandler(e){
//   //   setLastName(e.target.value)
//   // }
  
//   console.log(formData);
     
  

//     function changeHandler(event){

//          const {type, value, checked, name} = event.target
//       setFormData(prevFormData =>{
//         return {
//           ...prevFormData,
//           [name]:type==="checkbox" ?checked:value,
//         }
//       })

//     }

  

//   const submitHandler = (e)=>{
//     e.preventDefault();
//     // console.log({firstName:firstName, lastName:lastName})
//     console.log(formData)
//   }
  


//   return (
//     <div className="App">

//       <form onSubmit={submitHandler}>

//         <input type='text'
//                name='firstName'
//                value={formData.firstName}
//                placeholder='Enter your first name'
//                onChange={changeHandler}
//                />
//                <br></br>
//         <input type='text'
//                name='lastName'
//                value={formData.lastName}
//                placeholder='Enter your last name'
//                onChange={changeHandler}
//                />
//                <br></br>
//         <input type='email'
//                name='email'
//                value={formData.email}
//                placeholder='Enter your email'
//                onChange={changeHandler}
//                />
//                <br></br>
//         <label htmlFor='Visibility'>Visibility</label>
//         < input 
//               type = "checkbox"
//               name='isVisible'
//               checked={formData.isVisible}
//               id='Visibility'
//               onChange={changeHandler}
//               />
//               <br></br>

//          <textarea
//          placeholder='Enter the comment'
//          name='comment'
//          value={formData.comment}
//          onChange={changeHandler}
         
//         />
//         <br></br>
//        <label htmlFor='favCar'></label>
//        <select value={formData.value} name='favCar' id="favCar" onChange={changeHandler}>
//          <option value="scorpio" >Scorpio</option>
//          <option value="fortuner">Fortuner</option>
//          <option value="Defender">Defender</option>
//          <option value="Lavender">Lavender</option>
//          <option value="BMW">BMW</option>
//        </select>
//        <br></br>
//        <label htmlFor='offline-mode'>Offline Mode</label>
//        <input 
//        type='radio'
//        name='mode'
//        value="offline-mode"
//        checked={formData.mode === "offline-mode" }
//        id='offline-mode'
//        onChange={changeHandler}
//        />

//        <label htmlFor='online-mode'>Online Mode</label>
//        <input 
//            type='radio'
//            value="online-mode"
//            checked ={formData.mode === "online-mode"}
//            id='online-mode'
//            name='mode'
//            onChange={changeHandler}
//            />
//      <button >Save</button>
//       </form>

         
//     </div>
//   );
// }

// export default App;


































































// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [ data, setData] = useState(0);

//   function incrementHandler(){
//     setData(data+1);
//   }

//   const decrementHandler = ()=>{
//     setData(data-1)
//   }

//   let resetHandler=()=>{
//     setData(0);
//   }


//   return (
//     <div>
//       <div>{data}</div>
//       <button onClick={incrementHandler}>Add</button>
//       <button onClick={decrementHandler}>Substract</button>
//       <button onClick={resetHandler}>Reset</button>
//     </div>
//   )
// }

// export default App


