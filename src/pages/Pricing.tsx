import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tiers = [
  {
    name: "Starter",
    price: "49",
    description: "Perfect for small websites and blogs",
    features: [
      "AI-powered SEO analysis",
      "Basic keyword tracking",
      "Content optimization suggestions",
      "Monthly site audit",
      "5 competitor tracking",
      "Email support"
    ]
  },
  {
    name: "Professional",
    price: "99",
    description: "Ideal for growing businesses",
    features: [
      "Everything in Starter",
      "Advanced AI recommendations",
      "Unlimited keyword tracking",
      "Weekly site audits",
      "15 competitor tracking",
      "Priority support",
      "Custom reporting",
      "API access"
    ]
  },
  {
    name: "Enterprise",
    price: "299",
    description: "For large organizations",
    features: [
      "Everything in Professional",
      "Custom AI model training",
      "White-label reports",
      "Unlimited competitor tracking",
      "Daily site audits",
      "24/7 priority support",
      "Custom integrations",
      "Dedicated account manager"
    ]
  }
];

const faqs = [
  {
    question: "What's included in each plan?",
    answer: "Each plan includes core SEO features with increasing limits and capabilities. Pro is perfect for individuals, Elite for growing teams, and Organization for enterprises needing maximum capabilities."
  },
  {
    question: "Can I switch plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any payments."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 14-day money-back guarantee for all annual subscriptions. Monthly subscriptions can be canceled anytime."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and wire transfers for enterprise customers."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a 14-day free trial on all plans. No credit card required to start."
  },
  {
    question: "Do you offer custom plans?",
    answer: "Yes, enterprise customers can contact our sales team for custom plans tailored to their specific needs."
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Simple, transparent pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Choose the perfect plan for your SEO needs. All plans include our core AI-powered features.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="rounded-lg border bg-card p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">${tier.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground mb-6">{tier.description}</p>
              <Button className="w-full mb-8">Get Started</Button>
              <ul className="space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our plans and features
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;