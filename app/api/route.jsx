export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  const nodemailer = require("nodemailer");

  async function main() {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "razal313lazar@gmail.com",
        pass: "fheadrrsgekcpxyn",
      },
    });

    let info = await transporter.sendMail({
      from: '"You" <razal313lazar@gmail.com>',
      to: "razal313lazar@gmail.com",
      subject: "Testing, testing, 123",
      html: message.replace(/\r\n/g, "<br>"),
    });

    console.log(info.messageId);
  }

  main().catch((err) => console.log(err));

  res.status(200).json({ status: "Ok" });
};
