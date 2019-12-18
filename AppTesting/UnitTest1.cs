using CoreModel;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Newtonsoft.Json;
using Services.MOQ;

namespace AppTesting
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void FilledTest()
        {
            User user = new User
            {
                name = "Suyash Shukla",
                pic = "google.com/abc.jpg"
            };

            string str = JsonConvert.SerializeObject(user);

            Assert.AreEqual("{\"name\":\"Suyash Shukla\",\"pic\":\"google.com/abc.jpg\"}", str);

        }

        [TestMethod]
        public void EmptyTest()
        {
            User user = new User
            {
                name = "Suyash",
                pic = ""
            };

            string str = JsonConvert.SerializeObject(user);

            Assert.AreEqual("{\"name\":\"Suyash\",\"pic\":\"\"}", str);

        }

        [TestMethod]
        public void ServiceTest()
        {
            Moq.Mock<IMailModel> MockMailService = new Moq.Mock<IMailModel>();

            MockMailService.SetupProperty(mock => mock.Server, "smtp.gmail.com")
                .SetupProperty(mock => mock.Port, 587);

            MockMailService.Setup(mock => mock.SendEmail(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>())).Returns(true);

            ISMTPService sMTPService = new SMTPService()
            {
                From = "imsushandro@gmail.com",
                To = "suyash.s@technovert.net",
                Body = "If you are reading this message, our testing is successful",
                Subject = "Testing SMTP",
            };

            bool result = sMTPService.SendEmail(MockMailService.Object);

            Assert.IsTrue(result);


        }

    }
}

