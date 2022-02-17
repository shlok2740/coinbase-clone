import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "2fr7i9md",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skZD4mfgx6gz6OT2P5tixN38UgGlLcDLxBaedjgk9Qn1n9a9ee7pKfoqKV8CC2bU0J5TpFtTLGpVe3wkt4hnDCNKeaIpNR6MwPMYc9RC0UmqU7em71u3fsiR9vphfNQartoTfJSL70BamTr3pZm9K2N6LsRjtGWPRZYlvw0C43vu2UAsH64M",
  useCdn: false,
});
