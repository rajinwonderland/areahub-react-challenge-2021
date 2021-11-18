// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import LandfillClient, { LandfillResponse } from "../../lib/landfill-client";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<LandfillResponse>
) => {
  const { page, ...query } = req.query;
  const client = new LandfillClient();
  const landfills = await client.getLandfills(query, page as string);
  res.status(200).json(landfills);
};
