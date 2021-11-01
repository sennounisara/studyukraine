import { useRouter } from 'next/router'

export default function Page(){
    const router = useRouter()
    const slug = router.query.slug || []
    return <div>
        <h1>THe slug is :</h1>
        <h1>{slug}</h1>
    </div>
}


export async function getServerSideProps(context) {
    const { slug } = context.query;


    return {
        props: {

        }, // will be passed to the page component as props
    };
}



