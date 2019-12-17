

using classifieds;
using CoreModel;

namespace DataModel
{
    public class OfferIntermediate
    {

        public int id { get; set; }

        public string comments { get; set; }

        public int amount { get; set; }

        public string timestamp { get; set; }

        public User userData { get; set; }

        public ClassifiedData adData { get; set; }
               
    }
}