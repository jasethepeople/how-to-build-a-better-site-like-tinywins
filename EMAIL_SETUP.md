# Email Integration Setup with Formspree

This guide walks you through setting up email notifications for contact form submissions using Formspree (free tier available).

## What is Formspree?

Formspree is a service that captures form submissions and sends them to your email. No backend server needed—it works directly from your static site.

## Step 1: Create a Formspree Account

1. Go to [formspree.io](https://formspree.io)
2. Click **Sign Up** (or **Get Started**)
3. Enter your email and create a password
4. Verify your email address
5. You're in!

## Step 2: Create a New Form

1. In Formspree dashboard, click **New Form**
2. **Form name:** Neversus Contact
3. **Email:** your-email@example.com (where you want to receive inquiries)
4. Click **Create**
5. You'll see a **Form ID** (looks like `xyzabc123`)

## Step 3: Update Your Site

Replace `xyzabc123` in `client/src/components/ContactModal.tsx` with your Form ID:

```typescript
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});
```

## Step 4: Test the Form

1. Push your changes to GitHub
2. Wait for deployment (usually 1-2 minutes)
3. Visit your live site
4. Click **Let's Talk** button
5. Fill out the form and submit
6. Check your email—you should receive the submission!

## What You'll Receive

Each form submission will send you an email like:

```
From: Formspree
Subject: New submission from Neversus Contact Form

Name: John Doe
Email: john@example.com
Company: Acme Corp
Message: I'm interested in your branding services...
```

## Advanced Features (Paid Plans)

Formspree's free tier includes:
- ✅ Unlimited forms
- ✅ 50 submissions/month
- ✅ Email notifications
- ✅ Basic spam protection

Paid plans ($25+/month) add:
- ✅ Unlimited submissions
- ✅ Advanced spam filtering
- ✅ Webhooks for integrations
- ✅ Custom redirects
- ✅ Priority support

## Connecting to Other Services

### Zapier Integration (Paid)

Connect form submissions to:
- Slack notifications
- Google Sheets logging
- Mailchimp email lists
- HubSpot CRM
- And 5000+ other apps

Steps:
1. Upgrade to Formspree paid plan
2. Go to [zapier.com](https://zapier.com)
3. Create a "Zap" with Formspree trigger
4. Choose your action (Slack, Sheets, etc.)

### Alternative: Use Netlify Forms

If you deploy to Netlify instead of GitHub Pages:
1. Netlify has built-in form handling
2. No need for Formspree
3. Free tier includes 100 submissions/month

## Troubleshooting

**Form submissions not arriving?**
- Check spam/promotions folder
- Verify Form ID is correct
- Ensure email is verified in Formspree
- Check Formspree dashboard for submission logs

**Want to see all submissions?**
- Log into Formspree dashboard
- Click your form name
- View all submissions with timestamps

**Need to change email?**
- Go to Formspree dashboard
- Click form settings
- Update email address
- Re-verify new email

## Best Practices

1. **Respond quickly** — Reply to inquiries within 24 hours
2. **Set up auto-responder** — Let users know you received their message
3. **Monitor submissions** — Check Formspree dashboard weekly
4. **Filter spam** — Use Formspree's spam detection features
5. **Backup data** — Export submissions regularly

## Next Steps

- Set up email templates for auto-responses
- Integrate with CRM for lead tracking
- Create follow-up email sequences
- Analyze inquiry patterns to improve messaging

For more help: [Formspree Documentation](https://formspree.io/help/)
