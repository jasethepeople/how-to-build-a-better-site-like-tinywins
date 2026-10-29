# Google Analytics Setup for Neversus

This guide walks you through setting up Google Analytics to track visitor engagement, conversions, and traffic patterns.

## Step 1: Create a Google Analytics Account

1. Go to [analytics.google.com](https://analytics.google.com)
2. Click **Start measuring** (or sign in if you have a Google account)
3. Create a new account:
   - **Account name:** Neversus
   - **Website URL:** https://yourusername.github.io/neversus/
   - **Industry category:** Marketing & Advertising
   - **Business size:** Small
4. Click **Create**

## Step 2: Get Your Measurement ID

1. After account creation, you'll see a **Measurement ID** (looks like `G-XXXXXXXXXX`)
2. Copy this ID

## Step 3: Update Your Site

Replace `G-XXXXXXXXXX` in two places in `client/index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID_HERE"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR_ID_HERE');
</script>
```

## Step 4: Verify Installation

1. Push your changes to GitHub
2. Wait 5 minutes for deployment
3. Visit your live site
4. Go back to Google Analytics → Real-time
5. You should see yourself visiting the site in real-time!

## Key Metrics to Track

Once set up, Google Analytics will automatically track:

- **Users:** How many people visit your site
- **Sessions:** How many times they visit
- **Page views:** Which pages are most popular
- **Bounce rate:** % of visitors who leave without interacting
- **Average session duration:** How long people stay
- **Conversion rate:** % of visitors who contact you

## Setting Up Goals (Conversions)

To track contact form submissions:

1. In Google Analytics, go to **Admin** → **Goals**
2. Click **New Goal**
3. **Goal name:** Contact Form Submission
4. **Goal type:** Event
5. **Event name:** form_submit
6. Click **Create Goal**

Then add this to your contact form submission handler in `ContactModal.tsx`:

```typescript
gtag('event', 'form_submit', {
  'event_category': 'engagement',
  'event_label': 'contact_form'
});
```

## Understanding Your Data

- **Acquisition:** Where visitors come from (direct, search, social, etc.)
- **Behavior:** What pages they visit and how long they stay
- **Conversions:** How many complete desired actions (contact form, etc.)

## Tips for Better Analytics

1. **Set up custom events** for important actions (button clicks, video plays, etc.)
2. **Create segments** to analyze different user groups
3. **Use UTM parameters** in social media links to track campaign performance
4. **Review weekly** to identify trends and optimize content

## Troubleshooting

**Analytics not showing data?**
- Wait 24-48 hours for initial data collection
- Check that Measurement ID is correct
- Verify site is publicly accessible
- Clear browser cache and revisit

**Want to see real-time data?**
- Go to Analytics → Real-time → Overview
- Visit your site in a new tab
- You should see yourself appear within seconds

## Next Steps

- Integrate Google Search Console for SEO insights
- Set up email alerts for traffic spikes
- Create custom dashboards for key metrics
- Use Analytics to inform content strategy

For more help: [Google Analytics Help Center](https://support.google.com/analytics)
