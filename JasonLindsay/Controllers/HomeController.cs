﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JasonLindsay.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Jason Lindsay";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Contact me";

            return View();
        }

        public ActionResult SnookerScoreboard()
        {
            ViewBag.Message = "Scoreboard";

            return View();
        }
    }
}