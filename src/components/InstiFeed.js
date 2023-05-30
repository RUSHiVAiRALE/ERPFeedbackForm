import '../App.css'
import React from "react";
let count = 1;


const CreateQue = (question, c) => {
    return (
        <div className='ques_radios'>
            {/* <div className='que'>
                <span id='sr_no'><h4> {c = c + 1}. </h4></span>
                <span>  <h4> {question}</h4></span>
            </div> */}
            <h4>{c = c + 1}. {question}</h4>

            <div className='btns'>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name={question} id="inlineRadio1" value="Good" />
                    <label class="form-check-label" for="inlineRadio1">Good</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name={question} id="inlineRadio2" value="Better" />
                    <label class="form-check-label" for="inlineRadio2">Better</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name={question} id="inlineRadio3" value="Best" />
                    <label class="form-check-label" for="inlineRadio3">Best</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name={question} id="inlineRadio3" value="Excellent" />
                    <label class="form-check-label" for="inlineRadio3">Excellent</label>
                </div>
            </div>
        </div>
    )
}


const InstitutionalFeed = () => {
    const qArray = [
        "How would you rate your overall satisfaction with the program/institution so far?",
        "How would you rate the quality of instruction and teaching during your time in the program/institution?",
        "How would you rate the relevance and usefulness of the program/institution to your current professional goals?",
        "How would you rate the level of support and guidance provided by the program/institution so far?",
        "How well has the program/institution prepared you for your career or further studies?",
        // "How satisfied are you with the resources and facilities provided by the program/institution?",
        // "What suggestions do you have for improving the program/institution for the remainder of the term and beyond?",
        // "How satisfied are you with the level of technological resources and support provided by the program/institution?",
        // "How satisfied are you with the level of student services and support provided by the program/institution?",
        // "How satisfied are you with the level of diversity and inclusivity within the program/institution?"
    ]

    return (
        <div>
            <div className='main'>
                <h1 >Institutional Feedback Form</h1>
                <br></br>
                <br></br>
                <br></br>
                {/* our form starts from here */}
                <form >
                    {qArray.map(CreateQue, count)}
                    <div >
                        <button className='submit_btn' type="submit">Submit</button>
                    </div>
                </form>
            </div>
            {/* <div class="side">
                    <p>
                    <input type="text" placeholder="Your name" />
                    </p>
                    <p>
                    <input type="email" placeholder="Your email" />
                    </p>
                    <p>
                    <button id="sendLetter">Send</button>
                    </p>
                </div> */}
            {/* <div class="envelope front"></div>
            <div class="envelope back"></div> */}
        </div>
    );
}

export default InstitutionalFeed;