import styles from '../styles/favoriteStudy.module.css'
import Link from 'next/link'
import {useState} from 'react'
import urlForImage from "../urlForImage";
import YouTube from "react-youtube";
function FavoriteStudy(props){
    const {titleFavoriteStudyProgram,descriptionFavoriteStudyProgram,imageFavoriteStudyProgram,buttonFavoriteStudyProgram,listDirectory} = props.favorite;
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
        <div>
            <div className={styles.container}>
                <div>
                    <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={_onReady} />
                    <h1>{titleFavoriteStudyProgram}</h1>
                    <p>{descriptionFavoriteStudyProgram}</p>
                    <button>{buttonFavoriteStudyProgram}</button>
                </div>
                <img className={styles.image} src={urlForImage(imageFavoriteStudyProgram).url()} />
            </div>
            <div className={styles.container}>
                {
                    listDirectory?.map((item,index)=>{
                        const {textDirectoryUrl,descriptionDirectoryOfUkraine,sousTextDirectoryUrl,_key} = item;
                        return <div >
                            <div className={styles.bloc}>
                                <h1>{textDirectoryUrl}</h1>
                                <h4>{descriptionDirectoryOfUkraine}</h4>
                                <h2>{sousTextDirectoryUrl}</h2>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
export default FavoriteStudy;