CREATE TABLE films (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    annee_sortie INT,
    note_imdb DECIMAL(3,1),
    affiche VARCHAR(255)
);

INSERT INTO films (titre, annee_sortie, note_imdb, affiche) VALUES 
('Inception', 2010, 8.8, 'https://posters.movieposterdb.com/10_06/2010/1375666/l_1375666_07030c72.jpg'),
('The Dark Knight', 2008, 9.0, 'https://posters.movieposterdb.com/08_05/2008/468569/l_468569_f0e2cd63.jpg'),
('Interstellar', 2014, 8.6, 'https://posters.movieposterdb.com/14_09/2014/816692/l_816692_593eaeff.jpg'),
('Pulp Fiction', 1994, 8.9, 'https://posters.movieposterdb.com/07_10/1994/110912/l_110912_55345443.jpg'),
('The Shawshank Redemption', 1994, 9.3, 'https://posters.movieposterdb.com/05_03/1994/0111161/l_8494_0111161_3bb8e662.jpg'),
('Forrest Gump', 1994, 8.8, 'https://posters.movieposterdb.com/12_04/1994/109830/l_109830_58524cd6.jpg'),
('The Godfather', 1972, 9.2, 'https://posters.movieposterdb.com/22_07/1972/68646/l_68646_8c811dec.jpg'),
('The Lord of the Rings: The Fellowship of the Ring', 2001, 8.8, 'https://posters.movieposterdb.com/04_12/2001/0120737/l_166_0120737_158c8914.jpg'),
('Fight Club', 1999, 8.8, 'https://posters.movieposterdb.com/05_02/1999/0137523/l_7868_0137523_d46e33b9.jpg'),
('Goodfellas', 1990, 8.7, 'https://posters.movieposterdb.com/05_09/1990/0099685/l_54529_0099685_307a5bd2.jpg'),
('The Departed', 2006, 8.5, 'https://posters.movieposterdb.com/06_10/2006/0407887/l_138581_0407887_3f7c779a.jpg'),
('The Green Mile', 1999, 8.6, 'https://posters.movieposterdb.com/05_07/1999/0120689/l_34970_0120689_e3f4a87d.jpg'),
('Schindler\'s List', 1993, 8.9, 'https://posters.movieposterdb.com/08_02/1993/108052/l_108052_6ad6d11e.jpg'),
('Gladiator', 2000, 8.5, 'https://posters.movieposterdb.com/08_12/2000/172495/l_172495_93f99923.jpg'),
('The Silence of the Lambs', 1991, 8.6, 'https://posters.movieposterdb.com/12_04/1991/102926/l_102926_642e9c9a.jpg'),
('The Prestige', 2006, 8.5, 'https://posters.movieposterdb.com/06_11/2006/0482571/l_146373_0482571_5b8813d5.jpg'),
('The Social Network', 2010, 7.7, 'https://posters.movieposterdb.com/10_09/2010/1285016/l_1285016_dfc017d5.jpg'),
('Inglourious Basterds', 2009, 8.3, 'https://posters.movieposterdb.com/22_12/2009/361748/l_inglourious-basterds-movie-poster_10cbca6a.jpg'),
('The Lion King', 1994, 8.5, 'https://posters.movieposterdb.com/22_11/1994/323073/l_the-lion-king-movie-poster_07016269.jpg'),
('Avatar', 2009, 7.8, 'https://posters.movieposterdb.com/23_01/2010/1778212/l_capturing-avatar-movie-poster_5327bfa8.jpg'),
('The Incredibles', 2004, 8.0, 'https://posters.movieposterdb.com/13_05/2004/317705/l_317705_09a9c903.jpg'),
('The Avengers', 2012, 8.0, 'https://posters.movieposterdb.com/20_10/2012/848228/l_848228_9bc5bc2a.jpg'),
('Finding Nemo', 2003, 8.1, 'https://posters.movieposterdb.com/22_12/2003/401422/s_finding-nemo-movie-poster_b4956c4d.jpg'),
('Jurassic Park', 1993, 8.1, 'https://posters.movieposterdb.com/22_12/1993/478182/l_jurassic-park-movie-poster_67ec4606.jpg');
