import sgMail from '@sendgrid/mail'

sgMail.setApiKey("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");


const msg = {
    to: 'indy.vanhaelst@hotmail.com', // Change to your recipient
    from: 'test@example.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

export default async (req, res) => {
    // const { email, extra, firstname, lastname } = req.body

    try {
        await sgMail.send(msg);
        res.json({ message: `Email has been sent` })
    } catch (error) {
        console.log(res, error)
        res.status(500).json({ error })
    }
}