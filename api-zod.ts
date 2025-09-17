import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const Item = z
  .object({
    item_id: z.number().int(),
    name: z.string(),
    model: z.object({ id: z.number().int() }).partial().passthrough(),
  })
  .partial()
  .passthrough();

export const schemas = {
  Item,
};

const endpoints = makeApi([
  {
    method: "get",
    path: "/api/v12/item/:itemID",
    alias: "getApiv12itemItemID",
    requestFormat: "json",
    parameters: [
      {
        name: "itemID",
        type: "Path",
        schema: z.number().int(),
      },
    ],
    response: z.array(Item),
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
