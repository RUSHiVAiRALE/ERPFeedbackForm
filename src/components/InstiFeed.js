// import React, { useState } from "react";
// import '../App.css'
// let count = 1;


// const CreateQue = (question, c) => {

//     const [form, setForm] = useState({});

//     const handleForm = (e) => {
//         // console.log(e.target.name, e.target.value);
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value
//         })
//     }


//     return (
//         <div className='ques_radios' onChange={handleForm}>
//             {/* <div className='que'>
//                 <span id='sr_no'><h4> {c = c + 1}. </h4></span>
//                 <span>  <h4> {question}</h4></span>
//             </div> */}
//             <h4>{c = c + 1}. {question}</h4>

//             <div className='btns' >
//                 <div className="form-check form-check-inline">
//                     <input className="form-check-input" type="radio" name={question} id="inlineRadio1" value="Good" />
//                     <label className="form-check-label" htmlFor="inlineRadio1">Good</label>
//                 </div>
//                 <div className="form-check form-check-inline">
//                     <input className="form-check-input" type="radio" name={question} id="inlineRadio2" value="Better" />
//                     <label className="form-check-label" htmlFor="inlineRadio2">Better</label>
//                 </div>
//                 <div className="form-check form-check-inline">
//                     <input className="form-check-input" type="radio" name={question} id="inlineRadio3" value="Best" />
//                     <label className="form-check-label" htmlFor="inlineRadio3">Best</label>
//                 </div>
//                 <div className="form-check form-check-inline">
//                     <input className="form-check-input" type="radio" name={question} id="inlineRadio3" value="Excellent" />
//                     <label className="form-check-label" htmlFor="inlineRadio3">Excellent</label>
//                 </div>
//             </div>
//         </div>
//     )
// }


// const InstitutionalFeed = () => {



//     const qArray = [
//         "How would you rate your overall satisfaction with the program/institution so far?",
//         "How would you rate the quality of instruction and teaching during your time in the program/institution?",
//         "How would you rate the relevance and usefulness of the program/institution to your current professional goals?",
//         "How would you rate the level of support and guidance provided by the program/institution so far?",
//         "How well has the program/institution prepared you for your career or further studies?",
//         // "How satisfied are you with the resources and facilities provided by the program/institution?",
//         // "What suggestions do you have for improving the program/institution for the remainder of the term and beyond?",
//         // "How satisfied are you with the level of technological resources and support provided by the program/institution?",
//         // "How satisfied are you with the level of student services and support provided by the program/institution?",
//         // "How satisfied are you with the level of diversity and inclusivity within the program/institution?"
//     ]


//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const response = await fetch('http://localhost:8080/demo',{
//             method:'POST',
//             body:data,
//         })
//         const data = await response.text;
//         console.log(data);

//     }

//     return (
//         <div>
//             <div className='main'>
//                 <h1 >Institutional Feedback Form</h1>
//                 <br></br>
//                 <br></br>
//                 <br></br>
//                 {/* our form starts from here */}

//                 <form onSubmit={handleSubmit}>
//                     {/* <p>{JSON.stringify(form)}</p> */}
//                     {qArray.map(CreateQue, count)}
//                     <div>
//                         <button className='submit_btn' type="submit">Submit</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default InstitutionalFeed;






import React, { useState } from "react";
import QuestionRadioGroup from "./QuestionRadioGroup";
import "../App.css";

const InstitutionalFeed = () => {

    const [form, setForm] = useState({});
    
    const qArray = [
        "How would you rate your overall satisfaction with the program/institution so far?",
        "How would you rate the quality of instruction and teaching during your time in the program/institution?",
        "How would you rate the relevance and usefulness of the program/institution to your current professional goals?",
        "How would you rate the level of support and guidance provided by the program/institution so far?",
        "How well has the program/institution prepared you for your career or further studies?",
        // Add more questions here
    ];

    const handleForm = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;
        const {name , value} = e.target;
        setForm({
            ...form,
            [name]:value,
        });
        // setForm((values) => ({
        //     ...values,
        //     [name]: value
        // }));
        // console.log(e.target.name,e.target.value);
        // console.log(e);

    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log(form);

        const body = {
            question: form.question,
            answer: form.answer,
        }

        const response = await fetch("http://localhost:5656/demo", {
            method: "POST",
            // body: JSON.stringify(body),
            body: "Data ... {Anurag}",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = response;
        console.log(data);
    };

    return (
        <div>
            <div className="main">
                <h1>Institutional Feedback Form</h1>
                <form onSubmit={handleSubmit}>
                {/* <p>{JSON.stringify(form)}</p> */}
                    {qArray.map((question, index) => (
                        <QuestionRadioGroup key={index} question={question} handleForm={handleForm} />
                    ))}
                    <button className="submit_btn" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InstitutionalFeed;


// ------------GPT-----------------
// import React, { useState } from "react";
// import QuestionRadioGroup from "./QuestionRadioGroup";
// import "../App.css";

// const InstitutionalFeed = () => {
//   const [form, setForm] = useState([]);

//   const qArray = [
//     "How would you rate your overall satisfaction with the program/institution so far?",
//     "How would you rate the quality of instruction and teaching during your time in the program/institution?",
//     "How would you rate the relevance and usefulness of the program/institution to your current professional goals?",
//     "How would you rate the level of support and guidance provided by the program/institution so far?",
//     "How well has the program/institution prepared you for your career or further studies?",
//   ];

//   const handleForm = (e, question) => {
//     const updatedForm = form.map((item) => {
//       if (item.question === question) {
//         return { ...item, answer: e.target.value };
//       }
//       return item;
//     });
//     setForm(updatedForm);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5656/demo", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ feedback: form }),
//       });
//       const data = await response.json();
//       console.log(data);
//       // Clear form after successful submission
//       setForm([]);
//     } catch (error) {
//       console.error("Error submitting feedback:", error);
//     }
//   };

//   return (
//     <div>
//       <div className="main">
//         <h1>Institutional Feedback Form</h1>
//         <form onSubmit={handleSubmit}>
//           {qArray.map((question, index) => (
//             <QuestionRadioGroup
//               key={index}
//               question={question}
//               handleForm={(e) => handleForm(e, question)}
//             />
//           ))}
//           <button className="submit_btn" type="submit">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default InstitutionalFeed;

// ------------GPT-----------------


