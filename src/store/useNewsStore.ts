import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NewsRequest } from "../type";

type State = {
  news: NewsRequest | undefined,
}

type Action = {
  getNews: () => Promise<void>
}
export const useNewsStore = create<State & Action>()(
  persist(
    (set, get) => ({
      news: undefined,
      async getNews() {
        const url = "https://newsapi.org/v2/top-headlines?" +
          "country=ua&" +
          "apiKey=a168769d59fe4e669e9b36fcf871ca84";
        const req = new Request(url);
        const res = await fetch(req);
        const data = await res.json();
        console.log('Send request!!')
        set(() => ({ news: data }));
      }
    })
    , {
      name: "news-store",
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
);
