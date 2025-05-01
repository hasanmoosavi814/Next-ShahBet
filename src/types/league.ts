export interface ICountry {
  name: string;
  code: string;
  flag: string;
}

export interface ILeague {
  id: number;
  name: string;
  type: string;
  logo: string;
}

export interface ILeagueResponse {
  league: ILeague;
  country: ICountry;
}

export interface IFixture {
  fixture: {
    id: number;
    date: string;
    status: { elapsed: number | null };
  };
  teams: {
    home: { name: string; logo: string };
    away: { name: string; logo: string };
  };
}

export interface INewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  source: { name: string };
  publishedAt: string;
}
