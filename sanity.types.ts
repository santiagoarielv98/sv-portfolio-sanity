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
  title?: LocaleString;
  description?: LocaleText;
  form?: {
    nameField?: {
      label?: LocaleString;
      placeholder?: LocaleString;
    };
    emailField?: {
      label?: LocaleString;
      placeholder?: LocaleString;
    };
    subjectField?: {
      label?: LocaleString;
      placeholder?: LocaleString;
    };
    messageField?: {
      label?: LocaleString;
      placeholder?: LocaleString;
    };
    submitButton?: LocaleString;
  };
};

export type About = {
  _id: string;
  _type: "about";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  iam?: LocaleString;
  objective?: LocaleString;
  achievements?: Array<{
    title?: LocaleString;
    description?: LocaleText;
    _key: string;
  }>;
};

export type Profile = {
  _id: string;
  _type: "profile";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: LocaleString;
  email?: string;
  phone?: string;
  location?: LocaleString;
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
  languages?: Array<
    {
      _key: string;
    } & LocaleString
  >;
  interests?: Array<string>;
};

export type Project = {
  _id: string;
  _type: "project";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: LocaleString;
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
  links?: {
    repo?: string;
    demo?: string;
  };
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
};

export type Hero = {
  _id: string;
  _type: "hero";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: LocaleString;
  subtitle?: LocaleString;
  cta?: LocaleString;
};

export type Section = {
  _id: string;
  _type: "section";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: LocaleString;
  subtitle?: LocaleString;
  identifier?: Slug;
  type?:
    | "hero"
    | "about"
    | "education"
    | "experience"
    | "projects"
    | "skills"
    | "contact";
  content?: Array<
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "hero";
      }
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "about";
      }
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "experience";
      }
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "project";
      }
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "contact";
      }
  >;
  order?: number;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
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
  | SanityFileAsset
  | Geopoint
  | Contact
  | About
  | Profile
  | Project
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | Experience
  | Hero
  | Section
  | Slug
  | LocaleText
  | LocaleString;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/queries.ts
// Variable: getAllSections
// Query: *[_type == "section"] | order(order asc) {            "title": title[$lang],    "subtitle": subtitle[$lang],    type,    "content": content[]-> {        _type,        _id,        ...select(                _type == "hero" => {            "title": title[$lang],    "subtitle": subtitle[$lang],    "cta": cta[$lang],    },                _type == "about" => {            "iam": iam[$lang],    "objective": objective[$lang],    "achievements": achievements[] {        "title": title[$lang],        "description": description[$lang]    }    },                _type == "experience" => {            "title": title[$lang],    "description": description[][$lang],    "organization": organization[$lang],    "location": location[$lang],    type,    "date": date    },                _type == "project" => {            "title": title[$lang],    "description": description[$lang],    "thumbnail": thumbnail.asset->url,    "links": links    },                _type == "contact" => {            "title": title[$lang],    "description": description[$lang],    "form": {        "nameField": {            "label": form.nameField.label[$lang],            "placeholder": form.nameField.placeholder[$lang]        },        "emailField": {            "label": form.emailField.label[$lang],            "placeholder": form.emailField.placeholder[$lang]        },        "subjectField": {            "label": form.subjectField.label[$lang],            "placeholder": form.subjectField.placeholder[$lang]        },        "messageField": {            "label": form.messageField.label[$lang],            "placeholder": form.messageField.placeholder[$lang]        },        "submitButton": submitButton[$lang]    }    },        )    }    }
export type GetAllSectionsResult = Array<{
  title: Array<{
    _type: "localeString";
    es?: string;
    en?: string;
  }> | null;
  subtitle: Array<{
    _type: "localeString";
    es?: string;
    en?: string;
  }> | null;
  type:
    | "about"
    | "contact"
    | "education"
    | "experience"
    | "hero"
    | "projects"
    | "skills"
    | null;
  content: Array<
    | {
        _type: "about";
        _id: string;
        iam: Array<{
          _type: "localeString";
          es?: string;
          en?: string;
        }> | null;
        objective: Array<{
          _type: "localeString";
          es?: string;
          en?: string;
        }> | null;
        achievements: Array<{
          title: Array<{
            _type: "localeString";
            es?: string;
            en?: string;
          }> | null;
          description: Array<{
            _type: "localeText";
            es?: string;
            en?: string;
          }> | null;
        }> | null;
      }
    | {
        _type: "contact";
        _id: string;
        title: Array<{
          _type: "localeString";
          es?: string;
          en?: string;
        }> | null;
        description: Array<{
          _type: "localeText";
          es?: string;
          en?: string;
        }> | null;
        form: {
          nameField: {
            label: Array<{
              _type: "localeString";
              es?: string;
              en?: string;
            }> | null;
            placeholder: Array<{
              _type: "localeString";
              es?: string;
              en?: string;
            }> | null;
          };
          emailField: {
            label: Array<{
              _type: "localeString";
              es?: string;
              en?: string;
            }> | null;
            placeholder: Array<{
              _type: "localeString";
              es?: string;
              en?: string;
            }> | null;
          };
          subjectField: {
            label: Array<{
              _type: "localeString";
              es?: string;
              en?: string;
            }> | null;
            placeholder: Array<{
              _type: "localeString";
              es?: string;
              en?: string;
            }> | null;
          };
          messageField: {
            label: Array<{
              _type: "localeString";
              es?: string;
              en?: string;
            }> | null;
            placeholder: Array<{
              _type: "localeString";
              es?: string;
              en?: string;
            }> | null;
          };
          submitButton: null;
        };
      }
    | {
        _type: "experience";
        _id: string;
        title: Array<{
          _type: "localeString";
          es?: string;
          en?: string;
        }> | null;
        description: Array<
          {
            _key: string;
          } & LocaleString
        > | null;
        organization: Array<{
          _type: "localeString";
          es?: string;
          en?: string;
        }> | null;
        location: Array<{
          _type: "localeString";
          es?: string;
          en?: string;
        }> | null;
        type: "education" | "job" | "volunteer" | null;
        date: {
          start?: string;
          end?: string;
        } | null;
      }
    | {
        _type: "hero";
        _id: string;
        title: Array<{
          _type: "localeString";
          es?: string;
          en?: string;
        }> | null;
        subtitle: Array<{
          _type: "localeString";
          es?: string;
          en?: string;
        }> | null;
        cta: Array<{
          _type: "localeString";
          es?: string;
          en?: string;
        }> | null;
      }
    | {
        _type: "project";
        _id: string;
        title: Array<{
          _type: "localeString";
          es?: string;
          en?: string;
        }> | null;
        description: Array<{
          _type: "localeText";
          es?: string;
          en?: string;
        }> | null;
        thumbnail: string | null;
        links: {
          repo?: string;
          demo?: string;
        } | null;
      }
  > | null;
}>;
// Variable: getHomePage
// Query: {    "sections": *[_type == "section"] | order(order asc) {            "title": title[$lang],    "subtitle": subtitle[$lang],    type,    "content": content[]-> {        _type,        _id,        ...select(                _type == "hero" => {            "title": title[$lang],    "subtitle": subtitle[$lang],    "cta": cta[$lang],    },                _type == "about" => {            "iam": iam[$lang],    "objective": objective[$lang],    "achievements": achievements[] {        "title": title[$lang],        "description": description[$lang]    }    },                _type == "experience" => {            "title": title[$lang],    "description": description[][$lang],    "organization": organization[$lang],    "location": location[$lang],    type,    "date": date    },                _type == "project" => {            "title": title[$lang],    "description": description[$lang],    "thumbnail": thumbnail.asset->url,    "links": links    },                _type == "contact" => {            "title": title[$lang],    "description": description[$lang],    "form": {        "nameField": {            "label": form.nameField.label[$lang],            "placeholder": form.nameField.placeholder[$lang]        },        "emailField": {            "label": form.emailField.label[$lang],            "placeholder": form.emailField.placeholder[$lang]        },        "subjectField": {            "label": form.subjectField.label[$lang],            "placeholder": form.subjectField.placeholder[$lang]        },        "messageField": {            "label": form.messageField.label[$lang],            "placeholder": form.messageField.placeholder[$lang]        },        "submitButton": submitButton[$lang]    }    },        )    }    },    "profile": *[_type == "profile"][0] {            "name": name[$lang],    "email": email,    "phone": phone,    "location": location[$lang],    "image": image.asset->url,    "bio": bio[][$lang],    "objectives": objectives[][$lang],    "languages": languages[][$lang],    "interests": interests    }}
export type GetHomePageResult = {
  sections: Array<{
    title: Array<{
      _type: "localeString";
      es?: string;
      en?: string;
    }> | null;
    subtitle: Array<{
      _type: "localeString";
      es?: string;
      en?: string;
    }> | null;
    type:
      | "about"
      | "contact"
      | "education"
      | "experience"
      | "hero"
      | "projects"
      | "skills"
      | null;
    content: Array<
      | {
          _type: "about";
          _id: string;
          iam: Array<{
            _type: "localeString";
            es?: string;
            en?: string;
          }> | null;
          objective: Array<{
            _type: "localeString";
            es?: string;
            en?: string;
          }> | null;
          achievements: Array<{
            title: Array<{
              _type: "localeString";
              es?: string;
              en?: string;
            }> | null;
            description: Array<{
              _type: "localeText";
              es?: string;
              en?: string;
            }> | null;
          }> | null;
        }
      | {
          _type: "contact";
          _id: string;
          title: Array<{
            _type: "localeString";
            es?: string;
            en?: string;
          }> | null;
          description: Array<{
            _type: "localeText";
            es?: string;
            en?: string;
          }> | null;
          form: {
            nameField: {
              label: Array<{
                _type: "localeString";
                es?: string;
                en?: string;
              }> | null;
              placeholder: Array<{
                _type: "localeString";
                es?: string;
                en?: string;
              }> | null;
            };
            emailField: {
              label: Array<{
                _type: "localeString";
                es?: string;
                en?: string;
              }> | null;
              placeholder: Array<{
                _type: "localeString";
                es?: string;
                en?: string;
              }> | null;
            };
            subjectField: {
              label: Array<{
                _type: "localeString";
                es?: string;
                en?: string;
              }> | null;
              placeholder: Array<{
                _type: "localeString";
                es?: string;
                en?: string;
              }> | null;
            };
            messageField: {
              label: Array<{
                _type: "localeString";
                es?: string;
                en?: string;
              }> | null;
              placeholder: Array<{
                _type: "localeString";
                es?: string;
                en?: string;
              }> | null;
            };
            submitButton: null;
          };
        }
      | {
          _type: "experience";
          _id: string;
          title: Array<{
            _type: "localeString";
            es?: string;
            en?: string;
          }> | null;
          description: Array<
            {
              _key: string;
            } & LocaleString
          > | null;
          organization: Array<{
            _type: "localeString";
            es?: string;
            en?: string;
          }> | null;
          location: Array<{
            _type: "localeString";
            es?: string;
            en?: string;
          }> | null;
          type: "education" | "job" | "volunteer" | null;
          date: {
            start?: string;
            end?: string;
          } | null;
        }
      | {
          _type: "hero";
          _id: string;
          title: Array<{
            _type: "localeString";
            es?: string;
            en?: string;
          }> | null;
          subtitle: Array<{
            _type: "localeString";
            es?: string;
            en?: string;
          }> | null;
          cta: Array<{
            _type: "localeString";
            es?: string;
            en?: string;
          }> | null;
        }
      | {
          _type: "project";
          _id: string;
          title: Array<{
            _type: "localeString";
            es?: string;
            en?: string;
          }> | null;
          description: Array<{
            _type: "localeText";
            es?: string;
            en?: string;
          }> | null;
          thumbnail: string | null;
          links: {
            repo?: string;
            demo?: string;
          } | null;
        }
    > | null;
  }>;
  profile: {
    name: Array<{
      _type: "localeString";
      es?: string;
      en?: string;
    }> | null;
    email: string | null;
    phone: string | null;
    location: Array<{
      _type: "localeString";
      es?: string;
      en?: string;
    }> | null;
    image: string | null;
    bio: Array<
      {
        _key: string;
      } & LocaleString
    > | null;
    objectives: Array<
      {
        _key: string;
      } & LocaleString
    > | null;
    languages: Array<
      {
        _key: string;
      } & LocaleString
    > | null;
    interests: Array<string> | null;
  } | null;
};

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    '\n    *[_type == "section"] | order(order asc) {\n        \n    "title": title[$lang],\n    "subtitle": subtitle[$lang],\n    type,\n    "content": content[]-> {\n        _type,\n        _id,\n        ...select(\n            \n    _type == "hero" => {\n        \n    "title": title[$lang],\n    "subtitle": subtitle[$lang],\n    "cta": cta[$lang],\n\n    },\n\n            \n    _type == "about" => {\n        \n    "iam": iam[$lang],\n    "objective": objective[$lang],\n    "achievements": achievements[] {\n        "title": title[$lang],\n        "description": description[$lang]\n    }\n\n    },\n\n            \n    _type == "experience" => {\n        \n    "title": title[$lang],\n    "description": description[][$lang],\n    "organization": organization[$lang],\n    "location": location[$lang],\n    type,\n    "date": date\n\n    },\n\n            \n    _type == "project" => {\n        \n    "title": title[$lang],\n    "description": description[$lang],\n    "thumbnail": thumbnail.asset->url,\n    "links": links\n\n    },\n\n            \n    _type == "contact" => {\n        \n    "title": title[$lang],\n    "description": description[$lang],\n    "form": {\n        "nameField": {\n            "label": form.nameField.label[$lang],\n            "placeholder": form.nameField.placeholder[$lang]\n        },\n        "emailField": {\n            "label": form.emailField.label[$lang],\n            "placeholder": form.emailField.placeholder[$lang]\n        },\n        "subjectField": {\n            "label": form.subjectField.label[$lang],\n            "placeholder": form.subjectField.placeholder[$lang]\n        },\n        "messageField": {\n            "label": form.messageField.label[$lang],\n            "placeholder": form.messageField.placeholder[$lang]\n        },\n        "submitButton": submitButton[$lang]\n    }\n\n    },\n\n        )\n    }\n\n    }\n': GetAllSectionsResult;
    '{\n    "sections": *[_type == "section"] | order(order asc) {\n        \n    "title": title[$lang],\n    "subtitle": subtitle[$lang],\n    type,\n    "content": content[]-> {\n        _type,\n        _id,\n        ...select(\n            \n    _type == "hero" => {\n        \n    "title": title[$lang],\n    "subtitle": subtitle[$lang],\n    "cta": cta[$lang],\n\n    },\n\n            \n    _type == "about" => {\n        \n    "iam": iam[$lang],\n    "objective": objective[$lang],\n    "achievements": achievements[] {\n        "title": title[$lang],\n        "description": description[$lang]\n    }\n\n    },\n\n            \n    _type == "experience" => {\n        \n    "title": title[$lang],\n    "description": description[][$lang],\n    "organization": organization[$lang],\n    "location": location[$lang],\n    type,\n    "date": date\n\n    },\n\n            \n    _type == "project" => {\n        \n    "title": title[$lang],\n    "description": description[$lang],\n    "thumbnail": thumbnail.asset->url,\n    "links": links\n\n    },\n\n            \n    _type == "contact" => {\n        \n    "title": title[$lang],\n    "description": description[$lang],\n    "form": {\n        "nameField": {\n            "label": form.nameField.label[$lang],\n            "placeholder": form.nameField.placeholder[$lang]\n        },\n        "emailField": {\n            "label": form.emailField.label[$lang],\n            "placeholder": form.emailField.placeholder[$lang]\n        },\n        "subjectField": {\n            "label": form.subjectField.label[$lang],\n            "placeholder": form.subjectField.placeholder[$lang]\n        },\n        "messageField": {\n            "label": form.messageField.label[$lang],\n            "placeholder": form.messageField.placeholder[$lang]\n        },\n        "submitButton": submitButton[$lang]\n    }\n\n    },\n\n        )\n    }\n\n    },\n    "profile": *[_type == "profile"][0] {\n        \n    "name": name[$lang],\n    "email": email,\n    "phone": phone,\n    "location": location[$lang],\n    "image": image.asset->url,\n    "bio": bio[][$lang],\n    "objectives": objectives[][$lang],\n    "languages": languages[][$lang],\n    "interests": interests\n\n    }\n}': GetHomePageResult;
  }
}
