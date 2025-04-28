"use client";

import { Link } from "@heroui/link";
import React from "react";

export default function AboutPage() {
  return (
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-primary dark:text-dark-primary">
            About QuoteCraft
          </h1>
          <div className="w-24 h-1 bg-secondary dark:bg-dark-secondary mx-auto"></div>
        </header>

        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4 text-primary dark:text-dark-primary">
            What is QuoteCraft?
          </h2>
          <p className="font-sans text-lg mb-6">
            QuoteCraft is a dedicated platform designed specifically for Leaving Certificate English students in Ireland. 
            We provide a streamlined way to search, save, and share important quotes from your course texts - helping 
            you prepare more effectively for your exams.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4 text-primary dark:text-dark-primary">
            Our Mission
          </h2>
          <p className="font-sans text-lg mb-4">
            Studying for the Leaving Cert English exam involves mastering numerous quotes across multiple texts. 
            QuoteCraft aims to simplify this process by creating a collaborative community where students can:
          </p>
          <ul className="list-disc pl-8 mb-6 font-sans text-lg space-y-2">
            <li>Quickly find relevant quotes through an intuitive search system</li>
            <li>Organize quotes by texts and themes</li>
            <li>Share insights and interpretations with peers</li>
            <li>Build personalized collections for revision</li>
          </ul>
        </section>
        
        <section className="mb-12 bg-primary/5 dark:bg-dark-primary/10 p-6 rounded-lg border border-divider dark:border-dark-divider">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4 text-primary dark:text-dark-primary">
            Current Content and Future Plans
          </h2>
          <div className="mb-4">
            <h3 className="font-heading text-xl font-medium mb-2">Currently Available:</h3>
            <ul className="list-disc pl-8 mb-4 font-sans">
              <li>Complete quote collection for Shakespeare&apos;s &quot;Macbeth&quot;</li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-xl font-medium mb-2">Coming Soon:</h3>
            <p className="mb-2 font-sans">We&apos;re actively working to expand our database to include quotes from:</p>
            <ul className="list-disc pl-8 mb-4 font-sans space-y-1">
              <li>Additional Shakespearean plays</li>
              <li>Contemporary drama texts</li>
              <li>Prescribed poetry</li>
              <li>Comparative study texts</li>
            </ul>
            <p className="font-sans italic">
              Our goal is to cover all texts and poems on the Leaving Certificate English curriculum. 
              New content is being added regularly, so check back often!
            </p>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4 text-primary dark:text-dark-primary">
            Key Features
          </h2>
          
          <div className="mb-6">
            <h3 className="font-heading text-xl font-medium mb-3 text-primary/90 dark:text-dark-primary/90">
              For All Users
            </h3>
            <ul className="list-disc pl-8 mb-6 font-sans space-y-2">
              <li><span className="font-medium">Search Functionality:</span> Find quotes by keywords, tags, or specific texts</li>
              <li><span className="font-medium">Browse Public Quotes:</span> Access a growing database of quotes shared by the community</li>
              <li><span className="font-medium">Sort & Filter:</span> Organize search results by relevance, text, theme, or popularity</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-xl font-medium mb-3 text-primary/90 dark:text-dark-primary/90">
              For Registered Users
            </h3>
            <ul className="list-disc pl-8 mb-4 font-sans space-y-2">
              <li><span className="font-medium">Personal Account:</span> Create and manage your own secure profile</li>
              <li><span className="font-medium">Quote Creation:</span> Add quotes from your texts with custom notes and analysis</li>
              <li><span className="font-medium">Tagging System:</span> Categorize quotes by themes, literary techniques, and more</li>
              <li><span className="font-medium">Privacy Control:</span> Choose whether to keep your quotes private or share them publicly</li>
              <li><span className="font-medium">Favorites Collection:</span> Save useful quotes from others to your personal collection</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4 text-primary dark:text-dark-primary">
            How It Works
          </h2>
          <ol className="list-decimal pl-8 mb-6 font-sans text-lg space-y-3">
            <li><span className="font-medium">Search:</span> Enter keywords, select texts or browse by tags to find relevant quotes</li>
            <li><span className="font-medium">Discover:</span> Explore how other students have interpreted key passages</li>
            <li><span className="font-medium">Contribute:</span> Create an account to add your own quotes and insights</li>
            <li><span className="font-medium">Organize:</span> Build themed collections for focused revision</li>
            <li><span className="font-medium">Prepare:</span> Use your personalized quote library to strengthen your exam preparation</li>
          </ol>
        </section>
        
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4 text-primary dark:text-dark-primary">
            Why QuoteCraft?
          </h2>
          <p className="font-sans text-lg mb-4">
            The Leaving Certificate English exam rewards students who can effectively analyze and apply textual evidence. 
            QuoteCraft helps you build this critical skill by:
          </p>
          <ul className="list-disc pl-8 mb-6 font-sans text-lg space-y-2">
            <li>Saving time on locating and organizing quotes</li>
            <li>Exposing you to diverse interpretations of key passages</li>
            <li>Encouraging deeper engagement with texts through note-taking</li>
            <li>Providing a structured approach to quote-based revision</li>
          </ul>
        </section>
        
        <div className="text-center mt-16 mb-8">
          <p className="font-serif text-xl italic mb-6">
            Join our community of Leaving Cert English students and transform how you prepare for your exams!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Link 
              href="/signup" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors"
            >
              Sign Up Now
            </Link> */}
            <Link 
              href="/" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-md font-medium transition-colors"
            >
              Explore Quotes
            </Link>
          </div>
        </div>
  </div>
  );
}