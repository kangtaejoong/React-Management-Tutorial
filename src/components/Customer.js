import CustomerInfo from "./CustomerInfo";
import CustomerProfile from "./CustomerProfile";

export default function Customer(props){
    return (
        <div>
            <CustomerProfile id={props.id} image={props.image} name={props.name}/>
            <CustomerInfo birthday={props.birthday} gender={props.gender} job={props.job}/>
        </div>
    )
}