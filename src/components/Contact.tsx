import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface ContactProps {
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  budget: string;
  timeline: string;
}

export default function Contact({ className }: ContactProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting] = useState(false);
  const [submitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form is disabled - no functionality
    console.log('Contact form is disabled');
  };

  const contactMethods = [
    {
      title: 'Email',
      description: 'Get in touch directly',
      value: 'jay@example.com',
      icon: '✉️'
    },
    {
      title: 'Response Time',
      description: 'Usually within 24 hours',
      value: '< 24 hours',
      icon: '⏱️'
    },
    {
      title: 'Availability',
      description: 'Currently not taking new projects',
      value: 'Unavailable',
      icon: '❌'
    }
  ];

  return (
    <section id="contact" className={cn('section-padding bg-muted/30', className)}>
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's <span className="gradient-text">Work Together</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'd love to hear about your project 
              and discuss how we can create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget</Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-15k">$5,000 - $15,000</option>
                        <option value="15k-50k">$15,000 - $50,000</option>
                        <option value="50k-plus">$50,000+</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Timeline</Label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="2-3-months">2-3 months</option>
                        <option value="3-plus-months">3+ months</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell me about your project..."
                      rows={5}
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
                      Thank you! Your message has been sent successfully. I'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">
                      Sorry, there was an error sending your message. Please try again or contact me directly.
                    </div>
                  )}

                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to work on new projects and help businesses 
                  achieve their digital goals. Whether you have a clear vision 
                  or just an idea, let's discuss how we can make it happen.
                </p>
              </div>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-2xl">{method.icon}</div>
                    <div>
                      <h4 className="font-semibold">{method.title}</h4>
                      <p className="text-muted-foreground text-sm">{method.description}</p>
                      <p className="text-primary font-medium">{method.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-border">
                <h4 className="font-semibold mb-4">What to expect:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Quick response within 24 hours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Free consultation and project assessment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Detailed proposal with timeline and pricing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Regular updates throughout the project</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

