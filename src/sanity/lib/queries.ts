import { defineQuery } from "next-sanity";

const heroFields = `
    "title": title[$lang],
    "subtitle": subtitle[$lang],
    "cta": cta[$lang],
`;

const experienceFields = `
    "title": title[$lang],
    "description": description[][$lang],
    "organization": organization[$lang],
    "location": location[$lang],
    type,
    "date": date
`;

const contentHeroType = `
    _type == "hero" => {
        ${heroFields}
    },
`;

const contentExperienceType = `
    _type == "experience" => {
        ${experienceFields}
    },
`;

const sectionFields = `
    "title": title[$lang],
    "subtitle": subtitle[$lang],
    type,
    "content": content[]-> {
        _type,
        _id,
        ...select(
            ${contentHeroType}
            ${contentExperienceType}
        )
    }
`;
export const getAllSections = defineQuery(`
    *[_type == "section"] | order(order asc) {
        ${sectionFields}
    }
`);
