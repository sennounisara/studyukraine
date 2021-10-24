import styles from '../styles/studyToUkraine.module.css'
import YouTube from 'react-youtube';

function StudyToUkraine (props) {
    const {titreStudyInUkraine} = props.study
    console.log(titreStudyInUkraine)
    const opts = {
        height: '390',
        width: '640',
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
                <p>gerrerg eghre</p>
            </div>
        </div>
    )
}
export default StudyToUkraine;