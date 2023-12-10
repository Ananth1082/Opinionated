import "./profile.css"

export default function Profile({data}){
    return (
        <div style={{background:"white"}}><h1>{data.displayName}</h1></div>
        
    )
}