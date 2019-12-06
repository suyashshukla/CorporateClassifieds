using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel
{
    public class User
    {
        private string name
        {
            get;set;
        }

        private string pic
        {
            get;set;
        }
    }

    public class AdDetails
    {
        private string posted
        {
            get;set;
        }

        private string expiry
        {
            get;set;
        }

        private string type
        {
            get;set;
        }

        private string category
        {
            get;set;
        }

        private int offers
        {
            get;set;
        }

        private int comments
        {
            get;set;
        }

    }

    public class Advertisement
    {
        public int Id { get; set; }

        public string title { get; set; }

        public string description { get; set; }
        
        public int? price { get; set; }

        public string thumbnail { get; set; }

        private User userdata { get; set; }

        private Time details { get; set; }

    }
}
