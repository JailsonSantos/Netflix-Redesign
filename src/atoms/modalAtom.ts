import { atom } from 'recoil';
import { Movie } from "@/@types/typings";
import { DocumentData } from "firebase/firestore";

export const modalState = atom({
  key: 'modalState',
  default: false,
});

export const movieState = atom<Movie | DocumentData | null>({
  key: 'movieState',
  default: null,
});