'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import useFormStore from '../store/formStore'

export default function AddressDetails() {
  const { formData, updateFormData } = useFormStore()

  const handleChange = (e) => {
    const { name, value } = e.target
    updateFormData({ [name]: value })
  }

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="street">Street Address</Label>
        <Input
          id="street"
          name="street"
          value={formData.street || ''}
          onChange={handleChange}
          placeholder="123 Main St"
        />
      </div>
      <div>
        <Label htmlFor="city">City</Label>
        <Input
          id="city"
          name="city"
          value={formData.city || ''}
          onChange={handleChange}
          placeholder="New York"
        />
      </div>
      <div>
        <Label htmlFor="zipCode">Zip Code</Label>
        <Input
          id="zipCode"
          name="zipCode"
          value={formData.zipCode || ''}
          onChange={handleChange}
          placeholder="10001"
        />
      </div>
    </div>
  )
}

