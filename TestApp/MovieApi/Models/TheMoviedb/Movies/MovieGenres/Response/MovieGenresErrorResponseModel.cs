﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieApi.Models.TheMoviedb.Movies.MovieGenres.Response
{
    public class MovieGenresErrorResponseModel
    {
        public bool Success { get; set; }
        public int Status_code { get; set; }
        public string Status_message { get; set; }
    }
}
