import { useState } from "react"

export const useForm = (initialState) => {
    const [formData, setFormData] = useState(initialState)

    const handleChange = (e, name) => {
        const { value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleCustomChange = (value, name) => {
        setFormData({ ...formData, [name]: value })
    }

    return { handleChange, handleCustomChange, formData }
}