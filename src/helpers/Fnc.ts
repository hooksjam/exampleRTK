
function lerp(a, b, c) {
    return a + (b-a)*c
}

function lerp2D(a, b, c) {
    return [a[0] + (b[0]-a[0])*c, a[1] + (b[1]-a[1])*c]
}

function clamp(number, min, max) {
    return Math.max(min, Math.min(number, max));
}

function calcVelocity(a, b, dt) {
    return (b - a)/dt
}

function calcVelocity2D(a, b, dt) {
    return [(b[0] - a[0])/dt, (b[1] - a[1])/dt]
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function firstDataOrDefault(data, defaultVal) {
    if (data.length > 0)
        return data[0].content
    else
        return defaultVal
}

function copyObj(obj) {
    return JSON.parse(JSON.stringify(obj))
}

// Date for post
function datetime() {
    var date = new Date()
    var dateString = date.toISOString()
    return dateString
}

const dateOrdinal = function(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
    }
}
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
function dateFriendly(date, days=false) {
    var year = date.getFullYear()
    var month = months[date.getMonth()]
    if(days) {
        var day = date.getDate()
        return `${month} ${day}${dateOrdinal(day)}, ${year}`
    } else {
        return `${month}, ${year}`
    }
}

function timestamp(format = '', language = 'en-US') {
    var dt = new Date()
    var model = "YYYYMMDD-HHmmSS"
    if (format !== '') {
        model = format
    }
    model = model.replace("YYYY", dt.getFullYear())
    model = model.replace("MM", (dt.getMonth() + 1).toLocaleString(language, { minimumIntegerDigits: 2, useGrouping: false }))
    model = model.replace("DD", dt.getDate().toLocaleString(language, { minimumIntegerDigits: 2, useGrouping: false }))
    model = model.replace("HH", dt.getHours().toLocaleString(language, { minimumIntegerDigits: 2, useGrouping: false }))
    model = model.replace("mm", dt.getMinutes().toLocaleString(language, { minimumIntegerDigits: 2, useGrouping: false }))
    model = model.replace("SS", dt.getSeconds().toLocaleString(language, { minimumIntegerDigits: 2, useGrouping: false }))
    return model;
}

function toTimestamp(dt) {
    var model = "YYYYMMDD-HHmmSS"
    var language = 'en-US'
    model = model.replace("YYYY", dt.getFullYear());
    model = model.replace("MM", (dt.getMonth() + 1).toLocaleString(language, { minimumIntegerDigits: 2, useGrouping: false }))
    model = model.replace("DD", dt.getDate().toLocaleString(language, { minimumIntegerDigits: 2, useGrouping: false }))
    model = model.replace("HH", dt.getHours().toLocaleString(language, { minimumIntegerDigits: 2, useGrouping: false }))
    model = model.replace("mm", dt.getMinutes().toLocaleString(language, { minimumIntegerDigits: 2, useGrouping: false }))
    model = model.replace("SS", dt.getSeconds().toLocaleString(language, { minimumIntegerDigits: 2, useGrouping: false }))
    return model;
}

function dbDateToDate(datetime) {
    var date = datetime.split('T')[0]
    var time = datetime.split('T')[1]
    // Insert the colons back
    var chuncks = time.match(/.{1,2}/g)
    time = chuncks.join(":")
    return new Date(date + 'T' + time + 'Z')
}
function getComponentType(ext) {
    switch (getFileType(ext)) {
        case 'archive':
            if (ext == 'unityzip')
                return 'unity'
            else
                return 'file'
        case 'word':
        case 'powerpoint':
        case 'excel':
        case 'pdf':
        case 'code':
        case 'csv':
        case 'audio':
        case 'file':
            return 'file'
        case 'video':
            return 'video'
        case 'image':
            return 'image'

        default:
            return ''
    }
}

function getFileType(ext) {
    switch (ext.toLowerCase()) {
        case 'unityzip':
        case 'zip':
        case 'rar':
        case '7z':
            return 'archive'

        case 'doc':
        case 'docx':
            return 'word'

        case 'ppt':
        case 'pptx':
            return 'powerpoint'

        case 'xls':
        case 'xlsx':
            return 'excel'

        case 'mpeg':
        case 'mp4':
        case 'webm':
            return 'video'

        case 'pdf':
            return 'pdf'

        case 'png':
        case 'jpeg':
        case 'jpg':
        case 'tar':
        case 'gif':
            return 'image'

        case 'cs':
        case 'js':
        case 'py':
        case 'sh':
        case 'c':
        case 'cpp':
        case 'java':
        case 's':
            return 'code'

        case 'csv':
            return 'csv'

        case 'mp3':
        case 'flaac':
            return 'audio'

        case 'swf':
        case 'exe':
            return 'file'

        default:
            return ''
    }
}

function getWebsiteIcon(){//url) {
    var webName = "test"/*website-extractor-helper(name)*/
    switch (webName) {
        case "github":
        case "youtube":
            return "fab fa-" + webName

        case "wikipedia":
            return "fab fa-wikipedia-w"

        default:
            return "fas fa-globe-americas"
    }
}

function isFile() {
    var type = getComponentType(name.split('.').pop())
    return (type == 'file')

}

function getLinkIcon(name, isFile=null) {
    if(isFile == null) {
        var type = getComponentType(name.split('.').pop())
        isFile = (type == 'file')
    }
    if(isFile) {
        // Get the extension
        var ext = name.split('.').pop()
        var fType = getFileType(ext)
        if (fType == '' || fType == 'file')
            return "fas fa-file"
        else
            return "fas fa-file-" + fType
    } else {
        return getWebsiteIcon(name)
    }
}

function uniqueID(len = null) {
    var ret ='xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
    if(len != null)
        return ret.substring(0, len)
    else
        return ret

}

function stringToRgb(str){
    return hexToRgb(`#${str}`)
    /*console.log("MATCH", str)
    var match = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
    console.log("MATCH", match)
    return match ? {
        r: match[1],
        g: match[2],
        b: match[3]
    } : {};*/
}

function rgbToHex(r, g, b) {
    // return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    var rgb = b | (g << 8) | (r << 16);
    return '#' + (0x1000000 + rgb).toString(16).slice(1) 
}

function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/*function thumbName(name, lod=0) {
    if(name == null) {
        return ''
    }
    var file = name.split('.')
    if (file.length > 1)
        file[file.length - 2] = file[file.length - 2] + '_thumb_' + lod
    return file.join('.')
}*/

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/*function binarySearchHelper(arr, el, min, max) {
    if(arr.length > 2) {
        var middle = Math.floor(min + (max-min)/2)
        if(arr[middle] == el) {
            return middle
        } else if(el > arr[middle]) {
            return binarySearchHelper(arr, el, middle+1, max)
        } else {
            return binarySearchHelper(arr, el, min, middle-1)
        }
    } else if(arr.length == 2) {
        return arr[0] == el?0:(arr[1]==el?1:-1)
    } else if(arr.length == 1) {
        return arr[0] == el?0:-1
    } else if(arr.length == 0) {
        return -1
    }
}
Array.prototype.binarySearch = (el) => {
    var min = 0
    var max = this.length-1
    return binarySearchHelper(this, el, min, max)
}*/
function sortedIndex(array, value, cmp) {
    var low = 0,
        high = array.length;

    while (low < high) {
        var mid = (low + high) >>> 1;
        if (cmp(array[mid],value) > 0) 
            low = mid + 1;
        else high = mid;
    }
    return low;
}

function objectInKB(obj) {
    return (JSON.stringify(obj)*8) >> 10
}

function shake(obj, delay=null) {
    if(delay) {
        setTimeout(() => {
            obj.classList.add('animate__animated')
            obj.classList.add('animate__headShake')
        }, delay)
    } else {
        obj.classList.add('animate__animated')
        obj.classList.add('animate__headShake')
    }
}

class Ticker {
    constructor(interval, options={}) {
        this.beforeTick = options.beforeTick
        this.onTick = options.onTick
        this.afterTick = options.afterTick

        this.tickTimeout = null
        this.lastTick = null
        this.dt = 0
        this.interval = interval
        this.tick = this.tick.bind(this)
    }

    startTick(reset=true) {
        if(!reset && this.tickInterval != null)
            return
        clearTimeout(this.tickInterval)
        this.lastTick = Date.now()
        this.tickInterval = setTimeout(this.tick, this.interval)
    }

    tick() {
        if(this.beforeTick != null && !this.beforeTick()) {
            return
        }

        var now = Date.now()
        var dt = (now - this.lastTick)/1000
        dt = (this.dt + dt)/2
        var ret = null
        if(this.onTick) {
            ret = this.onTick(dt)
        }
        this.lastTick = now
        this.dt = dt

        if(this.afterTick && this.afterTick(ret)) {
            this.tickInterval = setTimeout(this.tick, this.interval)
        } else {
            this.tickInterval = null
        }
    }
}

// Sort A according to ids in B
function mirrorSort(A, B, key) {
    // Rorder according to incoming id list
    var map = {}
    for(let i = 0; i < B.length; i++) {
        map[B[i]] = i
    }
    A.sort((a, b) => {
        if(key)
            return map[a[key]] - map[b[key]]
        else
            return map[a] - map[b]
    })
    return A
}

function setDifference(a, b) {
    return new Set([...a].filter(x => !b.has(x)));
}

function setIntersection(a, b) {
    return new Set([...a].filter(x => b.has(x)));
}

function levDist(s, t) {
    var d = []; //2d matrix

    // Step 1
    var n = s.length;
    var m = t.length;

    if (n == 0) return m;
    if (m == 0) return n;

    //Create an array of arrays in javascript (a descending loop is quicker)
    for (var i = n; i >= 0; i--) d[i] = [];

    // Step 2
    for (var i = n; i >= 0; i--) d[i][0] = i;
    for (var j = m; j >= 0; j--) d[0][j] = j;

    // Step 3
    for (var i = 1; i <= n; i++) {
        var s_i = s.charAt(i - 1);

        // Step 4
        for (var j = 1; j <= m; j++) {

            //Check the jagged ld total so far
            if (i == j && d[i][j] > 4) return n;

            var t_j = t.charAt(j - 1);
            var cost = (s_i == t_j) ? 0 : 1; // Step 5

            //Calculate the minimum
            var mi = d[i - 1][j] + 1;
            var b = d[i][j - 1] + 1;
            var c = d[i - 1][j - 1] + cost;

            if (b < mi) mi = b;
            if (c < mi) mi = c;

            d[i][j] = mi; // Step 6

            //Damerau transposition
            if (i > 1 && j > 1 && s_i == t.charAt(j - 2) && s.charAt(i - 2) == t_j) {
                d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + cost);
            }
        }
    }

    // Step 7
    return d[n][m];
}

function alphanumCase(a, b) {
    function chunkify(t) {
        var tz = new Array();
        var x = 0, y = -1, n = 0, i, j;

        while (i = (j = t.charAt(x++)).charCodeAt(0)) {
            var m = (i == 46 || (i >=48 && i <= 57));
            if (m !== n) {
                tz[++y] = "";
                n = m;
            }
            tz[y] += j;
        }
        return tz;
    }

    var aa = chunkify(a.name.toLowerCase());
    var bb = chunkify(b.name.toLowerCase());

    for(var x = 0; aa[x] && bb[x]; x++) {
        if (aa[x] !== bb[x]) {
            var c = Number(aa[x]), d = Number(bb[x]);
            if (c == aa[x] && d == bb[x]) {
                return c - d;
            } else return (aa[x] > bb[x]) ? 1 : -1;
        }
    }
    return aa.length - bb.length;
}

function randomGenerator(s) {
    var mask = 0xffffffff
    var m_w  = (123456789 + s) & mask
    var m_z  = (987654321 - s) & mask

    return function() {
      m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask
      m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask

      var result = ((m_z << 16) + (m_w & 65535)) >>> 0
      result /= 4294967296
      return result
    }
}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }

    return array
}

function toAlphanum(str) {
    return str.replace(/[^a-z0-9]/gi,'')
}

function isMobileDevice() {
    const ua = window.navigator.userAgent
    return /Mobi/i.test(ua) || /iPad/i.test(ua)// || (/Apple/i.test(ua) && 'PointerEvent' in window)
}

function isTouchDevice() {
    return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0))
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export const fnc = {
    lerp,
    lerp2D,
    clamp,
    calcVelocity,
    calcVelocity2D,
    capitalizeFirstLetter,
    firstDataOrDefault,
    copyObj,
    datetime,
    dateFriendly,
    timestamp,
    toTimestamp,
    getFileType,
    isFile,
    getLinkIcon,
    getWebsiteIcon,
    getComponentType,
    uniqueID,
    stringToRgb,
    hexToRgb,
    rgbToHex,
    dbDateToDate,
    // thumbName:thumbName,
    downloadURI,
    sortedIndex,
    objectInKB,
    shake,
    Ticker,
    mirrorSort,
    setDifference, 
    setIntersection,
    levDist,
    alphanumCase,
    randomGenerator,
    shuffle,
    toAlphanum,
    isMobileDevice,
    isTouchDevice,
    numberWithCommas,
}