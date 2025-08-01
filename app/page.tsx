"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Globe,
  Users,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  Plane,
  Menu,
  X,
  Star,
  Award,
  Clock,
  DollarSign,
  GraduationCap,
  Shield,
  MessageCircle,
  FileText,
  Calendar,
  Search,
  Filter,
  Building,
  Wrench,
  ChefHat,
  Truck,
  Heart,
  Laptop,
} from "lucide-react"

type Language = "en" | "km" | "ja"

const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      jobs: "Jobs",
      about: "About",
      process: "Process",
      testimonials: "Success Stories",
      contact: "Contact",
    },
    hero: {
      title: "Your Gateway to Career Opportunities in Japan",
      subtitle:
        "CJTT Trading Co., Ltd connects talented Cambodians with rewarding employment opportunities in Japan. Start your journey to a brighter future today.",
      cta: "Apply Now",
      learn: "Learn More",
      stats: {
        experience: "Years Experience",
        placements: "Successful Placements",
        partners: "Japanese Partners",
        satisfaction: "Satisfaction Rate",
      },
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive support for your journey to Japan",
      recruitment: {
        title: "Job Placement",
        desc: "We match qualified candidates with reputable Japanese employers across various industries.",
      },
      training: {
        title: "Skills Training",
        desc: "Pre-departure training programs to prepare you for success in the Japanese workplace.",
      },
      support: {
        title: "Ongoing Support",
        desc: "Continuous assistance throughout your employment journey in Japan.",
      },
      visa: {
        title: "Visa Assistance",
        desc: "Complete visa processing and documentation support for smooth immigration.",
      },
      language: {
        title: "Language Training",
        desc: "Japanese language courses from beginner to advanced levels.",
      },
      cultural: {
        title: "Cultural Orientation",
        desc: "Understanding Japanese culture and workplace etiquette.",
      },
    },
    jobs: {
      title: "Available Opportunities",
      subtitle: "Explore current job openings in Japan",
      viewAll: "View All Jobs",
      apply: "Apply Now",
      salary: "Salary",
      location: "Location",
      type: "Type",
      experience: "Experience",
      featured: "Featured Jobs",
      allJobs: {
        title: "All Job Opportunities",
        subtitle: "Browse through all available positions in Japan",
        search: "Search jobs...",
        filter: "Filter by Category",
        all: "All Categories",
        manufacturing: "Manufacturing",
        construction: "Construction",
        hospitality: "Hospitality",
        healthcare: "Healthcare",
        logistics: "Logistics",
        technology: "Technology",
        noResults: "No jobs found matching your criteria",
        showMore: "Show More Details",
        requirements: "Requirements",
        benefits: "Benefits",
        backToTop: "Back to Featured Jobs",
      },
    },
    about: {
      title: "About CJTT Trading Co., Ltd",
      content:
        "Based in Cambodia, CJTT Trading Co., Ltd is a trusted recruitment agency specializing in connecting Cambodian workers with employment opportunities in Japan. With years of experience and strong partnerships with Japanese companies, we ensure a smooth transition for our candidates.",
      experience: "Years of Experience",
      placements: "Successful Placements",
      partners: "Japanese Partners",
      team: "Our Team",
      certifications: "Certifications & Awards",
    },
    process: {
      title: "Application Process",
      subtitle: "Simple steps to start your journey",
      step1: {
        title: "Application",
        desc: "Submit your application with required documents",
      },
      step2: {
        title: "Interview",
        desc: "Participate in our screening and interview process",
      },
      step3: {
        title: "Training",
        desc: "Complete pre-departure training and preparation",
      },
      step4: {
        title: "Departure",
        desc: "Begin your new career journey in Japan",
      },
    },
    testimonials: {
      title: "Success Stories",
      subtitle: "Hear from our successful candidates",
      readMore: "Read More",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Get answers to common questions",
    },
    newsletter: {
      title: "Stay Updated",
      subtitle: "Subscribe to our newsletter for latest job opportunities",
      placeholder: "Enter your email",
      subscribe: "Subscribe",
    },
    contact: {
      title: "Contact Us",
      subtitle: "Ready to start your journey? Get in touch with us today.",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      message: "Message",
      send: "Send Message",
      info: "Contact Information",
      liveChat: "Live Chat",
      schedule: "Schedule Meeting",
    },
    footer: {
      company: "CJTT Trading Co., Ltd",
      description: "Connecting Cambodia and Japan through employment opportunities.",
      rights: "All rights reserved.",
      quickLinks: "Quick Links",
      services: "Services",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
  km: {
    nav: {
      home: "ទំព័រដើម",
      services: "សេវាកម្ម",
      jobs: "ការងារ",
      about: "អំពីយើង",
      process: "ដំណើរការ",
      testimonials: "រឿងរ៉ាវជោគជ័យ",
      contact: "ទំនាក់ទំនង",
    },
    hero: {
      title: "ច្រកទ្វារឆ្ពោះទៅកាន់ឱកាសការងារនៅប្រទេសជប៉ុន",
      subtitle:
        "ក្រុមហ៊ុន CJTT Trading Co., Ltd ភ្ជាប់កម្លាំងពលកម្មកម្ពុជាដែលមានទេពកោសល្យជាមួយឱកាសការងារដ៏ល្អនៅប្រទេសជប៉ុន។ ចាប់ផ្តើមដំណើរឆ្ពោះទៅកាន់អនាគតដ៏ភ្លឺស្វាងរបស់អ្នកនៅថ្ងៃនេះ។",
      cta: "ដាក់ពាក្យសុំ",
      learn: "ស្វែងយល់បន្ថែម",
      stats: {
        experience: "ឆ្នាំបទពិសោធន៍",
        placements: "ការដាក់ការងារជោគជ័យ",
        partners: "ដៃគូជប៉ុន",
        satisfaction: "អត្រាពេញចិត្ត",
      },
    },
    services: {
      title: "សេវាកម្មរបស់យើង",
      subtitle: "ការគាំទ្រពេញលេញសម្រាប់ដំណើររបស់អ្នកទៅប្រទេសជប៉ុន",
      recruitment: {
        title: "ការដាក់ការងារ",
        desc: "យើងផ្គូផ្គងបេក្ខជនដែលមានគុណវុឌ្ឍិជាមួយនិយោជកជប៉ុនដែលមានកេរ្តិ៍ឈ្មោះនៅក្នុងឧស្សាហកម្មផ្សេងៗ។",
      },
      training: {
        title: "ការបណ្តុះបណ្តាលជំនាញ",
        desc: "កម្មវិធីបណ្តុះបណ្តាលមុនពេលចាកចេញដើម្បីរៀបចំអ្នកឱ្យទទួលបានជោគជ័យនៅកន្លែងធ្វើការជប៉ុន។",
      },
      support: {
        title: "ការគាំទ្របន្ត",
        desc: "ជំនួយជាបន្តបន្ទាប់ពេញមួយដំណើរការងាររបស់អ្នកនៅប្រទេសជប៉ុន។",
      },
      visa: {
        title: "ជំនួយវីសា",
        desc: "ការដំណើរការវីសា និងការគាំទ្រឯកសារពេញលេញសម្រាប់ការធ្វើអន្តោប្រវេសន៍ដោយរលូន។",
      },
      language: {
        title: "ការបណ្តុះបណ្តាលភាសា",
        desc: "វគ្គសិក្សាភាសាជប៉ុនពីកម្រិតដំបូងដល់កម្រិតខ្ពស់។",
      },
      cultural: {
        title: "ការណែនាំវប្បធម៌",
        desc: "ការយល់ដឹងអំពីវប្បធម៌ជប៉ុន និងសីលធម៌នៅកន្លែងធ្វើការ។",
      },
    },
    jobs: {
      title: "ឱកាសដែលមាន",
      subtitle: "ស្វែងរកការងារបើកចំហនៅប្រទេសជប៉ុន",
      viewAll: "មើលការងារទាំងអស់",
      apply: "ដាក់ពាក្យសុំ",
      salary: "ប្រាក់ខែ",
      location: "ទីតាំង",
      type: "ប្រភេទ",
      experience: "បទពិសោធន៍",
      featured: "ការងារពិសេស",
      allJobs: {
        title: "ឱកាសការងារទាំងអស់",
        subtitle: "រកមើលតួនាទីដែលមានទាំងអស់នៅប្រទេសជប៉ុន",
        search: "ស្វែងរកការងារ...",
        filter: "ត្រងតាមប្រភេទ",
        all: "ប្រភេទទាំងអស់",
        manufacturing: "ផលិតកម្ម",
        construction: "សំណង់",
        hospitality: "ភ្ញៀវកិច្ច",
        healthcare: "សុខាភិបាល",
        logistics: "ភស្តុភារ",
        technology: "បច្ចេកវិទ្យា",
        noResults: "រកមិនឃើញការងារដែលត្រូវនឹងលក្ខខណ្ឌរបស់អ្នក",
        showMore: "បង្ហាញព័ត៌មានលម្អិត",
        requirements: "តម្រូវការ",
        benefits: "អត្ថប្រយោជន៍",
        backToTop: "ត្រលប់ទៅការងារពិសេស",
      },
    },
    about: {
      title: "អំពីក្រុមហ៊ុន CJTT Trading Co., Ltd",
      content:
        "មានមូលដ្ឋាននៅកម្ពុជា ក្រុមហ៊ុន CJTT Trading Co., Ltd គឺជាភ្នាក់ងារជ្រើសរើសកម្លាំងពលកម្មដែលអាចទុកចិត្តបាន ដែលមានជំនាញពិសេសក្នុងការភ្ជាប់កម្មករកម្ពុជាជាមួយឱកាសការងារនៅប្រទេសជប៉ុន។ ជាមួយនឹងបទពិសោធន៍ជាច្រើនឆ្នាំ និងភាពជាដៃគូដ៏រឹងមាំជាមួយក្រុមហ៊ុនជប៉ុន យើងធានាការផ្លាស់ប្តូរដ៏រលូនសម្រាប់បេក្ខជនរបស់យើង។",
      experience: "ឆ្នាំនៃបទពិសោធន៍",
      placements: "ការដាក់ការងារជោគជ័យ",
      partners: "ដៃគូជប៉ុន",
      team: "ក្រុមការងាររបស់យើង",
      certifications: "វិញ្ញាបនបត្រ និងពានរង្វាន់",
    },
    process: {
      title: "ដំណើរការដាក់ពាក្យសុំ",
      subtitle: "ជំហានសាមញ្ញដើម្បីចាប់ផ្តើមដំណើររបស់អ្នក",
      step1: {
        title: "ពាក្យសុំ",
        desc: "ដាក់ពាក្យសុំរបស់អ្នកជាមួយឯកសារចាំបាច់",
      },
      step2: {
        title: "បទសម្ភាសន៍",
        desc: "ចូលរួមក្នុងដំណើរការពិនិត្យ និងបទសម្ភាសន៍របស់យើង",
      },
      step3: {
        title: "ការបណ្តុះបណ្តាល",
        desc: "បញ្ចប់ការបណ្តុះបណ្តាល និងការរៀបចំមុនពេលចាកចេញ",
      },
      step4: {
        title: "ការចាកចេញ",
        desc: "ចាប់ផ្តើមដំណើរអាជីពថ្មីរបស់អ្នកនៅប្រទេសជប៉ុន",
      },
    },
    testimonials: {
      title: "រឿងរ៉ាវជោគជ័យ",
      subtitle: "ស្តាប់ពីបេក្ខជនជោគជ័យរបស់យើង",
      readMore: "អានបន្ថែម",
    },
    faq: {
      title: "សំណួរដែលសួរញឹកញាប់",
      subtitle: "ទទួលបានចម្លើយចំពោះសំណួរទូទៅ",
    },
    newsletter: {
      title: "ទទួលបានព័ត៌មានថ្មី",
      subtitle: "ចុះឈ្មោះទទួលព័ត៌មានសម្រាប់ឱកាសការងារថ្មីៗ",
      placeholder: "បញ្ចូលអ៊ីមែលរបស់អ្នក",
      subscribe: "ចុះឈ្មោះ",
    },
    contact: {
      title: "ទំនាក់ទំនងយើង",
      subtitle: "រួចរាល់ចាប់ផ្តើមដំណើររបស់អ្នកហើយឬ? ទាក់ទងមកយើងថ្ងៃនេះ។",
      name: "ឈ្មោះពេញ",
      email: "អាសយដ្ឋានអ៊ីមែល",
      phone: "លេខទូរសព្ទ",
      message: "សារ",
      send: "ផ្ញើសារ",
      info: "ព័ត៌មានទំនាក់ទំនង",
      liveChat: "ជជែកផ្ទាល់",
      schedule: "កំណត់ពេលជួប",
    },
    footer: {
      company: "ក្រុមហ៊ុន CJTT Trading Co., Ltd",
      description: "ភ្ជាប់កម្ពុជា និងជប៉ុនតាមរយៈឱកាសការងារ។",
      rights: "រក្សាសិទ្ធិគ្រប់យ៉ាង។",
      quickLinks: "តំណភ្ជាប់រហ័ស",
      services: "សេវាកម្ម",
      legal: "ផ្នែកច្បាប់",
      privacy: "គោលការណ៍ភាពឯកជន",
      terms: "លក្ខខណ្ឌសេវាកម្ម",
    },
  },
  ja: {
    nav: {
      home: "ホーム",
      services: "サービス",
      jobs: "求人情報",
      about: "会社概要",
      process: "プロセス",
      testimonials: "成功事例",
      contact: "お問い合わせ",
    },
    hero: {
      title: "日本でのキャリア機会への扉",
      subtitle:
        "CJTT Trading Co., Ltdは、才能あるカンボジア人と日本でのやりがいのある雇用機会を結びつけます。今日からより明るい未来への旅を始めましょう。",
      cta: "今すぐ応募",
      learn: "詳細を見る",
      stats: {
        experience: "年の経験",
        placements: "成功した就職斡旋",
        partners: "日本のパートナー",
        satisfaction: "満足度",
      },
    },
    services: {
      title: "私たちのサービス",
      subtitle: "日本への旅路を包括的にサポート",
      recruitment: {
        title: "就職斡旋",
        desc: "様々な業界の信頼できる日本の雇用主と資格のある候補者をマッチングします。",
      },
      training: {
        title: "スキル研修",
        desc: "日本の職場での成功に向けて準備する出発前研修プログラム。",
      },
      support: {
        title: "継続サポート",
        desc: "日本での雇用の旅路を通じて継続的な支援を提供します。",
      },
      visa: {
        title: "ビザサポート",
        desc: "スムーズな入国のための完全なビザ処理と書類サポート。",
      },
      language: {
        title: "語学研修",
        desc: "初級から上級まで日本語コース。",
      },
      cultural: {
        title: "文化オリエンテーション",
        desc: "日本の文化と職場のエチケットの理解。",
      },
    },
    jobs: {
      title: "求人情報",
      subtitle: "日本での現在の求人をご覧ください",
      viewAll: "すべての求人を見る",
      apply: "今すぐ応募",
      salary: "給与",
      location: "勤務地",
      type: "雇用形態",
      experience: "経験",
      featured: "注目の求人",
      allJobs: {
        title: "全求人情報",
        subtitle: "日本で利用可能なすべてのポジションを閲覧",
        search: "求人を検索...",
        filter: "カテゴリーで絞り込み",
        all: "全カテゴリー",
        manufacturing: "製造業",
        construction: "建設業",
        hospitality: "ホスピタリティ",
        healthcare: "医療・介護",
        logistics: "物流",
        technology: "技術",
        noResults: "条件に一致する求人が見つかりません",
        showMore: "詳細を表示",
        requirements: "応募要件",
        benefits: "福利厚生",
        backToTop: "注目の求人に戻る",
      },
    },
    about: {
      title: "CJTT Trading Co., Ltd について",
      content:
        "カンボジアに拠点を置くCJTT Trading Co., Ltdは、カンボジア人労働者と日本での雇用機会を結びつけることを専門とする信頼できる人材紹介会社です。長年の経験と日本企業との強固なパートナーシップにより、候補者のスムーズな移行を保証します。",
      experience: "年の経験",
      placements: "成功した就職斡旋",
      partners: "日本のパートナー",
      team: "私たちのチーム",
      certifications: "認定と受賞",
    },
    process: {
      title: "応募プロセス",
      subtitle: "旅を始めるための簡単なステップ",
      step1: {
        title: "応募",
        desc: "必要書類と共に応募書類を提出",
      },
      step2: {
        title: "面接",
        desc: "選考と面接プロセスに参加",
      },
      step3: {
        title: "研修",
        desc: "出発前研修と準備を完了",
      },
      step4: {
        title: "出発",
        desc: "日本での新しいキャリアの旅を開始",
      },
    },
    testimonials: {
      title: "成功事例",
      subtitle: "成功した候補者の声をお聞きください",
      readMore: "続きを読む",
    },
    faq: {
      title: "よくある質問",
      subtitle: "よくある質問への回答",
    },
    newsletter: {
      title: "最新情報を受け取る",
      subtitle: "最新の求人情報をニュースレターで受け取る",
      placeholder: "メールアドレスを入力",
      subscribe: "購読する",
    },
    contact: {
      title: "お問い合わせ",
      subtitle: "旅を始める準備はできましたか？今日お気軽にお問い合わせください。",
      name: "氏名",
      email: "メールアドレス",
      phone: "電話番号",
      message: "メッセージ",
      send: "メッセージを送信",
      info: "連絡先情報",
      liveChat: "ライブチャット",
      schedule: "面談予約",
    },
    footer: {
      company: "CJTT Trading Co., Ltd",
      description: "雇用機会を通じてカンボジアと日本を結ぶ。",
      rights: "全著作権所有。",
      quickLinks: "クイックリンク",
      services: "サービス",
      legal: "法的事項",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
    },
  },
}

// Mock data for jobs - Featured jobs (original)
const jobListings = [
  {
    id: 1,
    title: "Factory Worker - Electronics",
    company: "Sony Manufacturing",
    location: "Tokyo, Japan",
    salary: "¥250,000 - ¥300,000",
    type: "Full-time",
    experience: "Entry Level",
    featured: true,
    category: "manufacturing",
    description: "Join our electronics manufacturing team in Tokyo. No experience required, full training provided.",
  },
  {
    id: 2,
    title: "Construction Worker",
    company: "Takenaka Corporation",
    location: "Osaka, Japan",
    salary: "¥280,000 - ¥350,000",
    type: "Full-time",
    experience: "1-2 years",
    featured: true,
    category: "construction",
    description: "Experienced construction workers needed for major infrastructure projects.",
  },
  {
    id: 3,
    title: "Hotel Staff",
    company: "Hilton Tokyo",
    location: "Tokyo, Japan",
    salary: "¥220,000 - ¥280,000",
    type: "Full-time",
    experience: "Entry Level",
    featured: false,
    category: "hospitality",
    description: "Customer service positions available at luxury hotel in central Tokyo.",
  },
]

// Extended job listings for "View All Jobs" section
const allJobListings = [
  ...jobListings,
  {
    id: 4,
    title: "Automotive Assembly Worker",
    company: "Toyota Motor Corporation",
    location: "Nagoya, Japan",
    salary: "¥260,000 - ¥320,000",
    type: "Full-time",
    experience: "Entry Level",
    featured: false,
    category: "manufacturing",
    description: "Join the world's leading automotive manufacturer. Comprehensive training provided.",
    requirements: ["Age 18-35", "Physical fitness", "Willingness to learn"],
    benefits: ["Health insurance", "Overtime pay", "Annual bonus", "Dormitory available"],
  },
  {
    id: 5,
    title: "Restaurant Cook",
    company: "Sushi Zanmai Chain",
    location: "Tokyo, Japan",
    salary: "¥240,000 - ¥300,000",
    type: "Full-time",
    experience: "1-2 years",
    featured: false,
    category: "hospitality",
    description: "Experienced cooks needed for popular sushi restaurant chain.",
    requirements: ["Cooking experience", "Food safety knowledge", "Team player"],
    benefits: ["Meal allowance", "Skill development", "Career advancement"],
  },
  {
    id: 6,
    title: "Warehouse Operator",
    company: "Amazon Japan",
    location: "Chiba, Japan",
    salary: "¥230,000 - ¥280,000",
    type: "Full-time",
    experience: "Entry Level",
    featured: false,
    category: "logistics",
    description: "Package handling and inventory management in modern warehouse facility.",
    requirements: ["Basic Japanese", "Physical stamina", "Attention to detail"],
    benefits: ["Transportation allowance", "Flexible shifts", "Performance bonus"],
  },
  {
    id: 7,
    title: "Nursing Assistant",
    company: "Secom Medical System",
    location: "Yokohama, Japan",
    salary: "¥270,000 - ¥330,000",
    type: "Full-time",
    experience: "Entry Level",
    featured: false,
    category: "healthcare",
    description: "Support elderly care in modern healthcare facility. Training provided.",
    requirements: ["Compassionate nature", "Basic Japanese", "Healthcare interest"],
    benefits: ["Professional training", "Career growth", "Stable employment"],
  },
  {
    id: 8,
    title: "Bridge Construction Specialist",
    company: "Kajima Corporation",
    location: "Kobe, Japan",
    salary: "¥320,000 - ¥400,000",
    type: "Full-time",
    experience: "2-3 years",
    featured: false,
    category: "construction",
    description: "Specialized construction work on major bridge projects across Japan.",
    requirements: ["Construction experience", "Safety certification", "Team leadership"],
    benefits: ["High salary", "Project completion bonus", "Skill certification"],
  },
  {
    id: 9,
    title: "IT Support Technician",
    company: "NEC Corporation",
    location: "Tokyo, Japan",
    salary: "¥290,000 - ¥350,000",
    type: "Full-time",
    experience: "1-2 years",
    featured: false,
    category: "technology",
    description: "Technical support for computer systems and networks.",
    requirements: ["IT knowledge", "Problem-solving skills", "Japanese N3 level"],
    benefits: ["Technical training", "Career advancement", "Modern workplace"],
  },
  {
    id: 10,
    title: "Food Processing Worker",
    company: "Ajinomoto Co.",
    location: "Kawasaki, Japan",
    salary: "¥245,000 - ¥295,000",
    type: "Full-time",
    experience: "Entry Level",
    featured: false,
    category: "manufacturing",
    description: "Food production and quality control in clean manufacturing environment.",
    requirements: ["Food safety awareness", "Attention to detail", "Teamwork"],
    benefits: ["Clean work environment", "Regular hours", "Product discounts"],
  },
  {
    id: 11,
    title: "Hotel Housekeeping",
    company: "Imperial Hotel",
    location: "Tokyo, Japan",
    salary: "¥220,000 - ¥270,000",
    type: "Full-time",
    experience: "Entry Level",
    featured: false,
    category: "hospitality",
    description: "Maintain high standards of cleanliness in luxury hotel rooms.",
    requirements: ["Attention to detail", "Physical fitness", "Service mindset"],
    benefits: ["Luxury work environment", "Tips", "Employee discounts"],
  },
  {
    id: 12,
    title: "Delivery Driver",
    company: "Yamato Transport",
    location: "Osaka, Japan",
    salary: "¥260,000 - ¥320,000",
    type: "Full-time",
    experience: "Entry Level",
    featured: false,
    category: "logistics",
    description: "Package delivery services throughout Osaka metropolitan area.",
    requirements: ["Valid driver's license", "Navigation skills", "Customer service"],
    benefits: ["Company vehicle", "Fuel allowance", "Route flexibility"],
  },
]

// Mock testimonials
const testimonials = [
  {
    id: 1,
    name: "Sophea Chan",
    job: "Factory Supervisor at Toyota",
    image: "/placeholder.svg?height=80&width=80&text=SC",
    quote:
      "CJTT helped me achieve my dream of working in Japan. The training was excellent and the support continues even after arrival.",
    rating: 5,
    location: "Nagoya, Japan",
  },
  {
    id: 2,
    name: "Dara Kim",
    job: "Hotel Manager at Marriott",
    image: "/placeholder.svg?height=80&width=80&text=DK",
    quote: "Professional service from start to finish. They prepared me well for Japanese work culture and language.",
    rating: 5,
    location: "Kyoto, Japan",
  },
  {
    id: 3,
    name: "Pisach Leng",
    job: "Construction Engineer",
    image: "/placeholder.svg?height=80&width=80&text=PL",
    quote: "Thanks to CJTT, I now have a stable career in Japan with opportunities for growth and development.",
    rating: 5,
    location: "Tokyo, Japan",
  },
]

// FAQ data
const faqData = [
  {
    question: "What are the requirements to work in Japan?",
    answer:
      "Basic requirements include being 18-35 years old, having a clean criminal record, basic education, and willingness to learn Japanese language and culture.",
  },
  {
    question: "How long does the application process take?",
    answer:
      "The complete process typically takes 3-6 months from application to departure, including training and visa processing.",
  },
  {
    question: "Do I need to speak Japanese?",
    answer:
      "Basic Japanese is helpful but not always required. We provide language training as part of our preparation program.",
  },
  {
    question: "What support do you provide in Japan?",
    answer:
      "We provide ongoing support including accommodation assistance, workplace guidance, and 24/7 emergency support.",
  },
]

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("ja")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [showAllJobs, setShowAllJobs] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [expandedJob, setExpandedJob] = useState<number | null>(null)
  const [animatedStats, setAnimatedStats] = useState({
    experience: 0,
    placements: 0,
    partners: 0,
    satisfaction: 0,
  })

  const t = translations[language]

  // Animated counter effect
  useEffect(() => {
    const targets = { experience: 5, placements: 500, partners: 50, satisfaction: 98 }
    const duration = 2000
    const steps = 60
    const stepTime = duration / steps

    const intervals: NodeJS.Timeout[] = []

    Object.keys(targets).forEach((key) => {
      const target = targets[key as keyof typeof targets]
      const increment = target / steps
      let current = 0

      const intervalId = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(intervalId)
        }
        setAnimatedStats((prev) => ({ ...prev, [key]: Math.floor(current) }))
      }, stepTime)

      intervals.push(intervalId)
    })

    return () => intervals.forEach(clearInterval)
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message! We will contact you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for subscribing to our newsletter!")
    setNewsletterEmail("")
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const filteredJobs =
    activeTab === "all"
      ? jobListings
      : jobListings.filter((job) => (activeTab === "featured" ? job.featured : job.type.toLowerCase() === activeTab))

  // Filter all jobs based on search and category
  const filteredAllJobs = allJobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || job.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "manufacturing":
        return Building
      case "construction":
        return Wrench
      case "hospitality":
        return ChefHat
      case "healthcare":
        return Heart
      case "logistics":
        return Truck
      case "technology":
        return Laptop
      default:
        return Briefcase
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="CJTT Trading Co., Ltd" width={50} height={50} className="rounded-full" />
              <div>
                <h1 className="text-lg md:text-xl font-bold text-green-800">CJTT Trading Co., Ltd</h1>
                <p className="text-xs md:text-sm text-blue-600">Cambodia - Japan Employment Bridge</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <button
                onClick={() => {
                  setShowAllJobs(false)
                  scrollToSection("home")
                }}
                className="text-green-700 hover:text-green-900 font-medium transition-colors"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => {
                  setShowAllJobs(false)
                  scrollToSection("services")
                }}
                className="text-green-700 hover:text-green-900 font-medium transition-colors"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => {
                  setShowAllJobs(false)
                  scrollToSection("jobs")
                }}
                className="text-green-700 hover:text-green-900 font-medium transition-colors"
              >
                {t.nav.jobs}
              </button>
              <button
                onClick={() => {
                  setShowAllJobs(false)
                  scrollToSection("about")
                }}
                className="text-green-700 hover:text-green-900 font-medium transition-colors"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => {
                  setShowAllJobs(false)
                  scrollToSection("process")
                }}
                className="text-green-700 hover:text-green-900 font-medium transition-colors"
              >
                {t.nav.process}
              </button>
              <button
                onClick={() => {
                  setShowAllJobs(false)
                  scrollToSection("testimonials")
                }}
                className="text-green-700 hover:text-green-900 font-medium transition-colors"
              >
                {t.nav.testimonials}
              </button>
              <button
                onClick={() => {
                  setShowAllJobs(false)
                  scrollToSection("contact")
                }}
                className="text-green-700 hover:text-green-900 font-medium transition-colors"
              >
                {t.nav.contact}
              </button>
            </nav>

            {/* Desktop Language Selector */}
            <div className="hidden md:flex items-center space-x-2 bg-white rounded-lg border border-gray-200 p-1">
              <button
                onClick={() => setLanguage("ja")}
                className={`flex items-center space-x-2 px-2 lg:px-3 py-2 rounded-md transition-all duration-200 ${
                  language === "ja" ? "bg-blue-100 text-blue-800 scale-105" : "hover:bg-gray-100"
                }`}
              >
                <Image src="/japan-flag.png" alt="Japanese" width={24} height={16} className="rounded-sm" />
                <span className="text-xs lg:text-sm font-medium">日本語</span>
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`flex items-center space-x-2 px-2 lg:px-3 py-2 rounded-md transition-all duration-200 ${
                  language === "en" ? "bg-blue-100 text-blue-800 scale-105" : "hover:bg-gray-100"
                }`}
              >
                <Image src="/uk-flag.png" alt="English" width={24} height={16} className="rounded-sm" />
                <span className="text-xs lg:text-sm font-medium">English</span>
              </button>
              <button
                onClick={() => setLanguage("km")}
                className={`flex items-center space-x-2 px-2 lg:px-3 py-2 rounded-md transition-all duration-200 ${
                  language === "km" ? "bg-blue-100 text-blue-800 scale-105" : "hover:bg-gray-100"
                }`}
              >
                <Image src="/cambodia-flag.png" alt="Khmer" width={24} height={16} className="rounded-sm" />
                <span className="text-xs lg:text-sm font-medium">ខ្មែរ</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-green-700 hover:bg-green-50 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-green-100 animate-in slide-in-from-top duration-200">
              <nav className="flex flex-col space-y-3 mt-4">
                {[
                  { key: "home", section: "home" },
                  { key: "services", section: "services" },
                  { key: "jobs", section: "jobs" },
                  { key: "about", section: "about" },
                  { key: "process", section: "process" },
                  { key: "testimonials", section: "testimonials" },
                  { key: "contact", section: "contact" },
                ].map(({ key, section }) => (
                  <button
                    key={key}
                    onClick={() => {
                      setShowAllJobs(false)
                      scrollToSection(section)
                      setIsMobileMenuOpen(false)
                    }}
                    className="text-left text-green-700 hover:text-green-900 font-medium py-2 transition-colors"
                  >
                    {t.nav[key as keyof typeof t.nav]}
                  </button>
                ))}
              </nav>

              {/* Mobile Language Selector */}
              <div className="mt-4 pt-4 border-t border-green-100">
                <p className="text-sm font-medium text-gray-700 mb-3">Language / 言語 / ភាសា</p>
                <div className="flex flex-col space-y-2">
                  {[
                    { code: "ja", flag: "/japan-flag.png", name: "日本語" },
                    { code: "en", flag: "/uk-flag.png", name: "English" },
                    { code: "km", flag: "/cambodia-flag.png", name: "ខ្មែរ" },
                  ].map(({ code, flag, name }) => (
                    <button
                      key={code}
                      onClick={() => {
                        setLanguage(code as Language)
                        setIsMobileMenuOpen(false)
                      }}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-all duration-200 ${
                        language === code ? "bg-blue-100 text-blue-800 scale-105" : "hover:bg-gray-100"
                      }`}
                    >
                      <Image
                        src={flag || "/placeholder.svg"}
                        alt={name}
                        width={24}
                        height={16}
                        className="rounded-sm"
                      />
                      <span className="text-sm font-medium">{name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Conditional Rendering: Show All Jobs Page or Main Page */}
      {showAllJobs ? (
        /* All Jobs Page */
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-8">
              <Button
                variant="outline"
                onClick={() => setShowAllJobs(false)}
                className="mb-4 border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
              >
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                {t.jobs.allJobs.backToTop}
              </Button>
              <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">{t.jobs.allJobs.title}</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.jobs.allJobs.subtitle}</p>
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder={t.jobs.allJobs.search}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="all">{t.jobs.allJobs.all}</option>
                    <option value="manufacturing">{t.jobs.allJobs.manufacturing}</option>
                    <option value="construction">{t.jobs.allJobs.construction}</option>
                    <option value="hospitality">{t.jobs.allJobs.hospitality}</option>
                    <option value="healthcare">{t.jobs.allJobs.healthcare}</option>
                    <option value="logistics">{t.jobs.allJobs.logistics}</option>
                    <option value="technology">{t.jobs.allJobs.technology}</option>
                  </select>
                </div>
              </div>

              {/* Results Count */}
              <p className="text-gray-600 mb-6">
                {filteredAllJobs.length} jobs found
                {searchTerm && ` for "${searchTerm}"`}
                {selectedCategory !== "all" && ` in ${selectedCategory}`}
              </p>
            </div>

            {/* Job Listings */}
            <div className="max-w-6xl mx-auto">
              {filteredAllJobs.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">{t.jobs.allJobs.noResults}</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredAllJobs.map((job, index) => {
                    const IconComponent = getCategoryIcon(job.category)
                    return (
                      <Card
                        key={job.id}
                        className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-in fade-in slide-in-from-bottom"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                <IconComponent className="w-6 h-6 text-green-600" />
                              </div>
                              <div>
                                <CardTitle className="text-green-800 mb-1">{job.title}</CardTitle>
                                <p className="text-blue-600 font-medium">{job.company}</p>
                              </div>
                            </div>
                            {job.featured && (
                              <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                                <Star className="w-3 h-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">{job.description}</p>
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-sm text-gray-600">
                              <MapPin className="w-4 h-4 mr-2" />
                              {job.location}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <DollarSign className="w-4 h-4 mr-2" />
                              {job.salary}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Clock className="w-4 h-4 mr-2" />
                              {job.type} • {job.experience}
                            </div>
                          </div>

                          {/* Expandable Details */}
                          {expandedJob === job.id && (
                            <div className="border-t pt-4 mt-4 animate-in slide-in-from-top duration-200">
                              {job.requirements && (
                                <div className="mb-4">
                                  <h4 className="font-semibold text-green-800 mb-2">{t.jobs.allJobs.requirements}:</h4>
                                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                    {job.requirements.map((req, idx) => (
                                      <li key={idx}>{req}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              {job.benefits && (
                                <div className="mb-4">
                                  <h4 className="font-semibold text-green-800 mb-2">{t.jobs.allJobs.benefits}:</h4>
                                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                    {job.benefits.map((benefit, idx) => (
                                      <li key={idx}>{benefit}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          )}

                          <div className="flex gap-2">
                            <Button className="flex-1 bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200">
                              {t.jobs.apply}
                            </Button>
                            {(job.requirements || job.benefits) && (
                              <Button
                                variant="outline"
                                onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                              >
                                {expandedJob === job.id ? "Less" : t.jobs.allJobs.showMore}
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Main Page Content */
        <>
          {/* Hero Section */}
          <section
            id="home"
            className="bg-gradient-to-br from-green-50 via-blue-50 to-green-50 py-12 md:py-20 relative overflow-hidden"
          >
            {/* Background Animation */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute top-32 right-20 w-16 h-16 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-300 rounded-full animate-ping"></div>
            </div>

            <div className="container mx-auto px-4 relative">
              <div className="max-w-4xl mx-auto text-center">
                <div className="mb-6 md:mb-8">
                  <Image
                    src="/logo.png"
                    alt="CJTT Trading Co., Ltd"
                    width={100}
                    height={100}
                    className="mx-auto rounded-full shadow-lg md:w-[120px] md:h-[120px] hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-green-800 mb-4 md:mb-6 leading-tight animate-in fade-in slide-in-from-bottom duration-700">
                  {t.hero.title}
                </h1>
                <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-200">
                  {t.hero.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 animate-in fade-in slide-in-from-bottom duration-700 delay-400">
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-3 text-sm md:text-base transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    onClick={() => scrollToSection("contact")}
                  >
                    {t.hero.cta} <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 md:px-8 py-3 bg-transparent text-sm md:text-base transform hover:scale-105 transition-all duration-200"
                    onClick={() => scrollToSection("services")}
                  >
                    {t.hero.learn}
                  </Button>
                </div>

                {/* Animated Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 animate-in fade-in slide-in-from-bottom duration-700 delay-600">
                  <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">
                      {animatedStats.experience}+
                    </div>
                    <div className="text-xs md:text-sm text-gray-600">{t.hero.stats.experience}</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">{animatedStats.placements}+</div>
                    <div className="text-xs md:text-sm text-gray-600">{t.hero.stats.placements}</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">{animatedStats.partners}+</div>
                    <div className="text-xs md:text-sm text-gray-600">{t.hero.stats.partners}</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                      {animatedStats.satisfaction}%
                    </div>
                    <div className="text-xs md:text-sm text-gray-600">{t.hero.stats.satisfaction}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">{t.services.title}</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.services.subtitle}</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {[
                  { key: "recruitment", icon: Briefcase, color: "green" },
                  { key: "training", icon: Users, color: "blue" },
                  { key: "support", icon: CheckCircle, color: "green" },
                  { key: "visa", icon: FileText, color: "blue" },
                  { key: "language", icon: GraduationCap, color: "green" },
                  { key: "cultural", icon: Globe, color: "blue" },
                ].map(({ key, icon: Icon, color }, index) => (
                  <Card
                    key={key}
                    className={`border-${color}-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <div
                        className={`w-12 h-12 bg-${color}-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`h-6 w-6 text-${color}-600`} />
                      </div>
                      <CardTitle className="text-green-800">
                        {t.services[key as keyof typeof t.services].title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        {t.services[key as keyof typeof t.services].desc}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Jobs Section */}
          <section id="jobs" className="py-12 md:py-20 bg-gradient-to-r from-green-50 to-blue-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">{t.jobs.title}</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.jobs.subtitle}</p>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 lg:w-1/2 mx-auto mb-8">
                  <TabsTrigger value="all">All Jobs</TabsTrigger>
                  <TabsTrigger value="featured">{t.jobs.featured}</TabsTrigger>
                  <TabsTrigger value="full-time">Full-time</TabsTrigger>
                </TabsList>

                <TabsContent value={activeTab}>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredJobs.map((job, index) => (
                      <Card
                        key={job.id}
                        className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-in fade-in slide-in-from-bottom"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-green-800 mb-2">{job.title}</CardTitle>
                              <p className="text-blue-600 font-medium">{job.company}</p>
                            </div>
                            {job.featured && (
                              <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                                <Star className="w-3 h-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">{job.description}</p>
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-sm text-gray-600">
                              <MapPin className="w-4 h-4 mr-2" />
                              {job.location}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <DollarSign className="w-4 h-4 mr-2" />
                              {job.salary}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Clock className="w-4 h-4 mr-2" />
                              {job.type}
                            </div>
                          </div>
                          <Button className="w-full bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200">
                            {t.jobs.apply}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              <div className="text-center mt-8">
                <Button
                  variant="outline"
                  onClick={() => setShowAllJobs(true)}
                  className="border-green-600 text-green-600 hover:bg-green-50 transform hover:scale-105 transition-all duration-200 bg-transparent"
                >
                  {t.jobs.viewAll}
                </Button>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">{t.about.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{t.about.content}</p>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 md:gap-8 text-center mb-12">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                    <div className="text-gray-600">{t.about.experience}</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-600">{t.about.placements}</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                    <div className="text-gray-600">{t.about.partners}</div>
                  </div>
                </div>

                {/* Team Section */}
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-green-800 mb-8">{t.about.team}</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      {
                        name: "Mr. Takeshi Yamamoto",
                        role: "CEO & Founder",
                        image: "/placeholder.svg?height=120&width=120&text=TY",
                      },
                      {
                        name: "Ms. Sophea Chea",
                        role: "Operations Manager",
                        image: "/placeholder.svg?height=120&width=120&text=SC",
                      },
                      {
                        name: "Mr. Hiroshi Tanaka",
                        role: "Japan Relations",
                        image: "/placeholder.svg?height=120&width=120&text=HT",
                      },
                      {
                        name: "Ms. Dara Sok",
                        role: "Training Coordinator",
                        image: "/placeholder.svg?height=120&width=120&text=DS",
                      },
                    ].map((member, index) => (
                      <div
                        key={member.name}
                        className="text-center animate-in fade-in slide-in-from-bottom"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={120}
                          height={120}
                          className="mx-auto rounded-full mb-4 hover:scale-110 transition-transform duration-300"
                        />
                        <h4 className="font-semibold text-green-800">{member.name}</h4>
                        <p className="text-gray-600 text-sm">{member.role}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-green-800 mb-8">{t.about.certifications}</h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {[
                      { name: "ISO 9001:2015", icon: Award },
                      { name: "Licensed Agency", icon: Shield },
                      { name: "JITCO Certified", icon: CheckCircle },
                      { name: "Excellence Award 2023", icon: Star },
                    ].map(({ name, icon: Icon }, index) => (
                      <Badge
                        key={name}
                        variant="outline"
                        className="p-3 text-sm hover:bg-green-50 transition-colors animate-in fade-in slide-in-from-bottom"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        {name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section id="process" className="py-12 md:py-20 bg-gradient-to-r from-green-50 to-blue-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">{t.process.title}</h2>
                <p className="text-xl text-gray-600">{t.process.subtitle}</p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {[
                    { key: "step1", number: "1", color: "green" },
                    { key: "step2", number: "2", color: "blue" },
                    { key: "step3", number: "3", color: "green" },
                    { key: "step4", icon: Plane, color: "blue" },
                  ].map(({ key, number, icon: Icon, color }, index) => (
                    <div
                      key={key}
                      className="text-center animate-in fade-in slide-in-from-bottom"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div
                        className={`w-16 h-16 bg-${color}-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {Icon ? (
                          <Icon className={`h-8 w-8 text-${color}-600`} />
                        ) : (
                          <span className={`text-2xl font-bold text-${color}-600`}>{number}</span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-green-800 mb-2">
                        {t.process[key as keyof typeof t.process].title}
                      </h3>
                      <p className="text-gray-600 text-sm">{t.process[key as keyof typeof t.process].desc}</p>

                      {/* Progress line */}
                      {index < 3 && (
                        <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform translate-x-4">
                          <div className={`h-full bg-${color}-400 animate-pulse`} style={{ width: "50%" }}></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">{t.testimonials.title}</h2>
                <p className="text-xl text-gray-600">{t.testimonials.subtitle}</p>
              </div>

              <div className="max-w-4xl mx-auto">
                <Card className="p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="text-center">
                    <div className="mb-6">
                      <Image
                        src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].name}
                        width={80}
                        height={80}
                        className="mx-auto rounded-full mb-4"
                      />
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-lg text-gray-600 mb-6 italic">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                    <div>
                      <h4 className="font-semibold text-green-800">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-blue-600">{testimonials[currentTestimonial].job}</p>
                      <p className="text-gray-500 text-sm">{testimonials[currentTestimonial].location}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Testimonial Navigation */}
                <div className="flex justify-center mt-6 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentTestimonial ? "bg-green-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-12 md:py-20 bg-gradient-to-r from-green-50 to-blue-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">{t.faq.title}</h2>
                <p className="text-xl text-gray-600">{t.faq.subtitle}</p>
              </div>

              <div className="max-w-3xl mx-auto">
                {faqData.map((faq, index) => (
                  <Card
                    key={index}
                    className="mb-4 hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="flex items-center justify-between w-full text-left"
                      >
                        <h3 className="font-semibold text-green-800">{faq.question}</h3>
                        <div
                          className={`transform transition-transform duration-200 ${expandedFaq === index ? "rotate-180" : ""}`}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </button>
                    </CardHeader>
                    {expandedFaq === index && (
                      <CardContent className="animate-in slide-in-from-top duration-200">
                        <p className="text-gray-600">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="py-12 md:py-20 bg-green-800 text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.newsletter.title}</h2>
                <p className="text-xl text-green-100 mb-8">{t.newsletter.subtitle}</p>

                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder={t.newsletter.placeholder}
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="flex-1 bg-white text-gray-900"
                  />
                  <Button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-all duration-200"
                  >
                    {t.newsletter.subscribe}
                  </Button>
                </form>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-12 md:py-20 bg-gradient-to-br from-green-50 to-blue-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">{t.contact.title}</h2>
                <p className="text-xl text-gray-600">{t.contact.subtitle}</p>
              </div>

              <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12">
                <Card className="p-6 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-green-800 flex items-center">
                      <Mail className="w-5 h-5 mr-2" />
                      Send us a message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">{t.contact.name}</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="transition-all duration-200 focus:scale-105"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">{t.contact.email}</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="transition-all duration-200 focus:scale-105"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">{t.contact.phone}</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="transition-all duration-200 focus:scale-105"
                        />
                      </div>
                      <div>
                        <Label htmlFor="message">{t.contact.message}</Label>
                        <Textarea
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          className="transition-all duration-200 focus:scale-105"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200"
                      >
                        {t.contact.send}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card className="p-6 hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-green-800 flex items-center">
                        <Phone className="w-5 h-5 mr-2" />
                        {t.contact.info}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center space-x-3 hover:bg-green-50 p-2 rounded-lg transition-colors">
                        <MapPin className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium">Address</p>
                          <p className="text-gray-600">Phnom Penh, Cambodia</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 hover:bg-green-50 p-2 rounded-lg transition-colors">
                        <Phone className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-gray-600">+855 23 650 4398</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 hover:bg-green-50 p-2 rounded-lg transition-colors">
                        <Mail className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-gray-600">cjtttrading@yahoo.co.jp</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 hover:bg-green-50 p-2 rounded-lg transition-colors">
                        <Globe className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium">Business Hours</p>
                          <p className="text-gray-600">Mon - Fri: 8:00 AM - 5:00 PM</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Action Buttons */}
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200 h-16"
                      onClick={() => window.open("https://wa.me/85523650439", "_blank")}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      {t.contact.liveChat}
                    </Button>
                    <Button
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 h-16 bg-transparent"
                      onClick={() => scrollToSection("contact")}
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      {t.contact.schedule}
                    </Button>
                  </div>

                  {/* Social Media Links */}
                  <Card className="p-6">
                    <CardHeader>
                      <CardTitle className="text-green-800">Follow Us</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex space-x-4">
                        {[
                          { name: "Facebook", color: "blue", icon: "📘" },
                          { name: "LinkedIn", color: "blue", icon: "💼" },
                          { name: "YouTube", color: "red", icon: "📺" },
                          { name: "Instagram", color: "pink", icon: "📷" },
                        ].map((social) => (
                          <button
                            key={social.name}
                            className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transform hover:scale-110 transition-all duration-200"
                          >
                            <span className="text-xl">{social.icon}</span>
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-green-800 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Image
                      src="/logo.png"
                      alt="CJTT Trading Co., Ltd"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <h3 className="text-xl font-bold">{t.footer.company}</h3>
                  </div>
                  <p className="text-green-100 mb-4">{t.footer.description}</p>
                  <div className="flex space-x-3">
                    <Badge variant="outline" className="text-green-100 border-green-300">
                      <Award className="w-3 h-3 mr-1" />
                      ISO Certified
                    </Badge>
                    <Badge variant="outline" className="text-green-100 border-green-300">
                      <Shield className="w-3 h-3 mr-1" />
                      Licensed
                    </Badge>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
                  <div className="space-y-2">
                    {[
                      { key: "home", section: "home" },
                      { key: "services", section: "services" },
                      { key: "jobs", section: "jobs" },
                      { key: "about", section: "about" },
                      { key: "contact", section: "contact" },
                    ].map(({ key, section }) => (
                      <button
                        key={key}
                        onClick={() => {
                          setShowAllJobs(false)
                          scrollToSection(section)
                        }}
                        className="block text-green-100 hover:text-white transition-colors hover:translate-x-1 duration-200"
                      >
                        {t.nav[key as keyof typeof t.nav]}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">{t.footer.services}</h4>
                  <div className="space-y-2 text-green-100">
                    <p className="hover:text-white transition-colors cursor-pointer">Job Placement</p>
                    <p className="hover:text-white transition-colors cursor-pointer">Skills Training</p>
                    <p className="hover:text-white transition-colors cursor-pointer">Visa Support</p>
                    <p className="hover:text-white transition-colors cursor-pointer">Language Training</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                  <div className="space-y-2 text-green-100">
                    <p className="flex items-center hover:text-white transition-colors">
                      <MapPin className="w-4 h-4 mr-2" />
                      Phnom Penh, Cambodia
                    </p>
                    <p className="flex items-center hover:text-white transition-colors">
                      <Phone className="w-4 h-4 mr-2" />
                      +855 23 650 4398
                    </p>
                    <p className="flex items-center hover:text-white transition-colors">
                      <Mail className="w-4 h-4 mr-2" />
                      cjtttrading@yahoo.co.jp
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-green-700 mt-8 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-green-100 mb-4 md:mb-0">
                    © 2024 {t.footer.company}. {t.footer.rights}
                  </p>
                  <div className="flex space-x-4 text-sm">
                    <button className="text-green-100 hover:text-white transition-colors">{t.footer.privacy}</button>
                    <button className="text-green-100 hover:text-white transition-colors">{t.footer.terms}</button>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
          onClick={() => window.open("https://wa.me/85523650439", "_blank")}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}
