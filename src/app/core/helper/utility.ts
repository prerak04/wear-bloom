import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import moment from 'moment';
import { debounceTime, distinctUntilChanged, Observable } from 'rxjs';
import Swal from 'sweetalert2';

declare var $: any;

export class Utility {
  /**
   * @returns '00000000-0000-0000-0000-000000000000'
   *  */
  public static get getGuidAsZero() {
    return '00000000-0000-0000-0000-000000000000';
  }

  static getAdjustedDate(
    selectedMonth: number,
    startDate: string,
    endDate: string
  ) {
    const start = moment(startDate);
    const end = moment(endDate);

    const year = start.year();

    let adjustedDate = moment().year(year).month(selectedMonth).date(4); // Month is 0-based in Moment.js, so subtract 1

    if (adjustedDate.isAfter(start) && adjustedDate.isBefore(end)) {
      return adjustedDate;
    }

    if (
      adjustedDate.isBefore(start) &&
      moment(adjustedDate).year(end.year()).isBefore(end.add(1, 'M'))
    ) {
      return moment(adjustedDate).year(end.year());
    }
    return null;
  }

  public static allowNumbersAndDotOnly(event: KeyboardEvent): boolean {
    const charCode = event.which ? event.which : event.keyCode;

    if ((charCode >= 48 && charCode <= 57) || charCode === 46) {
      return true; // Allow number or dot
    }

    // If it's not a number or dot, prevent the input
    event.preventDefault();
    return false; // Block the input
  }

  /**
   * Allow only numbers to be entered in input
   * @param event
   */
  public static allowNumbersOnly(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;
    const charStr = String.fromCharCode(charCode);

    if (!charStr.match(/^[0-9]$/)) {
      event.preventDefault();
    }
  }

  public static getMonthsAndValue(): { value: string; name: string }[] {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return monthNames.map((name, index) => ({
      value: (index + 1).toString().padStart(2, '0'),
      name,
    }));
  }

  /**
   * @returns name of days in a week
   */
  public static get getDays(): string[] {
    return [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
  }

  /**
   * @returns All months name in a year
   */
  public static get getMonths(): string[] {
    return [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  }

  // This function used to validate email
  public static validateEmail(email: string) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  // This function used to validate phone
  public static validatePhone(phone: string) {
    var re = /^([0]|\+91)?[6789]\d{9}$/;
    return re.test(phone);
  }
  // Custom validator function
  public static minimumAgeValidator(minAge: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value) {
        const selectedDate = moment(control.value);
        const today = moment();
        const age = today.diff(selectedDate, 'years');
        if (age < minAge) {
          return { minAge: true };
        }
      }
      return null;
    };
  }

  public static getCurrentMonthName(): string {
    return moment().format('MMMM');
  }

  public static getCurrentWeek(): string {
    const startOfWeek = moment().startOf('week');
    const endOfWeek = moment().endOf('week');

    return `${startOfWeek.format('DD MMM')} to ${endOfWeek.format('DD MMM')}`;
  }
  public static preventFutureDateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value) {
        const selectedDate = moment(control.value);
        const today = moment();

        if (selectedDate.isAfter(today, 'day')) {
          return { futureDate: true };
        }
      }
      return null;
    };
  }
  public static confirmAction(
    message: string,
    componentName?: string,
    actionString?: string
  ): Observable<boolean> {
    actionString = !actionString ? 'Yes, delete!' : actionString;
    return new Observable<boolean>((observer) => {
      Swal.fire({
        title: 'Are you sure?',
        text: `You won't be able to revert this ${componentName}`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#34c38f',
        cancelButtonColor: '#f46a6a',
        confirmButtonText: actionString,
      }).then((result) => {
        if (result.isConfirmed) {
          observer.next(true);
        } else {
          observer.next(false);
        }
        observer.complete();
      });
    });
  }

  /**
   * Generates uniques code based on input string
   * @default 5 characters
   * @param string
   * @returns unique code
   */
  public static generateUniqueCode(string = '', maxCodeLength = 5): string {
    const normalized = string.split(' ').join('').split('');

    const randomCharacters = new Array(maxCodeLength)
      .fill(0)
      .map((a) => String.fromCharCode(Math.floor(Math.random() * 26) + 65));

    const code = normalized
      .filter((char, index) => {
        const devider = Math.ceil(normalized.length / maxCodeLength);
        return index % devider === 0;
      })
      .concat(randomCharacters)
      .splice(0, maxCodeLength)
      .join('')
      .toUpperCase();

    return code;
  }

  /**
   * Generates Dummy array
   * @param length Number of dummy objects you want in array
   * @returns Dummy Array
   */
  public static generateDummyArray(length: number): number[] {
    // return Array.from({ length }, (_, index) => index + 1);
    return new Array(length).fill(0).map((_, index) => index);
  }

  // This function used to verify password is as per rule or not
  public static validPasswordRule(password: string, repeatPassword: string) {
    if (!password || !repeatPassword) return false;

    let MinLength = 6;
    let MaxLength = 15;

    let meetsLengthRequirements: boolean =
      password.length >= MinLength && repeatPassword.length <= MaxLength;
    let hasUpperCaseLetter: boolean = false;
    let hasLowerCaseLetter: boolean = false;
    let hasDecimalDigit: boolean = false;

    if (meetsLengthRequirements) {
      for (var i = 0, len = password.length; i < len; i++) {
        let char = password.charAt(i);
        if (!isNaN(+char * 1)) {
          hasDecimalDigit = true;
        } else {
          if (this.isStringOnly(char) && char == char.toUpperCase()) {
            hasUpperCaseLetter = true;
          }
          if (this.isStringOnly(char) && char == char.toLowerCase()) {
            hasLowerCaseLetter = true;
          }
        }
      }
    }

    let isValid =
      meetsLengthRequirements &&
      hasUpperCaseLetter &&
      hasLowerCaseLetter &&
      hasDecimalDigit;
    return isValid;
  }
  public static dateInMonthYearMoment(month: number, year: number) {
    const momentDate = moment({ year: year, month: month - 1 });
    return momentDate ? moment(momentDate).format('YYYY-MM-DD') : '';
  }

  public static dateInMoment(date: Date) {
    const momentDate = moment(date, 'YYYY-MM');
    return momentDate.isValid() ? momentDate.format('YYYY-MM-DD') : '';
  }

  public static dateFullInMoment(date: Date) {
    const momentDate = moment(date, 'YYYY-MM-DD');
    return momentDate.isValid() ? momentDate.format('YYYY-MM-DD') : '';
  }

  // This function used to verify password is as per rule or not
  public static validPassword(password: string) {
    if (!password) return false;

    let MinLength = 6;
    let MaxLength = 15;

    let meetsLengthRequirements: boolean =
      password.length >= MinLength && password.length <= MaxLength;
    let hasUpperCaseLetter: boolean = false;
    let hasLowerCaseLetter: boolean = false;
    let hasDecimalDigit: boolean = false;

    if (meetsLengthRequirements) {
      for (var i = 0, len = password.length; i < len; i++) {
        let char = password.charAt(i);
        if (!isNaN(+char * 1)) {
          hasDecimalDigit = true;
        } else {
          if (this.isStringOnly(char) && char == char.toUpperCase()) {
            hasUpperCaseLetter = true;
          }
          if (this.isStringOnly(char) && char == char.toLowerCase()) {
            hasLowerCaseLetter = true;
          }
        }
      }
    }

    let isValid =
      meetsLengthRequirements &&
      hasUpperCaseLetter &&
      hasLowerCaseLetter &&
      hasDecimalDigit;
    return isValid;
  }

  // This function used to validate image extension and size
  public static validateImageExtension(fileName: string, osize: number) {
    let size;
    let validExtension = ['png', 'jpeg', 'jpg', 'gif'];
    var extension = fileName.substr(fileName.lastIndexOf('.') + 1);
    size = osize / 1048; // KB
    size = size / 1048; // MB
    if (validExtension.indexOf(extension.toLowerCase()) == -1) {
      return false;
    } else if (size > 2) {
      return false;
    } else {
      return true;
    }
  }

  // This function validate number only
  public static isNumberOnly(str: string) {
    let regexStr = '^[0-9]*$';
    let regEx = new RegExp(regexStr);
    return regEx.test(str);
  }

  // This function used to validate string only
  public static isStringOnly(str: string) {
    var regexPattern = /^[A-Za-z _]+$/;
    return regexPattern.test(str);
  }

  // This function used to validate percentage
  public static validatePercentage(str: string) {
    var regexPattern =
      /(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/i;
    return regexPattern.test(str);
  }

  // This function used to validate money
  public static validateMoney(str: string) {
    var regexPattern = /^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/;
    return regexPattern.test(str);
  }

  public static validateNumber(e: any, isMobile?: boolean) {
    let regexStr = '^[0-9]*$';
    let keyCode = [8, 9, 27, 13, 46, 190];
    if (isMobile) keyCode.push(32, 40, 41, 43, 45, 90);

    //console.log(e.keyCode);
    if (
      keyCode.indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode == 65 && e.ctrlKey === true) ||
      // Allow: Ctrl+C
      (e.keyCode == 67 && e.ctrlKey === true) ||
      // Allow: Ctrl+V
      (e.keyCode == 86 && e.ctrlKey === true) ||
      // Allow: Ctrl+X
      (e.keyCode == 88 && e.ctrlKey === true)
      // Allow: home, end, left, right
      //|| (e.keyCode >= 35 && e.keyCode <= 39)
    ) {
      // let it happen, don't do anything
      return;
    }
    let ch = String.fromCharCode(e.keyCode);
    let regEx = new RegExp(regexStr);
    if (regEx.test(ch)) return;
    else e.preventDefault();
  }

  public static isNumber(e: KeyboardEvent): boolean {
    if (
      [46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+C
      (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+V
      (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+X
      (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)
    ) {
      // let it happen, don't do anything
      return true;
    }

    return false;
  }

  public static validatePhoneNumber(str: string) {
    var regexPattern =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return regexPattern.test(str);
  }

  public static hasWhiteSpace(str: string) {
    return /\s/g.test(str);
  }

  public static showModal(id: string) {
    $('#' + id).modal({ backdrop: 'static', keyboard: false });
    $('#' + id).modal('show');
  }

  public static hideModal(id: string) {
    $('#' + id).modal('hide');
  }

  public static getRandom() {
    return Math.random();
  }

  public static toFloat(value: any): number {
    return parseFloat(value);
  }

  public static convertTo12Hrs(time: any) {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  }

  public static convertUTCDateToLocalDate(date: Date) {
    let offset = date.getTimezoneOffset();
    let newDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes() - offset,
      date.getUTCSeconds()
    );
    return newDate;
  }

  public static getLocalDate(date?: Date): Date {
    if (!date) date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  public static getUTCDateFromLocalDate(date?: Date): Date {
    if (!date) date = new Date();
    let utcDate = date.toUTCString();
    return new Date(utcDate);
  }

  // This function used to trim And Validate String
  public static trimAndValidateString(str: string) {
    if (!str || !str.trim()?.length) {
      return false;
    }
    return true;
  }

  // Validate input is text and on paste accept only text
  public static validateAlphabetWithPaste(e: any, id) {
    const myInput = document.getElementById(id);
    myInput.onpaste = (event) => {
      var str = event.clipboardData.getData('text');
      const regex = /^[a-zA-Z ]*$/;
      if (!regex.test(str)) event.preventDefault();
    };

    let validKeyCodes = [8, 9, 13, 32, 35, 36, 37, 39, 46];
    if (
      !(e.keyCode >= 65 && e.keyCode <= 90) &&
      validKeyCodes.indexOf(e.keyCode) <= -1
    ) {
      e.preventDefault();
    }
  }

  // validate number Only
  public static numberOnly(event, id): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  public static checkDateValidation(
    startDateControl: AbstractControl,
    endDateControl: AbstractControl
  ) {
    const validator: ValidatorFn = this.dateRangeValidator(
      startDateControl,
      endDateControl
    );
    startDateControl.setValidators([validator, Validators.required]);
    endDateControl.setValidators([validator, Validators.required]);

    startDateControl.valueChanges.pipe(distinctUntilChanged()).subscribe(() => {
      endDateControl.updateValueAndValidity();
    });

    endDateControl.valueChanges.pipe(distinctUntilChanged()).subscribe(() => {
      startDateControl.updateValueAndValidity();
    });
  }

  public static dateRangeValidator(
    startDateControl: AbstractControl,
    endDateControl: AbstractControl
  ): ValidatorFn {
    return (): { [key: string]: any } | null => {
      const startDate = startDateControl.value;
      const endDate = endDateControl.value;

      if (startDate && endDate && new Date(startDate) >= new Date(endDate)) {
        return { error: 'Error on applying dates value' };
      }
      return null;
    };
  }

  public static convertTo24Hours(fullTime: string): number | null {
    if (!fullTime) {
      return null;
    }

    const time = fullTime.match(/(\d{1,2}):(\d{2}) ([AP]M)/);
    if (!time) {
      return null;
    }

    let hours = Number(time[1]);
    const minutes = Number(time[2]);
    const meridian = time[3];

    if (meridian === 'PM' && hours < 12) {
      hours += 12;
    } else if (meridian === 'AM' && hours === 12) {
      hours = 0;
    }

    return hours * 60 + minutes;
  }

  public static checkTimeValidation(
    startTimeControl: AbstractControl,
    endTimeControl: AbstractControl
  ) {
    const validator: ValidatorFn = this.timeRangeValidator(
      startTimeControl,
      endTimeControl
    );
    startTimeControl.setValidators([validator, Validators.required]);
    endTimeControl.setValidators([validator, Validators.required]);

    startTimeControl.valueChanges.pipe(distinctUntilChanged()).subscribe(() => {
      endTimeControl.updateValueAndValidity();
    });

    endTimeControl.valueChanges.pipe(distinctUntilChanged()).subscribe(() => {
      startTimeControl.updateValueAndValidity();
    });
  }

  public static timeRangeValidator(
    startTimeControl: AbstractControl,
    endTimeControl: AbstractControl
  ): ValidatorFn {
    return (): { [key: string]: any } | null => {
      const StartTime = this.convertTo24Hours(startTimeControl.value);
      const EndTime = this.convertTo24Hours(endTimeControl.value);
      if (StartTime && EndTime && StartTime >= EndTime) {
        endTimeControl.markAsTouched();
        startTimeControl.markAsTouched();
        return { error: 'Error on applying time value' };
      }
      return null;
    };
  }

  public static alphanumericValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = /[^a-zA-Z0-9 ]/.test(control.value);

      return forbidden ? { nonAlphanumeric: { value: control.value } } : null;
    };
  }

  public static convertObjToFormData(obj: any): FormData {
    const formData = new FormData();
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        formData.append(key, obj[key]);
      }
    }

    return formData;
  }

  public static blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  /**
   * Check image is valid or not
   */
  public static isImageFile(file: File): boolean {
    const allowedImageTypes = ['image/jpeg', 'image/png'];
    return allowedImageTypes.includes(file.type);
  }

  public static isDocumentFile(file: File): boolean {
    const allowedDocumentTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

    return allowedDocumentTypes.includes(file.type);
  }

  public static readImage(
    file: File,
    control: string,
    controlName: string
  ): Promise<string | ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (control == controlName) {
          const fileUrl = reader.result;
          resolve(fileUrl);
        } else {
          reject(new Error('Control name does not match.'));
        }
      };
      reader.readAsDataURL(file);
    });
  }
  public static alphabetOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122) ||
      charCode === 32
    ) {
      return true;
    }
    return false;
  }

  public static onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const pastedText = event.clipboardData?.getData('text');
    const validText = pastedText
      ?.split('')
      .every(
        (char) =>
          (char >= 'A' && char <= 'Z') ||
          (char >= 'a' && char <= 'z') ||
          char === ' '
      );

    if (validText) {
      document.execCommand('insertText', false, pastedText);
    }
  }

  public static transformInputToCapitalCase(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const currentValue = inputElement.value;
    if (!currentValue) return;
    const transformedValue =
      currentValue.charAt(0).toUpperCase() + currentValue.slice(1);
    inputElement.value = transformedValue;
  }

  public static toCapitalCase(input: string): string {
    if (!input) return '';

    input = input.toLowerCase();
    const words = input.split(' ');
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    return capitalizedWords.join(' ');
  }

  public static transformInputToLowerCase(event: Event): void {
    const inputElement = event.target as HTMLInputElement; // Get the input element
    const currentValue = inputElement.value; // Get the current value of the input
    const transformedValue = this.toLowerCase(currentValue); // Convert it to lowercase
    inputElement.value = transformedValue; // Update the input field with the lowercase value
  }

  public static toLowerCase(input: string): string {
    if (!input) return ''; // Return an empty string if input is null or empty
    return input.toLowerCase(); // Return the lowercase version of the input
  }

  public static dateRangeChecker(
    startDateControl: AbstractControl,
    endDateControl: AbstractControl
  ) {
    const validator: ValidatorFn = this.dateDayRangeValidator(
      startDateControl,
      endDateControl
    );
    startDateControl.setValidators([validator, Validators.required]);
    endDateControl.setValidators([validator, Validators.required]);

    startDateControl.valueChanges.pipe(distinctUntilChanged()).subscribe(() => {
      endDateControl.updateValueAndValidity();
    });

    endDateControl.valueChanges.pipe(distinctUntilChanged()).subscribe(() => {
      startDateControl.updateValueAndValidity();
    });
  }

  public static dateDayRangeValidator(
    startDateControl: AbstractControl,
    endDateControl: AbstractControl
  ): ValidatorFn {
    return (): { [key: string]: any } | null => {
      const startDate = startDateControl.value;
      const endDate = endDateControl.value;

      if (new Date(startDate) > new Date(endDate)) {
        return { error: 'Error on applying dates value' };
      }
      return null;
    };
  }

  // This function is used to check if the date is in given date range
  public static isDateInRange(
    date: Date | string,
    startDate: Date | string,
    endDate: Date | string
  ): boolean {
    if (!date || !startDate || !endDate) return false;

    const targetDate = new Date(date);
    const rangeStart = new Date(startDate);
    const rangeEnd = new Date(endDate);

    return targetDate >= rangeStart && targetDate <= rangeEnd;
  }

  public static NumbersIntoWords(amount: number) {
    const ones = [
      '',
      'One',
      'Two',
      'Three',
      'Four',
      'Five',
      'Six',
      'Seven',
      'Eight',
      'Nine',
      'Ten',
      'Eleven',
      'Twelve',
      'Thirteen',
      'Fourteen',
      'Fifteen',
      'Sixteen',
      'Seventeen',
      'Eighteen',
      'Nineteen',
    ];

    const tens = [
      '',
      '',
      'Twenty',
      'Thirty',
      'Forty',
      'Fifty',
      'Sixty',
      'Seventy',
      'Eighty',
      'Ninety',
    ];

    const thousands = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];

    function convertHundreds(num) {
      let str = '';
      if (num > 99) {
        str += ones[Math.floor(num / 100)] + ' Hundred ';
        num %= 100;
      }
      if (num > 19) {
        str += tens[Math.floor(num / 10)] + ' ';
        num %= 10;
      }
      if (num > 0) {
        str += ones[num] + ' ';
      }
      return str.trim();
    }

    if (amount === 0) return 'Zero';

    let words = '';
    let i = 0;

    while (amount > 0) {
      let chunk = amount % 1000;
      if (chunk > 0) {
        words = convertHundreds(chunk) + ' ' + thousands[i] + ' ' + words;
      }
      amount = Math.floor(amount / 1000);
      i++;
    }

    return `${words.trim()}`;
  }

  public static convertAmountToWords(amount) {
    // Handle decimals (if any)
    let [integerPart, decimalPart] = amount.toFixed(2).split('.');

    // Convert integer part to words
    let integerWords = this.NumbersIntoWords(parseInt(integerPart));

    // Convert decimal part to words (if it exists)
    let decimalWords = '';
    if (parseInt(decimalPart) > 0) {
      decimalWords =
        ' and ' + this.NumbersIntoWords(parseInt(decimalPart)) + ' Paise';
    }

    // Combine words with currency symbol
    return `${integerWords} Rupees ${decimalWords}`;
  }

  public static generateIdentifier(number: number): string {
    const length = number + Math.floor(Math.random());
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let Identifier = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      Identifier += characters[randomIndex];
    }

    return Identifier;
  }

  /**
   * To validate if control date is between start(min) and end(max) date
   * @param minDate
   * @param maxDate
   * @returns
   */
  public static dateRangeValidatorForMinMax(minDate: Date, maxDate: Date) {
    return (control: AbstractControl): ValidationErrors | null => {
      const dateValue = control.value;

      if (!dateValue) {
        return null; // return null if no value, no error
      }

      const date = new Date(dateValue);
      const isValidDate = !isNaN(date.getTime());

      // Check if the date is within the range
      const isInRange = Utility.isDateInRange(date, minDate, maxDate);

      return isValidDate && isInRange ? null : { outOfRange: true };
    };
  }
}
