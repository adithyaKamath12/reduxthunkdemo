import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getPeopleInformationAsync } from '../../Redux/DataReducer/DataReducer.actions'
import { store } from '../../Redux/store';
import DetailPage from '../DetailPage/DetailPage';

import './peoplepage.css'


function PeoplePage(props) {
const [text, settext] = useState('')
const [type, setType] = useState('people')

const {getPeopleInformationAsync,fetching,data,error,flag}=props

const submitForm=(e)=>{
    e.preventDefault()
    // console.log(type,"dfa");
    getPeopleInformationAsync({text,type})
   settext('')
}
    return (
        <div className='Page'>
            <form onSubmit={submitForm}>
            <input type='text' placeholder='search box' value={text} onChange={(e)=>settext(e.target.value)}/>
            <select id="datatypes" name="datatypes" value={type} onChange={(e)=>setType(e.target.value)}>
            {/* <option value="people"></option> */}
                <option value="planets">Planets</option>
                <option value="vehicles">Vehicle</option>
                <option value="people" >People</option>
                <option value="species">Species</option>

            </select>

            <button type='submit'>submit</button>
            </form>
            <div div className='page_details'>
               {
             (!!fetching) ? (
                    <h1 className='page_details_fillerText'>loading...</h1>

            ):(
                
                    (flag===1)?( (data.length==0 && error==='')?(<p className="page_details_fillerText"> Not Found </p>):(data.map(ele=>{
                        return <DetailPage ele={ele} key={ele.name}/>
                     }))):(<></>)
                
              
               
                    
            )
           
            }
           
 
          { 
             (!!error)?(
                <h4 className='page_details_fillerText'>{error},try again!</h4>
            ):(<></>)
            }
          
            
            </div>
        </div>
    )
}

const mapstatetoprops=(state)=>{
    return{
        fetching:state.data.fetching,
        data:state.data.data,
        error: state.data.error,
        flag: state.data.flag
    }
}


const mapDispatchToProps=(dispatch)=>{
    return{
        getPeopleInformationAsync:(props)=>dispatch(getPeopleInformationAsync(props))
    }
}

export default connect(mapstatetoprops,mapDispatchToProps)(PeoplePage)
