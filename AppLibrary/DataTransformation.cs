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

        public static string ToUserJson(User user)
        {
            string json = JsonConvert.SerializeObject(user);

            return json;
        }

        public static string ToTimeJson(Time time)
        {

            string json = JsonConvert.SerializeObject(time);

            return json;
        }

        public static string ToDetailsJson(ClassifiedDetails details)
        {
            string json = JsonConvert.SerializeObject(details);

            return json;
        }

    }
}
