# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: https://github.com/Jake-Oz/multi-step-form
- Live Site URL: https://multi-step-form-six-puce.vercel.app/

## My process

### Built with

-
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- Tailwind CSS for styles
- Typescript

### What I learned

This challenge really helped me really think about data structures, defining types and how to keep relevant state across each form. I really enjoyed it and used a few libraries I hadn't used before (like Zod for form verification).

I did find it a bit confusing working out which Type definition to use in the Interfaces, for example the register and errors definitions caused me no end of pain:

```tsx
interface InfoFormProps {
  register: UseFormRegister<{ name: string; email: string; phone: string }>;
  errors: FieldErrors<{
    name: string;
    email: string;
    phone: string;
  }>;
  watch: UseFormWatch<{ name: string; email: string; phone: string }>;
}
```

### Continued development

I would really like tom consolidate skills with something similar but also to include a database interface/schema.

### Useful resources

- Zod library https://zod.dev/ - This helped me incorporate Typescript based schema validation that I could use within react-hook-forms easily. This made the form validation problem relatively simple.

## Author

- Frontend Mentor - [@Jake-Oz](https://www.frontendmentor.io/profile/jake-oz)
