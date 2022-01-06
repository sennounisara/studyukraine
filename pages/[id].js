import { useRouter } from 'next/router'
import client from "../client";
import HowToRegister from "../src/Admission/howToRegister";
import isObjectNull from "../isObjectNull";
import PageNotFound from "../src/404";
import IntakeTimes from "../src/Admission/intakeTimes";

export default function Admission(props){
    const {
        howToRegisterProps
    } = props;
    const router = useRouter()
    const id = router.query.id || []
    switch (id){
        case '7c4a8d09ca3762af61e59520943dc26494f8941b' :
            return <HowToRegister admission={howToRegisterProps} />
        case '356a192b7913b04c54574d18c28d46e6395428ab' :
            return <IntakeTimes admission={howToRegisterProps} />;
        case 'da4b9237bacccdf19c0760cab7aec4a8359010b0' :
            return <IntakeTimes admission={howToRegisterProps} />;
        case '1b6453892473a467d07372d45eb05abc2031647a' :
            return <IntakeTimes admission={howToRegisterProps} />;
        default:
            return <PageNotFound/>
    }
}


export async function getServerSideProps(context) {
    const { id } = context.query;
    const data_howToRegister = await client.fetch("*[_type=='howToRegister'][0]{titlePage}");
    const howToRegisterProps = {
        url:isObjectNull(data_howToRegister.url),
        titlePage:isObjectNull(data_howToRegister.titlePage),
    }
    return {
        props: {
            howToRegisterProps,
        }, // will be passed to the page component as props
    };
}



