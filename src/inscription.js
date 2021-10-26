import styles from '../styles/inscription.module.css'
import Link from 'next/link'
import {useState} from 'react'
import isObjectNull from "../isObjectNull";
function Inscription(props){
    const [admissionIndex,setAdmissionIndex] = useState(0);
    const {titreAdmission,listAdmission} = props.inscription;
    console.log(listAdmission)
    return <div className={styles.container}>
        {
            listAdmission?.map((item,index)=>{
                const {methodName,methodDescription,_key} = item;
                const url= "/"+ methodName.toString()
                return <Link href={url} >
                    <div className={styles.bloc}>
                        <h1>{methodName}</h1>
                        <h4>{methodDescription}</h4>
                    </div>
                </Link>
            })
        }
    </div>
}
export default Inscription