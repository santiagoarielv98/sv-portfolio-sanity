import { defineQuery } from "next-sanity";

const heroFields = `
    "title": title[$lang],
    "subtitle": subtitle[$lang],
    "cta": cta[$lang],
`;

const aboutFields = `
    "iam": iam[$lang],
    "objective": objective[$lang],
    "achievements": achievements[] {
        "title": title[$lang],
        "description": description[$lang]
    }
`;

const experienceFields = `
    "title": title[$lang],
    "description": description[][$lang],
    "organization": organization[$lang],
    "location": location[$lang],
    type,
    "date": date
`;

const projectFields = `
    "title": title[$lang],
    "description": description[$lang],
    "thumbnail": thumbnail.asset->url,
    "links": links
`;

const profileFields = `
    "name": name[$lang],
    "email": email,
    "phone": phone,
    "location": location[$lang],
    "image": image.asset->url,
    "bio": bio[][$lang],
    "objectives": objectives[][$lang],
    "languages": languages[][$lang],
    "interests": interests
`;

const skillsFields = `
    "title": title[$lang],
    "description": description[$lang]
`;

const contactFields = `
    "title": title[$lang],
    "description": description[$lang],
    "form": {
        "nameField": {
            "label": form.nameField.label[$lang],
            "placeholder": form.nameField.placeholder[$lang]
        },
        "emailField": {
            "label": form.emailField.label[$lang],
            "placeholder": form.emailField.placeholder[$lang]
        },
        "subjectField": {
            "label": form.subjectField.label[$lang],
            "placeholder": form.subjectField.placeholder[$lang]
        },
        "messageField": {
            "label": form.messageField.label[$lang],
            "placeholder": form.messageField.placeholder[$lang]
        },
        "submitButton": form.submitButton[$lang]
    }
`;

const contentHeroType = `
    _type == "hero" => {
        ${heroFields}
    },
`;

const contentAboutType = `
    _type == "about" => {
        ${aboutFields}
    },
`;

const contentExperienceType = `
    _type == "experience" => {
        ${experienceFields}
    },
`;

const contentProjectType = `
    _type == "project" => {
        ${projectFields}
    },
`;

const contentSkillsType = `
    _type == "skills" => {
        ${skillsFields}
    },
`;

const contentContactType = `
    _type == "contact" => {
        ${contactFields}
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
            ${contentAboutType}
            ${contentExperienceType}
            ${contentProjectType}
            ${contentContactType}
            ${contentSkillsType}
        )
    }
`;
export const getAllSections = defineQuery(`
    *[_type == "section"] | order(order asc) {
        ${sectionFields}
    }
`);

export const getHomePage = defineQuery(`{
    "sections": *[_type == "section"] | order(order asc) {
        ${sectionFields}
    },
    "profile": *[_type == "profile"][0] {
        ${profileFields}
    }
}`);
