using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel
{
    public class Advertisement
    {
        public int Id { get; set; }

        public string title { get; set; }

        public string description { get; set; }

        public int? price { get; set; }

        public string thumbnail { get; set; }

        public string userdata { get; set; }

        public string details { get; set; }

        public string timeinfo { get; set; }

    }

}