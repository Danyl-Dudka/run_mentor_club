import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
    name: Yup.string().trim().min(2, 'Name must be at least 2 characters').required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phoneNumber: Yup.string().matches(/^[0-9+\-()\s]+$/, 'Invalid phone number').min(7, 'Phone number is too short').required('Phone number is required'),
}) 