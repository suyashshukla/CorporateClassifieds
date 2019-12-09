namespace CoreModel
{   

    public class User
    {
        public string name
        {
            get; set;
        }

        public string pic
        {
            get; set;
        } 
    }

    public class ClassifiedDetails
    {

        public string type
        {
            get; set;
        }

        public string category
        {
            get; set;
        }

        public string offers
        {
            get; set;
        }

        public string comments
        {
            get; set;
        }

    }

    public class Time
    {

        public int validity { get; set; }

        public string date { get; set; }

        public string expiry { get; set; }

    }

    public class ClassifiedsView
    {
        public int id { get; set; }

        public string title { get; set; }

        public string description { get; set; }

        public int? price { get; set; }

        public string thumbnail { get; set; }
         
        public User userdata { get; set; }

        public ClassifiedDetails details { get; set; }

        public Time timeinfo { get; set; }

    }
}

