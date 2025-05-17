# 🎉 Modern Waitlist Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/sunnypatneedi/sample-waitlist-app/)

A modern, open-source waitlist application built with Next.js and Resend for collecting email signups with a beautiful UI and confetti celebration. Perfect for your next product launch or beta program.

## ✨ Features

### Email Management with Resend

- **Direct API Integration**: The application uses Resend's REST API directly from the Next.js API routes, eliminating the need for a separate backend server.
- **Audience Management**: Subscribers are added to a Resend Audience, allowing you to:
  - Manage your waitlist subscribers in one place
  - Send targeted email campaigns
  - Track open and click rates
  - Export subscriber data
  - [Learn more about Resend Audiences](https://resend.com/docs/audiences/overview)

- **Email Sending**: When a user signs up:
  1. Their email is added to your Resend Audience
  2. A welcome email is sent using Resend's email service
  3. The email includes a confirmation of their subscription

### Frontend Features

- **🚀 Blazing Fast**: Built with Next.js 13+ (App Router) for optimal performance
- **🎨 Beautiful UI**: Modern, responsive design with smooth animations and transitions
  - Built with Tailwind CSS for rapid UI development
  - Responsive layout that works on all devices
  - Dark mode support

- **🎉 Engaging UX**:
  - Confetti celebration on successful signup
  - Smooth form validation
  - Loading states and error handling

### Security & Performance

- **🔒 Rate Limiting**:
  - Server-side rate limiting (10 requests per 15 minutes per IP)
  - Prevents abuse and protects your Resend API quota
  - Clear error messages when rate limits are exceeded

- **⚡ Performance Optimized**:
  - 100/100 Lighthouse score out of the box
  - Automatic code splitting
  - Image optimization
  - Font optimization

### Developer Experience

- **Type Safety**: Full TypeScript support
- **Environment Validation**: Ensures required environment variables are set
- **Comprehensive Documentation**: Detailed setup and deployment guides
- **One-Click Deploy**: Deploy to Vercel, Netlify, or your preferred platform

### Analytics & Monitoring

- Built-in logging for signup events
- Error tracking and reporting
- Easy integration with:
  - Google Analytics
  - Plausible
  - Sentry for error tracking

### Extensibility

- **🌍 i18n Ready**: Built with internationalization in mind
- **Customizable Email Templates**: Easily modify the welcome email template
- **Webhook Support**: Can be extended to trigger actions on new signups
- **API-First Design**: Easy to integrate with other services

### Deployment Options

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Docker** container support
- Self-hosted options

## 🚀 Getting Started

### Prerequisites

1. **Development Environment**
   - Node.js 18.20.2 or later
   - npm (v9.x or later) or yarn
   - Git for version control

2. **Resend Account Setup**
   - Create a [Resend account](https://resend.com/signup) if you don't have one
   - Verify your email address in Resend
   - Navigate to [API Keys](https://resend.com/api-keys) and create a new API key with full access
   - Go to [Audiences](https://resend.com/audiences) and create a new audience (e.g., "Waitlist Subscribers")
   - Note down your Audience ID from the audience settings

3. **Domain Verification (Required for Production)**
   - In Resend, go to [Domains](https://resend.com/domains)
   - Click "Add Domain" and follow the verification process
   - This is required because Resend only allows sending from verified domains in production
   - For testing, you can use the `onboarding@resend.dev` domain

4. **Environment Variables**
   You'll need to set up the following environment variables:
   ```
   RESEND_API_KEY=re_your_api_key_here
   RESEND_AUDIENCE_ID=your_audience_id_here
   ```

   > **Note**: Never commit your API keys to version control. Use `.env.local` for local development and set them in your hosting provider's environment variables for production.

## 🛠️ Installation & Setup

### Local Development

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

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsunnypatneedi%2Fsample-waitlist-app&env=RESEND_API_KEY,RESEND_AUDIENCE_ID&envDescription=Resend%20API%20Key%20and%20Audience%20ID%20are%20required%20for%20email%20functionality&envLink=https%3A%2F%2Fresend.com%2Fdashboard)

1. Click the "Deploy" button above
2. Connect your GitHub account
3. Add your environment variables:
   - `RESEND_API_KEY`: Your Resend API key
   - `RESEND_AUDIENCE_ID`: Your Resend Audience ID
4. Deploy!

### Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```env
RESEND_API_KEY=your_resend_api_key
RESEND_AUDIENCE_ID=your_audience_id
```

You can get these values from your [Resend Dashboard](https://resend.com/dashboard).

### Email Configuration

1. Verify your domain in Resend
2. Update the `from` email in `app/api/waitlist/route.ts` to use your verified domain
3. Test the email functionality by signing up with your email address

### Other Platforms

You can also deploy to:
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [Heroku](https://www.heroku.com/)
- Or any other platform that supports Next.js

## 📚 Documentation

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Email Service**: [Resend](https://resend.com/)
- **UI Components**: [Headless UI](https://headlessui.com/)
- **Form Handling**: React Hook Form
- **Icons**: [Heroicons](https://heroicons.com/)
- **Linting**: ESLint + Prettier
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
waitlist-app/
├── app/
│   ├── api/                    # API routes
│   │   └── waitlist/           # Waitlist API endpoint
│   │       └── route.ts        # Waitlist API handler
│   └── page.tsx                # Main page component
├── public/                     # Static files
├── src/
│   ├── components/            # Reusable components
│   ├── lib/                    # Utility functions
│   └── utils/
│       ├── confetti.ts       # Confetti animation utility
│       └── rateLimit.ts        # API rate limiting
├── .env.local                 # Environment variables (gitignored)
├── .eslintrc.json             # ESLint configuration
├── .gitignore                 # Git ignore file
├── next.config.js             # Next.js configuration
├── package.json               # Project dependencies
└── README.md                  # Project documentation
```

## 🤝 Contributing

We love contributions! Here's how you can help:

1. 🍴 Fork the repository
2. 🔧 Create a feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 Commit your changes (`git commit -m 'Add some amazing feature'`)
4. 🔄 Push to the branch (`git push origin feature/amazing-feature`)
5. ✨ Open a Pull Request

### Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Code Style

- Follow the [Next.js style guide](https://nextjs.org/docs/basic-features/eslint)
- Use TypeScript for type safety
- Write meaningful commit messages
- Keep components small and focused
- Add comments for complex logic

### Testing

Before submitting a PR:

1. Run the linter:
   ```bash
   npm run lint
   ```

2. Run the type checker:
   ```bash
   npm run type-check
   ```

3. Test all functionality in different browsers

Please read our [Contributing Guide](CONTRIBUTING.md) for more details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Resend Documentation](https://resend.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Shields.io](https://shields.io/) for badges
- [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) for the celebration effect

## 📈 Analytics (Optional)

To track user signups and engagement, you can integrate with:

- [Google Analytics](https://analytics.google.com/)
- [Plausible](https://plausible.io/)
- [Simple Analytics](https://simpleanalytics.com/)

Add your analytics script to `app/layout.tsx`.

## 🌍 Internationalization (i18n)

This project is ready for internationalization. To add a new language:

1. Create a new JSON file in `locales/` (e.g., `es.json`)
2. Add translations following the same structure as `en.json`
3. Update the language switcher component

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Resend Documentation](https://resend.com/docs) - learn how to use Resend for email.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn how to style your app with Tailwind.

## 🚀 Production Checklist

Before going live, make sure to:

- [ ] Set up a custom domain
- [ ] Configure SSL
- [ ] Set up proper error tracking (e.g., Sentry)
- [ ] Configure backups
- [ ] Set up monitoring and alerts
- [ ] Test email deliverability
- [ ] Run performance tests
- [ ] Set up a CDN (if needed)
- [ ] Configure security headers
- [ ] Set up a staging environment

## 📬 Contact

Have questions or need help? [Open an issue](https://github.com/sunnypatneedi/sample-waitlist-app/issues) or reach out to us at [your-email@example.com](mailto:your-email@example.com).

## 🙌 Contributors

Thanks to all the amazing people who have contributed to this project!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

## ⭐️ Show Your Support

If you find this project useful, please consider giving it a ⭐️ on [GitHub](https://github.com/sunnypatneedi/sample-waitlist-app).

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Resend Documentation](https://resend.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Shields.io](https://shields.io/) for badges
