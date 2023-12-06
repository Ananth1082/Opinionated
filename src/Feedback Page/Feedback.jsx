import "./feedback.css"
export default function Feedback() {
    return (
        <>
            <div id="feedback-container"><h2 className="feedback-title">Feedback</h2>
                <p >How was your experience with the website? Share your thoughts </p>
                <textarea name="" id="" cols="30" rows="10"></textarea>

                <button className="feedback-submit">Submit</button>
            </div>

        </>
    )
}