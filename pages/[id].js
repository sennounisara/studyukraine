import { useRouter } from 'next/router'
import client from "../client";

export default function Page(){
    const router = useRouter()
    const id = router.query.id || []
    return <div>
        <h1>THe slug is :</h1>
        <h1>{id}</h1>
    </div>
}


export async function getServerSideProps(context) {
    const { id } = context.query;
    var data_inscription = await client.fetch("*[_type=='inscription'][0]{url}");
    return {
        props: {

        }, // will be passed to the page component as props
    };
}



