# Resend Email Setup Guide

## Quick Setup Steps (Much Easier Than Gmail!)

### 1. Sign Up for Resend (Free, No Credit Card Required)

1. Go to https://resend.com/signup
2. Sign up with your email (GitHub login also available)
3. Verify your email address

### 2. Get Your API Key

1. Go to https://resend.com/api-keys
2. Click "Create API Key"
3. Give it a name like "Portfolio Contact Form"
4. Copy the API key (starts with `re_`)

### 3. Configure Environment Variables

1. Open `.env` file in the root directory
2. Replace the values:
   ```env
   EMAIL_USER=your-email@gmail.com
   RESEND_API_KEY=re_your_actual_api_key_here
   ```
3. Save the file

### 4. Test the Contact Form

1. Restart your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email inbox for the notification

## Important Notes

- **Never commit `.env`** to version control (it's already in `.gitignore`)
- Free tier: 100 emails/day, 3,000 emails/month
- No 2FA or app passwords needed - just the API key!
- Much more reliable than Gmail for sending emails
- Works in development and production

## Testing Domain

Initially, you'll use `onboarding@resend.dev` as the sender. This works for testing but:

- Emails might go to spam
- Shows "via resend.dev" in the sender

## For Production (Optional)

To use your own domain as sender:

1. Add and verify your domain in Resend dashboard
2. Update the `from` field in `route.ts`:
   ```typescript
   from: "Portfolio Contact <contact@yourdomain.com>";
   ```

## For Vercel/Netlify Deployment

Add environment variables in your hosting platform:

- `EMAIL_USER`
- `RESEND_API_KEY`

## Troubleshooting

**"Invalid API key" error:**

- Make sure you copied the full API key (starts with `re_`)
- Verify no extra spaces in the `.env` file

**Emails not arriving:**

- Check spam folder (especially with onboarding@resend.dev)
- Verify EMAIL_USER is correct
- Check Resend dashboard logs: https://resend.com/emails
