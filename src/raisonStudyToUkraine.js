import styles from '../styles/raisonStudyToUkraine.module.css'
import Link from "next/link";

function RaisonStudyToUkraine (props) {
    const {sousTitleStudyToUkraine,titleStudyToUkraine,buttonStudyToUkraine,listStudyUkraine} = props.raisonToStudy;
    return (
      <div className={styles.container}>
        <h4>{sousTitleStudyToUkraine}</h4>
        <h1>{titleStudyToUkraine}</h1>
        <button>{buttonStudyToUkraine}</button>
          <div className={styles.bloc_01}>
              {
                  listStudyUkraine?.map((item,index)=>{
                      const {descriptionStudyToUkraine,textUrl,_key} = item;
                      const url= "/"+ index.toString()
                      return <Link href={url} >
                          <div className={styles.bloc}>
                              <h1>{descriptionStudyToUkraine}</h1>
                              <h4>{textUrl}</h4>
                          </div>
                      </Link>
                  })
              }
          </div>
      </div>
    )
}
export default RaisonStudyToUkraine;