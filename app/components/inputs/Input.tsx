"use client"

import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'


interface InputProps {
    id: string,
    label: string,
    type?: string,
    disabled?: boolean,
    formatPrice?: boolean,

}
const Input = () => {
    return (
        <div>Input</div>
    )
}

export default Input