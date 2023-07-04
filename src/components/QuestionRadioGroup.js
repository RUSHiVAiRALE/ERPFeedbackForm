import React from "react";

const QuestionRadioGroup = ({ question, handleForm }) => {
    return (
        <div className="ques_radios" >
            <h4>{question}</h4>
            <div className="btns">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name={question}
                        id={`${question}-1`}
                        value="Good"
                        onChange={handleForm}
                        required
                    />
                    <label className="form-check-label" htmlFor={`${question}-1`}>
                        Good
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name={question}
                        id={`${question}-2`}
                        value="Better"
                        onChange={handleForm}
                        required
                    />
                    <label className="form-check-label" htmlFor={`${question}-2`}>
                        Better
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name={question}
                        id={`${question}-3`}
                        value="Best"
                        onChange={handleForm}
                        required
                    />
                    <label className="form-check-label" htmlFor={`${question}-3`}>
                        Best
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name={question}
                        id={`${question}-4`}
                        value="Excellent"
                        onChange={handleForm}
                        required
                    />
                    <label className="form-check-label" htmlFor={`${question}-4`}>
                        Excellent
                    </label>
                </div>
            </div>
        </div>
    );
};

export default QuestionRadioGroup;






// -----------------------------
// GPT
// ---------------------------

// import React from "react";

// const QuestionRadioGroup = ({ question, handleForm }) => {
//   return (
//     <div className="ques_radios" onChange={handleForm}>
//       <h4>{question}</h4>
//       <div className="btns">
//         <div className="form-check form-check-inline">
//           <input
//             className="form-check-input"
//             type="radio"
//             name={question}
//             id={`${question}-good`}
//             value="Good"
//           />
//           <label className="form-check-label" htmlFor={`${question}-good`}>
//             Good
//           </label>
//         </div>
//         <div className="form-check form-check-inline">
//           <input
//             className="form-check-input"
//             type="radio"
//             name={question}
//             id={`${question}-better`}
//             value="Better"
//           />
//           <label className="form-check-label" htmlFor={`${question}-better`}>
//             Better
//           </label>
//         </div>
//         <div className="form-check form-check-inline">
//           <input
//             className="form-check-input"
//             type="radio"
//             name={question}
//             id={`${question}-best`}
//             value="Best"
//           />
//           <label className="form-check-label" htmlFor={`${question}-best`}>
//             Best
//           </label>
//         </div>
//         <div className="form-check form-check-inline">
//           <input
//             className="form-check-input"
//             type="radio"
//             name={question}
//             id={`${question}-excellent`}
//             value="Excellent"
//           />
//           <label
//             className="form-check-label"
//             htmlFor={`${question}-excellent`}
//           >
//             Excellent
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuestionRadioGroup;


// -----------------------------
// GPT
// ---------------------------