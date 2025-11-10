export const RouterURLs = {
  LOGIN: "/auth/login",
  HOME: "/",
  FEED: "/feed",
  PROFILE: "/profile",
};

export class Common {
  static RegularExpression = class RegularExpression {
        // New regex: starts with 1-9, then digits allowed
        public static readonly DigitsStartWithOneRegExp = new RegExp(
            /^[1-9][0-9]*$/
        );
        public static readonly NumberOnlyRegex = new RegExp(/^\d+$/);
        public static readonly DigitsRegularExp = new RegExp(/^[0-9]*$/);
        public static readonly EmailRegularExp = new RegExp(
            /^(?=.{1,64}@)(([^<>()[\].,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(?=.{1,255}$)((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        public static readonly PasswordRegularExp = new RegExp(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/u
        );
        public static readonly UpdatePasswordRegularExp = new RegExp(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/
        );

        public static readonly AlphabetsOnlyRegularExp = /^[A-Za-z]+$/;
        public static readonly MobileNumberRegularExp = /^\+?\d+$/;

        // AlphaSpaceRegex: Allows alphabets and space
        public static readonly AlphaSpaceRegex = new RegExp(/^[a-zA-Z\s]+$/);
        // AlphaSpaceRegex: Allows alphabets and space
        public static readonly AlphaNumericSpaceRegex = /^[a-zA-Z0-9\s]+$/;
        // AlphaNumSpecialCharRegex: Allows alphabets, numbers and special characters
        public static readonly AlphaNumSpecialCharRegex = new RegExp(
            /^[a-zA-Z0-9\s\-\_',.#\/\\]+$/
        );
        // AlphaNumRegex: Allows alphabets and numbers
        public static readonly AlphaNumRegex = new RegExp(/^[a-zA-Z0-9\s]+$/);
        // NumDecimalRegex: Allows numbers and decimals
        public static readonly NumDecimalRegex = new RegExp(
            /^[\-]?\d*[\.]?[\d]*$/
        );
        // NumberRegex: Allows numbers
        public static readonly NumberRegex = new RegExp(/^[0-9]*$/);
        // AlphaNumSpaceDashRegex: Allows alphabets, numbers, space and dash
        public static readonly AlphaNumSpaceDashRegex = new RegExp(
            /^[A-Za-z0-9\- ]+$/
        );
        // AlphaUnderscoreRegex: Allows alphabets and underscore
        public static readonly AlphaUnderscoreRegex = new RegExp(
            /^[A-Za-z_]+$/
        );

        // public static readonly ALPHABETS_ONLY_REGEX = /^[a-zA-Z\s]+$/;
        // public static readonly MOBILE_NUMBER_REGEX = /^\+?\d+$/;

        public static readonly GST_NUMBER_REGEX = new RegExp(
            /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/
        );
        // decimal number with up to 10 total digits,
        public static readonly DECIMAL_10_2_REGEX = new RegExp(
            /^\d{1,8}(\.\d{1,2})?$/
        );
    };
}

export enum STATUS_CODE {
    Success = 200,
    Unauthorized = 401,
    BadRequest = 400,
    Create = 201,
    Conflict = 409
}