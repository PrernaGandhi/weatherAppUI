import { AbstractControl, ValidationErrors } from '@angular/forms';

export class HumidityValidators {

    static containPercentageSign(control: AbstractControl): ValidationErrors | null {

        if (!((control.value as string).includes('%'))) {
            return { containPercentageSign: true }
        }
        return null;
    }
}