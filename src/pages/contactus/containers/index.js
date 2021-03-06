import React from 'react'
import Header from '../../Header/containers/index';
import ContactForm from '../components/contactform'

import {qspost} from '../../../common/fetch/requests'

class ContactUs extends React.Component{
  submit = (values) => {
      //这里api用的是登陆接口且不进行安全验证
    const url = 'http://kb.buyercamp.com/apir/user/login';
    qspost(url,values)
  };

  render(){
    return(
      <div>
          <div className='contactus'>
              {/*<h1>hello,here is contact us</h1>*/}
              <div>
                  <ContactForm onSubmit={this.submit}/>
              </div>
          </div>
      </div>
    )
  }

}

export default ContactUs
