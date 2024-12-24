'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import useFormStore from '../store/formStore'

export default function PersonalInfo() {
  const { formData, updateFormData } = useFormStore()
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    updateFormData({ [name]: value })
    validateField(name, value)
  }

  const validateField = (name, value) => {
    let newErrors = { ...errors }
    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      newErrors.email = 'Invalid email address'
    } else {
      delete newErrors.email
    }
    setErrors(newErrors)
  }

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
          placeholder="John Doe"
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Input
                id="email"
                name="email"
                value={formData.email || ''}
                onChange={handleChange}
                placeholder="john@example.com"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Enter a valid email address</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
    </div>
  )
}

