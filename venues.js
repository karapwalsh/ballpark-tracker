// venues.js
// The list of "venues" this tracker covers. To reuse this app for something else
// (e.g. Broadway theatres), replace this array — everything else in app.js reads
// from VENUES generically (id, name, group, groupLabel, location).
//
// Data current as of the 2026 MLB season.

export const APP_TITLE = "Ballpark Tracker";
export const ENTITY_LABEL = "ballpark"; // used in stats text: "of 30 ballparks visited"
export const ENTITY_LABEL_PLURAL = "ballparks";

export const VENUES = [
  // AL East
  { id: "orioles", name: "Oriole Park at Camden Yards", group: "Baltimore Orioles", division: "AL East", location: "Baltimore, MD" },
  { id: "redsox", name: "Fenway Park", group: "Boston Red Sox", division: "AL East", location: "Boston, MA" },
  { id: "yankees", name: "Yankee Stadium", group: "New York Yankees", division: "AL East", location: "Bronx, NY" },
  { id: "rays", name: "Tropicana Field", group: "Tampa Bay Rays", division: "AL East", location: "St. Petersburg, FL" },
  { id: "bluejays", name: "Rogers Centre", group: "Toronto Blue Jays", division: "AL East", location: "Toronto, ON" },

  // AL Central
  { id: "whitesox", name: "Rate Field", group: "Chicago White Sox", division: "AL Central", location: "Chicago, IL" },
  { id: "guardians", name: "Progressive Field", group: "Cleveland Guardians", division: "AL Central", location: "Cleveland, OH" },
  { id: "tigers", name: "Comerica Park", group: "Detroit Tigers", division: "AL Central", location: "Detroit, MI" },
  { id: "royals", name: "Kauffman Stadium", group: "Kansas City Royals", division: "AL Central", location: "Kansas City, MO" },
  { id: "twins", name: "Target Field", group: "Minnesota Twins", division: "AL Central", location: "Minneapolis, MN" },

  // AL West
  { id: "astros", name: "Daikin Park", group: "Houston Astros", division: "AL West", location: "Houston, TX" },
  { id: "angels", name: "Angel Stadium", group: "Los Angeles Angels", division: "AL West", location: "Anaheim, CA" },
  { id: "athletics", name: "Sutter Health Park", group: "Athletics", division: "AL West", location: "West Sacramento, CA" },
  { id: "mariners", name: "T-Mobile Park", group: "Seattle Mariners", division: "AL West", location: "Seattle, WA" },
  { id: "rangers", name: "Globe Life Field", group: "Texas Rangers", division: "AL West", location: "Arlington, TX" },

  // NL East
  { id: "braves", name: "Truist Park", group: "Atlanta Braves", division: "NL East", location: "Cumberland, GA" },
  { id: "marlins", name: "loanDepot Park", group: "Miami Marlins", division: "NL East", location: "Miami, FL" },
  { id: "mets", name: "Citi Field", group: "New York Mets", division: "NL East", location: "Queens, NY" },
  { id: "phillies", name: "Citizens Bank Park", group: "Philadelphia Phillies", division: "NL East", location: "Philadelphia, PA" },
  { id: "nationals", name: "Nationals Park", group: "Washington Nationals", division: "NL East", location: "Washington, DC" },

  // NL Central
  { id: "cubs", name: "Wrigley Field", group: "Chicago Cubs", division: "NL Central", location: "Chicago, IL" },
  { id: "reds", name: "Great American Ball Park", group: "Cincinnati Reds", division: "NL Central", location: "Cincinnati, OH" },
  { id: "brewers", name: "American Family Field", group: "Milwaukee Brewers", division: "NL Central", location: "Milwaukee, WI" },
  { id: "pirates", name: "PNC Park", group: "Pittsburgh Pirates", division: "NL Central", location: "Pittsburgh, PA" },
  { id: "cardinals", name: "Busch Stadium", group: "St. Louis Cardinals", division: "NL Central", location: "St. Louis, MO" },

  // NL West
  { id: "dbacks", name: "Chase Field", group: "Arizona Diamondbacks", division: "NL West", location: "Phoenix, AZ" },
  { id: "rockies", name: "Coors Field", group: "Colorado Rockies", division: "NL West", location: "Denver, CO" },
  { id: "dodgers", name: "Dodger Stadium", group: "Los Angeles Dodgers", division: "NL West", location: "Los Angeles, CA" },
  { id: "padres", name: "Petco Park", group: "San Diego Padres", division: "NL West", location: "San Diego, CA" },
  { id: "giants", name: "Oracle Park", group: "San Francisco Giants", division: "NL West", location: "San Francisco, CA" },
];

export const DIVISION_ORDER = [
  "AL East", "AL Central", "AL West", "NL East", "NL Central", "NL West"
];
