import React from 'react'
import { HeaderDapp } from '../general/general'
import { LeftMenu } from '../LeftMenu'


const DappDashboard = () =>{
    return(
        <div style={{display:'flex', flexDirection:'row', backgroundColor:'grey'}}>
            <HeaderDapp/>
            <LeftMenu/>
            <p>Ciao</p>
        </div>
    )
}

export default DappDashboard