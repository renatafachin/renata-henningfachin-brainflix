// Function to transform timestamp from API in a human readable format 'N time ago'

const DataConvert = (props) => {

    // Getting the time in milliseconds since the comment was made and converting to seconds
    let secondsSince = (Date.now() - props.value) / 1000;
    let sinceType;

    // Checking if it passed more than a year since the comment was made. Yes -> will show N year(s) ago
    var valueAgo = Math.floor(secondsSince / 31536000);
    if (valueAgo >= 1) {
        sinceType = 'year';
    } else {
        // it's less than a year, checking if it's more than a month
        valueAgo = Math.floor(secondsSince / 2592000);
        if (valueAgo >= 1) {
            sinceType = 'month';
        } else {
            valueAgo = Math.floor(secondsSince / 86400);
            if (valueAgo >= 1) {
                sinceType = 'day';
            } else {
                valueAgo = Math.floor(secondsSince / 3600);
                if (valueAgo >= 1) {
                    sinceType = "hour";
                } else {
                    valueAgo = Math.floor(secondsSince / 60);
                    if (valueAgo >= 1) {
                        sinceType = "minute";
                    } else {
                        // '| 0' to display a int instead a float
                        valueAgo = secondsSince | 0;
                        sinceType = "second";
                    }
                }
            }
        }
    }

    // if it's more than one year/month/day/minute/second add a 's'
    if (valueAgo > 1) {
        sinceType += 's';
    }

    // to replace '0 seconds ago' for 'just now', in case of comments just sent
    if (valueAgo === 0 && sinceType === "second") {
        return 'just now';
    } else {
        return valueAgo + ' ' + sinceType + ' ago';
    }
};

export default DataConvert;
