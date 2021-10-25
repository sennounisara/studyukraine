import styles from '../styles/studyToUkraine.module.css'
import YouTube from 'react-youtube';

function StudyToUkraine (props) {
    const {titreStudyInUkraine,sousTitreStudyInUkraine,buttonStudyInUkraine} = props.study
    const opts = {
        height: '380',
        width: '600',
        playerVars: {
            autoplay: 1,
        }
    }
    const _onReady = (event) =>{
        event.target.pauseVideo();
    }
    return (
        <div className={styles.container}>
            <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={_onReady} />
            <div>
                <h1>{titreStudyInUkraine}</h1>
                <h4>{sousTitreStudyInUkraine}</h4>
                <button className={styles.btnDefault}>{buttonStudyInUkraine}</button>
            </div>
        </div>
    )
}
export default StudyToUkraine;