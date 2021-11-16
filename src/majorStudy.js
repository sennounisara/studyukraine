import styles from '../styles/majorStudy.module.css'
import urlForImage from "../urlForImage";
function StudyMajor(props) {
    const {titleStudyMajor, listStudyMajor} = props.major;
    return <div className={styles.container}>
        <div>
            <h2>{titleStudyMajor}</h2>
            <div className={styles.bloc}>
                {
                    listStudyMajor?.map((item,index)=>{
                        const {imageStudyMajor,studyMajor,_key} = item;
                        return <div >
                            <img className={styles.imageBloc} src={urlForImage(imageStudyMajor).url()} />
                            <h2>{studyMajor}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}
export default StudyMajor;