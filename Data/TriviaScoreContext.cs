using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace TriviaAPIApplication.Data
{
    public class TriviaScoreContext : DbContext
    {
 
        public TriviaScoreContext([NotNullAttribute] DbContextOptions options) : base(options)
        {
        }

        public DbSet<TriviaScores> TriviaScores { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            // optionsBuilder.UseSqlServer(
            // @"Server=(localdb)\mssqllocaldb;Database=master;Integrated Security=True");
        }

    }

    //[Table("TriviaScores", Schema = "dbo")]
    public class TriviaScores
    {
        public int Id { get; set; }
        public string userName { get; set; }
        public int correctCount { get; set; }
        public int incorrectCount { get; set; }
        public double correctPercentage { get; set; }
        public double incorrectPercentage { get; set; }
    }

}