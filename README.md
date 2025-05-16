# Waitlist Application

A modern waitlist application built with Next.js and Resend for collecting email signups with a beautiful UI and confetti celebration.

## Features

- Email collection with Resend integration
- Beautiful, responsive UI with animations
- Confetti celebration on successful signup
- Form validation and error handling
- Mobile-friendly design

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, create a `.env.local` file in the root of your project with the following variables:

```
RESEND_API_KEY=your_resend_api_key
RESEND_AUDIENCE_ID=your_audience_id
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Resend Documentation](https://resend.com/docs) - learn how to use Resend for email.
- [Tailwind CSS](https://tailwindcss.com/docs) - utility-first CSS framework.
- [Framer Motion](https://www.framer.com/motion/) - animation library for React.
