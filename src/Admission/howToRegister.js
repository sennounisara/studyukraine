import styles from '../../styles/howToRegister.module.css'
import urlForImage from "../../urlForImage";
import YouTube from "react-youtube";
import {AddCircleTwoTone, RemoveCircleTwoTone} from "@material-ui/icons";
function HowToRegister (props){
    const {titlePage,imagePage,idVideoYoutube,titreHowToRegister,sousTitreHowToRegister,listHowToRegister,sousTitre_01,title_01} = props.admission;
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
                <h2>{titreHowToRegister}</h2>
                <p>{sousTitreHowToRegister}</p>
                {
                    listHowToRegister?.map((item,index)=>{
                        const {titleItem, titleName, howToRegisterDescription} = item;
                        return <div className={styles.detail}>
                            <div><AddCircleTwoTone/><RemoveCircleTwoTone/>{titleItem}</div>
                            <div>
                                <h3>{titleName}</h3>
                                <p>{howToRegisterDescription}</p>
                            </div>
                        </div>
                    })
                }
                <h2>{title_01}</h2>
                <p>{sousTitre_01}</p>
            </div>
        </div>
    </div>
}
export default HowToRegister