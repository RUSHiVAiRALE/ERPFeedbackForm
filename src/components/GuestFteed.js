import React from "react";
let count = 1;

const CreateQue=(question,c)=>{
    return (
        <div>
            <h4>{c=c+1}) {question}</h4>
                    <div style={{
                        display:"flex",
                        flexDirection:"row",
                        alignItems:"center",
                        justifyContent:"space-evenly"
                    }}>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name={question} id="inlineRadio1" value="Good"/>
                        <label class="form-check-label" for="inlineRadio1">Good</label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name={question} id="inlineRadio2" value="Better"/>
                        <label class="form-check-label" for="inlineRadio2">Better</label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name={question} id="inlineRadio3" value="Best"/>
                        <label class="form-check-label" for="inlineRadio3">Best</label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name={question} id="inlineRadio3" value="Excellent"/>
                        <label class="form-check-label" for="inlineRadio3">Excellent</label>
                        </div>
                    </div>
        </div>
    )
}


const GuestFeed = () => {
    const qArray=[
        "What is your name and what company/organization do you represent?",
        "What was the topic of your presentation?",
        "How would you rate the overall organization and communication leading up to the event?",
        "How would you rate the quality of the venue and technology used during the event?",
        "How would you rate the audience engagement and participation during your presentation?",
        "How would you rate the overall format and schedule of the event?",
        "How would you rate the overall quality of the questions asked by the audience?",
        "How would you rate the support provided by the event organizers during your presentation?",
        "How would you rate the length of time allotted for your presentation?",
        "How would you rate the catering and refreshments provided during the event?",
]

    return (
            <div class="wrapper centered">
                <div class="side">
                    <h1>Industry Guest Feedback</h1>
                    <br></br>
                    <br></br>
                    <br></br>
                    {/* our form starts from here */}
                <form>
                    {qArray.map(CreateQue,count)}
                    <button type="submit">Submit</button>
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
                <div class="envelope front"></div>
            <div class="envelope back"></div>
        </div>
    );
}

export default GuestFeed;