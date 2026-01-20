import { Freesend } from '@freesend/sdk';
import { emailError } from './email_error.js';
import { welcomeEmailTemplete } from '../templete/welcomeEmailTemplete.js';
import { verifyEmailTemplete } from '../templete/verifyEmailTemplete.js';

const freesend = new Freesend({
  apiKey: "1b772af7-1b71-4416-a0b7-3ff9e1f500f5"
});


export const verifcationEmail = async (name,email,verificationUrl,verifyToken) => {
  try {
    const response = await freesend.sendEmail({
      fromName: 'OJHA GROUP',
      fromEmail: 'ojha@gmail.com',
      to: email,
      subject: 'Email Verification',
      html: verifyEmailTemplete(name,verificationUrl,verifyToken),
    });

    console.log(response.message)
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


