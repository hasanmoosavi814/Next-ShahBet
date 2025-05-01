import type { IFixture, ILeagueResponse } from "@/types/league";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const footballApi = createApi({
  reducerPath: "footballApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://v3.football.api-sports.io/",
    prepareHeaders: (headers) => {
      const key = process.env.NEXT_PUBLIC_API_KEY;
      if (key) headers.set("x-apisports-key", key);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getLeagues: builder.query<ILeagueResponse[], void>({
      query: () => "leagues",
      transformResponse: (res: any) => res.response,
    }),
    getFixturesByLeague: builder.query<
      IFixture[],
      { leagueId: number; season: number }
    >({
      query: ({ leagueId, season }) =>
        `fixtures?league=${leagueId}&season=${season}`,
      transformResponse: (res: any) => res.response,
    }),
    getLeagueById: builder.query<ILeagueResponse, number>({
      query: (id) => `leagues?id=${id}`,
      transformResponse: (res: any) => res.response[0],
    }),
    getFixtureById: builder.query<any, number>({
      query: (id) => `fixtures?id=${id}`,
      transformResponse: (res: any) => res.response[0],
    }),
    getLastMatchesByTeam: builder.query<any[], number>({
      query: (teamId) => `fixtures?team=${teamId}&last=10`,
      transformResponse: (res: any) => res.response,
    }),
    getOddsByFixtureId: builder.query<any[], number>({
      query: (fixtureId) => `odds?fixture=${fixtureId}`,
      transformResponse: (res: any) => res.response[0]?.bookmakers || [],
    }),
  }),
});

export const {
  useGetLeaguesQuery,
  useGetLeagueByIdQuery,
  useGetFixtureByIdQuery,
  useGetOddsByFixtureIdQuery,
  useGetFixturesByLeagueQuery,
  useGetLastMatchesByTeamQuery,
} = footballApi;
