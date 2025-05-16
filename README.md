# 📋 Waitlist Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/sunnypatneedi/sample-waitlist-app/)

A modern, open-source waitlist application built with Next.js and Resend for collecting email signups with a beautiful UI and confetti celebration. Perfect for your next product launch or beta program.

## ✨ Features

- **Email Collection**: Seamless integration with Resend for managing your waitlist
- **Beautiful UI**: Modern, responsive design with smooth animations
- **Engaging UX**: Confetti celebration on successful signup
- **Form Validation**: Built-in validation and error handling
- **Mobile-First**: Fully responsive design that works on all devices
- **Open Source**: 100% open source and customizable
- **Easy Deployment**: One-click deployment to Vercel, Netlify, or your preferred platform

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm (v9.x or later) or yarn
- Resend account (for email functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sunnypatneedi/sample-waitlist-app.git
   cd sample-waitlist-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Then update `.env.local` with your Resend API key and Audience ID:
   ```
   RESEND_API_KEY=your_resend_api_key
   RESEND_AUDIENCE_ID=your_audience_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsunnypatneedi%2Fsample-waitlist-app)

1. Click the "Deploy" button above
2. Connect your GitHub account
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Other Platforms

You can also deploy to:
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [Heroku](https://www.heroku.com/)
- Or any other platform that supports Next.js

## 📚 Documentation

### Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Resend](https://resend.com/) - Email service
- [React Confetti](https://www.npmjs.com/package/react-confetti) - Celebration effects

### Project Structure

```
sample-waitlist-app/
├── app/                    # Next.js app directory
│   ├── api/                # API routes
│   └── page.tsx            # Main page component
├── public/                 # Static files
├── src/                    # Source files
│   ├── components/         # Reusable components
│   └── lib/                # Utility functions
├── .env.example           # Example environment variables
├── .eslintrc.json         # ESLint configuration
├── .gitignore             # Git ignore file
├── next.config.js         # Next.js configuration
├── package.json           # Project dependencies
└── README.md              # Project documentation
```

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Resend Documentation](https://resend.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Shields.io](https://shields.io/) for badges
