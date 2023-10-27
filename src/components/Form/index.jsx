import styles from './Form.module.css';
import '../../global.css';
import { useState } from 'react';

const Form = () => {
    const [heightH, setHeightH] = useState(0);
    const [weight, setWeight] = useState(0);
    const [imc, setImc] = useState(0);
    const [classification, setClassification] = useState('');
    
    const calculate = () => {
        const height = heightH / 100;
        const imcCalc = (weight / (height**2)).toFixed(2);
        setImc(imcCalc);

        let newClassification = '';

        if (height > 0 && weight > 0) {
            if (imcCalc <= 16.9) {
                newClassification = 'muito abaixo do peso';
            } else if (imcCalc >= 17 && imcCalc <= 18.4) {
                newClassification = 'abaixo do peso';
            } else if (imcCalc >= 18.5 && imcCalc <= 24.9) {
                newClassification = 'peso normal';
            } else if (imcCalc >= 25 && imcCalc <= 29.9) {
                newClassification = 'Acima do peso';
            } else if (imcCalc >= 30 && imcCalc <= 34.9) {
                newClassification = 'Obesidade grau 1';
            } else if (imcCalc >= 35 && imcCalc <= 40) {
                newClassification = 'Obesidade grau 2';
            } else {
                newClassification = 'Obesidade grau 3';
            }
        } else {
            newClassification = '';
        }

        setClassification(newClassification);
    }

    return (
        <>
            <div className={styles.formContainer}>
                <h1 className={styles.formTitle}>Vamos calcular o seu IMC</h1>
                <label className={styles.formLabelAltura}>Digite a sua altura em (cm): </label>
                <input onBlur={(e) => setHeightH(parseFloat(e.target.value))} className={styles.formInputAltura} type="number" />
                <label className={styles.formLabelPeso}>Digite o seu peso em (kg): </label>
                <input onBlur={(e) => setWeight(parseFloat(e.target.value))}  className={styles.formInputPeso} type="number" />
                <button onClick={calculate} className={styles.formButton}>Calcular</button>
                <p className={styles.formResult}>Seu IMC é de <span>{imc}</span> e sua classificação é "<span>{classification}</span>"</p>
            </div>
        </>
    )
}

export default Form;
