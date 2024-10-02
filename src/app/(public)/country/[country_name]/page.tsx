import { countries } from "@/app/data/countries";
import Link from "next/link";

export default function CountryDetails({params}:{params: {country_name :string}}){
    const country = countries.find(c => c.name.toLowerCase() === params.country_name.toLowerCase())
   

    if(!country){
        return<h1 className="text-red-500" >Country is not found</h1> 
        
    }
        return(
            <div className="max-w-2xl mx-auto p-4" >
            <div className="bg-pink-300 shadow-lg rounded-lg p-6" >
                <h1 className="text-3xl font-bold ">{country.name}</h1>
                <p className="mt-2 text-gray-600 " >Capital:{country.capital}</p>
                <p className="mt-2 text-gray-600" >Papulation:{country.population}</p>
                

                <Link href="/country" className="bg-pink-600 mt-2 inline-block text-white-600 font-bold">
           Back to Country List
        </Link>
                
            </div>
            </div>

        )
        
    

}

