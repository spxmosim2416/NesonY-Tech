
export interface FormField {
  label: string;
  name: string;
  type: 'text' | 'number' | 'email' | 'tel' | 'select' | 'textarea';
  options?: string[];
  placeholder?: string;
  required?: boolean;
}

export interface ServiceCategory {
  title: string;
  description: string;
  icon: string;
  items: string[];
  color: string;
  formFields: FormField[];
}

export interface TeamMember {
  name: string;
  role: string;
  department: string;
  image?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
