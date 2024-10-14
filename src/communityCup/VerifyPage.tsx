import React, { useEffect, useState } from 'react'
import communitybackground from './sfondoCommunity.jpeg'
import { BloccoTesto, ButtonVerify, SpanTesto } from './VerifyPageStyled'




const VerifyPage = () => {
    const [verified, setVerified] = useState(false)

    const verifyUser = () => {
        setVerified(true)
    }

    useEffect(() => {
        console.log(verified)
    }, [verified])
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
            <div style={{
                display: 'flex', gap: '1.5rem', flexDirection: 'column', marginTop: '70px', justifyContent: 'center', alignContent: 'center', alignItems: 'center'
            }}>
                {!verified && (
                    <>
                        <ButtonVerify onClick={()=>verifyUser()}>
                            <p>VERIFY</p>
                        </ButtonVerify>
                        <BloccoTesto>
                            By clicking Verify,
                            you accept the <SpanTesto>Privacy Policy</SpanTesto>
                        </BloccoTesto>
                    </>

                )}
                {verified && (
                    <>
                        <ButtonVerify>
                            <p>NEXT</p>
                        </ButtonVerify>
                        <SpanTesto>Verify completed<br/>
                            Join Community Cup!</SpanTesto>

                    </>

                )}


            </div>


        </div>
    );
};

export default VerifyPage;


