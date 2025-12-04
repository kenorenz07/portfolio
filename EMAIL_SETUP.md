# Gmail Email Setup Guide

## Quick Setup Steps

### 1. Enable 2-Step Verification (if not already enabled)

1. Go to https://myaccount.google.com/security
2. Click on "2-Step Verification"
3. Follow the steps to enable it

### 2. Generate App Password

1. Go to https://myaccount.google.com/apppasswords
2. Sign in if prompted
3. In the "Select app" dropdown, choose "Mail"
4. In the "Select device" dropdown, choose "Other" and name it "Portfolio Website"
5. Click "Generate"
6. **Copy the 16-character password** (you won't be able to see it again)

### 3. Configure Environment Variables

1. Open `.env.local` file in the root directory
2. Replace the placeholder values:
   ```env
   EMAIL_USER=your-actual-email@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password
   ```
3. Save the file

### 4. Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your Gmail inbox for the notification email

## Important Notes

- **Never commit `.env.local`** to version control (it's already in `.gitignore`)
- The app password is NOT your regular Gmail password
- Free Gmail allows ~500 emails per day
- Emails will be sent FROM and TO your Gmail address
- The sender's email will be included in the email body

## Troubleshooting

**"Invalid credentials" error:**

- Make sure you're using an App Password, not your regular password
- Check that 2-Step Verification is enabled

**Emails not arriving:**

- Check your spam folder
- Verify the EMAIL_USER matches your Gmail address
- Make sure the App Password is correct (no spaces)

**For Production (Vercel/Netlify):**
Add the same environment variables in your hosting platform's settings:

- `EMAIL_USER`
- `EMAIL_PASSWORD`
