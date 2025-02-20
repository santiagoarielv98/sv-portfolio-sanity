import { defineQuery } from "next-sanity";

const profileFields = `
    name,
    "title": title[$lang],
    "avatar": image.asset->url,
    "bio": bio[$lang],
    "objectives": objectives[$lang],
    "socialLinks": socialLinks[]{
        icon,
        platform,
        url,
    },
    availability,
    "resume": resume.asset->url
`;

const baseProjectsFields = `
    "title": title[$lang],
    "description": description[$lang],
    "thumbnail": thumbnail.asset->url,
    "skills": skills[]->{
        "title": title[$lang],
        icon,
    },
    links{
        repo,
        demo,
    },
`;

const experienceFields = `
    "title": title[$lang],
    "organization": organization[$lang],
    type,
    date{
        start,
        end,
    },
    "description": description[$lang],
    "skills": skills[]->{
        "title": title[$lang],
        icon,
    },
`;

const skillCategoryFields = `
    "title": title[$lang],
    "description": description[$lang],
    "icon": icon,
    "skills": skills[]->{
        "title": title[$lang],
        icon,
    },
`;

const contactFields = `
    email,
    phone,
    address,
`;

const profileQuery = `
    "profile": *[_type == "profile"][0] {
        ${profileFields}
    }
`;

const featuredProjectsQuery = `
    "featuredProjects": *[_type == "project" && featured == true] {
        ${baseProjectsFields}
    }
`;

const experienceQuery = `
    "experience": *[_type == "experience"] {
        ${experienceFields}
    }
`;

const skillCategoriesQuery = `
    "skillCategories": *[_type == "skillCategory"] {
        ${skillCategoryFields}
    }
`;

const contactQuery = `
    "contact": *[_type == "contact"][0] {
        ${contactFields}
    }
`;

export const homeQuery = defineQuery(`{
    ${profileQuery},
    ${featuredProjectsQuery},
    ${experienceQuery},
    ${skillCategoriesQuery},
    ${contactQuery}
}`);
