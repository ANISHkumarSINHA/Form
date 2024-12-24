'use client'

import useFormStore from '../store/formStore'

export default function Review() {
  const formData = useFormStore(state => state.formData)

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Review Your Information</h3>
      <div>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Address:</strong> {formData.street}, {formData.city}, {formData.zipCode}</p>
        <p><strong>Newsletter:</strong> {formData.newsletter ? 'Yes' : 'No'}</p>
        <p><strong>Accepted Terms:</strong> {formData.terms ? 'Yes' : 'No'}</p>
      </div>
    </div>
  )
}

