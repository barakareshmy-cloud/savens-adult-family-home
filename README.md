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

To activate secure admin login:
1. Create a Firebase project.
2. Enable Authentication > Google.
3. Add the GitHub Pages domain as an authorized domain.
4. Paste the Firebase Web App values into firebase-config.js.

Important: Because GitHub Pages is static, secure login alone does not make page edits persist. Persistent content editing requires a backend/database (for example Firestore) or GitHub API write access.
