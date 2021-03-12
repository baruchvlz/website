import { NextApiRequest, NextApiResponse } from "next";

import { EpsilonCommunity } from "./../types";

type GameNameRequest = NextApiRequest & { query: { name: EpsilonCommunity.Game } };

export default function gameNameHanler({ query: { name } }: GameNameRequest, res: NextApiResponse) {
  if (!name) {
    res.status(404).json({ message: "No game found." });
  } else {
    res.status(200).json({ game: name });
  }
}