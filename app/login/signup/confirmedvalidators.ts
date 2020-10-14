import { FormGroup } from '@angular/forms';

export function confirmedvalidator(Password: string, confirmPassword: string) {
    return (signupform: FormGroup) => {
        const control = signupform.controls[Password];
        const matchingControl = signupform.controls[confirmPassword];

        if (!control || !matchingControl) {
            return null;
        }

        if (matchingControl.errors && !matchingControl.errors.confirmedvalidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}