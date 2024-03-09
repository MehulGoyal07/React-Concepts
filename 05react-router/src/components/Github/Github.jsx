import React from 'react';
// import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

function Github(props) {

    const data = useLoaderData();

    // const {id} = useParams();

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/${id}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data);
    //     })
    // }, [])
    

    return (
        <div className='text-center m-4 vg bg-gray-600 text-white p-4 text-3xl'>
            {/* Github Followers: {data?.followers}  */}
            {/* <img src={data?.avatar_url} alt="" width={300}/> */}
        </div>
    );
}

export default Github;

export const githubInfoLoader = async() => {
    const response = await fetch(`https://api.github.com/users/mehulgoyal07`)
    return response.json();
}