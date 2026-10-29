# 1 - Connect stackwright.online to Neversus

We are launching the public home for Neversus today. This walkthrough connects stackwright.online to GitHub Pages using Namecheap DNS. You will see every step required for a secure setup. Let us get started.

# 2 - The Target State

We want stackwright.online to be the primary branded home for Neversus. Namecheap remains our DNS authority, while GitHub Pages hosts the repository and handles the certificate. This split gives us full domain ownership with modern hosting. Next, we need to claim that domain on GitHub before touching any DNS settings.

# 3 - Configure GitHub First

Always claim your domain on GitHub before changing your DNS records. This prevents domain takeover risks during the setup process. Head into your repository settings, input your custom domain, and save. Complete any verification prompts before moving on to Namecheap. Now we can open the DNS workspace.

# 4 - Open the Namecheap DNS Workspace

Log into Namecheap and navigate straight to the Advanced DNS tab for your domain. Look for the Host Records section to manage your routing. Be sure to delete any conflicting URL redirects or old root records first. Clean records ensure a smooth connection to GitHub Pages.

# 5 - Add the Four Apex Records

Point the root host directly to GitHub Pages using their four documented IPv4 addresses. Set the host to at and use automatic TTL for each entry. Make sure you add all four IP addresses so traffic balances correctly. After adding them, save your changes and prepare the companion record.

# 6 - Add the www Companion Record

Adding the www companion record ensures visitors using the subdomain still reach the site. We need a single CNAME record pointing to the GitHub user domain. And we must never append the repository name here. Plus, the apex host uses our A records, so this CNAME is strictly for www. With both records set up, GitHub Pages will automatically handle the redirection.

# 7 - Rebuild for a Root-Domain Path

Moving to a custom domain means we have to update how our assets are loaded. We change the Vite base path to a root-relative slash. Without this change, requests for styles and scripts would look for a folder that no longer exists. After updating the config, we commit and push to main. The workflow handles the rest automatically.

# 8 - Verify DNS, Then Enforce HTTPS

Before we lock down security, we need to verify that DNS propagation is complete. Namecheap records can take half an hour, while GitHub notes up to twenty-four hours. We run a quick dig command to confirm the A records match the expected GitHub IPs. Once the certificate is ready, we turn on enforce HTTPS in the repository settings.

# 9 - Launch Checklist

Running through a final checklist prevents embarrassing launch errors. We confirm the primary domain loads correctly and the www address redirects as expected. We check that HTTPS is enforced and all assets load without console errors. Always test in a private browsing window to avoid cached data.

# 10 - Ready to Launch

Everything is now in place for the public release. Domain ownership remains safely with you at Namecheap. GitHub Pages takes care of the hosting, deployments, and automatic certificate renewals. Neversus now has a permanent, secure home on the web.
