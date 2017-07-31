const nhlData = [
  {
    team: 'Carolina Hurricanes',
    url: 'carolinahurricanes',
    division: 'm',
    conference: 'e'
  },
  {
    team: 'Columbus Blue Jackets',
    url: 'columbusbluejackets',
    division: 'm',
    conference: 'e'
  },
  {
    team: 'New Jersey Devils',
    url: 'newjerseydevils',
    division: 'm',
    conference: 'e'
  },
  {
    team: 'New York Islanders',
    url: 'newyorkislanders',
    division: 'm',
    conference: 'e'
  },
  {
    team: 'New York Rangers',
    url: 'newyorkrangers',
    division: 'm',
    conference: 'e'
  },
  {
    team: 'Philadelphia Flyers',
    url: 'philadelphiaflyers',
    division: 'm',
    conference: 'e'
  },
  {
    team: 'Pittsburgh Penguins',
    url: 'pittsburghpenguins',
    division: 'm',
    conference: 'e'
  },
  {
    team: 'Washington Capitals',
    url: 'washingtoncapitals',
    division: 'm',
    conference: 'e'
  },
  {
    team: 'Boston Bruins',
    url: 'bostonbruins',
    division: 'a',
    conference: 'e'
  },
  {
    team: 'Buffalo Sabres',
    url: 'buffalosabres',
    division: 'a',
    conference: 'e'
  },
  {
    team: 'Detroit Red Wings',
    url: 'detroitredwings',
    division: 'a',
    conference: 'e'
  },
  {
    team: 'Florida Panthers',
    url: 'floridapanthers',
    division: 'a',
    conference: 'e'
  },
  {
    team: 'Montreal Canadians',
    url: 'montrealcanadians',
    division: 'a',
    conference: 'e'
  },
  {
    team: 'Ottawa Senators',
    url: 'ottawasenators',
    division: 'a',
    conference: 'e'
  },
  {
    team: 'Tampa Bay Lightning',
    url: 'tampabaylightning',
    division: 'a',
    conference: 'e'
  },
  {
    team: 'Toronto Maple Leafs',
    url: 'torontomapleleafs',
    division: 'a',
    conference: 'e'
  },
  {
    team: 'Chicago Blackhawks',
    url: 'chicagoblackhawks',
    division: 'c',
    conference: 'w'
  },
  {
    team: 'Colorado Avalanche',
    url: 'coloradoavalanche',
    division: 'c',
    conference: 'w'
  },
  {
    team: 'Dallas Stars',
    url: 'dallasstars',
    division: 'c',
    conference: 'w'
  },
  {
    team: 'Minnesota Wild',
    url: 'minnesotawild',
    division: 'c',
    conference: 'w'
  },
  {
    team: 'Nashville Predators',
    url: 'nashvillepredators',
    division: 'c',
    conference: 'w'
  },
  {
    team: 'St Louis Blues',
    url: 'stlouisblues',
    division: 'c',
    conference: 'w'
  },
  {
    team: 'Winnipeg Jets',
    url: 'winnipegjets',
    division: 'c',
    conference: 'w'
  },
  {
    team: 'Anaheim Ducks',
    url: 'anaheimducks',
    division: 'p',
    conference: 'w'
  },
  {
    team: 'Arizona Coyotes',
    url: 'arizonacoyotes',
    division: 'p',
    conference: 'w'
  },
  {
    team: 'Calgary Flames',
    url: 'calgaryflames',
    division: 'p',
    conference: 'w'
  },
  {
    team: 'Edmonton Oilers',
    url: 'edmontonoilers',
    division: 'p',
    conference: 'w'
  },
  {
    team: 'Los Angeles Kings',
    url: 'losangeleskings',
    division: 'p',
    conference: 'w'
  },
  {
    team: 'San Jose Sharks',
    url: 'sanjosesharks',
    division: 'p',
    conference: 'w'
  },
  {
    team: 'Vancouver Canucks',
    url: 'vancouvercanucks',
    division: 'p',
    conference: 'w'
  },
  {
    team: 'Vegas Golden Knights',
    url: 'vegasgoldenknights',
    division: 'p',
    conference: 'w'
  }
]


function filterTeams(conference) {
  return nhlData.filter(function(teams){
    return teams.conference == conference;
  });
};

module.exports = {
  all: nhlData,
  filter: filterTeams,

};
