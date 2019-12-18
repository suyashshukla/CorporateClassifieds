namespace Services.MOQ
{
    public interface ISMTPService
    {

        string From { get; set; }
        string To { get; set; }
        string Subject { get; set; }
        string Body { get; set; }

        bool SendEmail(IMailModel mailModel);

    }

    public interface IMailModel    {

         string Server { get; set; }
         int Port { get; set; }

         bool SendEmail(string from, string to, string subject, 
              string body);

    }

}
