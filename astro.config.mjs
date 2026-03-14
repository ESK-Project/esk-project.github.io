// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import gruvbox from "starlight-theme-gruvbox";

// https://astro.build/config
export default defineConfig({
	site: 'https://esk-project.github.io',
	trailingSlash: 'always',
	integrations: [
		starlight({
			plugins: [gruvbox()],
			customCss: [
				'/src/styles/fonts.css',
			],
			title: 'ESK Kernel Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ESK-Project/' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{
							label: 'Flashing Guide',
							items: [
								{ label: 'Overview', slug: 'guides/esk' },
								{ label: 'Downloads and Naming', slug: 'guides/esk/downloads-and-naming' },
								{ label: 'Prerequisites', slug: 'guides/esk/prerequisites' },
								{ label: 'Choose AnyKernel3 or Boot Image', slug: 'guides/esk/choose-package' },
								{ label: 'Kernel Flavours', slug: 'guides/esk/kernel-flavours' },
								{ label: 'Flashing Instructions', slug: 'guides/esk/flashing' },
								{ label: 'Reporting Issues and Risk', slug: 'guides/esk/reporting-and-risk' },
							],
						},
					],
				},
			],
		}),
	],
});
