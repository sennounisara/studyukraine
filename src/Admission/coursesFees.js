import styles from '../../styles/coursesFees.module.css'

function CoursesFees (props) {
    const {titleStudyPrice,titleAnnualCost,descriptionAnnualCost,buttonAnnualCost,titleGeneralMedicineDentistry,universityCharacteristics,titlePreparatoryYear,descriptionPreparatoryYear,buttonPreparatoryYear,listPreparatoryYear,listBranch,paymentMethod,paymentMethodDescription,listOfPayment,tableTitle,tableDescription,headerTable,bodyTable,titleMostFrequentlyQuestion,listQuestion} =props.admission;
    return <div className={styles.container}>
        <div>
            <h1>{titleStudyPrice}</h1>
        </div>
        <div>
            <h2>{titleAnnualCost}</h2>
            <div>
                <p>{descriptionAnnualCost}</p>
                <button>{buttonAnnualCost}</button>
            </div>
        </div>
        <div>
            <h2>{titleGeneralMedicineDentistry}</h2>
            <div>
                ------------------------
            </div>
        </div>
        <div>
            <h2>{titlePreparatoryYear}</h2>
            <div>
                <p>{descriptionPreparatoryYear}</p>
                <button>{buttonPreparatoryYear}</button>
            </div>
        </div>
        <div>
            <h2>{paymentMethod}</h2>
            <p>{paymentMethodDescription}</p>
        </div>
        <div>
            <h2>{tableTitle}</h2>
            <p>{tableDescription}</p>
            <table>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
        <div>
            <h2>{titleMostFrequentlyQuestion}</h2>
        </div>
    </div>
}
export default CoursesFees