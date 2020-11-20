import React from 'react';
import styles from '../Component/css/trabajosRealisamos.module.css'
import pintura from '../img/pintura.jpg';
import plomeria from '../img/plomeria.jpeg';
import silleta from '../img/silleta.jpg';
import albañileria from '../img/alvañileria.jpg';
import ceramica from '../img/ceramica.jpg';
import texturado from '../img/texturado.jpg';
import herreria from '../img/herreria.jpg';


const TrabajosRalisamos = () => {

    return (
        <div className={styles.container}> 
        <div className={styles.card}>
            <div>
                <img src={pintura} className={styles.cardImg} alt='soy foto' /> 
            </div>
            <div>
                <h4>Pintura</h4>
                <p>Realizamos trabajos de satinado, Letex, enduido, texturado tipo tarquini, dourlook tabiques y cielorazo on profecionales calificados</p>
            </div>
        </div>
        <div className={styles.card}>
            <div>
                <img src={plomeria} className={styles.cardImg} alt='soy foto' /> 
            </div>
            <div>
                <h4>Plomeria</h4>
                <p>Instalacion de cañerias, griferia, pvc y termo fucion</p>
            </div>
        </div>
        <div className={styles.card}>
            <div>
                <img src={silleta} className={styles.cardImg} alt='soy foto' /> 
            </div>
            <div>
                <h4>TRabajos en altura</h4>
                <p>Impermeabilizacion de edianeras, sellao de rajaduras, reboque de frentines </p>
            </div>
        </div>
        <div className={styles.card}>
            <div>
                <img src={albañileria} className={styles.cardImg} alt='soy foto' /> 
            </div>
            <div>
                <h4>Albañileria</h4>
                <p>Construccion de casa con llave en mano, refaccione de departamentos o casas,baños, cosinas nevas o refacciones, colocacion de ceramica o porquelanatos </p>
            </div>
        </div>
        <div className={styles.card}>
            <div>
                <img src={texturado} className={styles.cardImg} alt='soy foto' /> 
            </div>
            <div>
                <h4>Revvestimiento Texturado</h4>
                <p>Trabajamos con pintura texturada, Tarqini, Revear </p>
            </div>
        </div>
        <div className={styles.card}>
            <div>
                <img src={ceramica} className={styles.cardImg} alt='soy foto' /> 
            </div>
            <div>
                <h4>Colocacion de Ceramica</h4>
                <p>Colocamos ceramicas, alulejos, porquelanatos, revestmiento ceramico de todas clases </p>
            </div>
        </div>
        <div className={styles.card}>
            <div>
                <img src={herreria} className={styles.cardImg} alt='soy foto' /> 
            </div>
            <div>
                <h4>Trabajos de Herreria</h4>
                <p>Hacemos rejas portones proteccion de valcones, percianas </p>
            </div>
        </div>
        </div>
    )

}

export default TrabajosRalisamos;