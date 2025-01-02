# Finance AI

**Finance AI** is an innovative financial management platform designed to help users track and analyze their financial transactions with ease. Powered by artificial intelligence, this SaaS platform offers analytics dashboards, transaction tracking, and subscription plans to unlock advanced features like unlimited transactions and AI-powered custom financial reports.

---

## 🚀 Features

1. **Transaction Management**

   - Add transactions by selecting:
     - **Category** (e.g., Food, Transportation, Utilities)
     - **Payment Method** (e.g., Credit Card, Cash)
     - **Type** (Deposit, Expense, or Investment)
   - View a list of all transactions on the Transactions page.

2. **Dashboard**

   - View your financial data with:
     - Categorized grouping.
     - Current finance summary.
     - Charts and insights to monitor expenses.

3. **Subscription Plans**

   - **Basic Plan**: Free, limited to 10 transactions per month.
   - **Premium Plan**: Unlimited transactions and AI-powered financial reports for $19/month.

4. **AI Financial Reports**

   - Integrated with ChatGPT to provide personalized financial insights.
   - Available to Premium subscribers.

5. **Secure Authentication and Payments**
   - User authentication via [Clerk](https://clerk.dev/).
   - Payments managed through [Stripe](https://stripe.com/).

---

## 🛠️ Technologies Used

This project leverages a robust set of modern technologies:

### **Frontend**

- **[Next.js](https://nextjs.org/)** (14.2.16): A React-based framework for fast and scalable web applications.
- **[Tailwind CSS](https://tailwindcss.com/)** (3.4.1): Utility-first CSS framework for styling.
- **[ShadCN](https://ui.shadcn.com/)**: Visually appealing and reusable components.
- **[React Hook Form](https://react-hook-form.com/)**: Simplified form management.
- **[Recharts](https://recharts.org/)**: Library for data visualization and charts.
- **[Lucide](https://lucide.dev/)**: Modern icon library.

### **Backend**

- **[Prisma](https://www.prisma.io/)** (5.21.1): ORM for database queries and migrations.
- **[OpenAI API](https://openai.com/api/)**: Integration with ChatGPT for AI-powered financial insights.
- **[Neon](https://neon.tech/)**: Fast Postgres infrastructure.
- **[Stripe](https://stripe.com/)**: Payment gateway to manage subscriptions.

### **Authentication**

- **[Clerk](https://clerk.dev/)** (5.7.5): Secure and seamless user authentication.

### **Development Tools**

- **TypeScript** (5.x): Static typing for scalable code.
- **Husky** (9.1.6): Git hooks to ensure code quality.
- **Lint-Staged** (12.3.2): Pre-commit linting checks.
- **Prettier** (3.3.3): Code formatting.
- **ESLint** (8.x): JavaScript linter.
- **Tailwind Merge**: Utility for efficiently merging Tailwind classes.

---

## 📚 Page Overview

1. **Home/Dashboard**

   - Shows aggregated financial insights and charts.
   - Displays current balance, categorized expenses, and more.

2. **Transactions**

   - User's list of all transactions.
   - Filters and sorting by categories, payment methods, and types.

3. **Subscriptions**

   - Choose between Free and Premium plans.
   - Integrated payment system via Stripe for upgrades.

4. **Login/Authentication**
   - Powered by Clerk for secure login and user management.

---

## 💳 Subscription Details

- **Basic Plan**

  - Free.
  - Limited to **10 transactions per month**.

- **Premium Plan**
  - **$19/month**.
  - Unlimited transactions.
  - AI-generated financial insights with ChatGPT.

---

## 📦 Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/ezequielcsilva/finance-ai.git
   cd finance-ai
   ```

2. Install dependencies:

```bash
  npm install
```

3. Configure environment variables:

```bash
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_API_KEY=your_clerk_api_key
CLERK_SECRET_KEY=your_clerk_secret_key
STRIPE_PREMIUM_PLAN_PRICE_ID=your_stripe_plan_id
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLIC_KEY=your_stripe_public_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_next_public_stripe_publishable_key
OPENAI_API_KEY=your_openai_api_key
DATABASE_URL=your_database_url
APP_URL=your_deployment_url
```

4. Start the development server:

```bash
  npm run dev
```

## 🧑‍💻 Scripts

- npm run dev: Starts the development server.
- npm run build: Builds the application for production.
- npm run start: Starts the server in production.
- npm run prepare: Prepares the project by generating the Prisma client and setting up Husky hooks.

## 🌟 Future Improvements

- Enhance mobile-first design for improved usability.
- Allow Premium users to export a PDF of their monthly transaction reports.
