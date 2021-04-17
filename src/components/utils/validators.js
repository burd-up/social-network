import React from 'react';

export const required = value => (value ? undefined : 'Required')
export const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined

