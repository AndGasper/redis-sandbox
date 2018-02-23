using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using RedisSampleApplication.Models;

namespace RedisSampleApplication.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            var helloRedis = Encoding.UTF8.GetBytes("Hello Redis");
            HttpContext.Session.Set("helloKey", helloRedis);

            var getHello = default(byte[]); // Setting the default value Array 
            HttpContext.Session.TryGetValue("helloKey", out getHello);
            ViewData["Hello"] = Encoding.UTF8.GetString(getHello); 

            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
