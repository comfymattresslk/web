/* ============================================================
   PAHASU METTA — script.js
   ============================================================ */

/* ---------- Translations ---------- */
const translations = {
  en: {
    "meta.description": "Comfy Mattress — a foldable mattress for yoga, prayer and meditation. Fits in your bag. Order via WhatsApp.",
    "nav.product": "The Mattress",
    "nav.features": "Features",
    "nav.howto": "How to Use",
    "nav.gallery": "Gallery",
    "nav.order": "Order Now",
    "trust.1": "Folds to laptop size",
    "trust.2": "Ships islandwide",
    "trust.3": "Made in Sri Lanka",
    "trust.4": "Machine washable",
    "product.badge": "The Comfy Mattress",
    "product.title": "Take your practice anywhere.",
    "product.desc": "Heading to the temple, squeezing in a yoga session, or praying at the office — it folds up and comes with you.",
    "product.cta": "Order via WhatsApp",
    "uc.buddhist": "Buddhist Puja",
    "uc.hindu": "Hindu Pooja",
    "uc.muslim": "Muslim Prayer",
    "uc.christian": "Christian Devotion",
    "uc.yoga": "Daily Yoga",
    "spec.1": "Folds flat, fits in any bag or backpack",
    "spec.2": "Light enough to carry all day",
    "spec.3": "Works on hard floors, tiles, grass and stone",
    "spec.4": "Works for Buddhist, Hindu, Muslim, Christian and yoga practice",
    "spec.5": "Machine washable",
    "spec.6": "Made by hand in Sri Lanka",
    "spec.7": "Opens flat in seconds, no clips needed",
    "spec.8": "Soft surface, comfortable on any floor",
    "spec.9": "Folds back just as fast",
    "spec.10": "Delivered to your door, anywhere in Sri Lanka",
    "footer.country": "Sri Lanka",
    "gallery.cap1": "Moments of practice",
    "gallery.cap2": "Sacred stillness",
    "gallery.cap3": "Wherever you are",
    "gallery.cap4": "On the go",
    "gallery.cap5": "Morning rituals",
    "gallery.cap6": "Made for moments",
    "gallery.note": "Share your Comfy Mattress moment —",
    "gallery.note.link": "send us a photo on WhatsApp",
    "testi.label": "What People Say",
    "testi.title": "Words from our customers",
    "cta.title": "Ready to order?",
    "cta.sub": "No forms, no accounts. Send us a WhatsApp and we'll handle the rest.",
    "cta.wa": "Chat on WhatsApp",
    "cta.call": "Call Us",
    "cta.sms": "Send SMS",
    "footer.tagline": "A foldable mattress for prayer, yoga, and meditation. Made in Sri Lanka.",
    "hero.eyebrow": "Made by hand in Sri Lanka",
    "hero.headline": "Take your practice anywhere.",
    "hero.sub": "A soft, foldable mattress that fits in your bag. Use it for prayer, yoga, meditation — wherever you end up.",
    "hero.cta1": "Order on WhatsApp",
    "hero.cta2": "See How It Works",
    "hero.badge": "Folds to laptop size",
    "features.label": "Why Comfy Mattress?",
    "features.title": "Built for real life. Fits in your bag.",
    "features.sub": "A few reasons people keep coming back.",
    "feat1.title": "Folds to bag size",
    "feat1.desc": "Same size as a laptop when folded. Fits in a backpack, a tote, a carry-on — whatever you've got.",
    "feat2.title": "Genuinely lightweight",
    "feat2.desc": "You'll forget it's in your bag until you need it. That's kind of the point.",
    "feat3.title": "Any surface",
    "feat3.desc": "Hard floor, grass, tiles, carpet — it works on all of them.",
    "feat4.title": "Any faith or practice",
    "feat4.desc": "Used for Buddhist puja, Hindu pooja, Muslim prayer, Christian devotion and daily yoga.",
    "feat5.title": "Easy to clean",
    "feat5.desc": "Machine washable. Wipe it down between uses if needed. No special care required.",
    "feat6.title": "Made in Sri Lanka",
    "feat6.desc": "Made by local artisans here in Sri Lanka. Not mass-produced overseas.",
    "howto.label": "Using It",
    "howto.title": "Simple as 1 – 2 – 3",
    "howto.sub": "No clips. No fuss. Unfolds in seconds, folds back just as fast.",
    "step1.title": "Unfold",
    "step1.desc": "Open Comfy Mattress flat in seconds. Lay it on any surface, indoors or out.",
    "step2.title": "Sit or Kneel",
    "step2.desc": "Settle in for yoga, meditation, prayer, or any floor activity. Pure comfort beneath you.",
    "step3.title": "Fold and Go",
    "step3.desc": "When you're done, fold it back to laptop size and carry it with you anywhere.",
    "gallery.label": "In the Wild",
    "gallery.title": "See It in Use",
    "gallery.sub": "Comfy Mattress at home, at the temple, in the park — everywhere life happens.",
    "gallery.note": "Have a Comfy Mattress moment to share? Send us your photo on WhatsApp and we'll feature it here.",
    "testimonials.label": "What People Say",
    "testimonials.title": "From people who actually use it",
    "t1.quote": "I carry it to the temple every morning. Folds so small, I don't even notice the weight. Perfect for pooja.",
    "t1.author": "— Kumari D., Colombo",
    "t2.quote": "As a yoga teacher, I recommend this to all my students. Easy to clean, comfortable, and so compact.",
    "t2.author": "— Tharanga S., Kandy",
    "t3.quote": "We use it for Friday prayers at the office. No more kneeling on the hard floor. Very happy with it.",
    "t3.author": "— Rizwan A., Gampaha",
    "order.label": "Order",
    "order.title": "Ready to order?",
    "order.sub": "Just send us a message. No forms, no fuss — we'll get back to you fast.",
    "order.step1.title": "Choose what you need",
    "order.step1.desc": "Pick your colour and quantity. Ask us if you're not sure.",
    "order.step2.title": "Contact us",
    "order.step2.desc": "WhatsApp, call, or SMS — whichever is easiest for you.",
    "order.step3.title": "We confirm your order",
    "order.step3.desc": "We'll reply quickly with availability and delivery details.",
    "order.step4.title": "Delivered to your door",
    "order.step4.desc": "We ship islandwide. International orders available — just ask.",
    "order.whatsapp.title": "WhatsApp",
    "order.whatsapp.desc": "Fastest way to reach us",
    "order.whatsapp.btn": "Chat Now",
    "order.call.title": "Phone / Call",
    "order.call.desc": "Call us directly anytime",
    "order.call.btn": "Call Now",
    "order.sms.title": "SMS",
    "order.sms.desc": "Send us a text message",
    "order.sms.btn": "Send SMS",
    "order.note": "We deliver anywhere in Sri Lanka. International orders welcome too — just ask.",
    "footer.about": "A foldable mattress for prayer, yoga, and meditation. Made in Sri Lanka.",
    "footer.links": "Quick Links",
    "footer.contact": "Contact",
    "footer.copy": "© 2025 Comfy Mattress. Made in Sri Lanka.",
    "whatsapp.message": "Hi! I'd like to order a Comfy Mattress. Can you help me?"
  },
  si: {
    "meta.description": "Comfy Mattress — ප්‍රාර්ථනාවට, යෝගාවට, භාවනාවට හදන ගෙවිය හැකි මෙට්ටයක්. බෑගේ ඇතෙයි. WhatsApp කරලා ඇණවුම් කරන්න.",
    "nav.product": "මෙට්ටය",
    "nav.features": "විශේෂාංග",
    "nav.howto": "භාවිතා කරන හැටි",
    "nav.gallery": "ගැලරිය",
    "nav.order": "ඇණවුම් කරන්න",
    "trust.1": "බෑගේ ඇතෙන ප්‍රමාණයට නැවෙයි",
    "trust.2": "දිවයිනේ ඕනෑ තැනකට යයි",
    "trust.3": "ශ්‍රී ලංකාවේ හදන",
    "trust.4": "යන්ත්‍රේ සේදිය හැකිය",
    "product.badge": "Comfy Mattress",
    "product.title": "ඔබේ පිළිවෙත ඕනෑ තැනකට.",
    "product.desc": "පන්සලට, කාර්යාලේ යෝගා සෙෂන් එකකට, හෝ ප්‍රාර්ථනාවකට — නැව්වා ගෙවිල්ලා ඒ එක්කම යයි.",
    "product.cta": "WhatsApp කරලා ඇණවුම් කරන්න",
    "uc.buddhist": "බෞද්ධ පූජා",
    "uc.hindu": "හින්දු ආරාධනා",
    "uc.muslim": "මුස්ලිම් ප්‍රාර්ථනා",
    "uc.christian": "ක්‍රිස්තියානි භක්තිය",
    "uc.yoga": "දෛනික යෝගා",
    "spec.1": "නැව්වාම බෑගේ ඇතෙයි, බෑක්පැකේ ඇතෙයි",
    "spec.2": "දවස පුරා රැගෙන ගියත් බරක් නෑ",
    "spec.3": "ගල් බිම, ටයිල්, තණකොළ, ඕනෑ තැනක",
    "spec.4": "බෞද්ධ, හින්දු, මුස්ලිම්, ක්‍රිස්තියානි, යෝගා",
    "spec.5": "යන්ත්‍රේ දාලා සෝදාගන්න පුළුවන්",
    "spec.6": "ශ්‍රී ලංකාවේ දේශීය කලාකරුවන් හදන",
    "spec.7": "තත්පර කිහිපයකින් ඇරෙයි, ක්ලිප් නෑ",
    "spec.8": "මෘදු තලය, ඕනෑ බිමක සැනසිල්ල",
    "spec.9": "ඒ ගානටම ඉක්මනින් නැවෙයි",
    "spec.10": "දිවයිනේ ඕනෑ තැනකට දොරකඩටම ගෙනෙනවා",
    "footer.country": "ශ්‍රී ලංකා",
    "gallery.cap1": "ව්‍යායාම මොහොත",
    "gallery.cap2": "නිසල වෙලාවක",
    "gallery.cap3": "ඔබ ඉන්නා ඕනෑම තැන",
    "gallery.cap4": "ගමනේදී",
    "gallery.cap5": "උදේ රෙදි",
    "gallery.cap6": "ඒ මොහොතේ",
    "gallery.note": "ඔබේ Comfy Mattress ඡායාරූපය WhatsApp කරන්න —",
    "gallery.note.link": "ඡායාරූපයක් එවන්න",
    "testi.label": "කියන දේ",
    "testi.title": "ඇත්තටම භාවිතා කරන අයගෙන්",
    "cta.title": "ඇණවුම් කරන්නද?",
    "cta.sub": "ෆෝම් නෑ, ගිණුම් නෑ. WhatsApp කරලා ඉල්ලන්න, අපි බලාගන්නෙමු.",
    "cta.wa": "WhatsApp කරන්න",
    "cta.call": "දුරකතනය කරන්න",
    "cta.sms": "SMS යවන්න",
    "footer.tagline": "ප්‍රාර්ථනාවට, යෝගාවට, භාවනාවට. ශ්‍රී ලංකාවේ හදන.",
    "hero.eyebrow": "ශ්‍රී ලංකාවේ දෑතින් හදන",
    "hero.headline": "ඔබේ පිළිවෙත ඕනෑ තැනකට.",
    "hero.sub": "බෑගේ ඇතෙන, ගෙවිය හැකි මෘදු මෙට්ටයක්. ප්‍රාර්ථනාවට, යෝගාවට, භාවනාවට — ඔබ ගිය ගිය තැනදී.",
    "hero.cta1": "WhatsApp කරලා ඇණවුම් කරන්න",
    "hero.cta2": "කොහොමද බලන්න",
    "hero.badge": "බෑගේ ඇතෙන ප්‍රමාණයට නැවෙයි",
    "features.label": "ඇයි Comfy Mattress?",
    "features.title": "දිනපතා ජීවිතයට ගැලපෙයි. බෑගේ ඇතෙයි.",
    "features.sub": "ගනුදෙනුකරුවන් නැවත නැවත එන හේතු කිහිපයක්.",
    "feat1.title": "බෑගේ ඇතෙන ප්‍රමාණයට නැවෙයි",
    "feat1.desc": "නැව්වාම ලැප්ටොප් ප්‍රමාණේ. බෑක්පැකේ, ශෝල්ඩර් බෑගේ, ගමන් මල්ලේ — ඕනෑ ඒකේ ඇතෙයි.",
    "feat2.title": "ඇත්තෙන්ම සැහැල්ලුයි",
    "feat2.desc": "බෑගේ ඇති බව අමතකවෙයි, ඕනෑ වෙලාවේ හදාගන්නවා. ඒකයිනේ අදහස.",
    "feat3.title": "ඕනෑ බිමක",
    "feat3.desc": "ගල් බිම, තණකොළ, ටයිල්, කාපට් — ඔක්කොටම වැඩ කරයි.",
    "feat4.title": "ඕනෑ ආගමකට, ඕනෑ පිළිවෙතකට",
    "feat4.desc": "බෞද්ධ පූජා, හින්දු ආරාධනා, මුස්ලිම් ප්‍රාර්ථනා, ක්‍රිස්තියානි භක්තිය, දෛනික යෝගා.",
    "feat5.title": "සෝදාගන්න ලේසියි",
    "feat5.desc": "යන්ත්‍රේ දාලා සෝදාගන්න පුළුවන්. අතරතුරේ පිස දැමිය හැකිය. අමාරු ආරක්ෂාවක් නෑ.",
    "feat6.title": "ශ්‍රී ලංකාවේ හදන",
    "feat6.desc": "දේශීය කලාකරුවන් හදන. ජාත්‍යන්තර කර්මාන්ත ශාලාවකින් නෙවෙයි.",
    "howto.label": "භාවිතා කරන හැටි",
    "howto.title": "1 – 2 – 3 — ඒ තරම් සරළයි",
    "howto.sub": "ක්ලිප් නෑ. අවුලක් නෑ. තත්පර කිහිපයකින් ඇරෙයි, ඒ ගානටම ඉක්මනින් නැවෙයි.",
    "step1.title": "ඇරගන්න",
    "step1.desc": "Comfy Mattress තත්පර කිහිපයකින් ඇරලා ඕනෑ බිමක දාන්න.",
    "step2.title": "හිඳගන්න හෝ දණ ගහගන්න",
    "step2.desc": "යෝගා, භාවනා, ප්‍රාර්ථනා — ඕනෑ දෙයක් කරන්න.",
    "step3.title": "නැවලා යන්න",
    "step3.desc": "ඉවර වූ පසු, නැවලා බෑගේ දාලා යන්න.",
    "gallery.label": "ජීවිතේ ඒ මොහොතේ",
    "gallery.title": "භාවිතයේදී",
    "gallery.sub": "නිවසේ, පන්සලේ, පාර්කේ — ජීවිතේ ඔහේ ගිය ඕනෑ තැනක.",
    "gallery.note": "ඔබේ Comfy Mattress ඡායාරූපය WhatsApp කරන්නද? අපි මෙතැන ෂෙයාර් කරන්නෙමු.",
    "testimonials.label": "කියන දේ",
    "testimonials.title": "ඇත්තටම භාවිතා කරන අයගෙන්",
    "t1.quote": "සෑම උදෑසනකම පන්සලට රැගෙන යනවා. ඉතාම කුඩාවට නැවෙනවා, බරක් දැනෙන්නේ නෑ. පූජාවට හරිම ගතිමතයි.",
    "t1.author": "— කුමාරි ද., කොළඹ",
    "t2.quote": "යෝගා ගුරුවරියක් හැටියට, මගේ සිසුන් සියල්ලන්ටම කියනවා. සෝදාගන්න ලේසි, සුවදායි, කුඩාවට ඇතෙයි.",
    "t2.author": "— තරංග ස., මහනුවර",
    "t3.quote": "කාර්යාලේ සිකුරාදා ප්‍රාර්ථනාවට දාගනිමු. දැන් ගල් බිමේ දණ ගහගන්නේ නෑ. හරිම සතුටුයි.",
    "t3.author": "— රිස්වාන් අ., ගම්පහ",
    "order.label": "ඇණවුම්",
    "order.title": "ඇණවුම් කරන්නද?",
    "order.sub": "පණිවිඩයක් යවන්න. ෆෝම් නෑ, ගිණුම් නෑ — ඉක්මනින් කතා කරන්නෙමු.",
    "order.step1.title": "ඕනෑ දේ කියන්න",
    "order.step1.desc": "වර්ණය, ප්‍රමාණය කියන්න. ගැන අදහසක් නෑ නම් අහන්න.",
    "order.step2.title": "අපිට ගැහෙන්න",
    "order.step2.desc": "WhatsApp, දුරකතනය, SMS — ඔබට පහසු ක්‍රමේ.",
    "order.step3.title": "ඇණවුම් තහවුරු කරන්නෙමු",
    "order.step3.desc": "ලබ්‍යතාවය සහ බෙදාහැරීමේ විස්තර ඉක්මනින් දන්වනවා.",
    "order.step4.title": "දොරකඩටම ගෙනෙනවා",
    "order.step4.desc": "දිවයිනේ ඕනෑ තැනකට යයි. ජාත්‍යන්තර ඇණවුම් ත් — ඇහුවොත් කතා කරමු.",
    "order.whatsapp.title": "WhatsApp",
    "order.whatsapp.desc": "ඉක්මනින් කතා කරන්න",
    "order.whatsapp.btn": "දැන් කතා කරන්න",
    "order.call.title": "දුරකතනය",
    "order.call.desc": "ඕනෑ වෙලාවක ඩයල් කරන්න",
    "order.call.btn": "දැන් ගහන්න",
    "order.sms.title": "SMS",
    "order.sms.desc": "කෙටි පණිවිඩයක් යවන්න",
    "order.sms.btn": "SMS යවන්න",
    "order.note": "දිවයිනේ ඕනෑ තැනකට යයි. ජාත්‍යන්තර ඇණවුම් ත් — ඇහෙව්වොත් කරන්නෙමු.",
    "footer.about": "ප්‍රාර්ථනාවට, යෝගාවට, භාවනාවට හදන ගෙවිය හැකි මෙට්ටයක්. ශ්‍රී ලංකාවේ හදන.",
    "footer.links": "ඉක්මන් සබැඳි",
    "footer.contact": "සම්බන්ධ වෙන්න",
    "footer.copy": "© 2025 Comfy Mattress. ශ්‍රී ලංකාවේ හදන.",
    "whatsapp.message": "ආයුබෝවන්! මට Comfy Mattressයක් ඕනෑ. ගන්න පුළුවන්ද?"
  },
  ta: {
    "meta.description": "Comfy Mattress — தொழுகை, யோகா, தியானத்திற்காக மடிக்கக்கூடிய மெத்தை. பையில் போகும். WhatsApp-ல் ஆர்டர் செய்யுங்கள்.",
    "nav.product": "மெத்தை",
    "nav.features": "அம்சங்கள்",
    "nav.howto": "எப்படி பயன்படுத்துவது",
    "nav.gallery": "படங்கள்",
    "nav.order": "ஆர்டர் செய்யுங்கள்",
    "trust.1": "பையில் பொருந்தும் அளவுக்கு மடிகிறது",
    "trust.2": "நாடு முழுவதும் டெலிவரி",
    "trust.3": "இலங்கையில் செய்தது",
    "trust.4": "இயந்திரத்தில் துவைக்கலாம்",
    "product.badge": "Comfy Mattress",
    "product.title": "உங்கள் பழக்கத்தை எங்கும் எடுத்துச் செல்லுங்கள்.",
    "product.desc": "கோவிலுக்கோ, அலுவலக யோகா சேஷனுக்கோ, தொழுகைக்கோ — மடித்துப் போட்டால் உங்களுடன் வருகிறது.",
    "product.cta": "WhatsApp-ல் ஆர்டர் செய்யுங்கள்",
    "uc.buddhist": "பௌத்த பூஜை",
    "uc.hindu": "இந்து பூஜை",
    "uc.muslim": "முஸ்லிம் தொழுகை",
    "uc.christian": "கிறிஸ்தவ வழிபாடு",
    "uc.yoga": "தினசரி யோகா",
    "spec.1": "மடித்தால் பையில் போகும், பேக்பேக்கிலும் சேரும்",
    "spec.2": "நாள் முழுவதும் சுமந்தாலும் கஷ்டமில்லை",
    "spec.3": "கல் தரை, டைல், புல், கார்பெட் — எங்கும் ஓகே",
    "spec.4": "பௌத்த, இந்து, முஸ்லிம், கிறிஸ்தவ, யோகா",
    "spec.5": "இயந்திரத்தில் துவைக்கலாம்",
    "spec.6": "இலங்கையில் உள்ளூர் கலைஞர்கள் செய்தது",
    "spec.7": "சில வினாடிகளில் விரிகிறது, கிளிப் இல்லை",
    "spec.8": "மென்மையான தளம், எந்த தரையிலும் வசதியானது",
    "spec.9": "அவ்வளவு வேகமாக மடிகிறது",
    "spec.10": "இலங்கையில் எங்கும் வீட்டுக்கே வரும்",
    "footer.country": "இலங்கை",
    "gallery.cap1": "பயிற்சி நேரம்",
    "gallery.cap2": "அமைதியான தருணம்",
    "gallery.cap3": "நீங்கள் இருக்கும் இடத்தில்",
    "gallery.cap4": "பயணத்தில்",
    "gallery.cap5": "காலை நேரம்",
    "gallery.cap6": "அந்த தருணம்",
    "gallery.note": "உங்கள் படத்தை WhatsApp-ல் அனுப்புங்கள் —",
    "gallery.note.link": "படம் அனுப்புங்கள்",
    "testi.label": "சொல்வது என்னவென்றால்",
    "testi.title": "உண்மையில் பயன்படுத்துபவர்கள் சொல்வது",
    "cta.title": "ஆர்டர் செய்யலாமா?",
    "cta.sub": "படிவங்கள் இல்லை, கணக்கு இல்லை. WhatsApp-ல் ஒரு மெசேஜ் போடுங்கள், நாங்கள் பார்த்துக்கொள்கிறோம்.",
    "cta.wa": "WhatsApp-ல் பேசுங்கள்",
    "cta.call": "அழையுங்கள்",
    "cta.sms": "SMS அனுப்புங்கள்",
    "footer.tagline": "தொழுகை, யோகா, தியானத்திற்கான மடிக்கும் மெத்தை. இலங்கையில் செய்தது.",
    "hero.eyebrow": "இலங்கையில் கையால் செய்தது",
    "hero.headline": "உங்கள் பழக்கத்தை எங்கும் எடுத்துச் செல்லுங்கள்.",
    "hero.sub": "பையில் பொருந்தும் மடிக்கக்கூடிய மெத்தை. தொழுகைக்கு, யோகாவிற்கு, தியானத்திற்கு — எங்கு போனாலும்.",
    "hero.cta1": "WhatsApp-ல் ஆர்டர் செய்யுங்கள்",
    "hero.cta2": "எப்படி என்று பாருங்கள்",
    "hero.badge": "பையில் பொருந்தும் அளவுக்கு மடிகிறது",
    "features.label": "ஏன் Comfy Mattress?",
    "features.title": "அன்றாட வாழ்க்கைக்கு ஏற்றது. பையில் போகும்.",
    "features.sub": "மக்கள் திரும்பவும் வாங்க வருவதற்கு சில காரணங்கள்.",
    "feat1.title": "பை அளவுக்கு மடிகிறது",
    "feat1.desc": "மடித்தால் லேப்டாப் அளவு. பேக்பேக்கோ, கைப்பையோ, ட்ராவல் பேக்கோ — எந்த பையிலும் போகும்.",
    "feat2.title": "உண்மையிலேயே இலகுவானது",
    "feat2.desc": "பையில் இருக்கிறதே தெரியாது. தேவைப்படும்போது எடுப்பீர்கள். அதுதான் இதன் நோக்கம்.",
    "feat3.title": "எந்த தரையிலும்",
    "feat3.desc": "கல் தரை, புல், டைல், கார்பெட் — எல்லாவற்றிலும் வேலை செய்யும்.",
    "feat4.title": "எந்த மதமோ, எந்த பழக்கமோ",
    "feat4.desc": "பௌத்த பூஜை, இந்து பூஜை, முஸ்லிம் தொழுகை, கிறிஸ்தவ வழிபாடு, தினசரி யோகா.",
    "feat5.title": "சுத்தம் செய்வது எளிது",
    "feat5.desc": "இயந்திரத்தில் துவைக்கலாம். இடையில் துடைத்தால் போதும். கஷ்டமான பராமரிப்பு இல்லை.",
    "feat6.title": "இலங்கையில் செய்தது",
    "feat6.desc": "இலங்கையில் உள்ளூர் கலைஞர்கள் செய்தது. வெளிநாட்டில் தயாரிக்கப்படவில்லை.",
    "howto.label": "எப்படி பயன்படுத்துவது",
    "howto.title": "1 – 2 – 3 — அவ்வளவுதான்",
    "howto.sub": "கிளிப் இல்லை. சிரமம் இல்லை. சில வினாடிகளில் விரிகிறது, அவ்வளவு வேகமாக மடிகிறது.",
    "step1.title": "விரியுங்கள்",
    "step1.desc": "சில வினாடிகளில் விரித்து எந்த தரையிலும் வையுங்கள்.",
    "step2.title": "உட்காருங்கள் அல்லது மண்டியிடுங்கள்",
    "step2.desc": "யோகா, தியானம், தொழுகை — என்னவேண்டுமானாலும் செய்யுங்கள்.",
    "step3.title": "மடித்து செல்லுங்கள்",
    "step3.desc": "முடிந்ததும் மடித்து பையில் போட்டு கிளம்புங்கள்.",
    "gallery.label": "இப்படி பயன்படுத்துகிறார்கள்",
    "gallery.title": "பயன்பாட்டில்",
    "gallery.sub": "வீட்டில், கோவிலில், பூங்காவில் — வாழ்க்கை நடக்கும் இடங்களில்.",
    "gallery.note": "உங்கள் படத்தை WhatsApp-ல் அனுப்புங்கள், இங்கே பகிர்கிறோம்.",
    "testimonials.label": "சொல்வது என்னவென்றால்",
    "testimonials.title": "உண்மையில் பயன்படுத்துபவர்கள் சொல்வது",
    "t1.quote": "தினமும் காலையில் கோவிலுக்கு எடுத்துச் செல்கிறேன். மிகவும் சிறிதாக மடிகிறது, எடையே தெரியாது. பூஜைக்கு சூப்பரா இருக்கு.",
    "t1.author": "— குமாரி டி., கொழும்பு",
    "t2.quote": "யோகா டீச்சராக இருக்கிறேன், மாணவர்கள் எல்லாருக்கும் இதை சொல்கிறேன். சுத்தம் செய்வது ஈஸி, வசதியானது, சிறியது.",
    "t2.author": "— தரங்க ஸ்., கண்டி",
    "t3.quote": "அலுவலகத்தில் வெள்ளிக்கிழமை தொழுகைக்கு வைக்கிறோம். இனி கல் தரையில் மண்டியிட வேண்டியதில்லை. நல்லா இருக்கு.",
    "t3.author": "— ரிஸ்வான் அ., கம்பஹா",
    "order.label": "ஆர்டர்",
    "order.title": "ஆர்டர் செய்யலாமா?",
    "order.sub": "ஒரு மெசேஜ் அனுப்புங்கள். படிவங்கள் இல்லை, சிரமம் இல்லை — சீக்கிரம் பதில் சொல்கிறோம்.",
    "order.step1.title": "என்ன வேணும் சொல்லுங்கள்",
    "order.step1.desc": "நிறம், அளவு சொல்லுங்கள். தெரியாவிட்டால் கேளுங்கள்.",
    "order.step2.title": "தொடர்பு கொள்ளுங்கள்",
    "order.step2.desc": "WhatsApp, அழைப்பு, SMS — உங்களுக்கு எது சுலபமோ அது.",
    "order.step3.title": "ஆர்டர் உறுதிப்படுத்துவோம்",
    "order.step3.desc": "டெலிவரி விவரங்களுடன் விரைவாக திரும்ப சொல்கிறோம்.",
    "order.step4.title": "வீட்டுக்கே வரும்",
    "order.step4.desc": "நாடு முழுவதும் டெலிவரி. வெளிநாட்டிலும் கேட்டால் பார்க்கலாம்.",
    "order.whatsapp.title": "WhatsApp",
    "order.whatsapp.desc": "வேகமாக பேச இது சுலபம்",
    "order.whatsapp.btn": "இப்போது பேசுங்கள்",
    "order.call.title": "தொலைபேசி",
    "order.call.desc": "எந்த நேரமும் அழையுங்கள்",
    "order.call.btn": "இப்போது அழையுங்கள்",
    "order.sms.title": "SMS",
    "order.sms.desc": "குறுஞ்செய்தி அனுப்புங்கள்",
    "order.sms.btn": "SMS அனுப்புங்கள்",
    "order.note": "நாடு முழுவதும் டெலிவரி. வெளிநாட்டிற்கும் கேட்டால் பார்க்கலாம்.",
    "footer.about": "தொழுகை, யோகா, தியானத்திற்கான மடிக்கும் மெத்தை. இலங்கையில் செய்தது.",
    "footer.links": "விரைவு இணைப்புகள்",
    "footer.contact": "தொடர்பு",
    "footer.copy": "© 2025 Comfy Mattress. இலங்கையில் செய்தது.",
    "whatsapp.message": "வணக்கம்! Comfy Mattress வேணும். உதவுவீர்களா?"
  }
};

/* ---------- Language Switcher ---------- */
function setLanguage(lang) {
  if (!translations[lang]) lang = 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  document.documentElement.lang = lang === 'si' ? 'si' : lang === 'ta' ? 'ta' : 'en';
  document.body.className = document.body.className.replace(/lang-\w+/g, '').trim() + ' lang-' + lang;

  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  localStorage.setItem('pahasu-lang', lang);
  history.replaceState(null, '', '#' + lang);

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && translations[lang]['meta.description']) {
    metaDesc.content = translations[lang]['meta.description'];
  }

  const msg = encodeURIComponent(translations[lang]['whatsapp.message'] || translations.en['whatsapp.message']);
  const waUrl = 'https://wa.me/94743168067?text=' + msg;
  document.querySelectorAll('[data-whatsapp]').forEach(el => { el.href = waUrl; });
  document.querySelectorAll('[data-sms]').forEach(el => {
    el.href = 'sms:+94743168067?body=' + msg;
  });
}

/* ---------- Image Placeholder Detection ---------- */
function initPlaceholders() {
  /* img-ph: new class used in redesign */
  document.querySelectorAll('.img-ph, .img-placeholder').forEach(el => {
    const bg = el.style.backgroundImage;
    if (bg && bg !== 'none') {
      const url = bg.replace(/url\(["']?|["']?\)/g, '');
      if (url) {
        const testImg = new Image();
        testImg.onload = () => el.classList.add('loaded', 'has-image');
        testImg.src = url;
      }
    }
  });

  /* Hero background */
  const heroBg = document.getElementById('hero-bg');
  const heroPh = document.getElementById('hero-ph');
  if (heroBg && heroPh) {
    const url = heroBg.style.backgroundImage.replace(/url\(["']?|["']?\)/g, '');
    if (url) {
      const testImg = new Image();
      testImg.onload = () => {
        heroPh.classList.add('hidden');
        document.querySelector('.hero').classList.add('loaded');
      };
      testImg.src = url;
    }
  }

  /* Gallery / strip items */
  document.querySelectorAll('.gallery-item, .strip-item').forEach(el => {
    const bg = el.style.backgroundImage;
    if (bg && bg !== 'none') {
      const url = bg.replace(/url\(["']?|["']?\)/g, '');
      if (url) {
        const testImg = new Image();
        testImg.onload = () => el.classList.add('loaded');
        testImg.src = url;
      }
    }
  });
}

/* ---------- Scroll Animations ---------- */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.07 });
  document.querySelectorAll('.af').forEach(el => observer.observe(el));
}

/* ---------- Announcement Bar ---------- */
function initAnnounceBar() {
  const bar = document.getElementById('announce-bar');
  const btn = document.getElementById('announce-close');
  if (!bar || !btn) return;
  if (localStorage.getItem('pahasu-announce-closed') === '1') {
    bar.classList.add('hidden');
    return;
  }
  btn.addEventListener('click', () => {
    bar.classList.add('hidden');
    localStorage.setItem('pahasu-announce-closed', '1');
  });
}

/* ---------- Nav (always sticky white — no transparent state) ---------- */
function initNav() {
  /* Nav is always white via CSS sticky. No JS needed beyond drawer. */
}

/* ---------- Drawer Toggle ---------- */
function initMobileNav() {
  const toggle  = document.getElementById('nav-toggle');
  const drawer  = document.getElementById('drawer');
  const overlay = document.getElementById('drawer-overlay');
  const closeBtn = document.getElementById('drawer-close');
  if (!toggle || !drawer) return;

  function openDrawer() {
    drawer.classList.add('open');
    overlay && overlay.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    overlay && overlay.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', openDrawer);
  closeBtn && closeBtn.addEventListener('click', closeDrawer);
  overlay && overlay.addEventListener('click', closeDrawer);

  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeDrawer);
  });
}

/* ---------- Scroll-to-top FAB ---------- */
function initScrollTop() {
  const btn = document.getElementById('fab-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const hashLang = window.location.hash.replace('#', '');
  const savedLang = ['en', 'si', 'ta'].includes(hashLang)
    ? hashLang
    : (localStorage.getItem('pahasu-lang') || 'en');
  setLanguage(savedLang);

  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  window.addEventListener('hashchange', () => {
    const lang = window.location.hash.replace('#', '');
    if (['en', 'si', 'ta'].includes(lang)) setLanguage(lang);
  });

  initAnnounceBar();
  initPlaceholders();
  initScrollAnimations();
  initNav();
  initMobileNav();
  initScrollTop();
});
