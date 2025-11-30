import { Zap, Repeat, Search, Database, PenTool, BarChart3, Globe, Shield, Cpu, CheckCircle2 } from 'lucide-react';
import { ServiceItem, Testimonial } from './types';

export const SERVICES: ServiceItem[] = [
  {
    title: 'Custom CRM Pipeline Setup',
    description: 'We build your content command center in your CRM of choice. Every piece of content flows through stages—research, drafting, review, approved—all visible in one dashboard.',
    icon: Database
  },
  {
    title: 'AI Research Agents',
    description: 'AI scans Reddit, YouTube, LinkedIn for trending topics in your niche. Feeds findings directly into your pipeline with source links. You pick what resonates.',
    icon: Search
  },
  {
    title: 'Script Drafting in Your Voice',
    description: 'AI learns from your best content to draft scripts that sound like you. You review in the CRM, approve as-is, or leave feedback for revisions.',
    icon: PenTool
  },
  {
    title: 'Approval Workflow System',
    description: 'Nothing posts automatically. Every script, thumbnail concept, and repurposed asset waits for your approval in the pipeline. Reject, refine, or greenlight.',
    icon: CheckCircle2
  },
  {
    title: 'Multi-Platform Repurposing',
    description: 'One approved video becomes 10+ assets: LinkedIn posts, Twitter threads, email content, short-form clips. All generated, all waiting for your review.',
    icon: Repeat
  },
  {
    title: 'Performance Insights Dashboard',
    description: 'See which topics and formats drive leads and engagement. Data feeds back into the pipeline so AI suggests more of what works for your business goals.',
    icon: BarChart3
  }
];

export const HERO_TESTIMONIALS = [
  { name: 'James K.', platform: 'LinkedIn', followers: '45k', text: '15h/week saved. More time for sales calls.', rating: 5, avatar: 'https://i.pravatar.cc/150?u=james' },
  { name: 'Maria S.', platform: 'YouTube', followers: '89k', text: 'Pipeline stays full without the grind.', rating: 5, avatar: 'https://i.pravatar.cc/150?u=maria' },
  { name: 'David R.', platform: 'Twitter/X', followers: '120k', text: '3x content output, same effort.', rating: 5, avatar: 'https://i.pravatar.cc/150?u=david' },
  { name: 'Lisa T.', platform: 'LinkedIn', followers: '32k', text: '$45k in sales from consistent content.', rating: 5, avatar: 'https://i.pravatar.cc/150?u=lisa' },
  { name: 'Alex M.', platform: 'YouTube', followers: '200k', text: 'Content system runs while I focus on delivery.', rating: 5, avatar: 'https://i.pravatar.cc/150?u=alex' },
  { name: 'Nina P.', platform: 'Instagram', followers: '150k', text: '20 new leads per month from automation.', rating: 5, avatar: 'https://i.pravatar.cc/150?u=nina' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Marcus Chen',
    role: 'SaaS Founder, ProjectFlow',
    content: "I was spending 20+ hours a week on LinkedIn content. ViralDrip built a pipeline that cut that to 3 hours of reviewing and approving. My lead flow stayed consistent, and I got back to building product.",
    avatar: 'https://i.pravatar.cc/150?u=marcus',
    result: '18h/week saved'
  },
  {
    name: 'Sarah Mitchell',
    role: 'Management Consultant',
    content: "The pipeline is brilliant. AI drafts posts and scripts based on my frameworks, I review them in my dashboard, approve or tweak, done. Content went from my biggest time-suck to a background process.",
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    result: '12 new clients'
  },
  {
    name: 'David Park',
    role: 'E-commerce Agency Owner',
    content: "I needed content for lead gen but didn't have time to create it myself. The CRM system they built runs like clockwork. I review scripts while having coffee, approve, and move on with my day.",
    avatar: 'https://i.pravatar.cc/150?u=david',
    result: '$78k in new revenue'
  }
];

export const FAQS = [
  {
    question: "Do I need technical skills to use the system?",
    answer: "No. We build everything in your existing CRM or set up one that fits your workflow. You interact with a simple dashboard: review content, click approve/reject, leave feedback. No coding, no complex software."
  },
  {
    question: "How much control do I have over the content?",
    answer: "Complete control. AI generates drafts based on research and your past content style. Every script, thumbnail, and post goes into a review queue. You approve, reject, or request changes. Nothing goes live without your explicit approval."
  },
  {
    question: "Will the content still sound like me?",
    answer: "Yes. AI learns patterns from your best-performing content—your tone, structure, examples you use. It drafts in your style. You review and refine. The result: content that sounds like you on your best day, without the hours of work."
  },
  {
    question: "What platforms do you support?",
    answer: "All major platforms: YouTube, LinkedIn, Twitter/X, Instagram, TikTok, and email newsletters. We repurpose across channels so one piece of content feeds your entire ecosystem."
  },
  {
    question: "How long does setup take?",
    answer: "3 weeks from start to finish. Week 1: We audit your workflow and map your content goals. Week 2: Build your pipeline and integrate AI agents. Week 3: Training and handoff. You're producing content by end of month."
  },
  {
    question: "How much time will I actually save?",
    answer: "Most clients save 12-20 hours per week on research, scripting, and repurposing. You'll still spend time reviewing content and recording (the parts only you can do), but the tedious work disappears."
  },
  {
    question: "What if I want to change something in the pipeline later?",
    answer: "The system is yours. We build it, train you on it, and hand it over. You can modify workflows yourself, or book us for updates. No ongoing retainers required—though many clients opt for monthly optimization sessions."
  },
  {
    question: "Is this just AI-generated content?",
    answer: "No. This is AI-assisted content creation with human oversight. AI handles research and drafting. You handle strategy, brand voice, and final approval. Think of it as a research assistant + copywriter who works 24/7, but you're still the editor-in-chief."
  }
];