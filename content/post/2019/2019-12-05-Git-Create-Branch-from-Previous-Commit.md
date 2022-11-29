---
title: "Git: Create Branch from Previous Commit"
slug: "git-create-branch-from-previous-commit"
date: 2019-12-05T12:07:58+02:00
categories: ["TIL"]
tags: ["git"]
---

Sometimes you need to create a new branch based on an older state of the repository – say, something unrelated broke and the fix will take some time.

Additionally to the new branch name, you can also add the SHA key to branch off from a very specific point in your git history.

## Code snippets

Words in angle brackets `<>` will be replaced by your custom values.

```bash
# Create new branch
# using the specific SHA...
git branch <branchname> <sha-of-commit>
# ... or the relational symbolic reference
git branch <branchname> HEAD~3

# Or, create and directly checkout the new branch
# with any of the above ways
git checkout -b <branchname> <sha-of-commit or HEAD~3>
```

### How to find the SHA key?

On Gitlab, Github& Co., find the list of commits and copy the commit SHA.

In your terminal, see the list of commits using `git log`.

### What is a SHA?

SHA stands for Secure Hash Algorithm and is a cryptographic function that returns a hexadecimal has value. I don't have a recommended article on this topic, so here's the duckduckgo link: [https://duckduckgo.com/?q=sha1&t=ffab&ia=web](https://duckduckgo.com/?q=sha1&t=ffab&ia=web).



## Reading List

- Source on Stack Overflow: [https://stackoverflow.com/questions/2816715/branch-from-a-previous-commit-using-git](https://stackoverflow.com/questions/2816715/branch-from-a-previous-commit-using-git)
