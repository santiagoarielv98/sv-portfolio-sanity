import { defineQuery } from "next-sanity";

const profileFields = `
    name,
    "title": coalesce(title[$lang], title.es),
    "avatar": image.asset->url,
    "bio": coalesce(bio[$lang], bio.es),
    "objectives": coalesce(objectives[$lang], objectives.es),
    "socialLinks": socialLinks[]{
        icon,
        platform,
        url,
    },
    availability,
    "resume": resume.asset->url
`;

const baseProjectsFields = `
    "title": coalesce(title[$lang], title.es),
    "description": coalesce(description[$lang], description.es),
    "thumbnail": thumbnail.asset->url,
    "skills": skills[]->{
        "title": coalesce(title[$lang], title.es),
        icon,
    },
    links{
        repo,
        demo,
    },
`;

const experienceFields = `
    "title": coalesce(title[$lang], title.es),
    "organization": coalesce(organization[$lang], organization.es),
    type,
    date{
        start,
        end,
    },
    "description": coalesce(description[$lang], description.es),
    "skills": skills[]->{
        "title": coalesce(title[$lang], title.es),
        icon,
    },
`;

const skillCategoryFields = `
    "title": coalesce(title[$lang], title.es),
    "description": coalesce(description[$lang], description.es),
    "icon": icon,
    "skills": skills[]->{
        "title": coalesce(title[$lang], title.es),
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
