import {AppUserService} from "./services/appUserServices/app-user.service";
import {AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn} from "@angular/forms";
import {map} from "rxjs";

export function userExistsValidator(userService: AppUserService, type:string):AsyncValidatorFn  {

    return (control: AbstractControl) => {
        return userService.findByEmail(control.value)
        .pipe(
          map(user => user ? {userExists:true} : null)
        );
  }

}
export function changeEmailExist(userService: AppUserService, id:number):AsyncValidatorFn  {

    return (control: AbstractControl) => {
        return userService.findByEmailAndIdNot(control.value, id)
        .pipe(
          map(user => user ? {userExists:true} : null)
        );
  }

}

export function passCorect(userService: AppUserService, id:number):AsyncValidatorFn  {

    return (control: AbstractControl) => {
        return userService.findByPassAndIdIs(control.value, id)
        .pipe(
          map(user => user ? {passCorrect:true} : null)
        );
  }

}

export function createPasswordStrengthValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

    const value = control.value;

    if (!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]+/.test(value);

    const hasLowerCase = /[a-z]+/.test(value);

    const hasNumeric = /[0-9]+/.test(value);

    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

    return !passwordValid ? {passwordStrength:true}: null;
  }
}

export function confirmPassValidator(): ValidatorFn {
  return (form: AbstractControl): ValidationErrors | null => {

    const start:string = form.get("password")?.value;

    const end:string = form.get("confirmPassword")?.value;

    if (start && end) {
      const isPassValid = (end == start);
      return isPassValid ? null : {passValid:true};
    }

    return null;
  }
}

// export function EmailExistsValidatorOrg(user: AppOrgService, id?:number):AsyncValidatorFn  {
//
//   return (control: AbstractControl) => {
//     if (sessionStorage.getItem('id')){
//       return user.findByEmailAndIdNot(control.value, JSON.parse(sessionStorage.getItem('id') as string))
//         .pipe(
//           map(user => user ? {emailExists:true} : null)
//         );
//     }
//     return user.findByEmail(control.value)
//       .pipe(
//         map(user => user ? {emailExists:true} : null)
//       );
//
//   }
// }
