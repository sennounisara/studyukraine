import styles from '../../styles/coursesFees.module.css'

function CoursesFees (props) {
    const {titleStudyPrice,titleAnnualCost,descriptionAnnualCost,buttonAnnualCost,titleGeneralMedicineDentistry,universityCharacteristics,titlePreparatoryYear,descriptionPreparatoryYear,buttonPreparatoryYear,listPreparatoryYear,listBranch,paymentMethod,paymentMethodDescription,listOfPayment,tableTitle,tableDescription,headerTable,bodyTable,titleMostFrequentlyQuestion,listQuestion} =props.admission;
    const {col_1,col_2,col_3,col_4,col_5} = headerTable;
    return <div>
        <div className={styles.bloc_title}>
            <h1>{titleStudyPrice}</h1>
        </div>
        <div className={styles.container}>
            <div>
                <h2>{titleAnnualCost}</h2>
                <div className={styles.bloc_01}>
                    <button className={styles.button_01}>{buttonAnnualCost}</button>
                    <p className={styles.description}>{descriptionAnnualCost}</p>
                </div>
            </div>
            <div>
                <h2>{titleGeneralMedicineDentistry}</h2>
                <div className={styles.card_bloc}>
                    {
                        universityCharacteristics?.map((item,index)=>{
                            const {nameUniversity,priceUniversity,categoriesStudy,languageStudy,durationStudy,registerNow} = item;
                            return <div className={styles.card}>
                                <h3>{nameUniversity}</h3><hr/>
                                <div>{priceUniversity}</div><hr/>
                                <div>{categoriesStudy}</div><hr/>
                                <div>{languageStudy}</div><hr/>
                                <div>{durationStudy}</div><hr/>
                                <button>{registerNow}</button>
                            </div>
                        })
                    }
                </div>
            </div>
            <div>
                <h2>{titlePreparatoryYear}</h2>
                <div className={styles.bloc_01}>
                    <button className={styles.button_01}>{buttonPreparatoryYear}</button>
                    <p className={styles.description}>{descriptionPreparatoryYear}</p>
                </div>
            </div>
            <div>
                <h2>{titleGeneralMedicineDentistry}</h2>
                <div className={styles.card_bloc}>
                    {
                        listPreparatoryYear?.map((item,index)=>{
                            const {nameUniversity,priceUniversity,durationStudy,titleUniversity,registerNow} = item;
                            return <div className={styles.card}>
                                <h3>{nameUniversity}</h3><hr/>
                                <div>{priceUniversity}</div><hr/>
                                <div>{durationStudy}</div><hr/>
                                <div>{titleUniversity}</div><hr/>
                                <button>{registerNow}</button>
                            </div>
                        })
                    }
                </div>
            </div>
            <div>
                {
                    listBranch?.map((item,index) => {
                        const {titleListBranch,listBranchObject} = item
                        return <div>
                            <h2>{titleListBranch}</h2>
                            <div className={styles.card_bloc}>
                            {
                                listBranchObject?.map((item,index) => {
                                    const {title,price,period,register} = item;
                                    return <div className={styles.card}>
                                        <h3>{title}</h3><hr/>
                                        <div>{price}</div><hr/>
                                        <div>{period}</div><hr/>
                                        <button>{register}</button>
                                    </div>
                                })
                            }
                            </div>
                        </div>
                    })
                }
            </div>
            <div>
                <h2>{paymentMethod}</h2>
                <p>{paymentMethodDescription}</p>
                <div className={styles.bloc_01}>
                    {
                        listOfPayment?.map((item,index) => {
                            const {title, description} = item;
                            return <div className={styles.card}>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                        })
                    }
                </div>
            </div>
            <div>
                <h2>{tableTitle}</h2>
                <p>{tableDescription}</p>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>{col_1}</th>
                            <th>{col_2}</th>
                            <th>{col_3}</th>
                            <th>{col_4}</th>
                            <th>{col_5}</th>
                        </tr>
                    </thead>
                    {
                        bodyTable?.map((item,index) => {
                            const {col_1,col_2,col_3,col_4,col_5} = item;
                            return <tr>
                                <td>{col_1}</td>
                                <td>{col_2}</td>
                                <td>{col_3}</td>
                                <td>{col_4}</td>
                                <td>{col_5}</td>
                            </tr>
                        })
                    }
                </table>
            </div>
            <div>
                <h2>{titleMostFrequentlyQuestion}</h2>
                {
                    listQuestion?.map((item,index)=> {
                        const {question , answer} = item
                        return <div>
                            <h3>{question}</h3>
                            <p>{answer}</p>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}
export default CoursesFees