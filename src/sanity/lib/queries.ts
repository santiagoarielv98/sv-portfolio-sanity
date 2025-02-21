import { defineQuery } from "next-sanity";

const profileFields = `
    name,
    "title": coalesce(title[$lang], title.es),
    "avatar": image.asset->url,
    "bio": coalesce(bio[][$lang], bio[].es),
    "objectives": coalesce(objectives[][$lang], objectives[].es),
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
        title,
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
    "location": coalesce(location[$lang], location.es),
    type,
    date{
        start,
        end,
    },
    "description": coalesce(description[][$lang], description[].es),
    "skills": skills[]->{
        title,
        icon,
    },
`;

const skillFields = `
    title,
    icon,
`;

const skillByCategoryQuery = defineQuery(`
    *[_type == "skill" && references(^._id)] {
        ${skillFields}
    }
`);

const skillCategoryFields = `
    title,
    "description": coalesce(description[$lang], description.es),
    "icon": icon,
    "skills": ${skillByCategoryQuery},
`;

const contactFields = `
    email,
    phone,
    address,
`;

const settingFields = `
    title,
    "description": coalesce(description[$lang], description.es),
    "keywords": keywords,
    author,
    "footer": coalesce(footer[$lang], footer.es),
`;

const profileTypeQuery = `
    "profile": *[_type == "profile"][0] {
        ${profileFields}
    }
`;

const projectsQuery = `
    "projects": *[_type == "project"] | order(_updatedAt asc) {
        ${baseProjectsFields}
    }
`;

const featuredProjectsQuery = `
    "featuredProjects": *[_type == "project" && featured == true] | order(_updatedAt asc) {
        ${baseProjectsFields}
    }
`;

const experiencesQuery = `
    "experiences": *[_type == "experience"] | order(date.start desc) {
        ${experienceFields}
    }
`;

const skillCategoriesQuery = `
    "skillCategories": *[_type == "skillCategory"] | order(order asc) {
        ${skillCategoryFields}
    }
`;

const contactQuery = `
    "contact": *[_type == "contact"][0] {
        ${contactFields}
    }
`;

export const settingQuery = defineQuery(`
    *[_type == "setting"][0] {
        ${settingFields}
    }
`);

export const profileQuery = defineQuery(`{
    ${profileTypeQuery},
    ${contactQuery}
}`);

export const homeQuery = defineQuery(`{
    ${profileTypeQuery},
    ${featuredProjectsQuery},
    ${experiencesQuery},
    ${skillCategoriesQuery},
    ${contactQuery}
}`);

export const projectQuery = defineQuery(`{
    ${profileTypeQuery},
    ${projectsQuery},
    ${skillCategoriesQuery}
}`);
