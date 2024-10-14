import React from 'react'
import communitybackground from './sfondoCommunity.jpeg'
import { ButtonVerify } from './VerifyPageStyled'




const VerifyPage = () => {
    return (
        <div 
            style={{
                backgroundImage: `url(${communitybackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white' // Modifica il colore del testo se necessario
            }}
        >

            <ButtonVerify>
            <p>VERIFY</p>
            </ButtonVerify>
        </div>
    );
};

export default VerifyPage;


