
//Validation
export interface Validatable {
    value: string | number;
    required?: boolean; //? makes it optional
    //checking lengths
    minLength?: number;
    maxLength?: number;
    //checking numbers
    min?: number;
    max?: number;
}

export function validate(validatableInput: Validatable) {
    let isValid = true;
    //checking if it is required
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    //checking if the input has a min length
    if (
        validatableInput.minLength != null && 
        typeof validatableInput.value === 'string'
    )  {
        isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    //same but for max length
    if (
        validatableInput.maxLength != null && 
        typeof validatableInput.value === 'string'
    )  {
        isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
    //checking min number
    if (validatableInput.min != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value > validatableInput.min;
    }
    //checking max number
    if (validatableInput.max != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value < validatableInput.max;
    }
    return isValid;
}