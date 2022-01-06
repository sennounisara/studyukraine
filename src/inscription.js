import styles from '../styles/inscription.module.css'
import Link from 'next/link'
import {useState} from 'react'
import urlForImage from "../urlForImage";
function Inscription(props){
    const {titreAdmission,listAdmission,imageComingUkraine,titleComingUkraine,descriptionComingUkraine,buttonComingUkraine} = props.inscription;

    return <div className={styles.container}>
        <h2 className={styles.title}>{titreAdmission}</h2>
        <div className={styles.bloc_01}>
            {
                listAdmission?.map((item,index)=>{
                    const {admissionId,admissionName,admissionDescription,_key} = item;
                    const url= "/"+ admissionId.toString()
                    return <Link href={url} >
                        <div className={styles.bloc}>
                            <h1>{admissionName}</h1>
                            <h4>{admissionDescription}</h4>
                        </div>
                    </Link>
                })
            }
        </div>
        <div className={styles.bloc_01}>
            <div>
                <img className={styles.image_01} src="/undraw_certification.svg" />
                <h1>{titleComingUkraine}</h1>
                <h4>{descriptionComingUkraine}</h4>
                <button>{buttonComingUkraine}</button>
            </div>
            <img className={styles.image} src={urlForImage(imageComingUkraine).url()} />
        </div>
    </div>
}
export default Inscription