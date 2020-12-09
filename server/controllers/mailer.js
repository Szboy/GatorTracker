import nodeMailer from 'nodemailer';
import dotenv from 'dotenv';

//Need to reload enviorment variables for some reason.
dotenv.config();

//Uses gmail given in config
const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

export const userMailer = async (user) => {
    return await transporter.sendMail({
        from: '"Gator Tracker" <gatortrackers@gmail.com>',
        to: user.email, 
        subject: "[Gator Tracker] User Registration Confirmation",
        text: "Hello" + user.firstName + ", Thank you for registering with the Gator Tracker App. We are sorry to hear that you are not feeling well and we hope you are back to 100 percent very soon. Emails have been sent out to your given contacts alerting them that they might have been in contact with someone who tested positive. In the meantime, here is a link that you can use to find resources on COVID-19 as it pertains to the University: https://coronavirus.ufl.edu/resources/ Once you feel better and have tested negative, or would like to update your testing status at anytime, please go to your unique link which can be found here: " + process.env.BASE_URL + user._id + "Once again, all your information is kept protected and we never give out any identifying information to others, even first names. If you have any questions please don't hesitate to email us back at this email. Best, The Gator Tracker Team", // text body 
        html: "<p>Hello " + user.firstName + ", <br/></p>Thank you for registering with the <i>Gator Tracker App</i>.</p> We are sorry to hear that you are not feeling well and we hope you are back to 100 percent very soon. Emails have been sent out to your given contacts alerting them that they might have been in contact with someone who tested positive. </p><p>In the meantime, here is a link that you can use to find resources on COVID-19 as it pertains to the University: https://coronavirus.ufl.edu/resources/</p> <p>Once you feel better and have tested negative, or would like to update your testing status at anytime, please go to your <b>unique link</b> which can be found here: " + process.env.BASE_URL + user._id + "</p><p> Once again, all your information is kept protected and we never give out any identifying information to others, even first names.</p><p>If you have any questions please don't hesitate to email us back at this email.</p> <br/> <p>Best,</p> <b>The Gator Tracker Team</b>", // html body
      }).then(email => {
          console.log("User Message sent: %s", email.messageId)
      });
}

export const contactMailer = async (contacts) => {
    return await contacts.forEach(async contact => {
        await transporter.sendMail({
            from: '"Gator Tracker" <gatortrackers@gmail.com>',
            to: contact.email, 
            subject: "[Gator Tracker] COVID-19 Contact Notification",
            priority: 'high', 
            text: "Hello " + contact.firstName + ", You are being contacted because someone who you have been in contact with has tested positive for COVID-19. To prevent further spread of the virus we recommend you to watch for symptons and get tested. Here is a link for the University of Florida’s COVID-19 resources: https://coronavirus.ufl.edu/resources/. In the unfortunate event that you test positive, we urge you to continue our contact tracing effort and go to " + process.env.BASE_URL + " and fill out the form to warn those who may be at risk. When you register you will be completely anonymous to those you put as contacts, so your privacy is protected. For more information on the symptoms of COVID-19, please visit: https://www.who.int/health-topics/coronavirus. We appreciate your help in combatting this virus and its spread. Best, The Gator Tracker Team Not affiliated with the University of Florida", // text body 
            html: "<p>Hello " + contact.firstName + ", </p><p>You are being contacted because someone who you have been in <b>contact with has tested positive for COVID-19.</b> To prevent the further spread of the virus we recommend you watch for symptons and get tested. Here is a link for the University of Florida’s COVID-19 resources: https://coronavirus.ufl.edu/resources/. <p>In the unfortunate event that you test positive, we urge you to continue our contact tracing effort and go to " + process.env.BASE_URL + " and fill out the form to warn those who may be at risk. When you register you will be completely anonymous to those you put as contacts, so your privacy is protected.</p><p> For more information on the symptoms of COVID-19, please visit: https://www.who.int/health-topics/coronavirus.</p><p>We appreciate your help in combatting this virus and its spread.</p><p>Best,</p> <b>The Gator Tracker Team</b><p><i>Not affiliated with the University of Florida</i></p>"
        }).then(email => {
            console.log("Contact Message sent: %s", email.messageId)
        }); 
    })
}

export const linkMailer = async (user) => {
    return await transporter.sendMail({
        from: '"Gator Tracker" <gatortrackers@gmail.com>',
        to: user.email, 
        subject: "[Gator Tracker] Status Update Link Requested",
        text: "Hello " + user.firstName + ", You have requested your unique link to update your COVID-19 status. If you did not make this request, please ignore this email. If you did, please click here: " + process.env.BASE_URL + user._id + " to update your COVID-19 status. Thank you, The Gator Tracker Team *Not affiliated with UF",
        html: "<p>Hello " + user.firstName + ", </p><p>You have requested your unique link to update your COVID-19 status. If you did not make this request, please ignore this email. If you did, please click here: " + process.env.BASE_URL + user._id + " to update your COVID-19 status.</p><p>Best,</p> <b>The Gator Tracker Team</b> <p><i>Not affiliated with UF</p></i>"
    }).then(email => {
        console.log("Forgot Link Message sent: %s", email.messageId)
    }); 
}
