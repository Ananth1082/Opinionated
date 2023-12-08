import { addPostToDB } from "../Firebase Configaration/FirestoreDB";
import "./feedback.css"
import { useState } from "react";

export default function Feedback() {
    const [feedback, setFeedback] = useState("")
    function handleInputChange(event) {
        setFeedback(event.target.value)
    }
    function postButtonPressed() {
        addPostToDB(feedback,"feedback")
    }
    return (
        <>
            <div id="feedback-container"><h2 className="feedback-title">Feedback</h2>
                <p >How was your experience with the website? Share your thoughts </p>
                <textarea onChange={handleInputChange} value={feedback} name="" id="" cols="30" rows="10"></textarea>

                <button className="feedback-submit" onClick={postButtonPressed}>Submit</button>
            </div>

        </>
    )
}