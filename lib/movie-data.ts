import { Movie } from './types';

export const featuredMovies: Movie[] = [
  {
    id: 'movie1',
    title: 'Stranger Things',
    description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
    posterUrl: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: 'https://occ-0-2568-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZCF8yhVPZvMrQZ301Zv0KbXBj2jJEKMjsQoMCpHOQuLOiyM2XHyqm-xJJBiTLEh2w5CJZDJbBBY1p_0k1zEaZxs6P2aBWvJ6liSXz7I6WEVMQJLjB6C6AgWzVM4JJ-EXH40T1CRrl1Atv8hR21KNfuvLyAO4XvXFw.webp',
    year: 2022,
    maturityRating: 'TV-14',
    duration: '1h 30m',
    matchPercentage: 97,
    genres: ['Sci-Fi', 'Horror', 'Drama'],
    type: 'TV Show'
  },
  {
    id: 'movie2',
    title: 'The Witcher',
    description: 'Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.',
    posterUrl: 'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2021,
    maturityRating: 'TV-MA',
    duration: '1h 15m',
    matchPercentage: 93,
    genres: ['Fantasy', 'Action', 'Adventure'],
    type: 'TV Show'
  },
  {
    id: 'movie3',
    title: 'Interstellar',
    description: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
    posterUrl: 'https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2014,
    maturityRating: 'PG-13',
    duration: '2h 49m',
    matchPercentage: 95,
    genres: ['Sci-Fi', 'Adventure', 'Drama'],
    type: 'Movie'
  }
];

export const trendingNow: Movie[] = [
  {
    id: 'trend1',
    title: 'Blade Runner 2049',
    description: 'Young Blade Runner K\'s discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who\'s been missing for thirty years.',
    posterUrl: 'https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/3709369/pexels-photo-3709369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2017,
    maturityRating: 'R',
    duration: '2h 44m',
    matchPercentage: 92,
    genres: ['Sci-Fi', 'Drama', 'Mystery'],
    type: 'Movie'
  },
  {
    id: 'trend2',
    title: 'The Queen\'s Gambit',
    description: 'Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA.',
    posterUrl: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/5920020/pexels-photo-5920020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2020,
    maturityRating: 'TV-MA',
    duration: '1h',
    matchPercentage: 97,
    genres: ['Drama', 'History'],
    type: 'TV Show'
  },
  {
    id: 'trend3',
    title: 'Dune',
    description: 'Feature adaptation of Frank Herbert\'s science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset in the galaxy.',
    posterUrl: 'https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2021,
    maturityRating: 'PG-13',
    duration: '2h 35m',
    matchPercentage: 95,
    genres: ['Sci-Fi', 'Adventure', 'Drama'],
    type: 'Movie'
  },
  {
    id: 'trend4',
    title: 'Dark',
    description: 'A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.',
    posterUrl: 'https://images.pexels.com/photos/3617457/pexels-photo-3617457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2020,
    maturityRating: 'TV-MA',
    duration: '1h',
    matchPercentage: 98,
    genres: ['Sci-Fi', 'Thriller', 'Mystery'],
    type: 'TV Show'
  },
  {
    id: 'trend5',
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    posterUrl: 'https://images.pexels.com/photos/2524115/pexels-photo-2524115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/2524115/pexels-photo-2524115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2008,
    maturityRating: 'PG-13',
    duration: '2h 32m',
    matchPercentage: 94,
    genres: ['Action', 'Crime', 'Drama'],
    type: 'Movie'
  },
  {
    id: 'trend6',
    title: 'The Matrix',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    posterUrl: 'https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 1999,
    maturityRating: 'R',
    duration: '2h 16m',
    matchPercentage: 96,
    genres: ['Sci-Fi', 'Action'],
    type: 'Movie'
  },
  {
    id: 'trend7',
    title: 'Breaking Bad',
    description: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.',
    posterUrl: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2013,
    maturityRating: 'TV-MA',
    duration: '45m',
    matchPercentage: 99,
    genres: ['Crime', 'Drama', 'Thriller'],
    type: 'TV Show'
  }
];

export const newReleases: Movie[] = [
  {
    id: 'new1',
    title: 'The Midnight Sky',
    description: 'A lone scientist in the Arctic races to contact a crew of astronauts returning home to a mysterious global catastrophe.',
    posterUrl: 'https://images.pexels.com/photos/127025/pexels-photo-127025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/127025/pexels-photo-127025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2020,
    maturityRating: 'PG-13',
    duration: '2h 2m',
    matchPercentage: 81,
    genres: ['Sci-Fi', 'Drama', 'Fantasy'],
    type: 'Movie'
  },
  {
    id: 'new2',
    title: 'Bridgerton',
    description: 'Wealth, lust, and betrayal set against the backdrop of Regency-era England, seen through the eyes of the powerful Bridgerton family.',
    posterUrl: 'https://images.pexels.com/photos/3343253/pexels-photo-3343253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/3343253/pexels-photo-3343253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2020,
    maturityRating: 'TV-MA',
    duration: '1h',
    matchPercentage: 86,
    genres: ['Drama', 'Romance'],
    type: 'TV Show'
  },
  {
    id: 'new3',
    title: 'Soul',
    description: 'A musician who has lost his passion for music is transported out of his body and must find his way back with the help of an infant soul learning about herself.',
    posterUrl: 'https://images.pexels.com/photos/3270229/pexels-photo-3270229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/3270229/pexels-photo-3270229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2020,
    maturityRating: 'PG',
    duration: '1h 40m',
    matchPercentage: 97,
    genres: ['Animation', 'Adventure', 'Comedy'],
    type: 'Movie'
  },
  {
    id: 'new4',
    title: 'The Mandalorian',
    description: 'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.',
    posterUrl: 'https://images.pexels.com/photos/6507483/pexels-photo-6507483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/6507483/pexels-photo-6507483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2019,
    maturityRating: 'TV-14',
    duration: '40m',
    matchPercentage: 94,
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    type: 'TV Show'
  },
  {
    id: 'new5',
    title: 'Mank',
    description: '1930s Hollywood is reevaluated through the eyes of scathing wit and alcoholic screenwriter Herman J. Mankiewicz as he races to finish "Citizen Kane."',
    posterUrl: 'https://images.pexels.com/photos/14455542/pexels-photo-14455542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/14455542/pexels-photo-14455542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2020,
    maturityRating: 'R',
    duration: '2h 11m',
    matchPercentage: 89,
    genres: ['Biography', 'Drama'],
    type: 'Movie'
  }
];

export const topRated: Movie[] = [
  {
    id: 'top1',
    title: 'Inception',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    posterUrl: 'https://images.pexels.com/photos/2387065/pexels-photo-2387065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/2387065/pexels-photo-2387065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2010,
    maturityRating: 'PG-13',
    duration: '2h 28m',
    matchPercentage: 96,
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    type: 'Movie'
  },
  {
    id: 'top2',
    title: 'The Crown',
    description: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the twentieth century.',
    posterUrl: 'https://images.pexels.com/photos/2952733/pexels-photo-2952733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/2952733/pexels-photo-2952733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2016,
    maturityRating: 'TV-MA',
    duration: '1h',
    matchPercentage: 95,
    genres: ['Biography', 'Drama', 'History'],
    type: 'TV Show'
  },
  {
    id: 'top3',
    title: 'Parasite',
    description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    posterUrl: 'https://images.pexels.com/photos/169203/pexels-photo-169203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/169203/pexels-photo-169203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2019,
    maturityRating: 'R',
    duration: '2h 12m',
    matchPercentage: 98,
    genres: ['Comedy', 'Drama', 'Thriller'],
    type: 'Movie'
  },
  {
    id: 'top4',
    title: 'The Social Dilemma',
    description: 'Tech experts sound the alarm on the dangerous human impact of social networking.',
    posterUrl: 'https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2020,
    maturityRating: 'PG-13',
    duration: '1h 34m',
    matchPercentage: 92,
    genres: ['Documentary', 'Drama'],
    type: 'Movie'
  },
  {
    id: 'top5',
    title: 'Avatar',
    description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    posterUrl: 'https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2009,
    maturityRating: 'PG-13',
    duration: '2h 42m',
    matchPercentage: 93,
    genres: ['Action', 'Adventure', 'Fantasy'],
    type: 'Movie'
  }
];

export const actionMovies: Movie[] = [
  {
    id: 'action1',
    title: 'John Wick',
    description: 'An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.',
    posterUrl: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2014,
    maturityRating: 'R',
    duration: '1h 41m',
    matchPercentage: 91,
    genres: ['Action', 'Crime', 'Thriller'],
    type: 'Movie'
  },
  {
    id: 'action2',
    title: 'The Old Guard',
    description: 'A group of mercenaries, all centuries-old immortals with the ability to heal themselves, discover someone is onto their secret, and they must fight to protect their freedom.',
    posterUrl: 'https://images.pexels.com/photos/260291/pexels-photo-260291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/260291/pexels-photo-260291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2020,
    maturityRating: 'R',
    duration: '2h 5m',
    matchPercentage: 84,
    genres: ['Action', 'Fantasy', 'Thriller'],
    type: 'Movie'
  },
  {
    id: 'action3',
    title: 'Extraction',
    description: 'Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he\'s enlisted to rescue the kidnapped son of an imprisoned international crime lord.',
    posterUrl: 'https://images.pexels.com/photos/3791466/pexels-photo-3791466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/3791466/pexels-photo-3791466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2020,
    maturityRating: 'R',
    duration: '1h 56m',
    matchPercentage: 82,
    genres: ['Action', 'Thriller'],
    type: 'Movie'
  },
  {
    id: 'action4',
    title: 'Mad Max: Fury Road',
    description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.',
    posterUrl: 'https://images.pexels.com/photos/1336924/pexels-photo-1336924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/1336924/pexels-photo-1336924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2015,
    maturityRating: 'R',
    duration: '2h',
    matchPercentage: 94,
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    type: 'Movie'
  },
  {
    id: 'action5',
    title: 'The Dark Knight Rises',
    description: 'Eight years after the Joker\'s reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.',
    posterUrl: 'https://images.pexels.com/photos/1716158/pexels-photo-1716158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/1716158/pexels-photo-1716158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2012,
    maturityRating: 'PG-13',
    duration: '2h 44m',
    matchPercentage: 91,
    genres: ['Action', 'Adventure'],
    type: 'Movie'
  }
];

export const comedyMovies: Movie[] = [
  {
    id: 'comedy1',
    title: 'The Good Place',
    description: 'Four people and their afterlife tormentor struggle in the afterlife to define what it means to be good.',
    posterUrl: 'https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2020,
    maturityRating: 'TV-14',
    duration: '22m',
    matchPercentage: 97,
    genres: ['Comedy', 'Drama', 'Fantasy'],
    type: 'TV Show'
  },
  {
    id: 'comedy2',
    title: 'Schitt\'s Creek',
    description: 'Suddenly broke, the formerly filthy-rich Rose family is reduced to living in a ramshackle motel in a town they once bought as a joke: Schitt\'s Creek.',
    posterUrl: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2020,
    maturityRating: 'TV-14',
    duration: '22m',
    matchPercentage: 96,
    genres: ['Comedy'],
    type: 'TV Show'
  },
  {
    id: 'comedy3',
    title: 'Space Force',
    description: 'The people tasked with creating a sixth branch of the armed services: The Space Force.',
    posterUrl: 'https://images.pexels.com/photos/5699665/pexels-photo-5699665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/5699665/pexels-photo-5699665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2020,
    maturityRating: 'TV-MA',
    duration: '30m',
    matchPercentage: 79,
    genres: ['Comedy'],
    type: 'TV Show'
  },
  {
    id: 'comedy4',
    title: 'Brooklyn Nine-Nine',
    description: 'Jake Peralta, an immature, but talented N.Y.P.D. detective in Brooklyn\'s 99th Precinct, comes into immediate conflict with his new commanding officer, the serious and stern Captain Ray Holt.',
    posterUrl: 'https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2013,
    maturityRating: 'TV-14',
    duration: '22m',
    matchPercentage: 95,
    genres: ['Comedy', 'Crime'],
    type: 'TV Show'
  },
  {
    id: 'comedy5',
    title: 'The Office',
    description: 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.',
    posterUrl: 'https://images.pexels.com/photos/326611/pexels-photo-326611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdropUrl: 'https://images.pexels.com/photos/326611/pexels-photo-326611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    logoUrl: null,
    year: 2013,
    maturityRating: 'TV-14',
    duration: '22m',
    matchPercentage: 98,
    genres: ['Comedy'],
    type: 'TV Show'
  }
];

export const movieCategories = [
  { id: 1, name: 'Trending Now' },
  { id: 2, name: 'New Releases' },
  { id: 3, name: 'Top Rated' },
  { id: 4, name: 'Action Thrillers' },
  { id: 5, name: 'Comedies' },
  { id: 6, name: 'Horror Movies' },
  { id: 7, name: 'Romance Movies' },
  { id: 8, name: 'Documentaries' },
  { id: 9, name: 'Sci-Fi' }
];

export const mockSearchResults = [
  {
    id: 'search1',
    title: 'Stranger Things',
    year: 2016,
    type: 'TV Show',
    posterUrl: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'search2',
    title: 'The Stranger',
    year: 2020,
    type: 'TV Show',
    posterUrl: 'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'search3',
    title: 'Stranger Than Fiction',
    year: 2006,
    type: 'Movie',
    posterUrl: 'https://images.pexels.com/photos/3617457/pexels-photo-3617457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];