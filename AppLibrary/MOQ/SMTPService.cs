using System;
using System.Net;
using System.Net.Mail;

namespace Services.MOQ
{
    public class SMTPService : ISMTPService
    {
        public string From { get; set ; }
        public string To { get ; set; }
        public string Subject { get ; set; }
        public string Body { get ; set; }

        public bool SendEmail(IMailModel mailModel)
        {
            MailAddress mailFrom = new MailAddress(From);

            MailAddress mailTo = new MailAddress(To);

            MailMessage mailMessage = new MailMessage(mailFrom, mailTo)
            {
                Subject = Subject,
                Body = Body
            };

            SmtpClient smtpClient = new SmtpClient
            {
                Host = mailModel.Server,
                Port = mailModel.Port
            };

            smtpClient.Credentials = new NetworkCredential(From, "brotherhood");
            smtpClient.EnableSsl = true;

            smtpClient.Send(mailMessage);

            return true;
        }
    }
}
