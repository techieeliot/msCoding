-- How would Spotify pay it's artists?

Select 
    sum(duration), 
    artist, 
    (select sum(duration) from tracks) (1.7%)
from tracks
group by artist;

-- What is the problem with this?
-- It's just about volume of listeners


select 
    sum(select )

-- musicbrainz 

-- We were able to find the releases of bad by Michael Jackson (artis_credit='519')
-- use just a select, then try a sub select, then try a join. 
-- avoid using joins

select (select sum(length) where artist_credit='519') mike/
sum(length) 
from tracks;


