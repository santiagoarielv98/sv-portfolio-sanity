/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Contact = {
  _id: string;
  _type: "contact";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  email?: string;
  phone?: string;
  address?: string;
};

export type Skill = {
  _id: string;
  _type: "skill";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  icon?: string;
  category?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "skillCategory";
  };
};

export type SkillCategory = {
  _id: string;
  _type: "skillCategory";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: LocaleText;
  icon?: string;
  order?: number;
};

export type Project = {
  _id: string;
  _type: "project";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: LocaleString;
  slug?: Slug;
  description?: LocaleText;
  thumbnail?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  gallery?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
  skills?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "skill";
  }>;
  links?: {
    repo?: string;
    demo?: string;
  };
  featured?: boolean;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type Experience = {
  _id: string;
  _type: "experience";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: LocaleString;
  organization?: LocaleString;
  location?: LocaleString;
  type?: "job" | "education" | "volunteer";
  date?: {
    start?: string;
    end?: string;
  };
  description?: Array<
    {
      _key: string;
    } & LocaleString
  >;
  skills?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "skill";
  }>;
};

export type Profile = {
  _id: string;
  _type: "profile";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  title?: LocaleString;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  resume?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    _type: "file";
  };
  bio?: Array<
    {
      _key: string;
    } & LocaleString
  >;
  objectives?: Array<
    {
      _key: string;
    } & LocaleString
  >;
  socialLinks?: Array<{
    icon?: string;
    platform?: string;
    url?: string;
    _key: string;
  }>;
  availability?: "available" | "busy" | "unavailable";
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type LocaleText = {
  _type: "localeText";
  es?: string;
  en?: string;
};

export type LocaleString = {
  _type: "localeString";
  es?: string;
  en?: string;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | Geopoint
  | Contact
  | Skill
  | SkillCategory
  | Project
  | Slug
  | Experience
  | Profile
  | SanityFileAsset
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | LocaleText
  | LocaleString;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/queries.ts
// Variable: skillByCategoryQuery
// Query: *[_type == "skill" && references(^._id)] {            title,    icon,    }
export type SkillByCategoryQueryResult = Array<{
  title: string | null;
  icon: string | null;
}>;
// Variable: homeQuery
// Query: {        "profile": *[_type == "profile"][0] {            name,    "title": coalesce(title[$lang], title.es),    "avatar": image.asset->url,    "bio": coalesce(bio[][$lang], bio[].es),    "objectives": coalesce(objectives[][$lang], objectives[].es),    "socialLinks": socialLinks[]{        icon,        platform,        url,    },    availability,    "resume": resume.asset->url    },        "featuredProjects": *[_type == "project" && featured == true] {            "title": coalesce(title[$lang], title.es),    "description": coalesce(description[$lang], description.es),    "thumbnail": thumbnail.asset->url,    "skills": skills[]->{        "title": coalesce(title[$lang], title.es),        icon,    },    links{        repo,        demo,    },    },        "experiences": *[_type == "experience"] {            "title": coalesce(title[$lang], title.es),    "organization": coalesce(organization[$lang], organization.es),    "location": coalesce(location[$lang], location.es),    type,    date{        start,        end,    },    "description": coalesce(description[][$lang], description[].es),    "skills": skills[]->{        "title": coalesce(title[$lang], title.es),        icon,    },    },        "skillCategories": *[_type == "skillCategory"] {            title,    "description": coalesce(description[$lang], description.es),    "icon": icon,    "skills":     *[_type == "skill" && references(^._id)] {            title,    icon,    },    },        "contact": *[_type == "contact"][0] {            email,    phone,    address,    }}
export type HomeQueryResult = {
  profile: {
    name: string | null;
    title:
      | Array<{
          _type: "localeString";
          es?: string;
          en?: string;
        }>
      | string
      | null;
    avatar: string | null;
    bio:
      | Array<
          {
            _key: string;
          } & LocaleString
        >
      | Array<string | null>
      | null;
    objectives:
      | Array<
          {
            _key: string;
          } & LocaleString
        >
      | Array<string | null>
      | null;
    socialLinks: Array<{
      icon: string | null;
      platform: string | null;
      url: string | null;
    }> | null;
    availability: "available" | "busy" | "unavailable" | null;
    resume: string | null;
  } | null;
  featuredProjects: Array<{
    title:
      | Array<{
          _type: "localeString";
          es?: string;
          en?: string;
        }>
      | string
      | null;
    description:
      | Array<{
          _type: "localeText";
          es?: string;
          en?: string;
        }>
      | string
      | null;
    thumbnail: string | null;
    skills: Array<{
      title: Array<string> | null;
      icon: string | null;
    }> | null;
    links: {
      repo: string | null;
      demo: string | null;
    } | null;
  }>;
  experiences: Array<{
    title:
      | Array<{
          _type: "localeString";
          es?: string;
          en?: string;
        }>
      | string
      | null;
    organization:
      | Array<{
          _type: "localeString";
          es?: string;
          en?: string;
        }>
      | string
      | null;
    location:
      | Array<{
          _type: "localeString";
          es?: string;
          en?: string;
        }>
      | string
      | null;
    type: "education" | "job" | "volunteer" | null;
    date: {
      start: string | null;
      end: string | null;
    } | null;
    description:
      | Array<
          {
            _key: string;
          } & LocaleString
        >
      | Array<string | null>
      | null;
    skills: Array<{
      title: Array<string> | null;
      icon: string | null;
    }> | null;
  }>;
  skillCategories: Array<{
    title: string | null;
    description:
      | Array<{
          _type: "localeText";
          es?: string;
          en?: string;
        }>
      | string
      | null;
    icon: string | null;
    skills: Array<{
      title: string | null;
      icon: string | null;
    }>;
  }>;
  contact: {
    email: string | null;
    phone: string | null;
    address: string | null;
  } | null;
};

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    '\n    *[_type == "skill" && references(^._id)] {\n        \n    title,\n    icon,\n\n    }\n': SkillByCategoryQueryResult;
    '{\n    \n    "profile": *[_type == "profile"][0] {\n        \n    name,\n    "title": coalesce(title[$lang], title.es),\n    "avatar": image.asset->url,\n    "bio": coalesce(bio[][$lang], bio[].es),\n    "objectives": coalesce(objectives[][$lang], objectives[].es),\n    "socialLinks": socialLinks[]{\n        icon,\n        platform,\n        url,\n    },\n    availability,\n    "resume": resume.asset->url\n\n    }\n,\n    \n    "featuredProjects": *[_type == "project" && featured == true] {\n        \n    "title": coalesce(title[$lang], title.es),\n    "description": coalesce(description[$lang], description.es),\n    "thumbnail": thumbnail.asset->url,\n    "skills": skills[]->{\n        "title": coalesce(title[$lang], title.es),\n        icon,\n    },\n    links{\n        repo,\n        demo,\n    },\n\n    }\n,\n    \n    "experiences": *[_type == "experience"] {\n        \n    "title": coalesce(title[$lang], title.es),\n    "organization": coalesce(organization[$lang], organization.es),\n    "location": coalesce(location[$lang], location.es),\n    type,\n    date{\n        start,\n        end,\n    },\n    "description": coalesce(description[][$lang], description[].es),\n    "skills": skills[]->{\n        "title": coalesce(title[$lang], title.es),\n        icon,\n    },\n\n    }\n,\n    \n    "skillCategories": *[_type == "skillCategory"] {\n        \n    title,\n    "description": coalesce(description[$lang], description.es),\n    "icon": icon,\n    "skills": \n    *[_type == "skill" && references(^._id)] {\n        \n    title,\n    icon,\n\n    }\n,\n\n    }\n,\n    \n    "contact": *[_type == "contact"][0] {\n        \n    email,\n    phone,\n    address,\n\n    }\n\n}': HomeQueryResult;
  }
}
