// venues.js
// The list of "venues" this tracker covers. To reuse this app for something else
// (e.g. Broadway theatres), replace this array — everything else in app.js reads
// from VENUES generically (id, name, group, groupLabel, location).
//
// Data current as of the 2026 MLB season.
//
// `current: false` marks a venue as a former/demolished ballpark — it still gets
// its own card and visited toggle, but doesn't count toward the main "of 30
// ballparks visited" stat, which only tracks the 30 active stadiums.

export const APP_TITLE = "Ballpark Tracker";
export const ENTITY_LABEL = "ballpark"; // used in stats text: "of 30 ballparks visited"
export const ENTITY_LABEL_PLURAL = "ballparks";

// Team logo lookup — keyed by the exact team name used in each venue's `group`
// field. IDs are MLB's own official numeric team IDs (from statsapi.mlb.com),
// and the images are hotlinked from MLB's own logo CDN (the same one MLB.com
// itself uses) rather than files stored in this repo — used here for a personal,
// non-commercial tracker. If a logo ever fails to load, the card just falls back
// to the ⚾ emoji (see the `onerror` handling in app.js).
export const TEAM_LOGOS = {
  "Baltimore Orioles": 110,
  "Boston Red Sox": 111,
  "New York Yankees": 147,
  "Tampa Bay Rays": 139,
  "Toronto Blue Jays": 141,
  "Chicago White Sox": 145,
  "Cleveland Guardians": 114,
  "Detroit Tigers": 116,
  "Kansas City Royals": 118,
  "Minnesota Twins": 142,
  "Houston Astros": 117,
  "Los Angeles Angels": 108,
  "Athletics": 133,
  "Oakland Athletics": 133,
  "Seattle Mariners": 136,
  "Texas Rangers": 140,
  "Atlanta Braves": 144,
  "Miami Marlins": 146,
  "New York Mets": 121,
  "Philadelphia Phillies": 143,
  "Washington Nationals": 120,
  "Chicago Cubs": 112,
  "Cincinnati Reds": 113,
  "Milwaukee Brewers": 158,
  "Pittsburgh Pirates": 134,
  "St. Louis Cardinals": 138,
  "Arizona Diamondbacks": 109,
  "Colorado Rockies": 115,
  "Los Angeles Dodgers": 119,
  "San Diego Padres": 135,
  "San Francisco Giants": 137,
};

export const VENUES = [
  // AL East
  { id: "orioles", name: "Oriole Park at Camden Yards", group: "Baltimore Orioles", division: "AL East", location: "Baltimore, MD", current: true },
  { id: "redsox", name: "Fenway Park", group: "Boston Red Sox", division: "AL East", location: "Boston, MA", current: true },
  { id: "yankees", name: "Yankee Stadium", group: "New York Yankees", division: "AL East", location: "Bronx, NY", current: true },
  { id: "rays", name: "Tropicana Field", group: "Tampa Bay Rays", division: "AL East", location: "St. Petersburg, FL", current: true },
  { id: "bluejays", name: "Rogers Centre", group: "Toronto Blue Jays", division: "AL East", location: "Toronto, ON", current: true },

  // AL Central
  { id: "whitesox", name: "Rate Field", group: "Chicago White Sox", division: "AL Central", location: "Chicago, IL", current: true },
  { id: "guardians", name: "Progressive Field", group: "Cleveland Guardians", division: "AL Central", location: "Cleveland, OH", current: true },
  { id: "tigers", name: "Comerica Park", group: "Detroit Tigers", division: "AL Central", location: "Detroit, MI", current: true },
  { id: "royals", name: "Kauffman Stadium", group: "Kansas City Royals", division: "AL Central", location: "Kansas City, MO", current: true },
  { id: "twins", name: "Target Field", group: "Minnesota Twins", division: "AL Central", location: "Minneapolis, MN", current: true },

  // AL West
  { id: "astros", name: "Daikin Park", group: "Houston Astros", division: "AL West", location: "Houston, TX", current: true },
  { id: "angels", name: "Angel Stadium", group: "Los Angeles Angels", division: "AL West", location: "Anaheim, CA", current: true },
  { id: "athletics", name: "Sutter Health Park", group: "Athletics", division: "AL West", location: "West Sacramento, CA", current: true },
  { id: "mariners", name: "T-Mobile Park", group: "Seattle Mariners", division: "AL West", location: "Seattle, WA", current: true },
  { id: "rangers", name: "Globe Life Field", group: "Texas Rangers", division: "AL West", location: "Arlington, TX", current: true },

  // NL East
  { id: "braves", name: "Truist Park", group: "Atlanta Braves", division: "NL East", location: "Cumberland, GA", current: true },
  { id: "marlins", name: "loanDepot Park", group: "Miami Marlins", division: "NL East", location: "Miami, FL", current: true },
  { id: "mets", name: "Citi Field", group: "New York Mets", division: "NL East", location: "Queens, NY", current: true },
  { id: "phillies", name: "Citizens Bank Park", group: "Philadelphia Phillies", division: "NL East", location: "Philadelphia, PA", current: true },
  { id: "nationals", name: "Nationals Park", group: "Washington Nationals", division: "NL East", location: "Washington, DC", current: true },

  // NL Central
  { id: "cubs", name: "Wrigley Field", group: "Chicago Cubs", division: "NL Central", location: "Chicago, IL", current: true },
  { id: "reds", name: "Great American Ball Park", group: "Cincinnati Reds", division: "NL Central", location: "Cincinnati, OH", current: true },
  { id: "brewers", name: "American Family Field", group: "Milwaukee Brewers", division: "NL Central", location: "Milwaukee, WI", current: true },
  { id: "pirates", name: "PNC Park", group: "Pittsburgh Pirates", division: "NL Central", location: "Pittsburgh, PA", current: true },
  { id: "cardinals", name: "Busch Stadium", group: "St. Louis Cardinals", division: "NL Central", location: "St. Louis, MO", current: true },

  // NL West
  { id: "dbacks", name: "Chase Field", group: "Arizona Diamondbacks", division: "NL West", location: "Phoenix, AZ", current: true },
  { id: "rockies", name: "Coors Field", group: "Colorado Rockies", division: "NL West", location: "Denver, CO", current: true },
  { id: "dodgers", name: "Dodger Stadium", group: "Los Angeles Dodgers", division: "NL West", location: "Los Angeles, CA", current: true },
  { id: "padres", name: "Petco Park", group: "San Diego Padres", division: "NL West", location: "San Diego, CA", current: true },
  { id: "giants", name: "Oracle Park", group: "San Francisco Giants", division: "NL West", location: "San Francisco, CA", current: true },

  // Former Ballparks — recently replaced (1990s–2010s wave of new stadiums).
  // Not counted in the main "of 30" stat; each still gets its own visited toggle.
  { id: "oldyankeestadium", name: "Yankee Stadium (original, 1923–2008)", group: "New York Yankees", division: "Former Ballparks", location: "Bronx, NY", current: false },
  { id: "shea", name: "Shea Stadium (1964–2008)", group: "New York Mets", division: "Former Ballparks", location: "Queens, NY", current: false },
  { id: "tigerstadium", name: "Tiger Stadium (1912–1999)", group: "Detroit Tigers", division: "Former Ballparks", location: "Detroit, MI", current: false },
  { id: "oldcomiskey", name: "Comiskey Park (original, 1910–1990)", group: "Chicago White Sox", division: "Former Ballparks", location: "Chicago, IL", current: false },
  { id: "veteransstadium", name: "Veterans Stadium (1971–2003)", group: "Philadelphia Phillies", division: "Former Ballparks", location: "Philadelphia, PA", current: false },
  { id: "threerivers", name: "Three Rivers Stadium (1970–2000)", group: "Pittsburgh Pirates", division: "Former Ballparks", location: "Pittsburgh, PA", current: false },
  { id: "riverfront", name: "Riverfront Stadium / Cinergy Field (1970–2002)", group: "Cincinnati Reds", division: "Former Ballparks", location: "Cincinnati, OH", current: false },
  { id: "countystadium", name: "County Stadium (1953–2000)", group: "Milwaukee Brewers", division: "Former Ballparks", location: "Milwaukee, WI", current: false },
  { id: "candlestick", name: "Candlestick Park (MLB use 1960–1999)", group: "San Francisco Giants", division: "Former Ballparks", location: "San Francisco, CA", current: false },
  { id: "kingdome", name: "Kingdome (1977–1999)", group: "Seattle Mariners", division: "Former Ballparks", location: "Seattle, WA", current: false },
  { id: "metrodome", name: "Metrodome (1982–2009)", group: "Minnesota Twins", division: "Former Ballparks", location: "Minneapolis, MN", current: false },
  { id: "astrodome", name: "Astrodome (MLB use 1965–1999)", group: "Houston Astros", division: "Former Ballparks", location: "Houston, TX", current: false },
  { id: "arlingtonstadium", name: "Arlington Stadium (1965/1972–1993)", group: "Texas Rangers", division: "Former Ballparks", location: "Arlington, TX", current: false },
  { id: "clevelandmunicipal", name: "Cleveland Municipal Stadium (MLB use to 1993)", group: "Cleveland Guardians", division: "Former Ballparks", location: "Cleveland, OH", current: false },
  { id: "fultoncountystadium", name: "Atlanta–Fulton County Stadium (1966–1996)", group: "Atlanta Braves", division: "Former Ballparks", location: "Atlanta, GA", current: false },
  { id: "qualcomm", name: "Qualcomm Stadium / Jack Murphy Stadium (MLB use to 2003)", group: "San Diego Padres", division: "Former Ballparks", location: "San Diego, CA", current: false },
  { id: "buschstadium2", name: "Busch Stadium II (1966–2005)", group: "St. Louis Cardinals", division: "Former Ballparks", location: "St. Louis, MO", current: false },
  { id: "turnerfield", name: "Turner Field (1997–2016)", group: "Atlanta Braves", division: "Former Ballparks", location: "Atlanta, GA", current: false },
  { id: "oaklandcoliseum", name: "Oakland Coliseum (1968–2024)", group: "Oakland Athletics", division: "Former Ballparks", location: "Oakland, CA", current: false },

  // Relocated franchises — parks tied to a team's home before the whole franchise
  // moved cities (not just a same-city rebuild). Only one MLB team has relocated
  // since 1972, so this list is naturally short.
  { id: "olympicstadium", name: "Olympic Stadium (Montreal Expos, 1977–2004)", group: "Montreal Expos — became the Washington Nationals in 2005", division: "Former Ballparks", location: "Montreal, QC", current: false },
  { id: "rfkstadium", name: "RFK Stadium (Washington Nationals, 2005–2007)", group: "Washington Nationals", division: "Former Ballparks", location: "Washington, DC", current: false },

  // Minor League (Triple-A) — all 30 current Triple-A stadiums, the top affiliate
  // level right below MLB. `minorLeague: true` keeps these out of both the main
  // "of 30 ballparks" stat and the "former ballparks" count — they get their own
  // stat line. Data current as of the 2026 season (International League: 20 teams,
  // Pacific Coast League: 10 teams).
  { id: "milb-bisons", name: "Sahlen Field", group: "Buffalo Bisons", division: "Minor League (Triple-A)", location: "Buffalo, NY", current: false, minorLeague: true },
  { id: "milb-knights", name: "Truist Field", group: "Charlotte Knights", division: "Minor League (Triple-A)", location: "Charlotte, NC", current: false, minorLeague: true },
  { id: "milb-clippers", name: "Huntington Park", group: "Columbus Clippers", division: "Minor League (Triple-A)", location: "Columbus, OH", current: false, minorLeague: true },
  { id: "milb-bulls", name: "Durham Bulls Athletic Park", group: "Durham Bulls", division: "Minor League (Triple-A)", location: "Durham, NC", current: false, minorLeague: true },
  { id: "milb-stripers", name: "Gwinnett Field", group: "Gwinnett Stripers", division: "Minor League (Triple-A)", location: "Lawrenceville, GA", current: false, minorLeague: true },
  { id: "milb-indianapolis", name: "Victory Field", group: "Indianapolis Indians", division: "Minor League (Triple-A)", location: "Indianapolis, IN", current: false, minorLeague: true },
  { id: "milb-iowacubs", name: "Principal Park", group: "Iowa Cubs", division: "Minor League (Triple-A)", location: "Des Moines, IA", current: false, minorLeague: true },
  { id: "milb-jumboshrimp", name: "VyStar Ballpark", group: "Jacksonville Jumbo Shrimp", division: "Minor League (Triple-A)", location: "Jacksonville, FL", current: false, minorLeague: true },
  { id: "milb-ironpigs", name: "Coca-Cola Park", group: "Lehigh Valley IronPigs", division: "Minor League (Triple-A)", location: "Allentown, PA", current: false, minorLeague: true },
  { id: "milb-bats", name: "Louisville Slugger Field", group: "Louisville Bats", division: "Minor League (Triple-A)", location: "Louisville, KY", current: false, minorLeague: true },
  { id: "milb-redbirds", name: "AutoZone Park", group: "Memphis Redbirds", division: "Minor League (Triple-A)", location: "Memphis, TN", current: false, minorLeague: true },
  { id: "milb-sounds", name: "First Horizon Park", group: "Nashville Sounds", division: "Minor League (Triple-A)", location: "Nashville, TN", current: false, minorLeague: true },
  { id: "milb-tides", name: "Harbor Park", group: "Norfolk Tides", division: "Minor League (Triple-A)", location: "Norfolk, VA", current: false, minorLeague: true },
  { id: "milb-stormchasers", name: "Werner Park", group: "Omaha Storm Chasers", division: "Minor League (Triple-A)", location: "Papillion, NE", current: false, minorLeague: true },
  { id: "milb-redwings", name: "ESL Ballpark", group: "Rochester Red Wings", division: "Minor League (Triple-A)", location: "Rochester, NY", current: false, minorLeague: true },
  { id: "milb-railriders", name: "PNC Field", group: "Scranton/Wilkes-Barre RailRiders", division: "Minor League (Triple-A)", location: "Moosic, PA", current: false, minorLeague: true },
  { id: "milb-saints", name: "CHS Field", group: "St. Paul Saints", division: "Minor League (Triple-A)", location: "Saint Paul, MN", current: false, minorLeague: true },
  { id: "milb-syracusemets", name: "NBT Bank Stadium", group: "Syracuse Mets", division: "Minor League (Triple-A)", location: "Syracuse, NY", current: false, minorLeague: true },
  { id: "milb-mudhens", name: "Fifth Third Field", group: "Toledo Mud Hens", division: "Minor League (Triple-A)", location: "Toledo, OH", current: false, minorLeague: true },
  { id: "milb-worcesterredsox", name: "Polar Park", group: "Worcester Red Sox", division: "Minor League (Triple-A)", location: "Worcester, MA", current: false, minorLeague: true },
  { id: "milb-isotopes", name: "Rio Grande Credit Union Field at Isotopes Park", group: "Albuquerque Isotopes", division: "Minor League (Triple-A)", location: "Albuquerque, NM", current: false, minorLeague: true },
  { id: "milb-chihuahuas", name: "Southwest University Park", group: "El Paso Chihuahuas", division: "Minor League (Triple-A)", location: "El Paso, TX", current: false, minorLeague: true },
  { id: "milb-aviators", name: "Las Vegas Ballpark", group: "Las Vegas Aviators", division: "Minor League (Triple-A)", location: "Las Vegas, NV", current: false, minorLeague: true },
  { id: "milb-comets", name: "Chickasaw Bricktown Ballpark", group: "Oklahoma City Comets", division: "Minor League (Triple-A)", location: "Oklahoma City, OK", current: false, minorLeague: true },
  { id: "milb-aces", name: "Greater Nevada Field", group: "Reno Aces", division: "Minor League (Triple-A)", location: "Reno, NV", current: false, minorLeague: true },
  { id: "milb-express", name: "Dell Diamond", group: "Round Rock Express", division: "Minor League (Triple-A)", location: "Round Rock, TX", current: false, minorLeague: true },
  { id: "milb-rivercats", name: "Sutter Health Park", group: "Sacramento River Cats", division: "Minor League (Triple-A)", location: "Sacramento, CA", current: false, minorLeague: true },
  { id: "milb-bees", name: "The Ballpark at America First Square", group: "Salt Lake Bees", division: "Minor League (Triple-A)", location: "South Jordan, UT", current: false, minorLeague: true },
  { id: "milb-spacecowboys", name: "Constellation Field", group: "Sugar Land Space Cowboys", division: "Minor League (Triple-A)", location: "Sugar Land, TX", current: false, minorLeague: true },
  { id: "milb-rainiers", name: "Cheney Stadium", group: "Tacoma Rainiers", division: "Minor League (Triple-A)", location: "Tacoma, WA", current: false, minorLeague: true },
];

export const DIVISION_ORDER = [
  "AL East", "AL Central", "AL West", "NL East", "NL Central", "NL West", "Former Ballparks", "Minor League (Triple-A)"
];
