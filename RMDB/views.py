from flask import Blueprint, render_template
from Movie import Movie
from Movie_utilities import read_movies
from random import randint
import requests
views = Blueprint(__name__,"views")

def get_movie_poster(title):
    api_key = 'XXX' #get your own API key
    url = f'https://api.themoviedb.org/3/search/movie?api_key={api_key}&query={title}'
    response = requests.get(url)
    data = response.json()
    if data['total_results'] > 0:
        movie_id = data['results'][0]['id']
        poster_path = data['results'][0]['poster_path']
        poster_url = f'https://image.tmdb.org/t/p/original/{poster_path}'
    else:
        poster_url = "https://as2.ftcdn.net/v2/jpg/04/98/53/13/1000_F_498531376_IhfAq5OxDNyGbBuemrDKVZjNFV1H82lX.jpg"
    return poster_url

fv = open("movies.txt", "r")
movies = (read_movies(fv))
listofMovies = []
for i in movies:
    #print(f"{i} \n")
    i.poster_url = get_movie_poster(i.title)
    listofMovies.append(i)
fv.close()
movieOFD = listofMovies[(randint(0,10))]
ReidsPicksList = []
def findMovie(title):
    for num in listofMovies:
        if num.title == title:
            return num
ReidsPicksList.append(findMovie("Perfect Blue"))
ReidsPicksList.append(findMovie("Whiplash"))


@views.route("/")
def home():
    return(render_template("index.html",movies="movieString"))

@views.route("/movies")
def movies():
    return(render_template("movies.html",movies=listofMovies))




@views.route('/views/movies/<title>')
def view_movie(title):
    movieSel = findMovie(title)
    return render_template('movieSelection.html', movie=movieSel, genreM=(movieSel.genres_string()))

@views.route("/about")
def about():
    return render_template('about.html')


@views.route("/ReidsPicks")
def ReidsPicks():
    return render_template('ReidsPicks.html', ReidsPs=ReidsPicksList)







