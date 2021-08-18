import React from 'react'

import './DetailPage.css'

function DetailPage({ele}) {

  var createdate = new Date(ele.created );
  var editdate = new Date(ele.edited );

    return (
        <div className='DetailPage'>
          <p><span>name : </span>{ele.name}</p>
          <p><span>created : </span>{new Date( createdate.getTime() ).toDateString()}</p>
          <p><span>edited : </span>{new Date( editdate.getTime()).toDateString()}</p>
          {/* <p><span>haircolor : </span>{ele.hair_color}</p>
          <p><span>birth year : </span>{ele.birth_year}</p> */}
          
        </div>
    )
}

export default DetailPage
