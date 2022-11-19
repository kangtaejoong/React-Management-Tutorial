export default function CustomerProfile(props){
    return (
        <div>
            <img src={props.image} alt="profile"/>
            <h2>{props.name}({props.id})</h2>
        </div>
    )
}