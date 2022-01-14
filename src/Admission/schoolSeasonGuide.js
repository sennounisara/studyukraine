import styles from "../../styles/schoolSeasonGuide.module.css"
import urlForImage from "../../urlForImage";

function SchoolSeasonGuide (props){
    const {titleStudyPrice,imagePage,descriptionStudyPrice,listOfAcademicSpecialization,listOfStep,listOfQuestion} =  props.admission;
    return <div>
        <div className={styles.bloc_title}>
            <h1>{titleStudyPrice}</h1>
        </div>
        <img  src={urlForImage(imagePage).url()} />
        <div className={styles.container}>
            <p>{descriptionStudyPrice}</p>
            <ul>
                {
                    listOfAcademicSpecialization?.map((item,index)=>{
                        const {title} = item
                        return <li>{title}</li>
                    })
                }
            </ul>
            <ul>
                {
                    listOfStep?.map((item,index)=>{
                        const {title} = item
                        return <li>{title}</li>
                    })
                }
            </ul>
            {
                listOfQuestion?.map((item,index) => {
                    const {question , answer} = item
                    return <div>
                        <h3>{question}</h3>
                        <p>{answer}</p>
                    </div>
                })
            }
        </div>
    </div>
}
export default SchoolSeasonGuide