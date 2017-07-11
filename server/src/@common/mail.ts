import { IUser } from './../users/user.model';
import * as configs from '../@configurations';
const Jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const mailConfigs = configs.getMailConfigs();
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: mailConfigs.email,
        pass: mailConfigs.password
    }
});
export class MailUtils {
    public static sentMailVerificationLink(user: IUser) {
        /*const host = (configs.getServerConfigs().url)
            ? configs.getServerConfigs().url
            : `http://localhost:${configs.getServerConfigs().port}/api`;*/
        const host = `${configs.getMailConfigs().clientUrl}/${configs.getMailConfigs().path}`;
        const token = Jwt.sign(<any>({ id: user._id, }), configs.getServerConfigs().jwtSecret);
        const link = `http://${host}/${token}`;
        const mailBody = `
            <h2>Cám ơn bạn đã đăng ký tài Flyluf</h2>
            <p>Xin nhấp link bên dưới  để kích hoạt tài khoản.</p>
            <a href="${link}">Link kích hoạt tài khoản</a>
        `;
        this.sendMail(mailConfigs.email, user.email, mailConfigs.title, mailBody);
    }

    private static sendMail(from, email, subject, mailbody) {
        let mailOptions = {
            from: from,
            to: email,
            subject: subject,
            html: mailbody
        };

        transporter.sendMail(mailOptions, function (error, response) {
            if (error) {
                console.error(error);
            }
            transporter.close();
        });
    }
}