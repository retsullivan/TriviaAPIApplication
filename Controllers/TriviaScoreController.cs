using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TriviaAPIApplication.Data;

using Microsoft.EntityFrameworkCore;
using HttpDeleteAttribute = Microsoft.AspNetCore.Mvc.HttpDeleteAttribute;
using HttpGetAttribute = Microsoft.AspNetCore.Mvc.HttpGetAttribute;
using HttpPostAttribute = Microsoft.AspNetCore.Mvc.HttpPostAttribute;
using HttpPutAttribute = Microsoft.AspNetCore.Mvc.HttpPutAttribute;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;
using System.Linq;


namespace TriviaAPIApplication.Controllers
{
    [ApiController]
    [ApiConventionType(typeof(DefaultApiConventions))]
    public class TriviaScoreController : Controller
    {

        private readonly ILogger<TriviaScoreController> _logger;
        private TriviaScoreContext _context;

        public TriviaScoreController(ILogger<TriviaScoreController> logger, TriviaScoreContext context)
        {
            _logger = logger;
            _context = context;
        }
        // GET: TriviaScore

        [HttpGet]
        [Route("TriviaScores/StatList")]
        public IActionResult GetStatList()
        {
            var allScoreStats = this._context.TriviaScores.Where(e => e.Id != 1).ToList();
            
            if (null == allScoreStats)
            {
                return View("Error");
            }
            
            return Ok(allScoreStats);
        }


        [HttpGet]
        [Route("TriviaScores")]
        public IActionResult GetTriviaScores()
        {
            var totalScores = this._context.TriviaScores.Where(e => e.Id == 1).FirstOrDefault();

            var totalCorrect = this._context.TriviaScores.Where(e=>e.Id!=1).Sum(l => l.correctCount);
            var totalIncorrect = this._context.TriviaScores.Where(e => e.Id != 1).Sum(l => l.incorrectCount);

            totalScores.correctCount = totalCorrect;
            totalScores.incorrectCount = totalIncorrect;
            var totalStats = totalCorrect + totalIncorrect;

            if (totalStats == 0)
            {
                totalStats = 1;
            }

            totalScores.correctPercentage = ((double)totalCorrect * 100)/(double)totalStats;
            totalScores.incorrectPercentage = ((double)totalIncorrect *100) / (double)totalStats;
            this._context.SaveChanges();

            return Ok(totalScores);
        }



        // GET: TriviaScore
        [HttpGet]
        [Route("TriviaScores/{id}")]
        public IActionResult GetTriviaScores(int id)
        {
            var isValid = this._context.TriviaScores.Where(e => e.Id == id).Any();

            if (isValid == false)
            {
                return View("Error");
            }
            else
            {
                var userScores = this._context.TriviaScores.Where(e => e.Id == id).FirstOrDefault();
                return Ok(userScores);
            }

        }


        [HttpGet]
        [RouteAttribute("TriviaScores/AllIds")]
        public IActionResult GetAllIds()
        {
            var allIds = this._context.TriviaScores.Select(x => x.Id).ToList();

            return Ok(allIds);
        }

        [HttpPost]
        [Route("TriviaScores/Create")]
        public IActionResult Create(TriviaScores newUserStats)
        {
            if (newUserStats == null)
            {
                return View("Error");
            }
            else
            {
                var newId = this._context.TriviaScores.Max(l => l.Id) + 1;

                newUserStats.Id = newId;
                newUserStats.correctCount = 0;
                newUserStats.incorrectCount = 0;
                newUserStats.userName = newUserStats.userName;
                newUserStats.correctPercentage = 0;
                newUserStats.incorrectPercentage = 0;

                this._context.TriviaScores.Add(newUserStats);
                this._context.SaveChanges();

                return Ok();
            }
        }

        // POST: TriviaScore/Edit
        [HttpPut]
        [Route("TriviaScores/Edit")]
        public IActionResult Edit(AnswerValue answerValue)
        {
            if (this._context.TriviaScores.Where(l => l.Id == answerValue.Id).Any())
            {
                
                var userStats = this._context.TriviaScores.FirstOrDefault(l => l.Id == answerValue.Id);
                
                if (answerValue.Value==true)
                {
                    userStats.correctCount++;
                }
                else
                {
                    userStats.incorrectCount++;
                }
                
                var totalUserStats = userStats.correctCount + userStats.incorrectCount;

                userStats.correctPercentage = ((double)userStats.correctCount * 100) / (double)totalUserStats;
                userStats.incorrectPercentage = ((double)userStats.incorrectCount * 100) / (double)totalUserStats;                

                this._context.SaveChanges();
                return Ok();
            }
            else
            {
                return View("Error");
            }
        }



        // POST: TriviaScore/Edit/5
        [HttpPut]
        [Route("TriviaScores/OldEdit/{id}")]
        public IActionResult OldEdit(TriviaScores scoresToUpdate)
        {
            if (this._context.TriviaScores.Where(l => l.Id == scoresToUpdate.Id).Any())
            {


                var userStats = this._context.TriviaScores.FirstOrDefault(l => l.Id == scoresToUpdate.Id);

                userStats.correctCount += scoresToUpdate.correctCount;
                userStats.incorrectCount += scoresToUpdate.incorrectCount;
                var totalUserStats = scoresToUpdate.correctCount + scoresToUpdate.incorrectCount;

                userStats.correctPercentage = ((double)userStats.correctCount * 10)/ (double)totalUserStats;
                userStats.incorrectPercentage = ((double)userStats.incorrectCount *10) / (double)totalUserStats;

                this._context.SaveChanges();
                return Ok();
            }
            else
            {
                return View("Error");
            }
        }

        [HttpDelete]
        [Route("scores/delete/{id}")]
        public IActionResult Delete(TriviaScores userToDelete)
        {
            if (this._context.TriviaScores.Where(l => l.Id == userToDelete.Id).Any())
            {
                var userStats = this._context.TriviaScores.FirstOrDefault(l => l.Id == userToDelete.Id);
                this._context.Remove(userStats);
                return Ok();
            }
            else
            {
                return View("Error");
            }
        }
    }
}