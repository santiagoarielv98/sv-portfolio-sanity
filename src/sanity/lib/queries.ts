import { defineQuery } from "next-sanity";

const heroFields = `
    "title": title[$lang],
    "subtitle": subtitle[$lang],
    "cta": cta[$lang],
    `;

export const getAllSections = defineQuery(`
    *[_type == "hero"] | order(order asc) [0] {
        ${heroFields}
    }
`);
