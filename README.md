# Hammond Golf website template

A self-contained, responsive static-site concept for `hammondgolf.jopism.com`.
The homepage prioritizes four visitor choices—Golf, Stay, Dine and Practice—
with full-card links to booking, lodging contact, the Dine page and Eagle Woods.
The top navigation opens dedicated pages for each destination, with golf
booking and Hammond Hill lodging actions prominent on their pages. The Dine
page puts the restaurant menu and links to events, the patio, private events,
FAQs and contact in view.
A centered, dismissible booking prompt appears on the homepage. The sticky
header keeps address and Français links visible. The Hammond crest is used in
the wordmark, and Phoenix Glass & Aluminum's official logo and ownership credit
appear in the footer throughout the site.

`golf.html`, `stay.html`, `dine.html` and `practice.html` are the four main
destination pages. `members.html` presents the English 2026 Members’ Corner
newsletter as a normal website page. `member-policies.html` is an on-site
transcription of the 2024 policies PDF, prominently labeled as an expired
archive, not current terms. Both member pages are public and have no
authentication.

## Preview locally

From this folder, start a static server:

```powershell
py -m http.server 8000
```

Then open <http://localhost:8000>.

## Before publishing

- Confirm current contact details, hours, lodging reservation procedures, golf
  booking rules, restaurant information and Eagle Woods offerings.
- The 2026 Members’ Corner is a dated newsletter archive; verify future dates,
  fees and committee roles before presenting them as current. Individual
  committee email addresses from the shared Google Doc are deliberately not
  republished.
- The Dandy Lion food menu on `dine.html` is transcribed from the restaurant's
  published `assets/dandy-lion-current-menu.pdf` (uploaded to its website in
  May 2026). Confirm with the restaurant that it is still approved before launch
  and replace both the text and PDF when the menu changes.
- The membership-policy page is an archived transcription of the 2024 PDF; the
  2024 terms expired. Replace it with club-approved, current terms before
  describing policies as current.
- The course photographs are loaded from the existing `hammondgolf.com` site.
  For production, confirm permission and consider moving optimized copies into
  this site's own image library.
- `assets/hammond-golf-crest.png` is the Hammond crest image provided for this
  design. Confirm the club has a high-resolution production logo before launch.
- The Phoenix Glass & Aluminum ownership credit is based on the ownership
  information provided for this design. Confirm the wording with the club before
  publishing. The linked note that Phoenix is Ottawa-based and has served the
  region since 2008 is based on its [About the Company page](https://phoenixglass.ca/about-the-company).
- `assets/phoenix-glass-logo.png` is downloaded from the Phoenix Glass & Aluminum
  website for the ownership credit. Confirm permission and approved use of the
  logo with the owner before launch.
- The stay card links to Hammond Hill's contact page and lists its publicly
  advertised phone number. Verify this is the correct room-reservation contact
  before launch.
- Connect the `data-track` CTA hooks to the club's analytics account only after
  configuring its consent and privacy requirements. No analytics vendor or
  tracking ID is included in this template.
- Test keyboard navigation, screen-reader labels, mobile layouts and all external
  links before launch.

## Publishing with GitHub Pages and GoDaddy DNS

The root domain `jopism.com` is already served from GitHub Pages by the public
`JopPank/jopism` repository. The investor preview uses the separate public repository
`JopPank/hammond-golf-investor-preview` and its own custom-domain mapping. The
source repository is public; this preview has no sign-in or password protection.

1. Push all site files and the complete `assets` folder to the `main` branch
   root. Include this `CNAME` file.
2. In the repository, open **Settings → Pages**, publish from the `main`
   branch root, and set the custom domain to `hammondgolf.jopism.com`. GitHub
   recommends adding the custom domain in the repository before setting DNS to
   prevent subdomain takeovers. Its guide:
   [Managing a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
3. In GoDaddy DNS for `jopism.com`, add only this record:

   | Type | Name | Value |
   | --- | --- | --- |
   | CNAME | `hammondgolf` | `joppank.github.io` |

   Keep all current records for `jopism.com` unchanged. GoDaddy's guide:
   [Add a CNAME record](https://www.godaddy.com/help/add-a-cname-record-19236).
4. Wait for DNS to propagate, then return to **Settings → Pages** and enable
   **Enforce HTTPS** when GitHub makes it available. Verify the homepage,
   destination pages and menu PDF at `https://hammondgolf.jopism.com`.

Do not put hosting credentials or private tokens in these site files.
