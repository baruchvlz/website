import { NextApiRequest, NextApiResponse } from "next";

type GameNameRequest = NextApiRequest & { query: { name: string } };

export default function gameNameHandler({ query: { name } }: GameNameRequest, res: NextApiResponse) {
  if (!name) {
    res.status(404).json({ message: "No game found." });
  } else {
    res.status(200).json({ game: name });
  }
}