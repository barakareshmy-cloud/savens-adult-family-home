# SAVENS Adult Family Home

Complete multi-page GitHub Pages website.

Important:
- The first two WhatsApp screenshots were design references only and are NOT used.
- All website images are mapped to the actual SAVENS home photos.
- The exterior photo containing the visible vehicle license plate is included only as:
  images/exterior-original-NOT-FOR-LIVE-SITE.jpeg
  and is NOT referenced by any live page.
- The homepage hero uses neighborhood.jpg until a cleaned exterior photo is available.


## Interactive upgrade
- Service cards on Home navigate to relevant Services sections.
- Why Choose SAVENS cards navigate to the appropriate page.
- Gallery and room images open in a keyboard-accessible lightbox.
- Call, email, contact buttons, navigation, and CTAs are linked.
- Admin controller scaffold is at admin.html.

## Admin authentication
The admin page is prepared for Firebase Google Sign-In and restricts access to:
josphinemaseri6@gmail.com
- barakareshmy@gmail.com

To activate secure admin login:
1. Create a Firebase project.
2. Enable Authentication > Google.
3. Add the GitHub Pages domain as an authorized domain.
4. Paste the Firebase Web App values into firebase-config.js.

Important: Because GitHub Pages is static, secure login alone does not make page edits persist. Persistent content editing requires a backend/database (for example Firestore) or GitHub API write access.


## Firebase connected
The Firebase web configuration is installed in firebase-config.js.

Authorized admins:
- josphinemaseri6@gmail.com
- barakareshmy@gmail.com

Before testing on GitHub Pages, add this domain in:
Firebase Console > Authentication > Settings > Authorized domains

barakareshmy-cloud.github.io


## Contact form and Gmail
The Contact form sends website inquiries to:
josphinemaseri6@gmail.com

Direct email links also open the customer's email app with a SAVENS inquiry template.

IMPORTANT FOR FIRST FORM SUBMISSION:
FormSubmit may send an activation/confirmation email to josphinemaseri6@gmail.com the first time the form is used.
Open that email and confirm/activate the form. After activation, future customer messages will be delivered normally.

Customer experience:
1. Customer completes the form.
2. Message is delivered to SAVENS Gmail.
3. Customer is redirected to thank-you.html.
4. An automatic acknowledgement is requested to the customer's entered email.
