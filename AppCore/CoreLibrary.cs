using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppCore
{
    public class CoreModel
    {

        public CoreModel()
        {
            this.Id = (int) Gender.FeMale;
        }

        public int Id
        {
            get;set;
        }

        public string title
        {
            get;set;
        }

        public string description
        {
            get;set;
        }

        public string expiry
        {
            get;set;
        }

        public  int price
        {
            get;set;
        }

        public string timestamp
        {
            get;set;
        }

        public string type
        {
            get;set;
        }

        public string category
        {
            get;set;
        }

        public string username
        {
            get; set;
        }

        public string userpic
        {
            get;set;
        }

        public int offers
        {
            get;set;
        }

        public string comments
        {
            get;set;
        }

        public string thumbnail
        {
            get;set;
        }



    }


    public enum Gender
    {
        Male,
        FeMale
    }
}
