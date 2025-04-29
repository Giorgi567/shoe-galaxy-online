
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

interface Bank {
  id: string;
  name: string;
  logo: string;
  interestRate: string;
  minTerm: number;
  maxTerm: number;
  currency: string;
}

interface LoanOptionsProps {
  productPrice: number;
}

const LoanOptions: React.FC<LoanOptionsProps> = ({ productPrice }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState(6);
  
  // This is mock data - in a real implementation, you would fetch this from your Supabase database
  const banks: Bank[] = [
    {
      id: "tbc",
      name: "TBC Bank",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/TBC_Bank_logo.svg/1200px-TBC_Bank_logo.svg.png",
      interestRate: "14.9%",
      minTerm: 3,
      maxTerm: 24,
      currency: "GEL"
    },
    {
      id: "bog",
      name: "Bank of Georgia",
      logo: "https://upload.wikimedia.org/wikipedia/en/8/80/Bank_of_Georgia_logo.svg",
      interestRate: "15.5%",
      minTerm: 6,
      maxTerm: 36,
      currency: "GEL"
    }
  ];

  const calculateMonthlyPayment = (price: number, rate: string, months: number): number => {
    // Simple loan calculation (this is just an example)
    const interestRate = parseFloat(rate.replace('%', '')) / 100 / 12;
    const payment = (price * interestRate * Math.pow(1 + interestRate, months)) / (Math.pow(1 + interestRate, months) - 1);
    return Math.round(payment * 100) / 100;
  };

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="w-full mb-2 flex justify-between">
          <span>Payment Options</span>
          <span>{isOpen ? '▲' : '▼'}</span>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {banks.map((bank) => (
            <Card key={bank.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{bank.name}</CardTitle>
                  <img 
                    src={bank.logo} 
                    alt={`${bank.name} logo`} 
                    className="h-8 object-contain" 
                  />
                </div>
                <CardDescription>Interest rate: {bank.interestRate}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Loan term (months)</label>
                    <div className="flex gap-2 mt-1">
                      {[6, 12, 18, 24].map((months) => (
                        months >= bank.minTerm && months <= bank.maxTerm ? (
                          <Button
                            key={months}
                            variant={selectedTerm === months ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedTerm(months)}
                            className="flex-1"
                          >
                            {months}
                          </Button>
                        ) : null
                      ))}
                    </div>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 p-3">
                    <div className="text-sm text-gray-500">Monthly payment</div>
                    <div className="text-xl font-semibold">
                      {calculateMonthlyPayment(productPrice, bank.interestRate, selectedTerm)} {bank.currency}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Apply Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default LoanOptions;
