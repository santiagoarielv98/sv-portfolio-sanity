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
    "slug": slug.current,
    featured,
    links{
        repo,
        demo,
    }
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
    "slug": slug.current,
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
    "projects": *[_type == "project"] | order(date.start desc) {
        ${baseProjectsFields}
    }
`;

const featuredProjectsQuery = `
    "featuredProjects": *[_type == "project" && featured == true] | order(date.start desc) {
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

export const getSettingQuery = defineQuery(`
    *[_type == "setting"][0] {
        ${settingFields}
    }
`);

export const getProfileQuery = defineQuery(`{
    ${profileTypeQuery},
    ${contactQuery}
}`);

export const getHomeQuery = defineQuery(`{
    ${profileTypeQuery},
    ${featuredProjectsQuery},
    ${experiencesQuery},
    ${skillCategoriesQuery},
    ${contactQuery}
}`);

export const getProjectQuery = defineQuery(`{
    ${projectsQuery},
}`);

export const getProjectMetaQuery = defineQuery(`{
    "project": *[_type == "project" && slug.current == $slug] {
        ${baseProjectsFields},
    }[0]
}`);

export const getProjectDetailQuery = defineQuery(`{
    "project": *[_type == "project" && slug.current == $slug] {
        ${baseProjectsFields},
        status,
        "otherLinks": otherLinks[]{
            "title": coalesce(title[$lang], title.es),
            url,
        },
        date{
            start,
            end,
        },
        "keyFeatures": keyFeatures[][$lang],
        "content": content[$lang],
        "gallery": gallery[]{
            asset->{
                url,
            },
        },
    }[0]
}`);

export const getAllprojectSlugs = defineQuery(
  `*[_type == "project" && defined(slug.current)]{"slug": slug.current}`,
);
