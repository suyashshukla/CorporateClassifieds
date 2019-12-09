using AppLibrary;
using CoreModel;
using Microsoft.VisualStudio.TestTools.UnitTesting;

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

            string str = DataTransformation.ToUserJson(user);

            Assert.AreEqual("{\"name\":\"Suyash Shukla\",\"pic\":\"google.com/abc.jpg\"}", str);
                       
        }

        [TestMethod]
        public void EmptyTest()
        {
            User user = new User
            {
                name = "Suyash",
                pic=""
            };

            string str = DataTransformation.ToUserJson(user);

            Assert.AreEqual("{\"name\":\"Suyash\",\"pic\":\"\"}", str);

        }

    }
}
