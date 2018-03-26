As part of this pull request to update the documentation, I have made sure that:

⚠️ Ensure that for the repo bandwidth.github.io that the pull request change is opened against the branch `gitbook` ⚠️

### General Review

- [ ] All changes/updates requested were intentionally changed or added (no extraneous file or partial updates)
- [ ] The live rendered page behaves and looks like intended.
- [ ] All links work as intended. (click every link to make sure that it takes the user to the expected place).
- [ ] The markdown was rendered to HTML as intended. (Tables look right, code samples are gated properly).
- [ ] Any style or CSS changes are tested on multiple different pages to ensure nothing unexpected broke or changed.
- [ ] I proof-read the live site (`gitbook serve`) and there are no oblivious splelling or grammer misteaks.

### Gitbook Specific

- [ ] Any new documentation pages have been added to the `SUMMARY.md` file so they are rendered to HTML.
- [ ] Any links to other pages within this documentation use relative links (`[read more about ...](guides/voice/voicemail.md)`).
- [ ] Gitbook can install and build the documentation (`gitbook install` & `gitbook build`)

### Code Specific

- [ ] All code has been tested against the live API.
- [ ] All code can be run without throwing errors or **new** warnings.
- [ ] All code is formatted correctly and consistently (spaces, tabs).
- [ ] All code is legible and idiomatic to the language.
- [ ] All code uses sensical method, function, and variable names.
- [ ] All code samples use the appropriate syntax highlighting.
- [ ] Any examples re-use same phone numbers, uuids, variable names, etc... throughout (IE don't have something like `{from: '+19191231234', to: '+19191231234'}` unless it's meant to show the same phone number calling/texting itself ).


