import semver from 'semver';

import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs', 'webpack', 'v8']);
export default new DocsSource({
	id: 'lunar.js',
	name: 'lunar.js',
	global: 'lunar.js',
	docsRepo: 'lunar-js/docs',
	repo: 'lunar-js/lunar.js',
	branchFilter: (branch: string) => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
	tagFilter: (tag: string) => semver.gte(tag.replace(/(^@.*\/.*@v?)?(?<semver>\d+.\d+.\d+)-?.*/, '$<semver>'), '9.0.0'),
});
