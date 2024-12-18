module.exports = {
  github: {
    release: true,
    releaseName: "Release ${version}",
    assets: ["dist/*.zip"],
  },
  npm: {
    publish: false,
  },
  git: {
    tag: true,
    commit: true,
    commitMessage: "chore(release): release ${version}",
  },
  plugins: {
    "@release-it/conventional-changelog": {
      infile: "CHANGELOG.md",
      preset: {
        name: "conventionalcommits",
        types: [
          { type: "feat", section: "Features" },
          { type: "fix", section: "Bug Fixes" },
          { type: "chore", section: "Chores" },
          { type: "tooling", hidden: "Chores" },
          { type: "revert", section: "Reverts" },
          { type: "wip", hidden: true },
          { type: "test", hidden: true },
          { type: "perf", hidden: true },
          { type: "docs", hidden: true },
          { type: "refactor", hidden: true },
          { type: "style", hidden: true },
        ],
      },
    },
  },
};
