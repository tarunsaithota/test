const validateContactForm = (firstName, lastName, email, phone, details) => {
    const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const mobile_regex = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;
    const errors = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        details: ''
    }

    if(!email){
        errors.email = "Email cannot be empty";
    } else if (!email_regex.test(email)){
        errors.email = "Please provide valid email address";
    }

    if(!details){
        errors.details = "Please provide us some information";
    }

    if(!mobile_regex.test(phone)){
        errors.phone = "Please enter a valid phone number";
    }
    if(!firstName){
        errors.firstName = "First Name cannot be empty";
    }
    return errors;

}

export default validateContactForm;