import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.TINA_BRANCH || "main",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      // ===== HOMEPAGE =====
      {
        name: "home",
        label: "Homepage",
        path: "content/pages",
        format: "json",
        match: {
          include: "home",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "heroLabel",
            label: "Hero Label",
          },
          {
            type: "string",
            name: "heroTitle",
            label: "Hero Title",
          },
          {
            type: "string",
            name: "heroTitleGradient",
            label: "Hero Title (Gradient Part)",
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Hero Subtitle",
            ui: {
              component: "textarea",
            },
          },
          // Challenge Section
          {
            type: "string",
            name: "challengeTitle",
            label: "Challenge Title",
          },
          {
            type: "string",
            name: "challengeTitleGradient",
            label: "Challenge Title (Gradient Part)",
          },
          {
            type: "string",
            name: "challengeDescription",
            label: "Challenge Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "challengeBottomText",
            label: "Challenge Bottom Text",
          },
          {
            type: "object",
            name: "challengeStats",
            label: "Challenge Stats",
            list: true,
            fields: [
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
            ],
          },
          // Build Preview
          {
            type: "object",
            name: "buildPreview",
            label: "Build Your Talent Preview",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleGradient", label: "Title (Gradient Part)" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "checklistTitle", label: "Checklist Item Title" },
              { type: "string", name: "checklistDescription", label: "Checklist Item Description" },
            ],
          },
          // Borrow Preview
          {
            type: "object",
            name: "borrowPreview",
            label: "Borrow Our Talent Preview",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleGradient", label: "Title (Gradient Part)" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "checklistTitle", label: "Checklist Item Title" },
              { type: "string", name: "checklistDescription", label: "Checklist Item Description" },
            ],
          },
          // Credentials
          {
            type: "object",
            name: "credentials",
            label: "Credentials Cards",
            list: true,
            fields: [
              { type: "string", name: "metric", label: "Metric" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
            ],
          },
          // Partners
          {
            type: "string",
            name: "partners",
            label: "Partner Names",
            list: true,
          },
          // CTA
          {
            type: "string",
            name: "ctaTitle",
            label: "CTA Title",
          },
          {
            type: "string",
            name: "ctaSubtitle",
            label: "CTA Subtitle",
          },
        ],
      },

      // ===== BUILD YOUR TALENT =====
      {
        name: "buildYourTalent",
        label: "Build Your Talent",
        path: "content/pages",
        format: "json",
        match: {
          include: "build-your-talent",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "heroTitle",
            label: "Hero Title",
          },
          {
            type: "string",
            name: "heroTitleGradient",
            label: "Hero Title (Gradient Part)",
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Hero Subtitle",
            ui: { component: "textarea" },
          },
          // Services Section
          {
            type: "string",
            name: "servicesSectionTitle",
            label: "Services Section Title",
          },
          {
            type: "string",
            name: "servicesSectionTitleGradient",
            label: "Services Section Title (Gradient Part)",
          },
          {
            type: "string",
            name: "servicesSectionSubtitle",
            label: "Services Section Subtitle",
          },
          {
            type: "object",
            name: "services",
            label: "Service Cards",
            list: true,
            fields: [
              { type: "string", name: "number", label: "Number (e.g. 01)" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
            ],
          },
          // Who It's For
          {
            type: "string",
            name: "whoTitle",
            label: "Who It's For Title",
          },
          {
            type: "string",
            name: "whoTitleGradient",
            label: "Who It's For Title (Gradient Part)",
          },
          {
            type: "string",
            name: "whoDescription",
            label: "Who It's For Description",
            ui: { component: "textarea" },
          },
          {
            type: "object",
            name: "whoItems",
            label: "Who It's For Items",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
            ],
          },
          // Stats
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            fields: [
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
            ],
          },
          // CTA
          {
            type: "string",
            name: "ctaTitle",
            label: "CTA Title",
          },
          {
            type: "string",
            name: "ctaSubtitle",
            label: "CTA Subtitle",
          },
        ],
      },

      // ===== BORROW OUR TALENT =====
      {
        name: "borrowOurTalent",
        label: "Borrow Our Talent",
        path: "content/pages",
        format: "json",
        match: {
          include: "borrow-our-talent",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "heroTitle",
            label: "Hero Title",
          },
          {
            type: "string",
            name: "heroTitleGradient",
            label: "Hero Title (Gradient Part)",
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Hero Subtitle",
            ui: { component: "textarea" },
          },
          // Fractional Leadership
          {
            type: "object",
            name: "fractionalLeadership",
            label: "Fractional Leadership Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleGradient", label: "Title (Gradient Part)" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Checklist Items",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description" },
                ],
              },
            ],
          },
          // Project Managers
          {
            type: "object",
            name: "projectManagers",
            label: "Project Managers Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleGradient", label: "Title (Gradient Part)" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Checklist Items",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description" },
                ],
              },
            ],
          },
          // Analysts
          {
            type: "object",
            name: "analysts",
            label: "Analysts Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleGradient", label: "Title (Gradient Part)" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Checklist Items",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description" },
                ],
              },
            ],
          },
          // Why Fractional
          {
            type: "object",
            name: "whyFractional",
            label: "Why Fractional Cards",
            list: true,
            fields: [
              { type: "string", name: "symbol", label: "Symbol" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
            ],
          },
          // CTA
          {
            type: "string",
            name: "ctaTitle",
            label: "CTA Title",
          },
          {
            type: "string",
            name: "ctaSubtitle",
            label: "CTA Subtitle",
          },
        ],
      },

      // ===== OUR WORK =====
      {
        name: "ourWork",
        label: "Our Work",
        path: "content/pages",
        format: "json",
        match: {
          include: "our-work",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "heroTitle",
            label: "Hero Title",
          },
          {
            type: "string",
            name: "heroTitleGradient",
            label: "Hero Title (Gradient Part)",
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Hero Subtitle",
            ui: { component: "textarea" },
          },
          {
            type: "object",
            name: "caseStudies",
            label: "Case Studies",
            list: true,
            fields: [
              { type: "string", name: "tag", label: "Tag (e.g. Borrow Our Talent)" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleGradient", label: "Title (Gradient Part)" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "highlights", label: "Highlights", list: true },
              { type: "string", name: "statNumber", label: "Stat Number" },
              { type: "string", name: "statLabel", label: "Stat Label" },
              { type: "string", name: "color", label: "Card Color (blue, green, mint, peach)" },
            ],
          },
          // CTA
          {
            type: "string",
            name: "ctaTitle",
            label: "CTA Title",
          },
          {
            type: "string",
            name: "ctaSubtitle",
            label: "CTA Subtitle",
          },
        ],
      },

      // ===== ABOUT =====
      {
        name: "about",
        label: "About Us",
        path: "content/pages",
        format: "json",
        match: {
          include: "about",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "heroTitle",
            label: "Hero Title",
          },
          {
            type: "string",
            name: "heroTitleGradient",
            label: "Hero Title (Gradient Part)",
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Hero Subtitle",
            ui: { component: "textarea" },
          },
          // Our Story
          {
            type: "object",
            name: "story",
            label: "Our Story Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleGradient", label: "Title (Gradient Part)" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
            ],
          },
          // Leadership
          {
            type: "object",
            name: "leadership",
            label: "Leadership Section",
            fields: [
              { type: "string", name: "sectionTitle", label: "Section Title" },
              { type: "string", name: "sectionTitleGradient", label: "Section Title (Gradient Part)" },
              { type: "string", name: "name", label: "Leader Name" },
              { type: "string", name: "role", label: "Role" },
              { type: "string", name: "shortBio", label: "Short Bio (Card)" },
              { type: "string", name: "paragraphs", label: "Full Bio Paragraphs", list: true, ui: { component: "textarea" } },
            ],
          },
          // Values
          {
            type: "object",
            name: "values",
            label: "Values Cards",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "color", label: "Color (blue, green, peach)" },
            ],
          },
          // Approach
          {
            type: "object",
            name: "approach",
            label: "Our Approach Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                fields: [
                  { type: "string", name: "number", label: "Step Number" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          // Who We Work With
          {
            type: "object",
            name: "whoWeWorkWith",
            label: "Who We Work With",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleGradient", label: "Title (Gradient Part)" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description" },
                ],
              },
            ],
          },
          // CTA
          {
            type: "string",
            name: "ctaTitle",
            label: "CTA Title",
          },
          {
            type: "string",
            name: "ctaSubtitle",
            label: "CTA Subtitle",
          },
        ],
      },
    ],
  },
});
