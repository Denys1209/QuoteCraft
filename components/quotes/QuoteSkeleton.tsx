"use client"
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card'
import { Button } from '@heroui/button'
import { Divider } from '@heroui/divider'
import { Chip } from '@heroui/chip'
import { Skeleton } from '@nextui-org/react'

const QuoteSkeleton = () => {

  return (
    <Card className="w-full bg-white dark:bg-dark-background shadow-md hover:shadow-lg transition-shadow animate-pulse">
      <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-6 py-3 gap-2">
        <Skeleton className="h-4 w-full sm:w-[200px]" />
        <Skeleton className="h-3 w-[150px]" />
      </CardHeader>

      <Divider />

      <CardBody className="px-4 sm:px-6 py-3 sm:py-4">
        <div className="mb-3 sm:mb-4">
          <blockquote className="relative pl-3 sm:pl-4 border-l-3 sm:border-l-4 border-primary dark:border-dark-primary">
            <Skeleton className="h-6 sm:h-8 w-full" />
          </blockquote>
        </div>
        <div className="text-right mb-3 sm:mb-4">
          <Skeleton className="h-4 sm:h-5 w-[100px] sm:w-[120px] ml-auto" />
        </div>
        <div className="mt-3 sm:mt-4">
          <Button
            variant="light"
            color="primary"
            size="sm"
            className="text-sm w-full sm:w-auto justify-between sm:justify-start px-3 py-2"
            endContent={
              <svg
                className="w-4 h-4 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            }
          >
            {'Show more'}
          </Button>
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="px-4 sm:px-6 py-2 sm:py-3 bg-background/50 dark:bg-dark-background/50 flex flex-wrap gap-2">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-5 sm:h-6 w-[70px] sm:w-[80px]" />
        ))}
      </CardFooter>
    </Card>
  )
}

export default QuoteSkeleton