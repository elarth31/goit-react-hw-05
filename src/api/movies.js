import axios from 'axios';
import { API_PATH } from 'constants/api';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMGE1Zjc3YmUwZTdiZDJiZGMwNzdhNzE1YjdlZjUxZSIsIm5iZiI6MTczNTMzNzI3My42MzUsInN1YiI6IjY3NmYyNTM5Zjk0NTRlZWIxZDkyYjJjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H9ctfUyntaKdFuN8K-wPfNz5vZXBZUCffBpZGGt3xJk';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers = {
	Authorization: `Bearer ${API_KEY}`,
	accept: 'application/json',
};


export const fetchTrendMovies = async () => {
	const response = await axios.get(API_PATH.trend, {});
	return response.data;
};

export const fetchSearchMovie = async (query, page = 1) => {
	const response = await axios.get(API_PATH.search, {
		params: {
			query,
			page,
		},
	});

	return response.data;
};

export const fetchMovieById = async (id) => {
	const response = await axios.get(API_PATH.movie + id + '?');
	return response.data;
};

export const fetchMovieCredits = async (id) => {
	const response = await axios.get(API_PATH.movie + id + '/credits?');
	return response.data;
};

export const fetchMovieReview = async (id) => {
	const response = await axios.get(API_PATH.movie + id + '/reviews?');
	return response.data;
};
