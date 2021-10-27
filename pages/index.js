import Head from 'next/head'
import styles from '../styles/Home.module.css'
import StudyToUkraine from '../src/studyToUkraine'
import Inscription from '../src/inscription'
import isObjectNull from "../isObjectNull";
import client from "../client";
import RaisonStudyToUkraine from "../src/raisonStudyToUkraine";

export default function Home(props) {
  const {
      studyToUkraineProps,
      inscriptionProps,
      raisonStudyToUkraine
  }  = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>الدراسة في أوكرانيا</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <StudyToUkraine study={studyToUkraineProps}/>
      <Inscription inscription={inscriptionProps}/>
      <RaisonStudyToUkraine raisonToStudy={raisonStudyToUkraine}/>
    </div>
  )
}

export async function getServerSideProps(context){
    var data_home = await client.fetch("*[_id=='home'][0]{titreStudyInUkraine,sousTitreStudyInUkraine,buttonStudyInUkraine," +
        "titreAdmission,listAdmission,imageComingUkraine,titleComingUkraine,descriptionComingUkraine,buttonComingUkraine," +
        "sousTitleStudyToUkraine,titleStudyToUkraine,buttonStudyToUkraine,listStudyUkraine}");
    const studyToUkraineProps = {
        titreStudyInUkraine:isObjectNull(data_home.titreStudyInUkraine),
        sousTitreStudyInUkraine:isObjectNull(data_home.sousTitreStudyInUkraine),
        buttonStudyInUkraine:isObjectNull(data_home.buttonStudyInUkraine),
    }
    const inscriptionProps = {
        titreAdmission:isObjectNull(data_home.titreAdmission),
        listAdmission:isObjectNull(data_home.listAdmission),
        imageComingUkraine:isObjectNull(data_home.imageComingUkraine),
        titleComingUkraine:isObjectNull(data_home.titleComingUkraine),
        descriptionComingUkraine:isObjectNull(data_home.descriptionComingUkraine),
        buttonComingUkraine:isObjectNull(data_home.buttonComingUkraine)
    }
    const raisonStudyToUkraine = {
        sousTitleStudyToUkraine:isObjectNull(data_home.sousTitleStudyToUkraine),
        titleStudyToUkraine:isObjectNull(data_home.titleStudyToUkraine),
        buttonStudyToUkraine:isObjectNull(data_home.buttonStudyToUkraine),
        listStudyUkraine:isObjectNull(data_home.listStudyUkraine),
    }
    return {
      props: {
        studyToUkraineProps,
        inscriptionProps,
        raisonStudyToUkraine
      },
    }
}