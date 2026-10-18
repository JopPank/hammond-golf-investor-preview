# Hammond Golf website template

A self-contained, responsive static-site concept for `hammondgolf.jopism.com`.
The homepage prioritizes five visitor choices—Golf, Stay, Dine, Practice and
Broken Stick Brewing—with full-card links to each destination. The Golf page
includes current green-fee rates, course details, a photo gallery, the club's
history and a scorecard link. Every page has a persistent tee-time booking link
and a shared contact section in the footer. The Dine page puts the restaurant
menu and links to events, the patio, private events, FAQs and contact in view.
A homepage course-status panel directs visitors to call for today's conditions
rather than displaying unverified live data. A visit planner links to golf,
Hammond Hill, the Dandy Lion and Broken Stick, and explains that availability
and reservations are confirmed with each business separately.
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
- The Dandy Lion Brew Pub logo on the Dine page is extracted from the published
  menu PDF. Confirm the restaurant approves this logo use before launch.
- The Dine page and homepage card use the supplied pizza photo and Dandy Lion
  logo. The Stay card and page hero use the supplied Hammond Hill lodging photo.
- Broken Stick Brewing is a separate full-card homepage link using a cans photo
  from the brewery's published website:
  <https://items-images-production.s3.us-west-2.amazonaws.com/files/b6d49cabcfdc0a915850bc9cb3102508587eda56/original.jpeg>.
- The membership-policy page is an archived transcription of the 2024 PDF; the
  2024 terms expired. Replace it with club-approved, current terms before
  describing policies as current.
- The course photographs are loaded from the existing `hammondgolf.com` site.
  For production, confirm permission and consider moving optimized copies into
  this site's own image library. The golf overview, course gallery, and history
  are based on the club's published [course information](https://www.hammondgolf.com/),
  [scorecard](https://www.hammondgolf.com/wp-content/uploads/2021/08/Scoerecard.pdf),
  and [history](https://www.hammondgolf.com/ourhistory/).
- `assets/hammond-golf-crest.png` is the original supplied crest kept in the
  image library as a reference; the new SVG logo is used in the header/footer.
- `assets/hammond-golf-logo-1980.jpg` is the supplied final Phoenix Mane Shield
  logo with no flames and an Est. 1980 mark.
- The Phoenix Glass & Aluminum ownership credit is based on the ownership
  information provided for this design. Confirm the wording with the club before
  publishing. The linked note that Phoenix is Ottawa-based and has served the
  region since 2008 is based on its [About the Company page](https://phoenixglass.ca/about-the-company).
- `assets/phoenix-glass-new-logo.jpg` is the user-supplied Phoenix Glass &
  Aluminum logo used for the ownership credit. Confirm permission and approved
  use of the logo with the owner before launch.
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
2. In the repository, open **Settings → Pages** and confirm it publishes from
   the `main` branch root. The committed `CNAME` file attaches
   `hammondgolf.jopism.com` as the custom domain. GitHub recommends attaching
   the custom domain before setting DNS to prevent subdomain takeovers. Its guide:
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
