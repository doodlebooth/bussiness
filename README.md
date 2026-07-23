# SnapBooth Studio — Sample Website Template
### For Razorpay Account Activation

This is a ready-to-use website template for photobooth kiosk businesses 
to fulfill Razorpay's requirement of having the following pages live on their website:

  ✅ Terms & Conditions  
  ✅ Privacy Policy  
  ✅ Shipping Policy  
  ✅ Contact Us  
  ✅ Cancellation & Refunds  

---

## 📁 Files Included

| File         | Purpose                                      |
|--------------|----------------------------------------------|
| index.html   | Main HTML structure — all pages & content    |
| styles.css   | All visual styling — colours, layout, fonts  |
| script.js    | Page navigation & interactivity              |
| README.md    | This guide                                   |

All three files (index.html, styles.css, script.js) must be in the 
**same folder** for the website to work correctly.

---

## ✏️ How to Customise

### 1. Business Name
Search for "SnapBooth Studio" in index.html and replace all instances 
with your client's actual business name.

### 2. Logo
In index.html, find the two logo sections (nav and hero) and replace:

    <span class="logo-placeholder">SB</span>

with:

    <img src="logo.png" alt="Your Business Name Logo"/>

Place your logo file (e.g. logo.png) in the same folder as index.html.
Recommended size: at least 200×200px, square or circular crop works best.

### 3. Business Description (Home Page)
In index.html, find and update the paragraph inside the .hero section:

    <p>We bring joy to every occasion with premium photobooth kiosk 
    experiences...</p>

Replace with your client's actual business description.

### 4. Contact Details
In the Contact Us section, update:
  - Business address
  - Phone number
  - Email addresses (hello@, privacy@, refunds@, support@)
  - Website URL

### 5. Colours (Optional)
In styles.css, find the :root section at the top and update:
  - --accent:  Primary colour (default: teal #6b9e9b)
  - --accent2: Secondary colour (default: gold #c8a96e)
  - --bg:      Page background (default: warm white #f7f5f2)

### 6. Policy Dates
Search for "January 1, 2025" in index.html and replace with the 
actual date the client publishes the website.

### 7. City / Jurisdiction
In Terms & Conditions, find [Your City] and replace with the 
client's operating city for the Governing Law clause.

---

## 🌐 How to Publish

### Option A — Free (GitHub Pages)
1. Create a free account at github.com
2. Create a new repository (e.g. "my-business-website")
3. Upload all 3 files (index.html, styles.css, script.js)
4. Go to Settings → Pages → set source to "main branch"
5. Your site will be live at: https://yourusername.github.io/my-business-website

### Option B — Free (Netlify Drop)
1. Go to https://app.netlify.com/drop
2. Drag and drop the entire folder containing all 3 files
3. Your site is instantly live with a public URL

### Option C — Paid Hosting (cPanel)
1. Upload all 3 files to your hosting's public_html folder via cPanel
2. The site will be accessible at your domain

---

## 📋 Razorpay Checklist

Once published, verify the following before submitting to Razorpay:

  [ ] Business name matches Razorpay registration
  [ ] All 5 policy pages are accessible from the homepage
  [ ] Contact page has a working email address
  [ ] Phone number is reachable
  [ ] Privacy Policy mentions data collection & Razorpay as payment processor
  [ ] Cancellation & Refunds policy is clearly stated

---

## 🛠️ Tech Stack

- Pure HTML5, CSS3, Vanilla JavaScript
- Google Fonts: Cormorant Garamond + DM Sans
- No frameworks, no dependencies, no build tools required
- Works offline — just open index.html in any browser

---

Provided by Triple Arcade / Zlife Education
For support, contact your Triple Arcade representative.
