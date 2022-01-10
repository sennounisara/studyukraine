import styles from '../../styles/intakeTimes.module.css'
import urlForImage from "../../urlForImage";
import YouTube from "react-youtube";
import {AddCircleTwoTone, RemoveCircleTwoTone} from "@material-ui/icons";
function IntakeTimes (props){
    const {titlePage,imagePage,idVideoYoutube,titleIntakeTimes,descriptionIntakeTimes,listProgram,descriptionPart2,listStepToRegister,buttonContactUs} = props.admission;
    const opts = {
        height: '260',
        width: '400',
        playerVars: {
            autoplay: 1,
        }
    }
    const _onReady = (event) =>{
        event.target.pauseVideo();
    }
    return <div className={styles.container}>
        <h1>{titlePage}</h1>
        <div className={styles.block_01}>
            <div>
                <img className={styles.image} src={urlForImage(imagePage).url()} />
                <YouTube videoId={idVideoYoutube} opts={opts} onReady={_onReady} />
            </div>
            <div>
                <h2>{titleIntakeTimes}</h2>
                <p>{descriptionIntakeTimes}</p>
                {
                    listProgram?.map((item,index)=>{
                        const {titleListProgram, titlePeriodProgram} = item;
                        return <div className={styles.detail}>
                            <div><AddCircleTwoTone/><RemoveCircleTwoTone/>{titleListProgram}</div>
                            <div>
                                <h3>{titlePeriodProgram}</h3>
                            </div>
                        </div>
                    })
                }
                <p>{descriptionPart2}</p>
                <ul>
                    {
                        listStepToRegister.map((item,index) =>{
                            return  <li>{item}</li>
                        })
                    }
                </ul>
                <button>{buttonContactUs}</button>
            </div>
        </div>
    </div>
}
export default IntakeTimes