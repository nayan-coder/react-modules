
/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)
var startOfISOWeek = __webpack_require__(4)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * var result = getISOYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()

  var fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)

  var fourthOfJanuaryOfThisYear = new Date(0)
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

module.exports = getISOYear


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__(11)

/**
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek (dirtyDate) {
  return startOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = startOfISOWeek


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay (dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfDay


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  addDays: __webpack_require__(7),
  addHours: __webpack_require__(29),
  addISOYears: __webpack_require__(30),
  addMilliseconds: __webpack_require__(8),
  addMinutes: __webpack_require__(32),
  addMonths: __webpack_require__(13),
  addQuarters: __webpack_require__(33),
  addSeconds: __webpack_require__(34),
  addWeeks: __webpack_require__(21),
  addYears: __webpack_require__(35),
  areRangesOverlapping: __webpack_require__(164),
  closestIndexTo: __webpack_require__(165),
  closestTo: __webpack_require__(166),
  compareAsc: __webpack_require__(10),
  compareDesc: __webpack_require__(22),
  differenceInCalendarDays: __webpack_require__(12),
  differenceInCalendarISOWeeks: __webpack_require__(167),
  differenceInCalendarISOYears: __webpack_require__(36),
  differenceInCalendarMonths: __webpack_require__(37),
  differenceInCalendarQuarters: __webpack_require__(168),
  differenceInCalendarWeeks: __webpack_require__(169),
  differenceInCalendarYears: __webpack_require__(39),
  differenceInDays: __webpack_require__(40),
  differenceInHours: __webpack_require__(170),
  differenceInISOYears: __webpack_require__(171),
  differenceInMilliseconds: __webpack_require__(14),
  differenceInMinutes: __webpack_require__(172),
  differenceInMonths: __webpack_require__(23),
  differenceInQuarters: __webpack_require__(173),
  differenceInSeconds: __webpack_require__(24),
  differenceInWeeks: __webpack_require__(174),
  differenceInYears: __webpack_require__(175),
  distanceInWords: __webpack_require__(42),
  distanceInWordsStrict: __webpack_require__(176),
  distanceInWordsToNow: __webpack_require__(177),
  eachDay: __webpack_require__(178),
  endOfDay: __webpack_require__(25),
  endOfHour: __webpack_require__(179),
  endOfISOWeek: __webpack_require__(180),
  endOfISOYear: __webpack_require__(181),
  endOfMinute: __webpack_require__(182),
  endOfMonth: __webpack_require__(46),
  endOfQuarter: __webpack_require__(183),
  endOfSecond: __webpack_require__(184),
  endOfToday: __webpack_require__(185),
  endOfTomorrow: __webpack_require__(186),
  endOfWeek: __webpack_require__(45),
  endOfYear: __webpack_require__(187),
  endOfYesterday: __webpack_require__(188),
  format: __webpack_require__(189),
  getDate: __webpack_require__(190),
  getDay: __webpack_require__(191),
  getDayOfYear: __webpack_require__(47),
  getDaysInMonth: __webpack_require__(20),
  getDaysInYear: __webpack_require__(192),
  getHours: __webpack_require__(193),
  getISODay: __webpack_require__(51),
  getISOWeek: __webpack_require__(26),
  getISOWeeksInYear: __webpack_require__(194),
  getISOYear: __webpack_require__(3),
  getMilliseconds: __webpack_require__(195),
  getMinutes: __webpack_require__(196),
  getMonth: __webpack_require__(197),
  getOverlappingDaysInRanges: __webpack_require__(198),
  getQuarter: __webpack_require__(38),
  getSeconds: __webpack_require__(199),
  getTime: __webpack_require__(200),
  getYear: __webpack_require__(201),
  isAfter: __webpack_require__(202),
  isBefore: __webpack_require__(203),
  isDate: __webpack_require__(19),
  isEqual: __webpack_require__(204),
  isFirstDayOfMonth: __webpack_require__(205),
  isFriday: __webpack_require__(206),
  isFuture: __webpack_require__(207),
  isLastDayOfMonth: __webpack_require__(208),
  isLeapYear: __webpack_require__(50),
  isMonday: __webpack_require__(209),
  isPast: __webpack_require__(210),
  isSameDay: __webpack_require__(211),
  isSameHour: __webpack_require__(52),
  isSameISOWeek: __webpack_require__(54),
  isSameISOYear: __webpack_require__(55),
  isSameMinute: __webpack_require__(56),
  isSameMonth: __webpack_require__(58),
  isSameQuarter: __webpack_require__(59),
  isSameSecond: __webpack_require__(61),
  isSameWeek: __webpack_require__(27),
  isSameYear: __webpack_require__(63),
  isSaturday: __webpack_require__(212),
  isSunday: __webpack_require__(213),
  isThisHour: __webpack_require__(214),
  isThisISOWeek: __webpack_require__(215),
  isThisISOYear: __webpack_require__(216),
  isThisMinute: __webpack_require__(217),
  isThisMonth: __webpack_require__(218),
  isThisQuarter: __webpack_require__(219),
  isThisSecond: __webpack_require__(220),
  isThisWeek: __webpack_require__(221),
  isThisYear: __webpack_require__(222),
  isThursday: __webpack_require__(223),
  isToday: __webpack_require__(224),
  isTomorrow: __webpack_require__(225),
  isTuesday: __webpack_require__(226),
  isValid: __webpack_require__(49),
  isWednesday: __webpack_require__(227),
  isWeekend: __webpack_require__(228),
  isWithinRange: __webpack_require__(229),
  isYesterday: __webpack_require__(230),
  lastDayOfISOWeek: __webpack_require__(231),
  lastDayOfISOYear: __webpack_require__(232),
  lastDayOfMonth: __webpack_require__(233),
  lastDayOfQuarter: __webpack_require__(234),
  lastDayOfWeek: __webpack_require__(64),
  lastDayOfYear: __webpack_require__(235),
  max: __webpack_require__(236),
  min: __webpack_require__(237),
  parse: __webpack_require__(0),
  setDate: __webpack_require__(238),
  setDay: __webpack_require__(239),
  setDayOfYear: __webpack_require__(240),
  setHours: __webpack_require__(241),
  setISODay: __webpack_require__(242),
  setISOWeek: __webpack_require__(243),
  setISOYear: __webpack_require__(31),
  setMilliseconds: __webpack_require__(244),
  setMinutes: __webpack_require__(245),
  setMonth: __webpack_require__(65),
  setQuarter: __webpack_require__(246),
  setSeconds: __webpack_require__(247),
  setYear: __webpack_require__(248),
  startOfDay: __webpack_require__(5),
  startOfHour: __webpack_require__(53),
  startOfISOWeek: __webpack_require__(4),
  startOfISOYear: __webpack_require__(9),
  startOfMinute: __webpack_require__(57),
  startOfMonth: __webpack_require__(249),
  startOfQuarter: __webpack_require__(60),
  startOfSecond: __webpack_require__(62),
  startOfToday: __webpack_require__(250),
  startOfTomorrow: __webpack_require__(251),
  startOfWeek: __webpack_require__(11),
  startOfYear: __webpack_require__(48),
  startOfYesterday: __webpack_require__(252),
  subDays: __webpack_require__(253),
  subHours: __webpack_require__(254),
  subISOYears: __webpack_require__(41),
  subMilliseconds: __webpack_require__(255),
  subMinutes: __webpack_require__(256),
  subMonths: __webpack_require__(257),
  subQuarters: __webpack_require__(258),
  subSeconds: __webpack_require__(259),
  subWeeks: __webpack_require__(260),
  subYears: __webpack_require__(261)
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added
 * @returns {Date} the new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * var result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays (dirtyDate, dirtyAmount) {
  var date = parse(dirtyDate)
  var amount = Number(dirtyAmount)
  date.setDate(date.getDate() + amount)
  return date
}

module.exports = addDays


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added
 * @returns {Date} the new date with the milliseconds added
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds (dirtyDate, dirtyAmount) {
  var timestamp = parse(dirtyDate).getTime()
  var amount = Number(dirtyAmount)
  return new Date(timestamp + amount)
}

module.exports = addMilliseconds


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__(3)
var startOfISOWeek = __webpack_require__(4)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * var result = startOfISOYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(year, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuary)
  return date
}

module.exports = startOfISOYear


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * var result = compareAsc(
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * )
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * var result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var timeLeft = dateLeft.getTime()
  var dateRight = parse(dirtyDateRight)
  var timeRight = dateRight.getTime()

  if (timeLeft < timeRight) {
    return -1
  } else if (timeLeft > timeRight) {
    return 1
  } else {
    return 0
  }
}

module.exports = compareAsc


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn

  date.setDate(date.getDate() - diff)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfWeek


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(5)

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_DAY = 86400000

/**
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 */
function differenceInCalendarDays (dirtyDateLeft, dirtyDateRight) {
  var startOfDayLeft = startOfDay(dirtyDateLeft)
  var startOfDayRight = startOfDay(dirtyDateRight)

  var timestampLeft = startOfDayLeft.getTime() -
    startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfDayRight.getTime() -
    startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
}

module.exports = differenceInCalendarDays
