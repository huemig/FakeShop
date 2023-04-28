import {useQuery} from '@tanstack/react-query';
import Axios from 'axios';

export const Contact =()=>{
    const { data , isLoading, isError, refetch} = useQuery(["cat"], () => {
        return Axios.get('https://catfact.ninja/fact').then((res) => res.data);
    });
    if (isError) {
        return <h1>Errpor </h1>
    }
    if (isLoading){
        return <h1>loading...</h1> 
    }

    return ( 
      <h1> 
        support: {data?.fact}
        <button onClick={refetch}>UPdate Data</button>
      </h1>
    )
}
