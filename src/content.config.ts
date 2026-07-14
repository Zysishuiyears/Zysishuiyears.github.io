import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localizedText = z.object({
	zh: z.string(),
	en: z.string(),
});

const resourceLink = z.union([
	z.url(),
	z.string().regex(/^\/(?!\/)/, 'Expected an absolute URL or a root-relative site path'),
]);

const projects = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
	schema: z.object({
		slug: z.string(),
		date: z.coerce.date(),
		title: localizedText,
		summary: localizedText,
		problem: localizedText,
		method: localizedText,
		results: localizedText,
		role: localizedText,
		workflow: z.array(
			z.object({
				title: localizedText,
				description: localizedText,
			}),
		),
		tags: z.array(z.string()),
		links: z
			.object({
				repo: resourceLink.optional(),
				paper: resourceLink.optional(),
				demo: resourceLink.optional(),
			})
			.default({}),
		media: z
			.array(
				z.object({
					src: z.string(),
					alt: localizedText,
					caption: localizedText.optional(),
				}),
			)
			.default([]),
	}),
});

export const collections = { projects };
