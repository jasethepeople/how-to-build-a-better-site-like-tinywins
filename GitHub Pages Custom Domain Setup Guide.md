# GitHub Pages Custom Domain Setup Guide

This guide walks you through setting up a custom domain for your Neversus website on GitHub Pages.

## Overview

You have three options for custom domains:

| Option | Domain | Cost | Setup Time | Best For |
|--------|--------|------|-----------|----------|
| **Apex Domain** | `neversus.com` | ~$12/year | 24-48 hours | Primary domain |
| **Subdomain** | `www.neversus.com` | ~$12/year | 5-10 minutes | Secondary domain |
| **Subdomain** | `studio.neversus.com` | Included | 5-10 minutes | Branded subdomain |

## Prerequisites

- Neversus repository created and deployed to GitHub Pages
- A domain name (or ready to purchase one)
- Access to your domain registrar's DNS settings

## Option 1: Using Apex Domain (neversus.com)

### Step 1: Purchase Domain

1. Choose a registrar:
   - **Namecheap** — Easy to use, affordable
   - **GoDaddy** — Popular, lots of support
   - **Google Domains** — Integrated with Google services
   - **Cloudflare** — Advanced features, good for DNS
   - **Route 53** — AWS integration

2. Search for your domain (e.g., `neversus.com`)
3. Add to cart and complete purchase
4. Note your registrar for DNS configuration

### Step 2: Configure GitHub Pages

1. Go to your repository: `https://github.com/jasonclarkagain/neversus`
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Custom domain":
   - Enter your domain: `neversus.com`
   - Click **Save**
5. GitHub will create a CNAME file automatically

### Step 3: Configure DNS at Registrar

GitHub requires you to point your domain to their servers. The setup depends on your domain type:

#### For Apex Domain (neversus.com):

Add these **A records** in your registrar's DNS settings:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**Example in Namecheap:**
1. Go to your domain
2. Click **Manage** → **Advanced DNS**
3. Add 4 A records with the IPs above
4. Set TTL to 3600 (1 hour)

**Example in GoDaddy:**
1. Go to your domain
2. Click **DNS** → **Manage DNS**
3. Add 4 A records with the IPs above

**Example in Google Domains:**
1. Go to your domain
2. Click **DNS** (left sidebar)
3. Add 4 A records with the IPs above

### Step 4: Verify DNS Propagation

DNS changes can take 24-48 hours to propagate globally. Check status:

```bash
# Check if DNS is set up correctly
nslookup neversus.com

# Should show GitHub's IP addresses
```

Or use online tools:
- [DNS Checker](https://dnschecker.org/)
- [MXToolbox](https://mxtoolbox.com/)
- [Whatsmydns](https://www.whatsmydns.net/)

### Step 5: Enable HTTPS

Once DNS propagates and your domain is verified:

1. Go to GitHub Pages settings
2. Under "Custom domain", you'll see a checkbox: **Enforce HTTPS**
3. Wait for the certificate to be issued (usually 5-10 minutes)
4. Check the **Enforce HTTPS** box
5. Your site is now secure!

## Option 2: Using www Subdomain (www.neversus.com)

This is simpler and faster than apex domain setup.

### Step 1: Configure GitHub Pages

1. Go to your repository settings
2. Click **Pages**
3. Under "Custom domain":
   - Enter: `www.neversus.com`
   - Click **Save**

### Step 2: Configure DNS at Registrar

Add a **CNAME record**:

```
Type: CNAME
Name: www
Value: jasonclarkagain.github.io
TTL: 3600
```

**Example in Namecheap:**
1. Go to **Advanced DNS**
2. Add CNAME record with values above
3. Save

### Step 3: Verify

1. Wait 5-10 minutes for DNS to propagate
2. Visit `www.neversus.com` in your browser
3. Should redirect to your GitHub Pages site

### Step 4: Enable HTTPS

1. Go to GitHub Pages settings
2. Check **Enforce HTTPS**
3. Certificate will be issued automatically

## Option 3: Using Custom Subdomain (studio.neversus.com)

Perfect if you already own `neversus.com` and want a branded subdomain.

### Step 1: Configure GitHub Pages

1. Go to repository settings → Pages
2. Enter: `studio.neversus.com`
3. Click **Save**

### Step 2: Configure DNS

Add **CNAME record** at your registrar:

```
Type: CNAME
Name: studio
Value: jasonclarkagain.github.io
TTL: 3600
```

### Step 3: Verify and Enable HTTPS

Same as Option 2 above.

## Troubleshooting

### Domain Not Resolving

**Problem:** Site shows "This domain is not available"

**Solution:**
- Wait 24-48 hours for DNS propagation
- Check DNS records are correct: `nslookup yourdomain.com`
- Verify CNAME file exists in repository
- Clear browser cache (Ctrl+Shift+Delete)

### HTTPS Certificate Not Issued

**Problem:** "Enforce HTTPS" checkbox is grayed out

**Solution:**
- Wait 24-48 hours for DNS to fully propagate
- Verify DNS records are correct
- Remove and re-add custom domain in GitHub Pages settings
- Check that domain is publicly accessible

### Mixed Content Warning

**Problem:** Browser shows "Not Secure" with mixed content warning

**Solution:**
- Ensure HTTPS is enforced in GitHub Pages settings
- Update all image/asset URLs to use HTTPS
- Clear browser cache

### Domain Redirects to GitHub Pages

**Problem:** `yourdomain.com` redirects to `jasonclarkagain.github.io`

**Solution:**
- This is normal during DNS propagation
- Wait 24-48 hours
- Verify DNS records are pointing to GitHub's IPs (not CNAME)

## Advanced: Using Cloudflare (Optional)

For better performance and security, use Cloudflare as your DNS provider:

### Step 1: Add Domain to Cloudflare

1. Go to [cloudflare.com](https://cloudflare.com)
2. Sign up and add your domain
3. Cloudflare will scan your existing DNS records
4. Update your domain registrar's nameservers to Cloudflare's:
   - `ns1.cloudflare.com`
   - `ns2.cloudflare.com`

### Step 2: Configure DNS in Cloudflare

Add **CNAME record**:

```
Type: CNAME
Name: www
Value: jasonclarkagain.github.io
TTL: Auto
```

Or for apex domain, add **A records** with GitHub IPs.

### Step 3: Enable Cloudflare Features

- **SSL/TLS** — Set to "Flexible" or "Full"
- **Page Rules** — Set up redirects if needed
- **Performance** — Enable caching and optimization

## DNS Record Reference

### A Records (for apex domain)

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### CNAME Record (for subdomains)

```
jasonclarkagain.github.io
```

## Timeline

| Step | Time |
|------|------|
| Purchase domain | Immediate |
| Configure GitHub Pages | 5 minutes |
| Add DNS records | 5 minutes |
| DNS propagation | 5 minutes - 48 hours |
| HTTPS certificate | 5-10 minutes (after DNS) |
| **Total** | **5 minutes - 48 hours** |

## After Setup

### Update Your Content

Update references to your domain:
- Social media profiles
- Email signatures
- Business cards
- Marketing materials

### Monitor Performance

1. Set up Google Analytics with new domain
2. Monitor traffic and engagement
3. Check HTTPS certificate expiration (auto-renewed by GitHub)

### Maintenance

- DNS records are set and forget
- GitHub automatically renews HTTPS certificates
- No additional configuration needed

## Support

If you encounter issues:

1. Check [GitHub Pages Documentation](https://docs.github.com/en/pages)
2. Verify DNS with [MXToolbox](https://mxtoolbox.com/)
3. Check certificate with [SSL Labs](https://www.ssllabs.com/ssltest/)
4. Contact your registrar's support team

---

**Your domain is now live!** 🎉

Visit your custom domain and enjoy your award-winning Neversus website!
