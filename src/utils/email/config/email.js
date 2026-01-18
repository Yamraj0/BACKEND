import { Freesend } from '@freesend/sdk';
import { emailError } from './email_error.js';
import { welcomeEmailTemplete } from '../templete/welcomeEmailTemplete.js';

const freesend = new Freesend({
  apiKey: process.env.FreeSend
});


export const verifcationEmail = async (email, code) => {
  try {
    await freesend.sendEmail({
      fromName: 'OJHA GROUP',
      fromEmail: 'ojha@gmail.com',
      to: email,
      subject: 'Test email',
      html: 'hey',
      text: 'hey',
    });
  } catch (error) {
    emailError(error)
  }


}

export const welcomeEmail = async (email, name)=>{
  try {
    const response = await freesend.sendEmail({
      fromName: 'OJHA GROUP',
      fromEmail: 'ojha@gmail.com',
      to: email,
      subject: `Welcome ${name}`,
      html: welcomeEmailTemplete(email,name),
      text: 'hey',
    });
    console.log(response.message);
    
  } catch (error) {
    emailError(error)
  }
}


