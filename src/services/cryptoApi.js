// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const cryptoApiHeaders = {
//   "X-RapidAPI-Key": "dd4e6b6a4cmsh7b7f189933011e6p12a4a4jsnb6d03802721c",
//   "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
// };

// const baseUrl = "https://coinranking1.p.rapidapi.com/coins";

// const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// export const cryptoApi = createApi({
//   reducerPath: "cryptoApi",
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getCryptos: builder.query({
//       query: () => createRequest("/exchanges"),
//     }),
//   }),
// });

// export const { useGetCryptosQuery } = createApi;

// const options = {
//   method: "GET",
//   url: "https://coinranking1.p.rapidapi.com/coins",
//   params: {
//     referenceCurrencyUuid: "yhjMzLPhuIDl",
//     timePeriod: "24h",
//     "tiers[0]": "1",
//     orderBy: "marketCap",
//     orderDirection: "desc",
//     limit: "50",
//     offset: "0",
//   },
// };

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // Note: Change v1 to v2 on rapid api

// const cryptoApiHeaders = {
//   "x-rapidapi-key": "935af67341msh072d3f07b71a1f8p1cb0b5jsn44961d90a001",
//   "x-rapidapi-host": "coinranking1.p.rapidapi.com",
// };
// //const baseUrl = "https://coinranking1.p.rapidapi.com/coins";
// const baseUrl = "https://coinranking1.p.rapidapi.com";

// const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// export const cryptoApi = createApi({
//   reducerPath: "cryptoApi",
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getCryptos: builder.query({
//       query: () => createRequest("/coins"),
//     }),
//   }),
// });

// export const { useGetCryptosQuery } = cryptoApi;

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const cryptoApiHeaders = {
//   "x-rapidapi-key": "dd4e6b6a4cmsh7b7f189933011e6p12a4a4jsnb6d03802721c",
//   "x-rapidapi-host": "coinranking1.p.rapidapi.com",
// };

// const baseUrl = "https://coinranking1.p.rapidapi.com";

// const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// export const cryptoApi = createApi({
//   reducerPath: "cryptoApi",
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getCryptos: builder.query({
//       query: () => createRequest("/coins"),
//     }),
//   }),
// });

// export const { useGetCryptosQuery } = cryptoApi;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Note: Change v1 to v2 on rapid api

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "dd4e6b6a4cmsh7b7f189933011e6p12a4a4jsnb6d03802721c",
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

const baseUrl = "https://coinranking1.p.rapidapi.com";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),

    // Note: To access this endpoint you need premium plan
    getExchanges: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetExchangesQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
