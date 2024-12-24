'use client'

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import useFormStore from '../store/formStore'

export default function Preferences() {
  const { formData, updateFormData } = useFormStore()

  const handleChange = (name) => {
    updateFormData({ [name]: !formData[name] })
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="newsletter"
          checked={formData.newsletter || false}
          onCheckedChange={() => handleChange('newsletter')}
        />
        <Label htmlFor="newsletter">Subscribe to newsletter</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={formData.terms || false}
          onCheckedChange={() => handleChange('terms')}
        />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  )
}

