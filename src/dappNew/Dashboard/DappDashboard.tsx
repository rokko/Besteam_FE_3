import React from 'react'
import { LeftMenu } from '../LeftMenu'
import { HeaderDapp } from '../HeaderDapp'
import arena  from './arena.png'
import bestcity from './bestcity.png'
import marketplace from './marketplace.webp'
const DappDashboard = () =>{
    return(
        <div style={{display:'flex', flexDirection:'row', backgroundColor:'#1C1C1C'}}>
            <HeaderDapp/>
            <LeftMenu/>
            <div style={{width:'100%',height:'100%', display:'flex',flexDirection:'row', marginLeft:'8vw', marginTop:'3vw', gap:'3vw'}}>
                <div style={{display:'flex', flexDirection:'column', gap:'3vw'}}>
                    <img src={arena} style={{width:'31.24vw', height:'20.833vw'}} alt="arena"/>
                    <div style={{width:'31.24vw', height:'20.833vw', backgroundColor:'black'}}>
                    <img src={marketplace} style={{width:'31.24vw', height:'16.667vw'}} alt="marketplace"/>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                    <p style={{color:'white', textAlign:'center', fontFamily:'DinPROBold', fontSize:'1.563vw',marginBottom:'100px'}}>Marketplace</p>
                    </div>
                    
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column'}}>
                <img style={{width:'31.24vw', height:'40.10vw'}} src={bestcity} alt="bestcity"/>
                <p>Bestcity</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default DappDashboard