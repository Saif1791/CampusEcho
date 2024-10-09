import nodemailer from "nodemailer";

export const mailer = async (userEmail, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GOOGLE_USERNAME,
      pass: process.env.GOOGLE_PASS,
    },
  });

  transporter.verify(function (error) {
    if (error) {
      console.log("Connection error:", error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  const mailOptions = {
    from: process.env.GOOGLE_USER,
    to: userEmail,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
};
