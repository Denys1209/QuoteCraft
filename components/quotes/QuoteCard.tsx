"use client"
import { GetQuoteDto } from '@/appDtos/Dtos/Quote'
import React, { useState } from 'react'
import { GetLightTagDto } from '@/appDtos/Dtos/Tag';
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card';
import { Button } from '@heroui/button';
import { Divider } from '@heroui/divider';
import { Chip } from '@heroui/chip';
import { Tooltip } from '@nextui-org/react';


const QuoteCard = (
    { quote}
    :
    {
        quote:GetQuoteDto
    }
) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <Card className="w-full bg-white dark:bg-dark-background shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="flex justify-between items-center px-6 py-3">
        <p className="font-heading text-sm text-foreground/70 dark:text-dark-foreground/70">
          {quote.text.name}
        </p>
        <span className="text-xs text-foreground/50 dark:text-dark-foreground/50">
          {quote.text.author.name}
        </span>
      </CardHeader>
      
      <Divider />
      
      <CardBody className="px-6 py-4">
        {/* The actual quote text */}
        <div className="mb-4">
          <blockquote className="relative pl-4 border-l-4 border-primary dark:border-dark-primary">
            <p className="font-serif text-lg italic text-foreground dark:text-dark-foreground">
              &quot;{quote.quoteText}&quot;
            </p>
          </blockquote>
        </div>
        
        {/* Character name */}
        <div className="text-right font-heading font-medium text-foreground dark:text-dark-foreground">
          — {quote.character.name}
        </div>
        
        {/* Expandable context and description */}
        <div className="mt-4">
          <Button 
            onClick={() => setIsExpanded(!isExpanded)}
            variant="light" 
            color="primary"
            size="sm"
            endContent={
              <svg 
                className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            }
          >
            {isExpanded ? 'Show less' : 'Show more'}
          </Button>
          
          {isExpanded && (
            <div className="mt-3 pt-3 border-t border-divider dark:border-dark-divider text-sm">
              {quote.context && (
                <div className="mb-2">
                  <span className="font-medium">Context:</span> {quote.context}
                </div>
              )}
              {quote.description && (
                <div>
                  <span className="font-medium">Description:</span> {quote.description}
                </div>
              )}
            </div>
          )}
        </div>
      </CardBody>
      
      <Divider />
      
      <CardFooter className="px-6 py-3 bg-background/50 dark:bg-dark-background/50 flex flex-wrap gap-2">
        {quote.tags.map((tag:GetLightTagDto, index) => (
          <Tooltip key={index} content={tag.description}>
          <Chip 
            size="sm"
            variant="flat"
            color="secondary"
            className="text-xs cursor-default"
          >
            {tag.name}
          </Chip>
</Tooltip>
        ))}
      </CardFooter>
    </Card>
  );
}

export default QuoteCard