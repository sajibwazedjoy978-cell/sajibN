/**
 * M. SAJIB — OFFICIAL PERSONAL BRAND WEBSITE
 * Core Interactive Engine: Bilingual System, Navigation, Lightbox & Contact Actions
 * Deployable statically on GitHub Pages with zero external dependencies.
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. BILINGUAL TRANSLATION DICTIONARY (EN + BANGLA)
  // ==========================================================================
  const translations = {
    en: {
      nav_brand: "M. SAJIB",
      nav_home: "Home",
      nav_about: "About",
      nav_journey: "Journey",
      nav_what_i_do: "What I Do",
      nav_education: "Education",
      nav_vision: "Vision",
      nav_projects: "Projects",
      nav_business: "Business",
      nav_media: "Media",
      nav_achievements: "Achievements",
      nav_gallery: "Gallery",
      nav_contact: "Contact",

      hero_eyebrow: "Official Personal Brand",
      hero_tagline: "Building Ideas. Creating Impact.",
      hero_desc: "An ambitious creator and future entrepreneur focused on learning, building, and turning meaningful ideas into real-world impact.",
      hero_btn_journey: "Explore My Journey",
      hero_btn_connect: "Let's Connect",
      identity_entrepreneur: "Entrepreneur",
      identity_app_founder: "App Founder",
      identity_content_creator: "Content Creator",
      identity_business_owner: "Business Owner",
      portrait_badge_sub: "Digital Founder & Creator",

      about_eyebrow: "Personal Biography",
      about_title: "About M. Sajib",
      about_lead: "Driven by curiosity, disciplined execution, and a long-term vision to solve meaningful problems.",
      about_body_1: "Standing at the intersection of modern technology, thoughtful design, and brand architecture, I am actively learning, building, and laying the groundwork for scalable digital products. Rather than claiming premature accolades, my focus is rooted in genuine growth, rapid iteration, and creating authentic value.",
      about_body_2: "This official digital home serves as my enduring anchor—designed to evolve as I grow from a student into an entrepreneur, app founder, content creator, and business owner.",
      pillar_ideas: "Ideas",
      pillar_ideas_val: "Continuous ideation & research",
      pillar_projects: "Projects",
      pillar_projects_val: "Digital apps in architecture",
      pillar_goals: "Goals",
      pillar_goals_val: "Building scalable ventures",
      pillar_vision: "Vision",
      pillar_vision_val: "Long-term real-world impact",

      journey_eyebrow: "Growth Roadmap",
      journey_title: "My Journey",
      journey_sub: "A progressive path of exploration, skill acquisition, and relentless builder mindset.",
      journey_01_step: "01 — The Beginning",
      journey_01_title: "Curiosity Sparked",
      journey_01_text: "Discovering the limitless possibilities of digital technology, creative expression, and how software transforms everyday human lives.",
      journey_02_step: "02 — Learning",
      journey_02_title: "Disciplined Foundations",
      journey_02_text: "Immersing in design thinking, software architectures, language, communication, and the mechanics of sustainable enterprises.",
      journey_03_step: "03 — Exploring",
      journey_03_title: "Testing & Experimentation",
      journey_03_text: "Exploring modern web frameworks, user experience patterns, content strategy, and global business models.",
      journey_04_step: "04 — Creating",
      journey_04_title: "Refining Creative Voice",
      journey_04_text: "Producing engaging digital media, establishing authentic connections, and developing a distinctive creative perspective.",
      journey_05_step: "05 — Building",
      journey_05_title: "Turning Ideas into Reality",
      journey_05_text: "Architecting first-generation applications, writing scalable codebases, and preparing launch foundations for future digital brands.",
      journey_06_step: "06 — The Future",
      journey_06_title: "Scaling Impact",
      journey_06_text: "Founding enduring technology businesses, leading high-performing teams, and driving measurable socio-economic progress.",

      what_eyebrow: "Core Focus Areas",
      what_title: "What I Do",
      what_sub: "Four distinct pillars defining my present work and future entrepreneurial trajectory.",
      card_1_title: "Entrepreneur",
      card_1_desc: "Exploring opportunities, solving problems, and turning ideas into meaningful ventures.",
      card_1_footer: "Active Ideation & Strategy",
      card_2_title: "App Founder",
      card_2_desc: "Building useful digital products and exploring technology-driven solutions.",
      card_2_footer: "Product Architecture",
      card_3_title: "Content Creator",
      card_3_desc: "Creating meaningful content and building a genuine digital presence.",
      card_3_footer: "Digital Media & Community",
      card_4_title: "Business Owner",
      card_4_desc: "Working toward building sustainable brands and businesses with long-term vision.",
      card_4_footer: "Long-Term Venture Vision",

      edu_eyebrow: "Academic Background",
      edu_title: "Education",
      edu_sub: "Fostering analytical rigor, critical thinking, and international communication skills.",
      edu_current_tag: "Current Academic Pursuit",
      edu_degree: "Honours in English",
      edu_institution: "National University",
      edu_status: "Ongoing",
      edu_future_tag: "Future Specializations",
      edu_future_title: "Executive Credentials & Technical Studies",
      edu_future_inst: "Global Certifications & Advanced Programs",
      edu_future_desc: "Structured slot for upcoming business degrees, software engineering credentials, and founder programs.",

      vision_eyebrow: "Philosophical North Star",
      vision_quote: "\"I believe great things can begin with a simple idea, a clear vision, and the courage to build.\"",
      vision_p1: "Learning",
      vision_p2: "Building",
      vision_p3: "Creating",
      vision_p4: "Growing",
      vision_p5: "Impact",

      projects_eyebrow: "Product Engineering",
      projects_title: "Projects",
      projects_sub: "A modular, scalable portfolio framework designed to house upcoming applications, platforms, and open-source tools.",
      filter_all: "All Projects",
      filter_apps: "Web & Mobile Apps",
      filter_tools: "Digital Tools",
      status_coming_soon: "In Architecture — Coming Soon",
      proj_1_name: "Flagship Web Platform",
      proj_1_desc: "Next-generation digital utility designed with focus on clean interaction models and real-time responsiveness.",
      proj_2_name: "Productivity SaaS Suite",
      proj_2_desc: "A focused suite engineered to empower entrepreneurs, creators, and students to streamline daily execution.",
      proj_3_name: "Community & Media Hub",
      proj_3_desc: "An interactive digital hub connecting creators with high-value educational resources and collaborative opportunities.",
      btn_view_details: "Details Coming Soon",

      biz_eyebrow: "Venture Portfolio",
      biz_title: "Building for the Future",
      biz_sub: "A dedicated foundation engineered to incubate, scale, and manage future business brands and technology companies.",
      biz_tag: "Future Ventures — Coming Soon",
      biz_head: "From Prototype to Enterprise",
      biz_desc: "This dedicated hub is architected to showcase future registered businesses, commercial software products, and collaborative holding entities as they launch into the market.",
      biz_col_1_title: "Digital Products",
      biz_col_1_desc: "Scalable SaaS, mobile applications, and consumer software.",
      biz_col_2_title: "E-Commerce & Brands",
      biz_col_2_desc: "Customer-centric lifestyle and technology brands.",
      biz_col_3_title: "Strategic Consulting",
      biz_col_3_desc: "Digital transformation, UI/UX systems, and product advisory.",

      media_eyebrow: "Digital Footprint",
      media_title: "Content & Media",
      media_sub: "Follow official channels for genuine behind-the-scenes insights, updates, and technological discussions.",
      media_fb_name: "Facebook",
      media_fb_handle: "@sajibnofficial",
      media_fb_desc: "Official personal profile and community updates.",
      media_ig_name: "Instagram",
      media_ig_handle: "@sajib__eth",
      media_ig_desc: "Visual stories, lifestyle, aesthetic curation, and real-time updates.",
      media_yt_name: "YouTube",
      media_yt_handle: "Channel Launching Soon",
      media_yt_desc: "Long-form tech builds, entrepreneurial insights, and educational video essays.",
      btn_visit_channel: "Visit Profile",
      btn_coming_soon: "Coming Soon",

      achieve_eyebrow: "Recognitions & Certificates",
      achieve_title: "Achievements",
      achieve_sub: "A transparent log of milestone accomplishments, verifiable credentials, and honors.",
      achieve_box_title: "The Journey is Just Beginning",
      achieve_box_desc: "Achievements and verified credentials will be systematically added as milestones are completed. No exaggerated or artificial claims are made.",
      achieve_field_1: "Credential Title",
      achieve_field_2: "Issuing Entity",
      achieve_field_3: "Verification Date",
      achieve_field_4: "Official Certificate ID",

      gallery_eyebrow: "Visual Archive",
      gallery_title: "Gallery",
      gallery_sub: "High-resolution photographs capturing official portraits, studio moments, and creative milestones.",
      gallery_cap_1: "Official Studio Portrait — Studio lighting & dark backdrop.",
      gallery_cap_2: "Executive Identity Portrait — Frontal focus & poised presence.",
      gallery_cap_3: "Creative Session Frame — Dedicated to focused execution.",

      contact_eyebrow: "Direct Communication",
      contact_title: "Let's Connect",
      contact_sub: "Have an idea, opportunity, or something meaningful to discuss? Let's connect.",
      channel_wa_title: "WhatsApp",
      channel_wa_sub: "+880 1897-874421 (Fastest Response)",
      channel_fb_title: "Facebook Messenger",
      channel_fb_sub: "sajibnofficial",
      channel_ig_title: "Instagram DM",
      channel_ig_sub: "@sajib__eth",
      channel_email_title: "Official Email",
      channel_email_sub: "Email — Coming Soon",

      form_name_label: "Your Name",
      form_name_ph: "Enter your full name",
      form_topic_label: "Inquiry Topic",
      form_topic_opt1: "General Inquiry / Say Hello",
      form_topic_opt2: "Partnership / Business Opportunity",
      form_topic_opt3: "App / Technology Discussion",
      form_topic_opt4: "Media / Content Collaboration",
      form_msg_label: "Your Message",
      form_msg_ph: "Write your message here...",
      btn_send_wa: "Send via WhatsApp",
      btn_copy_msg: "Copy Message to Clipboard",
      form_notice_text: "Static site note: Clicking WhatsApp opens a pre-composed direct chat. You can also copy your message with one click.",
      toast_copied: "Message copied to clipboard! You can paste it into any email or messaging app.",

      footer_bio: "The official personal brand website of M. Sajib. Dedicated to high-leverage learning, building scalable ideas, and driving real-world impact.",
      footer_rights: "© 2026 M. Sajib. All rights reserved. Designed with zero compromises.",
      back_to_top: "Top"
    },

    bn: {
      nav_brand: "এম. সজীব",
      nav_home: "হোম",
      nav_about: "পরিচিতি",
      nav_journey: "যাত্রা",
      nav_what_i_do: "কর্মক্ষেত্র",
      nav_education: "শিক্ষা",
      nav_vision: "ভিশন",
      nav_projects: "প্রকল্প",
      nav_business: "উদ্যোগ",
      nav_media: "মিডিয়া",
      nav_achievements: "অর্জন",
      nav_gallery: "গ্যালারি",
      nav_contact: "যোগাযোগ",

      hero_eyebrow: "অফিসিয়াল পার্সোনাল ব্র্যান্ড",
      hero_tagline: "ধারণা রূপান্তর। বাস্তব প্রভাব সৃষ্টি।",
      hero_desc: "শেখা, নির্মাণ এবং অর্থপূর্ণ চিন্তাকে বাস্তব প্রভাবে রূপান্তরে প্রতিশ্রুতিবদ্ধ একজন উদ্যমী ক্রিয়েটর ও ভবিষ্যৎ উদ্যোক্তা।",
      hero_btn_journey: "আমার যাত্রা জানুন",
      hero_btn_connect: "যোগাযোগ করুন",
      identity_entrepreneur: "উদ্যোক্তা",
      identity_app_founder: "অ্যাপ প্রতিষ্ঠাতা",
      identity_content_creator: "কনটেন্ট ক্রিয়েটর",
      identity_business_owner: "বিজনেস ওনার",
      portrait_badge_sub: "ডিজিটাল ফাউন্ডার ও ক্রিয়েটর",

      about_eyebrow: "ব্যক্তিগত জীবনবৃত্তান্ত",
      about_title: "এম. সজীব সম্পর্কে",
      about_lead: "কৌতূহল, শৃঙ্খলাবদ্ধ কর্মপ্রচেষ্টা এবং অর্থপূর্ণ সমস্যা সমাধানের দীর্ঘমেয়াদী অনুপ্রেরণা থেকেই আমার পথচলা।",
      about_body_1: "আধুনিক প্রযুক্তি, রুচিশীল ডিজাইন এবং ব্র্যান্ড আর্কিটেকচারের সংযোগস্থলে দাঁড়িয়ে আমি প্রতিনিয়ত শিখছি, নতুন আইডিয়া বাস্তবায়ন করছি এবং দীর্ঘস্থায়ী ডিজিটাল প্রোডাক্টের ভিত্তি নির্মাণ করছি। কোনো কৃত্রিম প্রশংসার বদলে আমার মনোযোগ খাঁটি আত্মউন্নয়ন ও বাস্তব মূল্য তৈরিতে।",
      about_body_2: "এই অফিসিয়াল ওয়েবসাইটটি আমার দীর্ঘমেয়াদী ডিজিটাল পরিচয় হিসেবে কাজ করবে—যা একজন শিক্ষার্থী থেকে উদ্যোক্তা, অ্যাপ প্রতিষ্ঠাতা, কনটেন্ট ক্রিয়েটর ও সফল ব্যবসায়ীতে রূপান্তরের প্রতিটি ধাপকে তুলে ধরবে।",
      pillar_ideas: "আইডিয়া",
      pillar_ideas_val: "ধারাবাহিক গবেষণা ও উদ্ভাবন",
      pillar_projects: "প্রকল্প",
      pillar_projects_val: "ডিজিটাল অ্যাপস আর্কিটেকচার",
      pillar_goals: "লক্ষ্য",
      pillar_goals_val: "টেকসই উদ্যোগের ভিত্তি",
      pillar_vision: "ভিশন",
      pillar_vision_val: "দীর্ঘমেয়াদী বাস্তব প্রভাব",

      journey_eyebrow: "উন্নতির রূপরেখা",
      journey_title: "আমার যাত্রা",
      journey_sub: "অবিরাম অনুসন্ধান, দক্ষতা অর্জন এবং একাগ্রচিত্তে কিছু গড়ে তোলার ধারাবাহিক পথচলা।",
      journey_01_step: "০১ — সূচনা",
      journey_01_title: "কৌতূহলের স্ফুলিঙ্গ",
      journey_01_text: "ডিজিটাল প্রযুক্তির অপার সম্ভাবনা প্রত্যক্ষ করা এবং সফটওয়্যার কীভাবে মানুষের জীবন সহজ করে তা উপলব্ধি করা।",
      journey_02_step: "০২ — জ্ঞানার্জন",
      journey_02_title: "সুদৃঢ় ভিত্তি নির্মাণ",
      journey_02_text: "ডিজাইন চিন্তা, সফটওয়্যার সিস্টেম, যোগাযোগ দক্ষতা ও সফল ব্যবসার নীতিসমূহ গভীরভাবে অনুধাবন করা।",
      journey_03_step: "০৩ — অনুসন্ধান",
      journey_03_title: "পরীক্ষা ও নিরীক্ষা",
      journey_03_text: "আধুনিক ওয়েব ফ্রেমওয়ার্ক, ইউজার এক্সপেরিয়েন্স, কনটেন্ট কৌশল এবং বৈশ্বিক ব্যবসায়িক মডেল নিয়ে গবেষণা।",
      journey_04_step: "০৪ — সৃজনশীলতা",
      journey_04_title: "স্বকীয় কণ্ঠস্বর তৈরি",
      journey_04_text: "অর্থপূর্ণ ডিজিটাল কন্টেন্ট তৈরি, সামাজিক যোগাযোগ বৃদ্ধি এবং একটি স্বচ্ছ ব্যক্তিগত পরিচয় ফুটিয়ে তোলা।",
      journey_05_step: "০৫ — বাস্তবায়ন",
      journey_05_title: "আইডিয়া থেকে পণ্যে রূপান্তর",
      journey_05_text: "প্রথম প্রজন্মের অ্যাপ্লিকেশনের স্থাপত্য নির্মাণ, কোডিং এবং ভবিষ্যৎ টেক ভেঞ্চারের ভিত্তি স্থাপন।",
      journey_06_step: "০৬ — ভবিষ্যৎ",
      journey_06_title: "বৃহত্তর প্রভাব সৃষ্টি",
      journey_06_text: "স্থায়ী প্রযুক্তি প্রতিষ্ঠান গড়ে তোলা, নিবেদিত দলের নেতৃত্ব প্রদান এবং অর্থবহ সামাজিক ও অর্থনৈতিক প্রভাব তৈরি।",

      what_eyebrow: "প্রধান কর্মক্ষেত্র",
      what_title: "আমার কর্মক্ষেত্র",
      what_sub: "আমার বর্তমান কাজ ও ভবিষ্যতের উদ্যোক্তা পরিচয়কে সংজ্ঞায়িত করা চারটি প্রধান স্তম্ভ।",
      card_1_title: "উদ্যোক্তা",
      card_1_desc: "সম্ভাবনা খুঁজে বের করা, জটিল সমস্যার সমাধান এবং অর্থপূর্ণ ব্যবসায়িক ধারণাকে বাস্তব রূপ দেওয়া।",
      card_1_footer: "সক্রিয় উদ্যোগ ও কৌশল",
      card_2_title: "অ্যাপ প্রতিষ্ঠাতা",
      card_2_desc: "উপযোগী ডিজিটাল পণ্য তৈরি এবং প্রযুক্তি-চালিত সমাধান নিয়ে কাজ করা।",
      card_2_footer: "প্রোডাক্ট আর্কিটেকচার",
      card_3_title: "কনটেন্ট ক্রিয়েটর",
      card_3_desc: "অর্থপূর্ণ কনটেন্ট তৈরি এবং একটি নির্ভরযোগ্য ডিজিটাল উপস্থিতি গড়ে তোলা।",
      card_3_footer: "ডিজিটাল মিডিয়া ও সমাজ",
      card_4_title: "বিজনেস ওনার",
      card_4_desc: "দীর্ঘমেয়াদী দূরদৃষ্টি নিয়ে টেকসই ব্র্যান্ড এবং প্রতিষ্ঠান গড়ে তোলার লক্ষ্যে কাজ করা।",
      card_4_footer: "ভবিষ্যত প্রতিষ্ঠান নির্মাণ",

      edu_eyebrow: "শিক্ষাগত যোগ্যতা",
      edu_title: "শিক্ষা",
      edu_sub: "বিশ্লেষণাত্মক চিন্তা, সাহিত্যবোধ ও আন্তর্জাতিক যোগাযোগ দক্ষতার শক্ত ভিত্তি।",
      edu_current_tag: "বর্তমান প্রাতিষ্ঠানিক শিক্ষা",
      edu_degree: "অনার্স (ইংরেজি)",
      edu_institution: "জাতীয় বিশ্ববিদ্যালয়",
      edu_status: "চলমান",
      edu_future_tag: "ভবিষ্যত বিশেষায়ন",
      edu_future_title: "এক্সিকিউটিভ শিক্ষা ও প্রযুক্তি প্রশিক্ষণ",
      edu_future_inst: "আন্তর্জাতিক প্রোগ্রাম ও সার্টিফিকেট",
      edu_future_desc: "ভবিষ্যত বিজনেস ডিগ্রি, সফটওয়্যার ইঞ্জিনিয়ারিং এবং ভেঞ্চার লিডারশিপের জন্য সংরক্ষিত কাঠামো।",

      vision_eyebrow: "আদর্শ ও দর্শন",
      vision_quote: "\"আমি বিশ্বাস করি, একটি সাধারণ ধারণা, একটি স্পষ্ট লক্ষ্য এবং নির্মাণের অদম্য সাহসের মাধ্যমেই অনন্য সব সৃষ্টির জন্ম হয়।\"",
      vision_p1: "শেখা",
      vision_p2: "নির্মাণ",
      vision_p3: "সৃষ্টি",
      vision_p4: "বিকাশ",
      vision_p5: "বাস্তব প্রভাব",

      projects_eyebrow: "প্রোডাক্ট ইঞ্জিনিয়ারিং",
      projects_title: "প্রকল্পসমূহ",
      projects_sub: "ভবিষ্যতের অ্যাপ্লিকেশন, প্ল্যাটফর্ম ও সফটওয়্যার প্রদর্শনের জন্য একটি মডুলার আর্কিটেকচার।",
      filter_all: "সকল প্রজেক্ট",
      filter_apps: "ওয়েব ও মোবাইল অ্যাপ",
      filter_tools: "ডিজিটাল টুলস",
      status_coming_soon: "স্থাপত্য চলমান — শীঘ্রই আসছে",
      proj_1_name: "ফ্ল্যাগশিপ ওয়েব প্ল্যাটফর্ম",
      proj_1_desc: "ইউজারদের দৈনন্দিন কাজকে সহজ করতে উন্নত ইন্টারঅ্যাকশন সমৃদ্ধ পরবর্তী প্রজন্মের ওয়েব অ্যাপ্লিকেশন।",
      proj_2_name: "প্রোডাক্টিভিটি সাস স্যুট",
      proj_2_desc: "উদ্যোক্তা, ক্রিয়েটর ও শিক্ষার্থীদের দ্রুত কাজের লক্ষ্য পূরণে সহায়ক সফটওয়্যার স্যুট।",
      proj_3_name: "কমিউনিটি ও মিডিয়া হাব",
      proj_3_desc: "ক্রিয়েটরদের মধ্যে কোলাবোরেশন এবং উচ্চমূল্যের শিক্ষণীয় রিসোর্স আদান-প্রদানের ডিজিটাল প্ল্যাটফর্ম।",
      btn_view_details: "বিস্তারিত শীঘ্রই আসছে",

      biz_eyebrow: "উদ্যোগ পোর্টফোলিও",
      biz_title: "ভবিষ্যতের উদ্যোগ",
      biz_sub: "ভবিষ্যতে নিজস্ব ব্র্যান্ড, টেক কোম্পানি এবং বাণিজ্যিক ভেঞ্চার পরিচালনার জন্য পরিকল্পিত ভিত্তি।",
      biz_tag: "ভবিষ্যতের উদ্যোগ — শীঘ্রই আসছে",
      biz_head: "আইডিয়া থেকে স্থায়ী প্রতিষ্ঠানে",
      biz_desc: "এই অংশটি মূলত আমার ভবিষ্যৎ বাণিজ্যিক সফটওয়্যার, নিবন্ধিত কোম্পানি এবং সহযোগী প্রতিষ্ঠানসমূহ লঞ্চ হওয়ার সাথে সাথে তুলে ধরার জন্য তৈরি করা হয়েছে।",
      biz_col_1_title: "ডিজিটাল প্রোডাক্টস",
      biz_col_1_desc: "স্কেলেবল সাস (SaaS), মোবাইল অ্যাপ এবং সফটওয়্যার।",
      biz_col_2_title: "ই-কমার্স ও ব্র্যান্ড",
      biz_col_2_desc: "গ্রাহক-বান্ধব লাইফস্টাইল ও টেকনোলজি ব্র্যান্ড।",
      biz_col_3_title: "স্ট্র্যাটেজিক কনসাল্টিং",
      biz_col_3_desc: "ডিজিটাল রূপান্তর, ইউআই/ইউএক্স ও প্রোডাক্ট অ্যাডভাইজরি।",

      media_eyebrow: "ডিজিটাল উপস্থিতি",
      media_title: "কনটেন্ট ও মিডিয়া",
      media_sub: "বাস্তব অভিজ্ঞতা, কাজের আপডেট এবং টেকনিক্যাল চিন্তাধারা জানতে অফিসিয়াল চ্যানেলগুলোতে যুক্ত থাকুন।",
      media_fb_name: "ফেসবুক",
      media_fb_handle: "@sajibnofficial",
      media_fb_desc: "অফিসিয়াল প্রোফাইল ও কমিউনিটি ভাবনা।",
      media_ig_name: "ইনস্টাগ্রাম",
      media_ig_handle: "@sajib__eth",
      media_ig_desc: "ভিজুয়াল স্টোরি, নান্দনিকতা ও রিয়েল-টাইম মুহূর্ত।",
      media_yt_name: "ইউটিউব",
      media_yt_handle: "চ্যানেল শীঘ্রই আসছে",
      media_yt_desc: "টেক টিউটোরিয়াল, উদ্যোক্তা ভাবনা ও দীর্ঘ ভিডিও কনটেন্ট।",
      btn_visit_channel: "প্রোফাইল দেখুন",
      btn_coming_soon: "শীঘ্রই আসছে",

      achieve_eyebrow: "স্বীকৃতি ও সনদ",
      achieve_title: "অর্জনসমূহ",
      achieve_sub: "ভবিষ্যতের প্রাতিষ্ঠানিক অর্জন, সনদ ও স্বীকৃতির স্বচ্ছ ও নির্ভরযোগ্য তালিকা।",
      achieve_box_title: "পথচলা কেবল শুরু হলো",
      achieve_box_desc: "মাইলফলক অর্জনের সাথে সাথে সনদ ও স্বীকৃতির বিস্তারিত এই অংশে যুক্ত করা হবে। কোনো কৃত্রিম বা অমূলক দাবি করা হয় না।",
      achieve_field_1: "স্বীকৃতির নাম",
      achieve_field_2: "প্রদানকারী প্রতিষ্ঠান",
      achieve_field_3: "তারিখ",
      achieve_field_4: "ভেরিফিকেশন আইডি",

      gallery_eyebrow: "ভিজুয়াল আর্কাইভ",
      gallery_title: "গ্যালারি",
      gallery_sub: "অফিসিয়াল পোর্ট্রেট, স্টুডিও মুহূর্ত এবং সৃষ্টিশীল অধ্যায়ের উচ্চ রেজোলিউশনের ছবির সংগ্রহ।",
      gallery_cap_1: "অফিসিয়াল স্টুডিও পোর্ট্রেট — গাঢ় ব্যাকগ্রাউন্ড ও ফোকাসড লাইটিং।",
      gallery_cap_2: "এক্সিকিউটিভ আইডেন্টিটি পোর্ট্রেট — সুদৃঢ় ও আত্মবিশ্বাসী উপস্থিতি।",
      gallery_cap_3: "ক্রিয়েটিভ সেশন ফ্রেম — গভীর মনোযোগ ও একাগ্রতা।",

      contact_eyebrow: "যোগাযোগ",
      contact_title: "যোগাযোগ করুন",
      contact_sub: "কোনো নতুন আইডিয়া, ব্যবসায়িক সুযোগ বা অর্থপূর্ণ আলোচনার জন্য নির্দ্বিধায় যোগাযোগ করুন।",
      channel_wa_title: "হোয়াটসঅ্যাপ",
      channel_wa_sub: "+880 1897-874421 (সবচেয়ে দ্রুত উত্তর)",
      channel_fb_title: "ফেসবুক মেসেঞ্জার",
      channel_fb_sub: "sajibnofficial",
      channel_ig_title: "ইনস্টাগ্রাম ডিএম",
      channel_ig_sub: "@sajib__eth",
      channel_email_title: "অফিসিয়াল ইমেইল",
      channel_email_sub: "ইমেইল — শীঘ্রই আসছে",

      form_name_label: "আপনার নাম",
      form_name_ph: "আপনার পুরো নাম লিখুন",
      form_topic_label: "আলোচনার বিষয়",
      form_topic_opt1: "সাধারণ বার্তা / কুশল বিনিময়",
      form_topic_opt2: "পার্টনারশিপ / ব্যবসায়িক সুযোগ",
      form_topic_opt3: "অ্যাপ বা টেকনোলজি আলোচনা",
      form_topic_opt4: "মিডিয়া / কনটেন্ট কোলাবোরেশন",
      form_msg_label: "আপনার বার্তা",
      form_msg_ph: "আপনার বিস্তারিত বার্তা এখানে লিখুন...",
      btn_send_wa: "হোয়াটসঅ্যাপে পাঠান",
      btn_copy_msg: "বার্তাটি ক্লিপবোর্ডে কপি করুন",
      form_notice_text: "স্ট্যাটিক সাইট দ্রষ্টব্য: হোয়াটসঅ্যাপ বাটনে ক্লিক করলে সরাসরি মেসেজ যাবে। এছাড়াও চাইলে এক ক্লিকে বার্তা কপি করে নিতে পারেন।",
      toast_copied: "বার্তাটি সফলভাবে কপি হয়েছে! আপনি এটি ইমেইল বা মেসেজে পেস্ট করতে পারেন।",

      footer_bio: "এম. সজীব-এর অফিসিয়াল পার্সোনাল ব্র্যান্ড ওয়েবসাইট। উচ্চমানের জ্ঞানার্জন, বাস্তব ধারণা নির্মাণ এবং টেকসই ইতিবাচক প্রভাব সৃষ্টিতে নিবেদিত।",
      footer_rights: "© ২০২৬ এম. সজীব। সর্বস্বত্ব সংরক্ষিত।",
      back_to_top: "উপরে"
    }
  };

  let currentLang = 'en';

  // ==========================================================================
  // 2. LANGUAGE ENGINE
  // ==========================================================================
  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('sajib_site_lang', lang);

    // Apply language attribute and font styling class
    document.documentElement.lang = lang;
    if (lang === 'bn') {
      document.body.classList.add('lang-bn');
    } else {
      document.body.classList.remove('lang-bn');
    }

    // Update Text Elements
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update Attribute Elements (Placeholders, Aria Labels)
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const config = el.getAttribute('data-i18n-attr');
      // Format: attr:key,attr2:key2
      config.split(',').forEach((pair) => {
        const [attr, key] = pair.split(':');
        if (translations[lang][key]) {
          el.setAttribute(attr.trim(), translations[lang][key.trim()]);
        }
      });
    });

    // Toggle active state in language buttons
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
  }

  // ==========================================================================
  // 3. NAVIGATION & SCROLL ENGINE
  // ==========================================================================
  function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    const sections = document.querySelectorAll('section[id]');
    const backToTopBtn = document.getElementById('backToTop');

    // Sticky Navbar shadow on scroll
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Back to top button visibility
      if (backToTopBtn) {
        if (scrollY > 500) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      }

      // Active Section ScrollSpy
      let currentSectionId = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute('id');
        }
      });

      if (currentSectionId) {
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    }, { passive: true });

    // Mobile Drawer Open/Close
    if (mobileToggle && mobileDrawer) {
      mobileToggle.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.contains('open');
        if (isOpen) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }
      });

      // Close when clicking any nav link
      mobileDrawer.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          closeMobileMenu();
        });
      });

      // Close on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
          closeMobileMenu();
        }
      });
    }

    function openMobileMenu() {
      mobileDrawer.classList.add('open');
      mobileToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
      mobileDrawer.classList.remove('open');
      mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    // Back to top smooth scroll
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // ==========================================================================
  // 4. GALLERY LIGHTBOX MODAL
  // ==========================================================================
  function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxCap = document.getElementById('lightboxCap');
    const lightboxClose = document.getElementById('lightboxClose');

    if (!lightboxModal) return;

    let currentIndex = 0;
    const galleryData = [];

    galleryItems.forEach((item, index) => {
      const img = item.querySelector('img');
      const title = item.querySelector('.gallery-title')?.textContent || '';
      const cap = item.querySelector('.gallery-caption')?.textContent || '';
      const src = img?.getAttribute('src') || '';

      galleryData.push({ src, title, cap });

      item.addEventListener('click', () => {
        openLightbox(index);
      });

      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });
    });

    function openLightbox(index) {
      currentIndex = index;
      const data = galleryData[currentIndex];
      if (!data) return;

      lightboxImg.src = data.src;
      lightboxImg.alt = data.title;
      lightboxTitle.textContent = data.title;
      lightboxCap.textContent = data.cap;

      lightboxModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      lightboxClose.focus();
    }

    function closeLightbox() {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (!lightboxModal.classList.contains('active')) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % galleryData.length;
        openLightbox(currentIndex);
      } else if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
        openLightbox(currentIndex);
      }
    });
  }

  // ==========================================================================
  // 5. PROJECT FILTER CONTROLS
  // ==========================================================================
  function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach((card) => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ==========================================================================
  // 6. CONTACT ACTIONS & WHATSAPP GENERATOR
  // ==========================================================================
  function initContact() {
    const contactForm = document.getElementById('contactForm');
    const btnSendWA = document.getElementById('btnSendWA');
    const btnCopyMsg = document.getElementById('btnCopyMsg');
    const toastMsg = document.getElementById('toastMsg');

    const nameInput = document.getElementById('contactName');
    const topicSelect = document.getElementById('contactTopic');
    const msgInput = document.getElementById('contactMessage');

    const whatsappNumber = "8801897874421";

    function composeMessage() {
      const name = nameInput?.value.trim() || "A Visitor";
      const topic = topicSelect?.options[topicSelect.selectedIndex]?.text || "General Inquiry";
      const message = msgInput?.value.trim() || "(No custom message entered)";

      return `Hello Sajib,\n\nMy Name: ${name}\nTopic: ${topic}\n\nMessage:\n${message}\n\n[Sent from sajib.me]`;
    }

    if (btnSendWA) {
      btnSendWA.addEventListener('click', (e) => {
        e.preventDefault();
        const text = composeMessage();
        const encoded = encodeURIComponent(text);
        const waUrl = `https://wa.me/${whatsappNumber}?text=${encoded}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      });
    }

    if (btnCopyMsg) {
      btnCopyMsg.addEventListener('click', (e) => {
        e.preventDefault();
        const text = composeMessage();
        navigator.clipboard.writeText(text).then(() => {
          showToast(translations[currentLang]?.toast_copied || "Message copied to clipboard!");
        }).catch(() => {
          showToast("Copied to clipboard!");
        });
      });
    }

    function showToast(msg) {
      if (!toastMsg) return;
      toastMsg.textContent = msg;
      toastMsg.classList.add('show');
      setTimeout(() => {
        toastMsg.classList.remove('show');
      }, 4000);
    }
  }

  // ==========================================================================
  // 7. INITIALIZATION ON DOM READY
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    // Check saved language or browser preference
    const savedLang = localStorage.getItem('sajib_site_lang');
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang);
    } else {
      setLanguage('en');
    }

    // Attach Language Switch buttons
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
      });
    });

    // Initialize Modules
    initNavigation();
    initGallery();
    initProjectFilters();
    initContact();
  });
})();
