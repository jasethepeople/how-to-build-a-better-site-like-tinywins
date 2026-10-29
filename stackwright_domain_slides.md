# Stackwright Domain Setup

## Cover

**Connect `stackwright.online` to Neversus**

Namecheap DNS + GitHub Pages deployment workflow

Prepared for Jason Clark

## Slide 1

### The target state

**One branded, secure home for Neversus**

- Primary URL: `https://stackwright.online`
- Supporting address: `https://www.stackwright.online`
- Hosting: GitHub Pages, deployed from the `jasonclarkagain/neversus` repository
- DNS authority: Namecheap Advanced DNS

> An apex domain is the root domain with no subdomain, such as `stackwright.online`.[1]

## Slide 2

### Configure GitHub first

**Claim the domain before changing DNS**

- Open `github.com/jasonclarkagain/neversus/settings/pages`
- Keep the publishing source set to **GitHub Actions**
- Enter `stackwright.online` in **Custom domain**, then select **Save**
- If GitHub offers verification, complete it before publishing DNS records

> GitHub recommends adding and verifying the custom domain before configuring DNS to reduce takeover risk.[2]

## Slide 3

### Namecheap: open the DNS workspace

**Work only in the host-records section**

- Sign in to Namecheap → **Domain List** → `stackwright.online` → **Manage**
- Select **Advanced DNS**
- Locate **Host Records** and choose **Add New Record**
- Remove conflicting `@` records or URL Redirect records before saving

Namecheap identifies conflicting A, CNAME, and URL Redirect records as a common cause of failed GitHub Pages setup.[3]

## Slide 4

### Add the four apex A records

**Point the root domain to GitHub Pages**

| Type | Host | Value | TTL |
|---|---|---|---|
| A Record | `@` | `185.199.108.153` | Automatic |
| A Record | `@` | `185.199.109.153` | Automatic |
| A Record | `@` | `185.199.110.153` | Automatic |
| A Record | `@` | `185.199.111.153` | Automatic |

Save all changes after creating all four records. These are GitHub Pages’ documented IPv4 endpoints for an apex domain.[2]

## Slide 5

### Add `www` as the resilient companion

**Use a CNAME—not another root record**

| Type | Host | Value | TTL |
|---|---|---|---|
| CNAME Record | `www` | `jasonclarkagain.github.io` | Automatic |

- Do **not** include `/neversus` in the CNAME value
- Do **not** create a CNAME record for `@`
- With both DNS configurations live, GitHub Pages will redirect the alternate address to the chosen custom domain.[2]

## Slide 6

### Rebuild with a root-domain asset path

**A custom domain removes the repository path**

- In `vite.config.ts`, production `base` should be `/` for `stackwright.online`
- Commit the update and push it to `main`
- The existing GitHub Actions workflow builds and publishes the new version automatically
- Check **Actions** for a completed “Deploy Neversus to GitHub Pages” run

Using `/` prevents browser requests for CSS and JavaScript from incorrectly targeting `/neversus/` on the custom domain.

## Slide 7

### Verify, then enforce HTTPS

**Make the branded site authoritative and secure**

- Allow time for DNS to propagate; Namecheap notes that new records commonly take about 30 minutes, while GitHub advises DNS can take up to 24 hours.[2] [3]
- Run: `dig stackwright.online +noall +answer -t A`
- Confirm the returned A records match the four GitHub Pages IP addresses
- In **Settings → Pages**, check **Enforce HTTPS** once GitHub shows the certificate as ready

GitHub Pages supports HTTPS and HTTPS enforcement for correctly configured custom domains.[4]

## Slide 8

### Launch checklist

**Five checks before you announce the site**

- `https://stackwright.online` loads the current Neversus experience
- `https://www.stackwright.online` redirects to the chosen primary address
- The browser displays a valid HTTPS lock icon
- No styling, images, or JavaScript fail to load in the browser console
- The GitHub Actions deployment is green after the latest push

## Slide 9

### You are ready to launch

**`stackwright.online` becomes the public home of Neversus**

Domain ownership stays with you at Namecheap. GitHub Pages manages hosting, deployment, redirects, and certificate renewal.

## References

[1] [GitHub Docs — About custom domains and GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)

[2] [GitHub Docs — Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

[3] [Namecheap Knowledgebase — Link a domain to GitHub Pages](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages/)

[4] [GitHub Docs — Securing your GitHub Pages site with HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
