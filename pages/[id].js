import { useRouter } from 'next/router'
import client from "../client";
import HowToRegister from "../src/Admission/howToRegister";
import isObjectNull from "../isObjectNull";
import PageNotFound from "../src/404";
import IntakeTimes from "../src/Admission/intakeTimes";
import CoursesFees from "../src/Admission/coursesFees";

export default function Admission(props){
    const {
        howToRegisterProps,
        intakeTimesProps,
        coursesFeesProps,
    } = props;
    const router = useRouter()
    const id = router.query.id || []
    switch (id){
        case '7c4a8d09ca3762af61e59520943dc26494f8941b' :
            return <HowToRegister admission={howToRegisterProps} />
        case '356a192b7913b04c54574d18c28d46e6395428ab' :
            return <IntakeTimes admission={intakeTimesProps} />;
        case 'da4b9237bacccdf19c0760cab7aec4a8359010b0' :
            return <CoursesFees admission={coursesFeesProps} />;
        case '1b6453892473a467d07372d45eb05abc2031647a' :
            return <HowToRegister admission={howToRegisterProps} />;
        default:
            return <PageNotFound/>
    }
}


export async function getServerSideProps(context) {
    const { id } = context.query;
    const data_howToRegister = await client.fetch("*[_type=='howToRegister'][0]{titlePage,imagePage,idVideoYoutube,listHowToRegister,sousTitreHowToRegister,sousTitre_01,title_01,titreHowToRegister}");
    const data_intakeTimes = await client.fetch("*[_type=='intakeTimes'][0]{titlePage,imagePage,idVideoYoutube,titleIntakeTimes,descriptionIntakeTimes,listProgram,descriptionPart2,listStepToRegister,buttonContactUs}")
    const data_coursesFees = await client.fetch("*[_type=='coursesFees'][0]{titleStudyPrice,titleAnnualCost,descriptionAnnualCost,buttonAnnualCost,titleGeneralMedicineDentistry,universityCharacteristics,titlePreparatoryYear,descriptionPreparatoryYear,buttonPreparatoryYear,listPreparatoryYear,listBranch,paymentMethod,paymentMethodDescription,listOfPayment,tableTitle,tableDescription,headerTable,bodyTable,titleMostFrequentlyQuestion,listQuestion}");

    const howToRegisterProps = {
        titlePage:isObjectNull(data_howToRegister.titlePage),
        imagePage:isObjectNull(data_howToRegister.imagePage),
        idVideoYoutube:isObjectNull(data_howToRegister.idVideoYoutube),
        listHowToRegister:isObjectNull(data_howToRegister.listHowToRegister),
        sousTitreHowToRegister:isObjectNull(data_howToRegister.sousTitreHowToRegister),
        sousTitre_01:isObjectNull(data_howToRegister.sousTitre_01),
        title_01:isObjectNull(data_howToRegister.title_01),
        titreHowToRegister:isObjectNull(data_howToRegister.titreHowToRegister),
    }
    const intakeTimesProps = {
        titlePage:isObjectNull(data_intakeTimes.titlePage),
        imagePage:isObjectNull(data_intakeTimes.imagePage),
        idVideoYoutube:isObjectNull(data_intakeTimes.idVideoYoutube),
        titleIntakeTimes:isObjectNull(data_intakeTimes.titleIntakeTimes),
        descriptionIntakeTimes:isObjectNull(data_intakeTimes.descriptionIntakeTimes),
        listProgram:isObjectNull(data_intakeTimes.listProgram),
        descriptionPart2:isObjectNull(data_intakeTimes.descriptionPart2),
        listStepToRegister:isObjectNull(data_intakeTimes.listStepToRegister),
        buttonContactUs:isObjectNull(data_intakeTimes.buttonContactUs),
    }
    const coursesFeesProps = {
        titleStudyPrice:isObjectNull(data_coursesFees.titleStudyPrice),
        titleAnnualCost:isObjectNull(data_coursesFees.titleAnnualCost),
        descriptionAnnualCost:isObjectNull(data_coursesFees.descriptionAnnualCost),
        buttonAnnualCost:isObjectNull(data_coursesFees.buttonAnnualCost),
        titleGeneralMedicineDentistry:isObjectNull(data_coursesFees.titleGeneralMedicineDentistry),
        universityCharacteristics:isObjectNull(data_coursesFees.universityCharacteristics),
        titlePreparatoryYear:isObjectNull(data_coursesFees.titlePreparatoryYear),
        descriptionPreparatoryYear:isObjectNull(data_coursesFees.descriptionPreparatoryYear),
        buttonPreparatoryYear:isObjectNull(data_coursesFees.buttonPreparatoryYear),
        listPreparatoryYear:isObjectNull(data_coursesFees.listPreparatoryYear),
        listBranch:isObjectNull(data_coursesFees.listBranch),
        paymentMethod:isObjectNull(data_coursesFees.paymentMethod),
        paymentMethodDescription:isObjectNull(data_coursesFees.paymentMethodDescription),
        listOfPayment:isObjectNull(data_coursesFees.listOfPayment),
        tableTitle:isObjectNull(data_coursesFees.tableTitle),
        tableDescription:isObjectNull(data_coursesFees.tableDescription),
        headerTable:isObjectNull(data_coursesFees.headerTable),
        bodyTable:isObjectNull(data_coursesFees.bodyTable),
        titleMostFrequentlyQuestion:isObjectNull(data_coursesFees.titleMostFrequentlyQuestion),
        listQuestion:isObjectNull(data_coursesFees.listQuestion),
    }
    return {
        props: {
            howToRegisterProps,
            intakeTimesProps,
            coursesFeesProps,
        }, // will be passed to the page component as props
    };
}



