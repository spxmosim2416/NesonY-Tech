
import React from 'react';
import { Shield, Orbit, CreditCard, UserCheck, Zap, GraduationCap, Banknote } from 'lucide-react';
import { ServiceCategory, TeamMember } from './types';

export const SERVICES: ServiceCategory[] = [
  {
    title: "Insurance Hub",
    description: "Full protection for your assets. Motor, Life, and Health Insurance facilitated via InsuranceDekho.",
    icon: "Shield",
    color: "blue",
    items: [
      "Motor Insurance (Car/Bike)",
      "Life Insurance Plans",
      "Health Insurance (InsuranceDekho)",
      "Commercial Vehicle Coverage"
    ],
    formFields: [
      { label: "Insurance Type", name: "subService", type: "select", options: ["Motor", "Life", "Health", "Commercial"], required: true },
      { label: "Full Name", name: "fullName", type: "text", placeholder: "Name as per Aadhaar", required: true },
      { label: "Phone", name: "phone", type: "tel", placeholder: "8755445045", required: true },
      { label: "Vehicle Reg No.", name: "regNo", type: "text", placeholder: "e.g. UP16 XX 0000" }
    ]
  },
  {
    title: "MesonY Tech",
    description: "Financial bridge for your dreams. Fast Personal, Business, and Home Loans.",
    icon: "Banknote",
    color: "emerald",
    items: [
      "Personal Loan Assistance",
      "Home Loan Processing",
      "Business Credit Solutions",
      "Banking Support & RM"
    ],
    formFields: [
      { label: "Financial Service", name: "subService", type: "select", options: ["Personal Loan", "Home Loan", "Business Loan", "RM Services"], required: true },
      { label: "Full Name", name: "fullName", type: "text", required: true },
      { label: "Phone Number", name: "phone", type: "tel", required: true },
      { label: "Amount Needed", name: "amount", type: "number", placeholder: "₹" }
    ]
  },
  {
    title: "Vehicle Tech",
    description: "Advanced automobile security with GPS Tracking and Motor Electrician services.",
    icon: "Orbit",
    color: "orange",
    items: [
      "GPS Tracking (Anti-theft)",
      "Motor Electrician Services",
      "Smart PUCC (Pollution Check)",
      "Vehicle OBD Diagnostics"
    ],
    formFields: [
      { label: "Tech Service", name: "subService", type: "select", options: ["GPS Installation", "Electrician Support", "PUCC Certificate", "OBD Scanning"], required: true },
      { label: "Vehicle Model", name: "model", type: "text", placeholder: "e.g. Maruti Swift", required: true },
      { label: "Vehicle Number", name: "regNo", type: "text", required: true },
      { label: "Contact Phone", name: "phone", type: "tel", required: true }
    ]
  },
  {
    title: "Digital Hub",
    description: "Official documentation made easy. Aadhaar, PAN, Passport, and Ration Card assistance.",
    icon: "UserCheck",
    color: "indigo",
    items: [
      "Aadhaar Correction/Update",
      "New PAN Card Application",
      "Passport Application Support",
      "Ration Card Services"
    ],
    formFields: [
      { label: "Document Type", name: "subService", type: "select", options: ["Aadhaar Update", "PAN Card", "Passport", "Ration Card"], required: true },
      { label: "Applicant Name", name: "fullName", type: "text", required: true },
      { label: "Phone", name: "phone", type: "tel", required: true },
      { label: "Reference ID", name: "refId", type: "text", placeholder: "Existing ID if correction" }
    ]
  },
  {
    title: "E-Governance",
    description: "Digital gateway for PUCC, Utility Bill payments, and RTO services.",
    icon: "Zap",
    color: "purple",
    items: [
      "E-Governance Solutions",
      "Utility Bill Payments",
      "Fastag Issuance/Recharge",
      "E-Challan Check & Pay"
    ],
    formFields: [
      { label: "Digital Solution", name: "subService", type: "select", options: ["E-Governance", "Bill Payment", "Fastag", "E-Challan"], required: true },
      { label: "Service Details", name: "details", type: "textarea", placeholder: "Bill account or Challan No.", required: true },
      { label: "Full Name", name: "fullName", type: "text", required: true },
      { label: "Phone", name: "phone", type: "tel", required: true }
    ]
  },
  {
    title: "Education",
    description: "Academic gateway for students. IIT-JEE & Board Form assistance.",
    icon: "GraduationCap",
    color: "purple",
    items: [
      "IIT-JEE & NEET Forms",
      "Board Exam Registrations",
      "Scholarship Applications",
      "Career Counseling"
    ],
    formFields: [
      { label: "Form Type", name: "subService", type: "select", options: ["IIT-JEE", "NEET", "Board Exam", "Scholarship"], required: true },
      { label: "Student Name", name: "fullName", type: "text", required: true },
      { label: "School/College", name: "school", type: "text", required: true },
      { label: "Contact Phone", name: "phone", type: "tel", required: true }
    ]
  }
];

export const TEAM: TeamMember[] = [
  { name: "Mosim Ali", role: "CEO & Founder", department: "Strategy & Technology" },
  { name: "Rukmuddin", role: "Project Manager", department: "Operations & Execution" },
  { name: "Sohil", role: "Specialist", department: "Digital Identity" },
  { name: "Arman", role: "Operations", department: "Field & Automobile" }
];

export const CONTACT_INFO = {
  phone: "8755445045",
  whatsapp: "918755445045",
  email: "help@mesony.online",
  website: "mesony.online",
  address: "Nagla Phool Khan, R R Colony, Jewar, Gautam Buddha Nagar, Uttar Pradesh",
  tagline: "Beyond Boundaries, Beyond Technology",
  founder: "Mosim Ali",
  nickname: "",
  projectManager: "Rukmuddin"
};
