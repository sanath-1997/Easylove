
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Heart, Mail, Phone } from "lucide-react";
import { CountdownTimer } from "@/components/countdown-timer";
import { ReviewCard } from "@/components/review-card";
import { AnimatedCounter } from "@/components/animated-counter";

const steps = [
  {
    title: "Fix Your Inner Frame",
    content: "Stop acting like she’s oxygen. You can breathe without her — paradoxically, that helps."
  },
  {
    title: "Become Visibly Stable & Improving",
    content: "Clean clothes, purpose, routine. No six-pack needed — just don’t look like life is beating you daily."
  },
  {
    title: "Remove Observer Energy",
    content: "You’re not a CCTV camera. Exist like a normal human in the same space."
  },
  {
    title: "First Micro-Contact (No Flirting)",
    content: "Say “Hi.” That’s it. The world will not end."
  },
  {
    title: "Repeat Light Interactions",
    content: "Familiarity beats magic. You’re not casting a spell, you’re building comfort."
  },
  {
    title: "Introduce Warmth Gradually",
    content: "Slight smiles, relaxed tone. Not romance movie intensity — real life energy."
  },
  {
    title: "Read Signals Like an Adult",
    content: "Patterns matter. One smile is politeness. Three smiles is data."
  },
  {
    title: "Create One-on-One Moments",
    content: "Short, low-pressure time together. Coffee, not a candlelight destiny talk."
  },
  {
    title: "Be Honest Without Drama",
    content: "Calmly say you like her. No essays. No trembling. No background music."
  },
  {
    title: "Accept Reality With Dignity",
    content: "If it’s yes — great. If not — you leave stronger, not bitter. That’s manhood."
  }
];

const reviews = [
    {
        name: "Aarav Sharma",
        review: "This book is pure gold. No cringe lines, just practical advice that actually works. I feel more confident already.",
        avatarSeed: "avatar1"
    },
    {
        name: "Rohan Patel",
        review: "I was stuck in the 'friend zone' and this book gave me the clarity to move forward with dignity. Highly recommended for any guy who's tired of overthinking.",
        avatarSeed: "avatar2"
    },
    {
        name: "Vikram Singh",
        review: "Simple, direct, and effective. The 10 steps are easy to follow and make so much sense. It’s like getting advice from a wise older brother.",
        avatarSeed: "avatar3"
    }
]

export default function Home() {
  const [offerExpired, setOfferExpired] = useState(false);
  const [downloadCount, setDownloadCount] = useState(9812);
  const [initialDownloadCount, setInitialDownloadCount] = useState(9812);


  useEffect(() => {
    const initialCount = 9812;
    let storedCount = localStorage.getItem('downloadCount');
    let currentCount;

    if (storedCount) {
      currentCount = parseInt(storedCount, 10);
      if (isNaN(currentCount) || currentCount < initialCount) {
        currentCount = initialCount;
      }
    } else {
      currentCount = initialCount;
    }
    
    setInitialDownloadCount(currentCount);
    setDownloadCount(currentCount);
    localStorage.setItem('downloadCount', String(currentCount));
    
    const interval = setInterval(() => {
      setDownloadCount(prevCount => {
        const newCount = prevCount + 1;
        localStorage.setItem('downloadCount', String(newCount));
        return newCount;
      });
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  const handleTimerComplete = () => {
    setOfferExpired(true);
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section id="hero" className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container px-4 md:px-6 text-center space-y-8">
            <div className="inline-block bg-primary text-primary-foreground py-4 px-6 md:px-8 rounded-lg shadow-lg">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-bold flex items-center gap-3">
                10 Easy Steps to Marry the Girl You love <Heart className="w-8 h-8 md:w-12 md:h-12 fill-white" />
              </h1>
            </div>
            
            <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl/relaxed font-bold">
              Brother, if you’re in love but don’t know what to do next 🤔 — how to approach her, what to say, or how to move things forward — this is for you. No fake lines, no tricks. Just honest, brother-to-brother guidance to help you take the right step without losing your dignity or your heart. ❤️‍🩹 Get that <span className="text-destructive">Digital Copy</span>
            </p>

            <Card className="max-w-md mx-auto !mt-12 shadow-2xl">
              <CardContent className="p-6 space-y-4">
                {offerExpired ? (
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-6xl font-bold text-foreground">₹299</span>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-center gap-4 animate-price-drop">
                      <span className="text-4xl font-bold text-foreground line-through">₹299</span>
                      <span className="text-6xl font-bold text-destructive">₹59</span>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-foreground">Offer ends in:</p>
                      <CountdownTimer 
                        initialMinutes={10} 
                        className="text-foreground"
                        onComplete={handleTimerComplete} 
                      />
                    </div>
                  </>
                )}
                <a href="https://rzp.io/rzp/05NiI8Eh">
                  <Button size="lg" className="w-full text-lg font-bold">
                    Buy Now & Get that Girl❤️
                  </Button>
                </a>
                <div className="flex flex-row items-baseline justify-center gap-3 pt-2">
                  <span className="font-bold text-foreground text-5xl">
                    <AnimatedCounter from={initialDownloadCount} to={downloadCount} />
                  </span>
                  <span className="text-lg text-black font-bold">downloads as of now 🔥</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="cover" className="w-full py-12 md:py-24">
            <div className="container flex justify-center">
                <Image
                    src="/images/10 Easy Steps (1).png"
                    alt="Ebook cover for 10 Easy Steps to Marry the Girl You Love"
                    width={400}
                    height={600}
                    className="rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105"
                    priority
                />
            </div>
        </section>

        <section id="what-is-inside" className="w-full py-12 md:py-24 bg-card/50">
          <div className="container px-4 md:px-6 space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">What's Inside & How It Helps You</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">A step-by-step roadmap from "just a guy" to "the one".</p>
            </div>
            <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
              {steps.map((step, index) => (
                <AccordionItem value={`item-${index + 1}`} key={index}>
                  <AccordionTrigger className="text-lg font-bold font-headline text-left">
                    <span className="mr-2">📘 Step {index + 1}:</span> {step.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-foreground/80">
                    {step.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        
        <section id="benefits" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Card className="max-w-3xl mx-auto bg-primary text-primary-foreground shadow-lg">
                <CardContent className="p-6">
                    <h3 className="text-3xl font-headline font-bold mb-4">The Benefit You Get</h3>
                    <p className="text-xl">
                    This ebook helps you move from confusion and overthinking to calm confidence — so you act like a man who respects himself, instead of someone chasing approval.
                    </p>
                </CardContent>
            </Card>
          </div>
        </section>

        <section id="reviews" className="w-full py-12 md:py-24 bg-card/50">
            <div className="container px-4 md:px-6 space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Words from Brothers Like You</h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">See how this guide has changed the game for others.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} name={review.name} review={review.review} avatarSeed={review.avatarSeed} />
                    ))}
                </div>
            </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8 mt-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h3 className="text-lg font-headline font-bold mb-2">Contact & Policies</h3>
            <div className="flex justify-center items-center gap-6 mb-4 flex-wrap">
                <a href="mailto:sanathselvakumaran@gmail.com" className="flex items-center gap-2 hover:underline">
                    <Mail className="w-4 h-4" /> sanathselvakumaran@gmail.com
                </a>
                <a href="tel:+919995564019" className="flex items-center gap-2 hover:underline">
                    <Phone className="w-4 h-4" /> +919995564019
                </a>
            </div>
            <div className="text-xs text-primary-foreground/70 space-x-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="hover:underline">Privacy Policy</button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Privacy Policy</DialogTitle>
                      <DialogDescription>
                        Last updated: {new Date().toLocaleDateString()}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="prose dark:prose-invert max-h-[60vh] overflow-y-auto">
                      <p>We respect your privacy and are committed to protecting it. This Privacy Policy explains how we collect, use, and safeguard your information when you purchase our ebook.</p>
                      
                      <h4>Information We Collect</h4>
                      <p>We may collect personal information such as your name, email address, and payment information when you place an order.</p>

                      <h4>How We Use Your Information</h4>
                      <p>We use your information to process your transaction, deliver the ebook, and communicate with you about your order. We may also use your email to send you promotional materials, from which you can opt-out at any time.</p>

                      <h4>Information Sharing</h4>
                      <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.</p>

                      <h4>Security</h4>
                      <p>We implement a variety of security measures to maintain the safety of your personal information.</p>
                    </div>
                  </DialogContent>
                </Dialog>

                <span>&bull;</span>

                <Dialog>
                  <DialogTrigger asChild>
                    <button className="hover:underline">Terms of Service</button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Terms of Service</DialogTitle>
                      <DialogDescription>
                        Last updated: {new Date().toLocaleDateString()}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="prose dark:prose-invert max-h-[60vh] overflow-y-auto">
                      <p>By purchasing and downloading this ebook, you agree to be bound by these terms of service.</p>

                      <h4>Intellectual Property</h4>
                      <p>The ebook and its content are the intellectual property of Marry Her. You may not distribute, share, or resell the ebook in any form.</p>

                      <h4>Disclaimer</h4>
                      <p>The advice in this ebook is for informational purposes only. Results are not guaranteed and will vary based on individual effort and circumstances.</p>

                      <h4>Governing Law</h4>
                      <p>These terms shall be governed by the laws of India.</p>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <span>&bull;</span>

                <Dialog>
                  <DialogTrigger asChild>
                    <button className="hover:underline">Refund Policy</button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Refund Policy</DialogTitle>
                      <DialogDescription>
                        Last updated: {new Date().toLocaleDateString()}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="prose dark:prose-invert max-h-[60vh] overflow-y-auto">
                      <p>Due to the digital nature of our product, all sales are final. We do not offer refunds or exchanges once the ebook has been purchased and downloaded.</p>

                      <h4>Exceptions</h4>
                      <p>In the case of a technical issue with the file or a duplicate purchase, please contact us at sanathselvakumaran@gmail.com with your proof of purchase, and we will assist you.</p>

                      <p>We are confident that you will find value in the guidance provided. Thank you for your understanding.</p>
                    </div>
                  </DialogContent>
                </Dialog>
            </div>
            <p className="text-xs text-primary-foreground/70 mt-4">&copy; {new Date().getFullYear()} Marry Her. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );

    

    

    

    