import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "ndrvr6cz",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skEVTC2uxz5nCwz7zjHW0rTDzUNQQsLtW6iCZKIsr5LOp1KGpzGF9PPD3rbP6PhVeAIBHUSRMrxjnkY5haGokYUjHGKoXNJjzRsbYjza7hWdM2CLPDee1uPdd4knMWiqimJNZ8eJyWDCwp4XCJjP2HmDVyc8KfOfw9THAsRJq4ocHDR9Um22",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
