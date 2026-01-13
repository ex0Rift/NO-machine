# The NO machine

### what is the NO machine?

Welcome to Jim. Jim is very antisocial and does NOT want to do any afirmations to you. chat with him and talk about your day, i assure you it will be met with wonderful denial and excuses all day!

### PLEASE NOTE

This project uses the NAAS api all credit there for responses and you can find a link [here](https://github.com/hotheadhacker/no-as-a-service "@link").

<img width="2074" height="1447" alt="image" src="https://github.com/user-attachments/assets/27c97add-87ba-4530-adcb-0f8b61b83c11" />

## build instructions for deplying yourself

### for running on localhost

```bash
  npm i
  npm run dev
```

### deplying to github pages

go to `packages.json` and edit the `homepage` line to your github repo name.

Then build and deploy it to deplyments

```bash
  npm run build
  npm run deploy
```

You may get problems with the page loading after deploying.

If so go to `vite.config.ts` in the main branch and change `base: 'NO-machine',` where **NO-machine** is replace it with the exact case sensitive name of your repo

