'use client'

import { useState, useEffect } from 'react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion, AnimatePresence } from "framer-motion"
import PersonalInfo from './components/PersonalInfo'
import AddressDetails from './components/AddressDetails'
import Preferences from './components/Preferences'
import Review from './components/Review'
import DarkModeToggle from './components/DarkModeToggle'
import useFormStore from './store/formStore'

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0)
  const [mounted, setMounted] = useState(false)
  const formData = useFormStore(state => state.formData)
  const steps = ['Personal Info', 'Address Details', 'Preferences', 'Review']

  useEffect(() => {
    setMounted(true)
  }, [])

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0))

  const renderStep = () => {
    switch (currentStep) {
      case 0: return <PersonalInfo />
      case 1: return <AddressDetails />
      case 2: return <Preferences />
      case 3: return <Review />
      default: return null
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Multi-Step Form</CardTitle>
            <CardDescription>Please fill out the form step by step</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <Tabs value={currentStep.toString()}>
                <TabsList className="grid w-full grid-cols-4">
                  {steps.map((step, index) => (
                    <TabsTrigger
                      key={index}
                      value={index.toString()}
                      disabled={index > currentStep}
                      onClick={() => setCurrentStep(index)}
                      className="flex-1"
                    >
                      {step}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
            <div className="mt-8 min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderStep()}
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-8">
              <Progress value={(currentStep + 1) / steps.length * 100} />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={prevStep} 
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            <Button 
              onClick={nextStep}
            >
              {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </CardFooter>
        </Card>
      </div>
      <DarkModeToggle />
    </div>
  )
}

