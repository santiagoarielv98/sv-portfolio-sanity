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
    "location": coalesce(location[$lang], location.es),
    type,
    date{
        start,
        end,
    },
    "description": coalesce(description[][$lang], description[].es),
    "skills": skills[]->{
        "title": coalesce(title[$lang], title.es),
        icon,
    },
`;

const skillFields = `
    "title": coalesce(title[$lang], title.es),
    icon,
`;

const skillByCategoryQuery = defineQuery(`
    *[_type == "skill" && references(^._id)] {
        ${skillFields}
    }
`);

const skillCategoryFields = `
    "title": coalesce(title[$lang], title.es),
    "description": coalesce(description[$lang], description.es),
    "icon": icon,
    "skills": ${skillByCategoryQuery},
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

const experiencesQuery = `
    "experiences": *[_type == "experience"] {
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
    ${experiencesQuery},
    ${skillCategoriesQuery},
    ${contactQuery}
}`);
