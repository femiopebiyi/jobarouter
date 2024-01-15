import { useLoaderData, useParams } from "react-router-dom"

 

export default function CareerDetails(){

    // const {id} = useParams()
    const career = useLoaderData()


    return <div className="career-details">
        <h2>Career Details for {career.title}</h2>
        <p>Starting salary:{career.salary}</p>
        <p>Location:{career.location}</p>
        <div className="details">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor assumenda, itaque nesciunt alias voluptatum nobis blanditiis eos officiis aperiam earum eum vel quas odio optio</p>
        </div>
    </div>
}

//loader function

export const careersDetailsLoader = async ({params})=>{
    const {id} = params

    const res = await fetch("http://localhost:4000/careers/" + id)

    return res.json()
}