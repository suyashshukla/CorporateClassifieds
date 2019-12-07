using CoreModel;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppLibrary
{
    public class DataTransformation
    {
        public static string getExpiry(string timestamp, int expiry)
        {
            int initial = int.Parse(timestamp);
            int increment = expiry;

            int year = int.Parse(timestamp.Substring(0, 4));
            int month = int.Parse(timestamp.Substring(4, 2));
            int date = int.Parse(timestamp.Substring(6, 2));

            if (date + increment > 30)
            {
                date = (date + increment) % 30;
                if (date == 0)
                    date = 30;
                increment = increment / 2;


                if (month + increment > 12)
                {
                    month = (month + increment) % 12;
                    if (month == 0)
                        month = 12;

                    increment = increment / 12;

                    if (increment > 0)
                    {
                        year = year + increment;
                    }

                }
                else
                {
                    month = month + increment;
                }
            }
            else
            {
                date = date + increment;
            }

            return (normalize(date) + "/" + normalize(month) + "/" + year);
        }

        public static string getDate(string timestamp)
        {

            string year = timestamp.Substring(0, 4);
            string month = timestamp.Substring(4, 2);
            string date = timestamp.Substring(6, 2);

            return (date + "/" + month + "/" + year);
        }

        public static string normalize(int number)
        {
            return number < 10 ? "0" + number : number+"";
        }

        public static string toUserJson(User user)
        {
            string json = JsonConvert.SerializeObject(user);

            return json;
        }

        public static string toTimeJson(Time time)
        {

            //time.date = getDate(time.date);
            //time.expiry = getExpiry(time.date, time.validity);
            //time.validity = time.validity;

            string json = JsonConvert.SerializeObject(time);

            return json;
        }

        public static string toDetailsJson(AdDetails details)
        {
            string json = JsonConvert.SerializeObject(details);

            return json;
        }

    }
}
